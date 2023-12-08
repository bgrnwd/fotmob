// To parse this data:
//
//   import { Convert, League } from "./file";
//
//   const league = Convert.toLeague(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from '../type-cast-error';

export interface League {
    tabs: string[];
    details: Details;
    tab: string;
    action: Action;
    seostr: string;
    datasets: Datasets;
    stats: Stats;
}

export interface Action {
    type: string;
    data: Data;
}

export interface Data {
    path: string;
    tab: string;
}

export interface Datasets {
    news: boolean;
    fixtures: boolean;
    tableData: boolean;
    topPlayers: boolean;
}

export interface Details {
    id: number;
    type: string;
    name: string;
    country: string;
}

export interface Stats {
    tabs: string[];
    players: Player[];
    teams: Team[];
    trophies: Trophy[];
}

export interface Player {
    header: string;
    participant: PlayerParticipant;
    fetchAllUrl: string;
}

export interface PlayerParticipant {
    id: number;
    name: string;
    goals: null;
    assists: null;
    rating: null;
    positionId: null;
    ccode: null;
    cname: null;
    teamId: number;
    teamName: string;
    showRole: null;
    showCountryFlag: null;
    showTeamFlag: boolean;
    value: number | string;
}

export interface Team {
    header: string;
    participant: TeamParticipant;
    fetchAllUrl: string;
}

export interface TeamParticipant {
    id: number;
    name: string;
    goals: null;
    assists: null;
    rating: null;
    positionId: null;
    ccode: null;
    cname: null;
    teamId: number;
    teamName: null;
    showRole: null;
    showCountryFlag: null;
    showTeamFlag: boolean;
    value: number;
}

export interface Trophy {
    seasonName: string;
    winner: Loser;
    loser: Loser;
}

export interface Loser {
    id: number;
    seasonName: string;
    name: string;
    winner: boolean;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toLeague(json: string): League {
        return cast(JSON.parse(json), r("League"));
    }

    public static leagueToJson(value: League): string {
        return JSON.stringify(uncast(value, r("League")), null, 2);
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
    "League": o([
        { json: "tabs", js: "tabs", typ: a("") },
        { json: "details", js: "details", typ: r("Details") },
        { json: "tab", js: "tab", typ: "" },
        { json: "action", js: "action", typ: r("Action") },
        { json: "seostr", js: "seostr", typ: "" },
        { json: "datasets", js: "datasets", typ: r("Datasets") },
        { json: "stats", js: "stats", typ: r("Stats") },
    ], false),
    "Action": o([
        { json: "type", js: "type", typ: "" },
        { json: "data", js: "data", typ: r("Data") },
    ], false),
    "Data": o([
        { json: "path", js: "path", typ: "" },
        { json: "tab", js: "tab", typ: "" },
    ], false),
    "Datasets": o([
        { json: "news", js: "news", typ: true },
        { json: "fixtures", js: "fixtures", typ: true },
        { json: "tableData", js: "tableData", typ: true },
        { json: "topPlayers", js: "topPlayers", typ: true },
    ], false),
    "Details": o([
        { json: "id", js: "id", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "country", js: "country", typ: "" },
    ], false),
    "Stats": o([
        { json: "tabs", js: "tabs", typ: a("") },
        { json: "players", js: "players", typ: a(r("Player")) },
        { json: "teams", js: "teams", typ: a(r("Team")) },
        { json: "trophies", js: "trophies", typ: a(r("Trophy")) },
    ], false),
    "Player": o([
        { json: "header", js: "header", typ: "" },
        { json: "participant", js: "participant", typ: r("PlayerParticipant") },
        { json: "fetchAllUrl", js: "fetchAllUrl", typ: "" },
    ], false),
    "PlayerParticipant": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "goals", js: "goals", typ: null },
        { json: "assists", js: "assists", typ: null },
        { json: "rating", js: "rating", typ: null },
        { json: "positionId", js: "positionId", typ: null },
        { json: "ccode", js: "ccode", typ: null },
        { json: "cname", js: "cname", typ: null },
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "teamName", js: "teamName", typ: "" },
        { json: "showRole", js: "showRole", typ: null },
        { json: "showCountryFlag", js: "showCountryFlag", typ: null },
        { json: "showTeamFlag", js: "showTeamFlag", typ: true },
        { json: "value", js: "value", typ: u(3.14, "") },
    ], false),
    "Team": o([
        { json: "header", js: "header", typ: "" },
        { json: "participant", js: "participant", typ: r("TeamParticipant") },
        { json: "fetchAllUrl", js: "fetchAllUrl", typ: "" },
    ], false),
    "TeamParticipant": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "goals", js: "goals", typ: null },
        { json: "assists", js: "assists", typ: null },
        { json: "rating", js: "rating", typ: null },
        { json: "positionId", js: "positionId", typ: null },
        { json: "ccode", js: "ccode", typ: null },
        { json: "cname", js: "cname", typ: null },
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "teamName", js: "teamName", typ: null },
        { json: "showRole", js: "showRole", typ: null },
        { json: "showCountryFlag", js: "showCountryFlag", typ: null },
        { json: "showTeamFlag", js: "showTeamFlag", typ: true },
        { json: "value", js: "value", typ: 3.14 },
    ], false),
    "Trophy": o([
        { json: "seasonName", js: "seasonName", typ: "" },
        { json: "winner", js: "winner", typ: r("Loser") },
        { json: "loser", js: "loser", typ: r("Loser") },
    ], false),
    "Loser": o([
        { json: "id", js: "id", typ: 0 },
        { json: "seasonName", js: "seasonName", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "winner", js: "winner", typ: true },
    ], false),
};
