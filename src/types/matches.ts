// To parse this data:
//
//   import { Convert, Matches } from "./file";
//
//   const matches = Convert.toMatches(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from '../type-cast-error';

export interface Matches {
    leagues: League[];
    userSettings: null;
    date: string;
}

export interface League {
    ccode: string;
    id: number;
    primaryId: number;
    name: string;
    matches: Match[];
    internalRank: number;
    liveRank: number;
    simpleLeague: boolean;
    parentLeagueId?: number;
    isGroup?: boolean;
    groupName?: string;
    parentLeagueName?: string;
}

export interface Match {
    id: number;
    leagueId: number;
    time: string;
    home: Away;
    away: Away;
    statusId: number;
    tournamentStage: string;
    status: Status;
    timeTS: number;
    tv: null;
}

export interface Away {
    id: number;
    score: number;
    name: string;
}

export interface Status {
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    scoreStr: string;
    startDateStr: StartDateStr;
    reason: Reason;
}

export interface Reason {
    short: Short;
    long: Long;
}

export enum Long {
    FullTime = "Full-Time",
}

export enum Short {
    Ft = "FT",
}

export enum StartDateStr {
    Sep202020 = "Sep 20, 2020",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMatches(json: string): Matches {
        return cast(JSON.parse(json), r("Matches"));
    }

    public static matchesToJson(value: Matches): string {
        return JSON.stringify(uncast(value, r("Matches")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw new CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Matches": o([
        { json: "leagues", js: "leagues", typ: a(r("League")) },
        { json: "userSettings", js: "userSettings", typ: null },
        { json: "date", js: "date", typ: "" },
    ], false),
    "League": o([
        { json: "ccode", js: "ccode", typ: "" },
        { json: "id", js: "id", typ: 0 },
        { json: "primaryId", js: "primaryId", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "matches", js: "matches", typ: a(r("Match")) },
        { json: "internalRank", js: "internalRank", typ: 0 },
        { json: "liveRank", js: "liveRank", typ: 0 },
        { json: "simpleLeague", js: "simpleLeague", typ: true },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "isGroup", js: "isGroup", typ: u(undefined, true) },
        { json: "groupName", js: "groupName", typ: u(undefined, "") },
        { json: "parentLeagueName", js: "parentLeagueName", typ: u(undefined, "") },
    ], false),
    "Match": o([
        { json: "id", js: "id", typ: 0 },
        { json: "leagueId", js: "leagueId", typ: 0 },
        { json: "time", js: "time", typ: "" },
        { json: "home", js: "home", typ: r("Away") },
        { json: "away", js: "away", typ: r("Away") },
        { json: "statusId", js: "statusId", typ: 0 },
        { json: "tournamentStage", js: "tournamentStage", typ: "" },
        { json: "status", js: "status", typ: r("Status") },
        { json: "timeTS", js: "timeTS", typ: 0 },
        { json: "tv", js: "tv", typ: null },
    ], false),
    "Away": o([
        { json: "id", js: "id", typ: 0 },
        { json: "score", js: "score", typ: 0 },
        { json: "name", js: "name", typ: "" },
    ], false),
    "Status": o([
        { json: "finished", js: "finished", typ: true },
        { json: "started", js: "started", typ: true },
        { json: "cancelled", js: "cancelled", typ: true },
        { json: "scoreStr", js: "scoreStr", typ: "" },
        { json: "startDateStr", js: "startDateStr", typ: r("StartDateStr") },
        { json: "reason", js: "reason", typ: r("Reason") },
    ], false),
    "Reason": o([
        { json: "short", js: "short", typ: r("Short") },
        { json: "long", js: "long", typ: r("Long") },
    ], false),
    "Long": [
        "Full-Time",
    ],
    "Short": [
        "FT",
    ],
    "StartDateStr": [
        "Sep 20, 2020",
    ],
};
