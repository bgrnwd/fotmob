"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.Text = exports.LocalizationKey = exports.LocalizedFeeText = exports.FeeText = exports.ResultString = exports.ShortKey = exports.Short = exports.LongKey = exports.Long = void 0;
const type_cast_error_1 = require("../type-cast-error");
var Long;
(function (Long) {
    Long["Abandoned"] = "Abandoned";
    Long["FullTime"] = "Full-Time";
    Long["Postponed"] = "Postponed";
})(Long || (exports.Long = Long = {}));
var LongKey;
(function (LongKey) {
    LongKey["Aborted"] = "aborted";
    LongKey["Finished"] = "finished";
    LongKey["Postponed"] = "postponed";
})(LongKey || (exports.LongKey = LongKey = {}));
var Short;
(function (Short) {
    Short["Ab"] = "Ab";
    Short["Ft"] = "FT";
    Short["Pp"] = "PP";
})(Short || (exports.Short = Short = {}));
var ShortKey;
(function (ShortKey) {
    ShortKey["AbortedShort"] = "aborted_short";
    ShortKey["FulltimeShort"] = "fulltime_short";
    ShortKey["PostponedShort"] = "postponed_short";
})(ShortKey || (exports.ShortKey = ShortKey = {}));
var ResultString;
(function (ResultString) {
    ResultString["D"] = "D";
    ResultString["L"] = "L";
    ResultString["W"] = "W";
})(ResultString || (exports.ResultString = ResultString = {}));
var FeeText;
(function (FeeText) {
    FeeText["Fee"] = "fee";
    FeeText["FreeTransfer"] = "free transfer";
    FeeText["OnLoan"] = "on loan";
})(FeeText || (exports.FeeText = FeeText = {}));
var LocalizedFeeText;
(function (LocalizedFeeText) {
    LocalizedFeeText["OnLoan"] = "on_loan";
    LocalizedFeeText["TransferFee"] = "transfer_fee";
    LocalizedFeeText["TransferTypeFreeTransfer"] = "transfer_type_free_transfer";
})(LocalizedFeeText || (exports.LocalizedFeeText = LocalizedFeeText = {}));
var LocalizationKey;
(function (LocalizationKey) {
    LocalizationKey["Contract"] = "contract";
    LocalizationKey["OnLoan"] = "on_loan";
})(LocalizationKey || (exports.LocalizationKey = LocalizationKey = {}));
var Text;
(function (Text) {
    Text["Contract"] = "contract";
    Text["OnLoan"] = "on loan";
})(Text || (exports.Text = Text = {}));
class Convert {
    static toLeague(json) {
        return cast(JSON.parse(json), r("League"));
    }
    static leagueToJson(value) {
        return JSON.stringify(uncast(value, r("League")), null, 2);
    }
    static toDetails(json) {
        return cast(JSON.parse(json), r("Details"));
    }
    static detailsToJson(value) {
        return JSON.stringify(uncast(value, r("Details")), null, 2);
    }
    static toBreadcrumbJSONLD(json) {
        return cast(JSON.parse(json), r("BreadcrumbJSONLD"));
    }
    static breadcrumbJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("BreadcrumbJSONLD")), null, 2);
    }
    static toItemListElement(json) {
        return cast(JSON.parse(json), r("ItemListElement"));
    }
    static itemListElementToJson(value) {
        return JSON.stringify(uncast(value, r("ItemListElement")), null, 2);
    }
    static toMatches(json) {
        return cast(JSON.parse(json), r("Matches"));
    }
    static matchesToJson(value) {
        return JSON.stringify(uncast(value, r("Matches")), null, 2);
    }
    static toAllMatch(json) {
        return cast(JSON.parse(json), r("AllMatch"));
    }
    static allMatchToJson(value) {
        return JSON.stringify(uncast(value, r("AllMatch")), null, 2);
    }
    static toNextOpponentClass(json) {
        return cast(JSON.parse(json), r("NextOpponentClass"));
    }
    static nextOpponentClassToJson(value) {
        return JSON.stringify(uncast(value, r("NextOpponentClass")), null, 2);
    }
    static toStatus(json) {
        return cast(JSON.parse(json), r("Status"));
    }
    static statusToJson(value) {
        return JSON.stringify(uncast(value, r("Status")), null, 2);
    }
    static toReason(json) {
        return cast(JSON.parse(json), r("Reason"));
    }
    static reasonToJson(value) {
        return JSON.stringify(uncast(value, r("Reason")), null, 2);
    }
    static toFirstUnplayedMatch(json) {
        return cast(JSON.parse(json), r("FirstUnplayedMatch"));
    }
    static firstUnplayedMatchToJson(value) {
        return JSON.stringify(uncast(value, r("FirstUnplayedMatch")), null, 2);
    }
    static toOverview(json) {
        return cast(JSON.parse(json), r("Overview"));
    }
    static overviewToJson(value) {
        return JSON.stringify(uncast(value, r("Overview")), null, 2);
    }
    static toLeagueOverviewMatch(json) {
        return cast(JSON.parse(json), r("LeagueOverviewMatch"));
    }
    static leagueOverviewMatchToJson(value) {
        return JSON.stringify(uncast(value, r("LeagueOverviewMatch")), null, 2);
    }
    static toOpponentClass(json) {
        return cast(JSON.parse(json), r("OpponentClass"));
    }
    static opponentClassToJson(value) {
        return JSON.stringify(uncast(value, r("OpponentClass")), null, 2);
    }
    static toTournament(json) {
        return cast(JSON.parse(json), r("Tournament"));
    }
    static tournamentToJson(value) {
        return JSON.stringify(uncast(value, r("Tournament")), null, 2);
    }
    static toTableElement(json) {
        return cast(JSON.parse(json), r("TableElement"));
    }
    static tableElementToJson(value) {
        return JSON.stringify(uncast(value, r("TableElement")), null, 2);
    }
    static toData(json) {
        return cast(JSON.parse(json), r("Data"));
    }
    static dataToJson(value) {
        return JSON.stringify(uncast(value, r("Data")), null, 2);
    }
    static toLegend(json) {
        return cast(JSON.parse(json), r("Legend"));
    }
    static legendToJson(value) {
        return JSON.stringify(uncast(value, r("Legend")), null, 2);
    }
    static toDataTable(json) {
        return cast(JSON.parse(json), r("DataTable"));
    }
    static dataTableToJson(value) {
        return JSON.stringify(uncast(value, r("DataTable")), null, 2);
    }
    static toAll(json) {
        return cast(JSON.parse(json), r("All"));
    }
    static allToJson(value) {
        return JSON.stringify(uncast(value, r("All")), null, 2);
    }
    static toTableHeader(json) {
        return cast(JSON.parse(json), r("TableHeader"));
    }
    static tableHeaderToJson(value) {
        return JSON.stringify(uncast(value, r("TableHeader")), null, 2);
    }
    static toTeamForm(json) {
        return cast(JSON.parse(json), r("TeamForm"));
    }
    static teamFormToJson(value) {
        return JSON.stringify(uncast(value, r("TeamForm")), null, 2);
    }
    static toTeamFormAway(json) {
        return cast(JSON.parse(json), r("TeamFormAway"));
    }
    static teamFormAwayToJson(value) {
        return JSON.stringify(uncast(value, r("TeamFormAway")), null, 2);
    }
    static toTooltipText(json) {
        return cast(JSON.parse(json), r("TooltipText"));
    }
    static tooltipTextToJson(value) {
        return JSON.stringify(uncast(value, r("TooltipText")), null, 2);
    }
    static toTopPlayers(json) {
        return cast(JSON.parse(json), r("TopPlayers"));
    }
    static topPlayersToJson(value) {
        return JSON.stringify(uncast(value, r("TopPlayers")), null, 2);
    }
    static toBy(json) {
        return cast(JSON.parse(json), r("By"));
    }
    static byToJson(value) {
        return JSON.stringify(uncast(value, r("By")), null, 2);
    }
    static toStats(json) {
        return cast(JSON.parse(json), r("Stats"));
    }
    static statsToJson(value) {
        return JSON.stringify(uncast(value, r("Stats")), null, 2);
    }
    static toPlayer(json) {
        return cast(JSON.parse(json), r("Player"));
    }
    static playerToJson(value) {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }
    static toParticipant(json) {
        return cast(JSON.parse(json), r("Participant"));
    }
    static participantToJson(value) {
        return JSON.stringify(uncast(value, r("Participant")), null, 2);
    }
    static toTeamColors(json) {
        return cast(JSON.parse(json), r("TeamColors"));
    }
    static teamColorsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
    }
    static toSeasonStatLink(json) {
        return cast(JSON.parse(json), r("SeasonStatLink"));
    }
    static seasonStatLinkToJson(value) {
        return JSON.stringify(uncast(value, r("SeasonStatLink")), null, 2);
    }
    static toTrophy(json) {
        return cast(JSON.parse(json), r("Trophy"));
    }
    static trophyToJson(value) {
        return JSON.stringify(uncast(value, r("Trophy")), null, 2);
    }
    static toLoser(json) {
        return cast(JSON.parse(json), r("Loser"));
    }
    static loserToJson(value) {
        return JSON.stringify(uncast(value, r("Loser")), null, 2);
    }
    static toTransfers(json) {
        return cast(JSON.parse(json), r("Transfers"));
    }
    static transfersToJson(value) {
        return JSON.stringify(uncast(value, r("Transfers")), null, 2);
    }
    static toDatum(json) {
        return cast(JSON.parse(json), r("Datum"));
    }
    static datumToJson(value) {
        return JSON.stringify(uncast(value, r("Datum")), null, 2);
    }
    static toFee(json) {
        return cast(JSON.parse(json), r("Fee"));
    }
    static feeToJson(value) {
        return JSON.stringify(uncast(value, r("Fee")), null, 2);
    }
    static toPosition(json) {
        return cast(JSON.parse(json), r("Position"));
    }
    static positionToJson(value) {
        return JSON.stringify(uncast(value, r("Position")), null, 2);
    }
    static toTransferType(json) {
        return cast(JSON.parse(json), r("TransferType"));
    }
    static transferTypeToJson(value) {
        return JSON.stringify(uncast(value, r("TransferType")), null, 2);
    }
}
exports.Convert = Convert;
function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw new type_cast_error_1.CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}
function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        }
        else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
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
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = '', parent = '') {
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
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }
    function transformArray(typ, val) {
        if (!Array.isArray(val))
            return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
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
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
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
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
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
    "League": o([
        { json: "tabs", js: "tabs", typ: u(undefined, a("")) },
        { json: "allAvailableSeasons", js: "allAvailableSeasons", typ: u(undefined, a("")) },
        { json: "details", js: "details", typ: u(undefined, r("Details")) },
        { json: "seostr", js: "seostr", typ: u(undefined, "") },
        { json: "QAData", js: "QAData", typ: u(undefined, a("any")) },
        { json: "table", js: "table", typ: u(undefined, a(r("TableElement"))) },
        { json: "transfers", js: "transfers", typ: u(undefined, r("Transfers")) },
        { json: "overview", js: "overview", typ: u(undefined, r("Overview")) },
        { json: "stats", js: "stats", typ: u(undefined, r("Stats")) },
        { json: "matches", js: "matches", typ: u(undefined, r("Matches")) },
        { json: "playoff", js: "playoff", typ: u(undefined, null) },
    ], false),
    "Details": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        { json: "latestSeason", js: "latestSeason", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, null) },
        { json: "breadcrumbJSONLD", js: "breadcrumbJSONLD", typ: u(undefined, r("BreadcrumbJSONLD")) },
    ], false),
    "BreadcrumbJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "itemListElement", js: "itemListElement", typ: u(undefined, a(r("ItemListElement"))) },
    ], false),
    "ItemListElement": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    "Matches": o([
        { json: "firstUnplayedMatch", js: "firstUnplayedMatch", typ: u(undefined, r("FirstUnplayedMatch")) },
        { json: "allMatches", js: "allMatches", typ: u(undefined, a(r("AllMatch"))) },
        { json: "hasOngoingMatch", js: "hasOngoingMatch", typ: u(undefined, true) },
    ], false),
    "AllMatch": o([
        { json: "round", js: "round", typ: u(undefined, 0) },
        { json: "roundName", js: "roundName", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("NextOpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("NextOpponentClass")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ], false),
    "NextOpponentClass": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "Status": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
    ], false),
    "Reason": o([
        { json: "short", js: "short", typ: u(undefined, r("Short")) },
        { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
        { json: "long", js: "long", typ: u(undefined, r("Long")) },
        { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ], false),
    "FirstUnplayedMatch": o([
        { json: "firstRoundWithUnplayedMatch", js: "firstRoundWithUnplayedMatch", typ: u(undefined, 0) },
        { json: "firstUnplayedMatchIndex", js: "firstUnplayedMatchIndex", typ: u(undefined, 0) },
        { json: "firstUnplayedMatchId", js: "firstUnplayedMatchId", typ: u(undefined, "") },
    ], false),
    "Overview": o([
        { json: "season", js: "season", typ: u(undefined, "") },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        { json: "table", js: "table", typ: u(undefined, a(r("TableElement"))) },
        { json: "topPlayers", js: "topPlayers", typ: u(undefined, r("TopPlayers")) },
        { json: "hasTotw", js: "hasTotw", typ: u(undefined, true) },
        { json: "leagueOverviewMatches", js: "leagueOverviewMatches", typ: u(undefined, a(r("LeagueOverviewMatch"))) },
        { json: "hasOngoingMatch", js: "hasOngoingMatch", typ: u(undefined, true) },
    ], false),
    "LeagueOverviewMatch": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "opponent", js: "opponent", typ: u(undefined, r("OpponentClass")) },
        { json: "home", js: "home", typ: u(undefined, r("OpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("OpponentClass")) },
        { json: "displayTournament", js: "displayTournament", typ: u(undefined, true) },
        { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
        { json: "tournament", js: "tournament", typ: u(undefined, r("Tournament")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ], false),
    "OpponentClass": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "score", js: "score", typ: u(undefined, 0) },
    ], false),
    "Tournament": o([], false),
    "TableElement": o([
        { json: "data", js: "data", typ: u(undefined, r("Data")) },
        { json: "teamForm", js: "teamForm", typ: u(undefined, m(a(r("TeamForm")))) },
        { json: "nextOpponent", js: "nextOpponent", typ: u(undefined, m(a(u(r("NextOpponentClass"), "")))) },
        { json: "tableHeader", js: "tableHeader", typ: u(undefined, r("TableHeader")) },
    ], false),
    "Data": o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
        { json: "table", js: "table", typ: u(undefined, r("DataTable")) },
        { json: "tableFilterTypes", js: "tableFilterTypes", typ: u(undefined, a("")) },
        { json: "composite", js: "composite", typ: u(undefined, true) },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        { json: "isCurrentSeason", js: "isCurrentSeason", typ: u(undefined, true) },
    ], false),
    "Legend": o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "tKey", js: "tKey", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "indices", js: "indices", typ: u(undefined, a(0)) },
    ], false),
    "DataTable": o([
        { json: "all", js: "all", typ: u(undefined, a(r("All"))) },
        { json: "home", js: "home", typ: u(undefined, a(r("All"))) },
        { json: "away", js: "away", typ: u(undefined, a(r("All"))) },
        { json: "form", js: "form", typ: u(undefined, a(r("All"))) },
    ], false),
    "All": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "deduction", js: "deduction", typ: u(undefined, u(0, null)) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, null) },
        { json: "played", js: "played", typ: u(undefined, 0) },
        { json: "wins", js: "wins", typ: u(undefined, 0) },
        { json: "draws", js: "draws", typ: u(undefined, 0) },
        { json: "losses", js: "losses", typ: u(undefined, 0) },
        { json: "scoresStr", js: "scoresStr", typ: u(undefined, "") },
        { json: "goalConDiff", js: "goalConDiff", typ: u(undefined, 0) },
        { json: "pts", js: "pts", typ: u(undefined, 0) },
        { json: "idx", js: "idx", typ: u(undefined, 0) },
        { json: "qualColor", js: "qualColor", typ: u(undefined, u("", null)) },
        { json: "featuredInMatch", js: "featuredInMatch", typ: u(undefined, true) },
    ], false),
    "TableHeader": o([
        { json: "staticTableHeaders", js: "staticTableHeaders", typ: u(undefined, a("")) },
        { json: "dynamicTableHeaders", js: "dynamicTableHeaders", typ: u(undefined, a("")) },
    ], false),
    "TeamForm": o([
        { json: "result", js: "result", typ: u(undefined, 0) },
        { json: "resultString", js: "resultString", typ: u(undefined, r("ResultString")) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "linkToMatch", js: "linkToMatch", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, null) },
        { json: "teamPageUrl", js: "teamPageUrl", typ: u(undefined, "") },
        { json: "tooltipText", js: "tooltipText", typ: u(undefined, r("TooltipText")) },
        { json: "score", js: "score", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("TeamFormAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamFormAway")) },
    ], false),
    "TeamFormAway": o([
        { json: "isOurTeam", js: "isOurTeam", typ: u(undefined, true) },
    ], false),
    "TooltipText": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, "") },
        { json: "homeTeamId", js: "homeTeamId", typ: u(undefined, 0) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, "") },
        { json: "awayTeamId", js: "awayTeamId", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
    ], false),
    "TopPlayers": o([
        { json: "byRating", js: "byRating", typ: u(undefined, a(r("By"))) },
        { json: "byGoals", js: "byGoals", typ: u(undefined, a(r("By"))) },
        { json: "byAssists", js: "byAssists", typ: u(undefined, a(r("By"))) },
        { json: "seeAllUrl", js: "seeAllUrl", typ: u(undefined, "") },
    ], false),
    "By": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "rank", js: "rank", typ: u(undefined, 0) },
        { json: "goals", js: "goals", typ: u(undefined, null) },
        { json: "assists", js: "assists", typ: u(undefined, null) },
        { json: "rating", js: "rating", typ: u(undefined, null) },
        { json: "positionId", js: "positionId", typ: u(undefined, null) },
        { json: "ccode", js: "ccode", typ: u(undefined, null) },
        { json: "cname", js: "cname", typ: u(undefined, null) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        { json: "showRole", js: "showRole", typ: u(undefined, null) },
        { json: "showCountryFlag", js: "showCountryFlag", typ: u(undefined, null) },
        { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
        { json: "excludeFromRanking", js: "excludeFromRanking", typ: u(undefined, true) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    "Stats": o([
        { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
        { json: "teams", js: "teams", typ: u(undefined, a(r("Player"))) },
        { json: "trophies", js: "trophies", typ: u(undefined, a(r("Trophy"))) },
        { json: "seasonStatLinks", js: "seasonStatLinks", typ: u(undefined, a(r("SeasonStatLink"))) },
        { json: "seasonsWithLinks", js: "seasonsWithLinks", typ: u(undefined, a("")) },
    ], false),
    "Player": o([
        { json: "header", js: "header", typ: u(undefined, "") },
        { json: "participant", js: "participant", typ: u(undefined, r("Participant")) },
        { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
        { json: "topThree", js: "topThree", typ: u(undefined, a(r("Participant"))) },
        { json: "order", js: "order", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "localizedTitleId", js: "localizedTitleId", typ: u(undefined, "") },
    ], false),
    "Participant": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "rank", js: "rank", typ: u(undefined, 0) },
        { json: "goals", js: "goals", typ: u(undefined, null) },
        { json: "assists", js: "assists", typ: u(undefined, null) },
        { json: "rating", js: "rating", typ: u(undefined, null) },
        { json: "positionId", js: "positionId", typ: u(undefined, null) },
        { json: "ccode", js: "ccode", typ: u(undefined, null) },
        { json: "cname", js: "cname", typ: u(undefined, null) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, u("", null)) },
        { json: "showRole", js: "showRole", typ: u(undefined, null) },
        { json: "showCountryFlag", js: "showCountryFlag", typ: u(undefined, null) },
        { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
        { json: "excludeFromRanking", js: "excludeFromRanking", typ: u(undefined, true) },
        { json: "value", js: "value", typ: u(undefined, u(0, "")) },
        { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
    ], false),
    "TeamColors": o([
        { json: "darkMode", js: "darkMode", typ: u(undefined, "") },
        { json: "lightMode", js: "lightMode", typ: u(undefined, "") },
        { json: "fontDarkMode", js: "fontDarkMode", typ: u(undefined, "") },
        { json: "fontLightMode", js: "fontLightMode", typ: u(undefined, "") },
    ], false),
    "SeasonStatLink": o([
        { json: "Name", js: "Name", typ: u(undefined, "") },
        { json: "CountryCode", js: "CountryCode", typ: u(undefined, "") },
        { json: "RelativePath", js: "RelativePath", typ: u(undefined, "") },
        { json: "League", js: "League", typ: u(undefined, "") },
        { json: "StageId", js: "StageId", typ: u(undefined, 0) },
        { json: "TemplateId", js: "TemplateId", typ: u(undefined, 0) },
        { json: "TournamentId", js: "TournamentId", typ: u(undefined, 0) },
        { json: "TotwRoundsLink", js: "TotwRoundsLink", typ: u(undefined, "") },
    ], false),
    "Trophy": o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "winner", js: "winner", typ: u(undefined, r("Loser")) },
        { json: "loser", js: "loser", typ: u(undefined, r("Loser")) },
    ], false),
    "Loser": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "winner", js: "winner", typ: u(undefined, true) },
    ], false),
    "Transfers": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, a(r("Datum"))) },
    ], false),
    "Datum": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, u(r("Position"), null)) },
        { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
        { json: "transferText", js: "transferText", typ: u(undefined, a(null)) },
        { json: "fromClub", js: "fromClub", typ: u(undefined, "") },
        { json: "fromClubId", js: "fromClubId", typ: u(undefined, 0) },
        { json: "toClub", js: "toClub", typ: u(undefined, "") },
        { json: "toClubId", js: "toClubId", typ: u(undefined, 0) },
        { json: "fee", js: "fee", typ: u(undefined, u(r("Fee"), null)) },
        { json: "transferType", js: "transferType", typ: u(undefined, r("TransferType")) },
        { json: "contractExtension", js: "contractExtension", typ: u(undefined, true) },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        { json: "fromDate", js: "fromDate", typ: u(undefined, Date) },
        { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
        { json: "toDate", js: "toDate", typ: u(undefined, Date) },
    ], false),
    "Fee": o([
        { json: "feeText", js: "feeText", typ: u(undefined, r("FeeText")) },
        { json: "localizedFeeText", js: "localizedFeeText", typ: u(undefined, r("LocalizedFeeText")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    "Position": o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "TransferType": o([
        { json: "text", js: "text", typ: u(undefined, r("Text")) },
        { json: "localizationKey", js: "localizationKey", typ: u(undefined, r("LocalizationKey")) },
    ], false),
    "Long": [
        "Abandoned",
        "Full-Time",
        "Postponed",
    ],
    "LongKey": [
        "aborted",
        "finished",
        "postponed",
    ],
    "Short": [
        "Ab",
        "FT",
        "PP",
    ],
    "ShortKey": [
        "aborted_short",
        "fulltime_short",
        "postponed_short",
    ],
    "ResultString": [
        "D",
        "L",
        "W",
    ],
    "FeeText": [
        "fee",
        "free transfer",
        "on loan",
    ],
    "LocalizedFeeText": [
        "on_loan",
        "transfer_fee",
        "transfer_type_free_transfer",
    ],
    "LocalizationKey": [
        "contract",
        "on_loan",
    ],
    "Text": [
        "contract",
        "on loan",
    ],
};
