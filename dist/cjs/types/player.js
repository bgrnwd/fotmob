"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
const type_cast_error_1 = require("../type-cast-error");
class Convert {
    static toPlayer(json) {
        return cast(JSON.parse(json), r("Player"));
    }
    static playerToJson(value) {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }
}
exports.Convert = Convert;
function invalidValue(typ, val, key, parent = "") {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : "";
    const keyText = key ? ` for key "${key}"` : "";
    throw new type_cast_error_1.CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}
function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        }
        else {
            return `one of [${typ
                .map((a) => {
                return prettyTypeName(a);
            })
                .join(", ")}]`;
        }
    }
    else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    }
    else {
        return typeof typ;
    }
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => (map[p.json] = { key: p.js, typ: p.typ }));
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => (map[p.js] = { key: p.json, typ: p.typ }));
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = "", parent = "") {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    function transformUnion(typs, val) {
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases.map((a) => {
            return l(a);
        }), val, key, parent);
    }
    function transformArray(typ, val) {
        if (!Array.isArray(val))
            return invalidValue(l("array"), val, key, parent);
        return val.map((el) => transform(el, typ, getProps));
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach((key) => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key)
                ? val[key]
                : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach((key) => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = val[key];
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false)
        return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers")
            ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")
                ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")
                    ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function l(typ) {
    return { literal: typ };
}
function a(typ) {
    return { arrayItems: typ };
}
function u(...typs) {
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props, additional };
}
function m(additional) {
    return { props: [], additional };
}
function r(name) {
    return { ref: name };
}
const typeMap = {
    Player: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, r("BirthDate")) },
        { json: "isCoach", js: "isCoach", typ: u(undefined, true) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        {
            json: "primaryTeam",
            js: "primaryTeam",
            typ: u(undefined, r("PrimaryTeam")),
        },
        {
            json: "positionDescription",
            js: "positionDescription",
            typ: u(undefined, r("PositionDescription")),
        },
        {
            json: "injuryInformation",
            js: "injuryInformation",
            typ: u(undefined, null),
        },
        {
            json: "playerInformation",
            js: "playerInformation",
            typ: u(undefined, a(r("PlayerInformation"))),
        },
        {
            json: "mainLeague",
            js: "mainLeague",
            typ: u(undefined, r("MainLeague")),
        },
        { json: "trophies", js: "trophies", typ: u(undefined, r("Trophies")) },
        {
            json: "recentMatches",
            js: "recentMatches",
            typ: u(undefined, a(r("RecentMatch"))),
        },
        {
            json: "careerHistory",
            js: "careerHistory",
            typ: u(undefined, r("CareerHistory")),
        },
        { json: "traits", js: "traits", typ: u(undefined, r("Traits")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "coachStats", js: "coachStats", typ: u(undefined, null) },
        {
            json: "statSeasons",
            js: "statSeasons",
            typ: u(undefined, a(r("StatSeason"))),
        },
    ], false),
    BirthDate: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
    ], false),
    CareerHistory: o([
        { json: "showFootnote", js: "showFootnote", typ: u(undefined, true) },
        {
            json: "careerItems",
            js: "careerItems",
            typ: u(undefined, r("CareerItems")),
        },
        { json: "fullCareer", js: "fullCareer", typ: u(undefined, true) },
    ], false),
    CareerItems: o([
        { json: "senior", js: "senior", typ: u(undefined, r("NationalTeam")) },
        { json: "youth", js: "youth", typ: u(undefined, r("Youth")) },
        {
            json: "national team",
            js: "national team",
            typ: u(undefined, r("NationalTeam")),
        },
    ], false),
    NationalTeam: o([
        {
            json: "teamEntries",
            js: "teamEntries",
            typ: u(undefined, a(r("TeamEntry"))),
        },
        {
            json: "seasonEntries",
            js: "seasonEntries",
            typ: u(undefined, a(r("NationalTeamSeasonEntry"))),
        },
    ], false),
    NationalTeamSeasonEntry: o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        {
            json: "tournamentStats",
            js: "tournamentStats",
            typ: u(undefined, a(r("PurpleTournamentStat"))),
        },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, "") },
        { json: "teamGender", js: "teamGender", typ: u(undefined, "") },
        { json: "transferType", js: "transferType", typ: u(undefined, null) },
    ], false),
    Rating: o([
        { json: "num", js: "num", typ: u(undefined, "") },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, u(undefined, "")) },
    ], false),
    PurpleTournamentStat: o([
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "seasonRating", js: "seasonRating", typ: u(undefined, 3.14) },
        { json: "isFriendly", js: "isFriendly", typ: u(undefined, true) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
    ], false),
    TeamEntry: o([
        { json: "participantId", js: "participantId", typ: u(undefined, 0) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, "") },
        {
            json: "teamGender",
            js: "teamGender",
            typ: u(undefined, r("TeamGender")),
        },
        { json: "transferType", js: "transferType", typ: u(undefined, null) },
        { json: "startDate", js: "startDate", typ: u(undefined, Date) },
        { json: "endDate", js: "endDate", typ: u(undefined, u(Date, null)) },
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "role", js: "role", typ: u(undefined, null) },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        {
            json: "hasUncertainData",
            js: "hasUncertainData",
            typ: u(undefined, true),
        },
    ], false),
    Youth: o([
        {
            json: "teamEntries",
            js: "teamEntries",
            typ: u(undefined, a(r("TeamEntry"))),
        },
        {
            json: "seasonEntries",
            js: "seasonEntries",
            typ: u(undefined, a(r("YouthSeasonEntry"))),
        },
    ], false),
    YouthSeasonEntry: o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        {
            json: "tournamentStats",
            js: "tournamentStats",
            typ: u(undefined, a(r("FluffyTournamentStat"))),
        },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, "") },
        {
            json: "teamGender",
            js: "teamGender",
            typ: u(undefined, r("TeamGender")),
        },
        { json: "transferType", js: "transferType", typ: u(undefined, null) },
    ], false),
    FluffyTournamentStat: o([
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "isFriendly", js: "isFriendly", typ: u(undefined, true) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
    ], false),
    MainLeague: o([
        { json: "topStats", js: "topStats", typ: u(undefined, r("TopStats")) },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
    ], false),
    TopStats: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "display", js: "display", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, a(r("TopStatsItem"))) },
    ], false),
    TopStatsItem: o([
        { json: "title", js: "title", typ: u(undefined, "") },
        {
            json: "localizedTitleId",
            js: "localizedTitleId",
            typ: u(undefined, ""),
        },
        { json: "statValue", js: "statValue", typ: u(undefined, "") },
        { json: "per90", js: "per90", typ: u(undefined, 3.14) },
        { json: "percentileRank", js: "percentileRank", typ: u(undefined, 3.14) },
        {
            json: "percentileRankPer90",
            js: "percentileRankPer90",
            typ: u(undefined, 3.14),
        },
        { json: "statFormat", js: "statFormat", typ: u(undefined, "") },
    ], false),
    Meta: o([
        { json: "seopath", js: "seopath", typ: u(undefined, "") },
        { json: "pageurl", js: "pageurl", typ: u(undefined, "") },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
        {
            json: "personJSONLD",
            js: "personJSONLD",
            typ: u(undefined, r("PersonJSONLD")),
        },
        {
            json: "breadcrumbJSONLD",
            js: "breadcrumbJSONLD",
            typ: u(undefined, r("BreadcrumbJSONLD")),
        },
    ], false),
    BreadcrumbJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        {
            json: "itemListElement",
            js: "itemListElement",
            typ: u(undefined, a(r("ItemListElement"))),
        },
    ], false),
    ItemListElement: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    FAQJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        {
            json: "mainEntity",
            js: "mainEntity",
            typ: u(undefined, a(r("MainEntity"))),
        },
    ], false),
    MainEntity: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        {
            json: "acceptedAnswer",
            js: "acceptedAnswer",
            typ: u(undefined, r("AcceptedAnswer")),
        },
    ], false),
    AcceptedAnswer: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    PersonJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, Date) },
        { json: "url", js: "url", typ: u(undefined, "") },
        {
            json: "nationality",
            js: "nationality",
            typ: u(undefined, r("Affiliation")),
        },
        {
            json: "affiliation",
            js: "affiliation",
            typ: u(undefined, r("Affiliation")),
        },
        { json: "gender", js: "gender", typ: u(undefined, "") },
        { json: "height", js: "height", typ: u(undefined, r("Eight")) },
        { json: "weight", js: "weight", typ: u(undefined, r("Eight")) },
    ], false),
    Affiliation: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    Eight: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "unitText", js: "unitText", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    PlayerInformation: o([
        { json: "value", js: "value", typ: u(undefined, r("Value")) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "translationKey", js: "translationKey", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ], false),
    Icon: o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    Value: o([
        { json: "key", js: "key", typ: u(undefined, u(null, "")) },
        { json: "fallback", js: "fallback", typ: u(undefined, u(0, "")) },
    ], false),
    PositionDescription: o([
        {
            json: "positions",
            js: "positions",
            typ: u(undefined, a(r("Position"))),
        },
        {
            json: "primaryPosition",
            js: "primaryPosition",
            typ: u(undefined, r("PrimaryPosition")),
        },
        {
            json: "nonPrimaryPositions",
            js: "nonPrimaryPositions",
            typ: u(undefined, a(r("PrimaryPosition"))),
        },
    ], false),
    PrimaryPosition: o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    Position: o([
        { json: "strPos", js: "strPos", typ: u(undefined, r("PrimaryPosition")) },
        {
            json: "strPosShort",
            js: "strPosShort",
            typ: u(undefined, r("PrimaryPosition")),
        },
        { json: "occurences", js: "occurences", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, "") },
        { json: "isMainPosition", js: "isMainPosition", typ: u(undefined, true) },
        {
            json: "pitchPositionData",
            js: "pitchPositionData",
            typ: u(undefined, u(r("PitchPositionData"), null)),
        },
    ], false),
    PitchPositionData: o([
        { json: "right", js: "right", typ: u(undefined, 3.14) },
        { json: "top", js: "top", typ: u(undefined, 3.14) },
        { json: "ratio", js: "ratio", typ: u(undefined, 3.14) },
    ], false),
    PrimaryTeam: o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        {
            json: "teamColors",
            js: "teamColors",
            typ: u(undefined, r("TeamColors")),
        },
    ], false),
    TeamColors: o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "colorAlternate", js: "colorAlternate", typ: u(undefined, "") },
        { json: "colorAway", js: "colorAway", typ: u(undefined, "") },
        {
            json: "colorAwayAlternate",
            js: "colorAwayAlternate",
            typ: u(undefined, ""),
        },
    ], false),
    RecentMatch: o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        { json: "opponentTeamId", js: "opponentTeamId", typ: u(undefined, 0) },
        {
            json: "opponentTeamName",
            js: "opponentTeamName",
            typ: u(undefined, ""),
        },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "matchDate", js: "matchDate", typ: u(undefined, r("MatchDate")) },
        { json: "matchPageUrl", js: "matchPageUrl", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "stage", js: "stage", typ: u(undefined, u(null, "")) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "goals", js: "goals", typ: u(undefined, 0) },
        { json: "assists", js: "assists", typ: u(undefined, 0) },
        { json: "yellowCards", js: "yellowCards", typ: u(undefined, 0) },
        { json: "redCards", js: "redCards", typ: u(undefined, 0) },
        {
            json: "ratingProps",
            js: "ratingProps",
            typ: u(undefined, r("RatingProps")),
        },
        {
            json: "playerOfTheMatch",
            js: "playerOfTheMatch",
            typ: u(undefined, true),
        },
        { json: "onBench", js: "onBench", typ: u(undefined, true) },
    ], false),
    MatchDate: o([{ json: "utcTime", js: "utcTime", typ: u(undefined, Date) }], false),
    RatingProps: o([
        { json: "num", js: "num", typ: u(undefined, u(0, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("Bgcolor")) },
    ], false),
    StatSeason: o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        {
            json: "tournaments",
            js: "tournaments",
            typ: u(undefined, a(r("StatSeasonTournament"))),
        },
    ], false),
    StatSeasonTournament: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "entryId", js: "entryId", typ: u(undefined, "") },
    ], false),
    Traits: o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, a(r("TraitsItem"))) },
    ], false),
    TraitsItem: o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    Trophies: o([
        {
            json: "playerTrophies",
            js: "playerTrophies",
            typ: u(undefined, a(r("PlayerTrophy"))),
        },
        {
            json: "coachTrophies",
            js: "coachTrophies",
            typ: u(undefined, a("any")),
        },
    ], false),
    PlayerTrophy: o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        {
            json: "tournaments",
            js: "tournaments",
            typ: u(undefined, a(r("PlayerTrophyTournament"))),
        },
    ], false),
    PlayerTrophyTournament: o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "seasonsWon", js: "seasonsWon", typ: u(undefined, a("")) },
        {
            json: "seasonsRunnerUp",
            js: "seasonsRunnerUp",
            typ: u(undefined, a("")),
        },
    ], false),
};
