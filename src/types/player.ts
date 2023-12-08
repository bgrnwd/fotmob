// To parse this data:
//
//   import { Convert, Player } from "./file";
//
//   const player = Convert.toPlayer(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from '../type-cast-error';

export interface Player {
    id: number;
    name: string;
    origin: Origin;
    playerProps: PlayerPlayerProp[];
    lastLeague: LastLeague;
    recentMatches: RecentMatches;
    careerStatistics: CareerStatistic[];
    careerHistory: CareerHistory;
    relatedNews: any[];
    meta: Meta;
}

export interface CareerHistory {
    fullCareer: boolean;
    careerData: CareerData;
}

export interface CareerData {
    showFootnote: boolean;
    careerItems: CareerItems;
}

export interface CareerItems {
    senior: NationalTeam[];
    youth: NationalTeam[];
    "national team": NationalTeam[];
}

export interface NationalTeam {
    participantId: number;
    teamId: number;
    team: string;
    transferType: null | string;
    startDate: string;
    endDate: string;
    role: null;
    appearances: string;
    goals: string;
    hasUncertainData: boolean;
}

export interface CareerStatistic {
    id: number;
    name: string;
    totalMatches: number;
    totalSubIn: number;
    totalGoals: number;
    totalAssists: number;
    totalYC: number;
    totalRC: number;
    seasons: Season[];
}

export interface Season {
    name: string;
    matches: number;
    subIn: number;
    goals: number;
    assists: number;
    yc: number;
    rc: number;
    stats: Stat[];
}

export interface Stat {
    startTS: number;
    tournamentName: string;
    statsArr: Array<Array<number | string>>;
}

export interface LastLeague {
    leagueName: string;
    leagueId: number;
    playerProps: LastLeaguePlayerProp[];
}

export interface LastLeaguePlayerProp {
    value: string;
    title: string;
    ratingProps?: PlayerPropRatingProps;
}

export interface PlayerPropRatingProps {
    num: number;
    bgcolor: Bgcolor;
}

export enum Bgcolor {
    Ffa726 = "#ffa726",
    The6Ecb5B = "#6ecb5b",
    The989898 = "#989898",
}

export interface Meta {
    seopath: string;
    pageurl: string;
}

export interface Origin {
    teamId: number;
    teamName: string;
    teamColor: string;
    positionDesc: PositionDesc;
}

export interface PositionDesc {
    positions: Position[];
    primaryPosition: string;
    nonPrimaryPositions: string;
}

export interface Position {
    strPos: string;
    strPosShort: string;
    occurances: number;
    position: string;
    isMainPosition: boolean;
    pitchPositionData: PitchPositionData;
}

export interface PitchPositionData {
    top: number;
    right: number;
    textColor: string;
    backgroundColor: string;
}

export interface PlayerPlayerProp {
    value: number | string;
    title: string;
    icon?: Icon;
}

export interface Icon {
    type: string;
    id: string;
}

export interface RecentMatches {
    tabs: string[];
    "Premier League": EuropaLeagueFinalStage[];
    "UEFA Nations League A Grp. 3": UEFANationsLeagueAGrp3[];
    "Europa League Final Stage": EuropaLeagueFinalStage[];
    "Super League": SuperLeague[];
}

export interface EuropaLeagueFinalStage {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: EuropaLeagueFinalStageRatingProps;
}

export interface EuropaLeagueFinalStageRatingProps {
    num: number | string;
    bgcolor: Bgcolor;
}

export interface Versus {
    matchId: number;
    opponentName: string;
    opponentId: number;
    homeTeamScore: number;
    awayTeamScore: number;
    highLightHomeTeam: boolean;
}

export interface SuperLeague {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: SuperLeagueRatingProps;
}

export interface SuperLeagueRatingProps {
    num: string;
    bgcolor: Bgcolor;
}

export interface UEFANationsLeagueAGrp3 {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: PlayerPropRatingProps;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlayer(json: string): Player {
        return cast(JSON.parse(json), r("Player"));
    }

    public static playerToJson(value: Player): string {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
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
    "Player": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "origin", js: "origin", typ: r("Origin") },
        { json: "playerProps", js: "playerProps", typ: a(r("PlayerPlayerProp")) },
        { json: "lastLeague", js: "lastLeague", typ: r("LastLeague") },
        { json: "recentMatches", js: "recentMatches", typ: r("RecentMatches") },
        { json: "careerStatistics", js: "careerStatistics", typ: a(r("CareerStatistic")) },
        { json: "careerHistory", js: "careerHistory", typ: r("CareerHistory") },
        { json: "relatedNews", js: "relatedNews", typ: a("any") },
        { json: "meta", js: "meta", typ: r("Meta") },
    ], false),
    "CareerHistory": o([
        { json: "fullCareer", js: "fullCareer", typ: true },
        { json: "careerData", js: "careerData", typ: r("CareerData") },
    ], false),
    "CareerData": o([
        { json: "showFootnote", js: "showFootnote", typ: true },
        { json: "careerItems", js: "careerItems", typ: r("CareerItems") },
    ], false),
    "CareerItems": o([
        { json: "senior", js: "senior", typ: a(r("NationalTeam")) },
        { json: "youth", js: "youth", typ: a(r("NationalTeam")) },
        { json: "national team", js: "national team", typ: a(r("NationalTeam")) },
    ], false),
    "NationalTeam": o([
        { json: "participantId", js: "participantId", typ: 0 },
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "team", js: "team", typ: "" },
        { json: "transferType", js: "transferType", typ: u(null, "") },
        { json: "startDate", js: "startDate", typ: "" },
        { json: "endDate", js: "endDate", typ: "" },
        { json: "role", js: "role", typ: null },
        { json: "appearances", js: "appearances", typ: "" },
        { json: "goals", js: "goals", typ: "" },
        { json: "hasUncertainData", js: "hasUncertainData", typ: true },
    ], false),
    "CareerStatistic": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "totalMatches", js: "totalMatches", typ: 0 },
        { json: "totalSubIn", js: "totalSubIn", typ: 0 },
        { json: "totalGoals", js: "totalGoals", typ: 0 },
        { json: "totalAssists", js: "totalAssists", typ: 0 },
        { json: "totalYC", js: "totalYC", typ: 0 },
        { json: "totalRC", js: "totalRC", typ: 0 },
        { json: "seasons", js: "seasons", typ: a(r("Season")) },
    ], false),
    "Season": o([
        { json: "name", js: "name", typ: "" },
        { json: "matches", js: "matches", typ: 0 },
        { json: "subIn", js: "subIn", typ: 0 },
        { json: "goals", js: "goals", typ: 0 },
        { json: "assists", js: "assists", typ: 0 },
        { json: "yc", js: "yc", typ: 0 },
        { json: "rc", js: "rc", typ: 0 },
        { json: "stats", js: "stats", typ: a(r("Stat")) },
    ], false),
    "Stat": o([
        { json: "startTS", js: "startTS", typ: 0 },
        { json: "tournamentName", js: "tournamentName", typ: "" },
        { json: "statsArr", js: "statsArr", typ: a(a(u(3.14, ""))) },
    ], false),
    "LastLeague": o([
        { json: "leagueName", js: "leagueName", typ: "" },
        { json: "leagueId", js: "leagueId", typ: 0 },
        { json: "playerProps", js: "playerProps", typ: a(r("LastLeaguePlayerProp")) },
    ], false),
    "LastLeaguePlayerProp": o([
        { json: "value", js: "value", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "ratingProps", js: "ratingProps", typ: u(undefined, r("PlayerPropRatingProps")) },
    ], false),
    "PlayerPropRatingProps": o([
        { json: "num", js: "num", typ: 3.14 },
        { json: "bgcolor", js: "bgcolor", typ: r("Bgcolor") },
    ], false),
    "Meta": o([
        { json: "seopath", js: "seopath", typ: "" },
        { json: "pageurl", js: "pageurl", typ: "" },
    ], false),
    "Origin": o([
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "teamName", js: "teamName", typ: "" },
        { json: "teamColor", js: "teamColor", typ: "" },
        { json: "positionDesc", js: "positionDesc", typ: r("PositionDesc") },
    ], false),
    "PositionDesc": o([
        { json: "positions", js: "positions", typ: a(r("Position")) },
        { json: "primaryPosition", js: "primaryPosition", typ: "" },
        { json: "nonPrimaryPositions", js: "nonPrimaryPositions", typ: "" },
    ], false),
    "Position": o([
        { json: "strPos", js: "strPos", typ: "" },
        { json: "strPosShort", js: "strPosShort", typ: "" },
        { json: "occurances", js: "occurances", typ: 0 },
        { json: "position", js: "position", typ: "" },
        { json: "isMainPosition", js: "isMainPosition", typ: true },
        { json: "pitchPositionData", js: "pitchPositionData", typ: r("PitchPositionData") },
    ], false),
    "PitchPositionData": o([
        { json: "top", js: "top", typ: 3.14 },
        { json: "right", js: "right", typ: 3.14 },
        { json: "textColor", js: "textColor", typ: "" },
        { json: "backgroundColor", js: "backgroundColor", typ: "" },
    ], false),
    "PlayerPlayerProp": o([
        { json: "value", js: "value", typ: u(0, "") },
        { json: "title", js: "title", typ: "" },
        { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
    ], false),
    "Icon": o([
        { json: "type", js: "type", typ: "" },
        { json: "id", js: "id", typ: "" },
    ], false),
    "RecentMatches": o([
        { json: "tabs", js: "tabs", typ: a("") },
        { json: "Premier League", js: "Premier League", typ: a(r("EuropaLeagueFinalStage")) },
        { json: "UEFA Nations League A Grp. 3", js: "UEFA Nations League A Grp. 3", typ: a(r("UEFANationsLeagueAGrp3")) },
        { json: "Europa League Final Stage", js: "Europa League Final Stage", typ: a(r("EuropaLeagueFinalStage")) },
        { json: "Super League", js: "Super League", typ: a(r("SuperLeague")) },
    ], false),
    "EuropaLeagueFinalStage": o([
        { json: "htName", js: "htName", typ: "" },
        { json: "atName", js: "atName", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "versus", js: "versus", typ: r("Versus") },
        { json: "minutesPlayed", js: "minutesPlayed", typ: 0 },
        { json: "goals", js: "goals", typ: 0 },
        { json: "assists", js: "assists", typ: 0 },
        { json: "yellowCards", js: "yellowCards", typ: 0 },
        { json: "redCards", js: "redCards", typ: 0 },
        { json: "ratingProps", js: "ratingProps", typ: r("EuropaLeagueFinalStageRatingProps") },
    ], false),
    "EuropaLeagueFinalStageRatingProps": o([
        { json: "num", js: "num", typ: u(3.14, "") },
        { json: "bgcolor", js: "bgcolor", typ: r("Bgcolor") },
    ], false),
    "Versus": o([
        { json: "matchId", js: "matchId", typ: 0 },
        { json: "opponentName", js: "opponentName", typ: "" },
        { json: "opponentId", js: "opponentId", typ: 0 },
        { json: "homeTeamScore", js: "homeTeamScore", typ: 0 },
        { json: "awayTeamScore", js: "awayTeamScore", typ: 0 },
        { json: "highLightHomeTeam", js: "highLightHomeTeam", typ: true },
    ], false),
    "SuperLeague": o([
        { json: "htName", js: "htName", typ: "" },
        { json: "atName", js: "atName", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "versus", js: "versus", typ: r("Versus") },
        { json: "minutesPlayed", js: "minutesPlayed", typ: 0 },
        { json: "goals", js: "goals", typ: 0 },
        { json: "assists", js: "assists", typ: 0 },
        { json: "yellowCards", js: "yellowCards", typ: 0 },
        { json: "redCards", js: "redCards", typ: 0 },
        { json: "ratingProps", js: "ratingProps", typ: r("SuperLeagueRatingProps") },
    ], false),
    "SuperLeagueRatingProps": o([
        { json: "num", js: "num", typ: "" },
        { json: "bgcolor", js: "bgcolor", typ: r("Bgcolor") },
    ], false),
    "UEFANationsLeagueAGrp3": o([
        { json: "htName", js: "htName", typ: "" },
        { json: "atName", js: "atName", typ: "" },
        { json: "date", js: "date", typ: "" },
        { json: "versus", js: "versus", typ: r("Versus") },
        { json: "minutesPlayed", js: "minutesPlayed", typ: 0 },
        { json: "goals", js: "goals", typ: 0 },
        { json: "assists", js: "assists", typ: 0 },
        { json: "yellowCards", js: "yellowCards", typ: 0 },
        { json: "redCards", js: "redCards", typ: 0 },
        { json: "ratingProps", js: "ratingProps", typ: r("PlayerPropRatingProps") },
    ], false),
    "Bgcolor": [
        "#ffa726",
        "#6ecb5b",
        "#989898",
    ],
};
