import { CastingError } from "../type-cast-error";
export var Country;
(function (Country) {
    Country["Eng"] = "ENG";
    Country["Int"] = "INT";
})(Country || (Country = {}));
export var CoachType;
(function (CoachType) {
    CoachType["Person"] = "Person";
})(CoachType || (CoachType = {}));
export var Long;
(function (Long) {
    Long["FullTime"] = "Full-Time";
})(Long || (Long = {}));
export var LongKey;
(function (LongKey) {
    LongKey["Finished"] = "finished";
})(LongKey || (LongKey = {}));
export var Short;
(function (Short) {
    Short["Ft"] = "FT";
})(Short || (Short = {}));
export var ShortKey;
(function (ShortKey) {
    ShortKey["FulltimeShort"] = "fulltime_short";
})(ShortKey || (ShortKey = {}));
export var ResultString;
(function (ResultString) {
    ResultString["D"] = "D";
    ResultString["L"] = "L";
    ResultString["W"] = "W";
})(ResultString || (ResultString = {}));
export var Role;
(function (Role) {
    Role["Attackers"] = "attackers";
    Role["Defenders"] = "defenders";
    Role["Goalkeepers"] = "goalkeepers";
    Role["Midfielders"] = "midfielders";
})(Role || (Role = {}));
export var LocalizationKey;
(function (LocalizationKey) {
    LocalizationKey["Contract"] = "contract";
    LocalizationKey["OnLoan"] = "on_loan";
})(LocalizationKey || (LocalizationKey = {}));
export var Text;
(function (Text) {
    Text["Contract"] = "contract";
    Text["OnLoan"] = "on loan";
})(Text || (Text = {}));
export var FeeText;
(function (FeeText) {
    FeeText["Fee"] = "fee";
    FeeText["FreeTransfer"] = "free transfer";
    FeeText["OnLoan"] = "on loan";
})(FeeText || (FeeText = {}));
export var LocalizedFeeText;
(function (LocalizedFeeText) {
    LocalizedFeeText["OnLoan"] = "on_loan";
    LocalizedFeeText["TransferFee"] = "transfer_fee";
    LocalizedFeeText["TransferTypeFreeTransfer"] = "transfer_type_free_transfer";
})(LocalizedFeeText || (LocalizedFeeText = {}));
export class Convert {
    static toTeam(json) {
        return cast(JSON.parse(json), r("Team"));
    }
    static teamToJson(value) {
        return JSON.stringify(uncast(value, r("Team")), null, 2);
    }
    static toQADatum(json) {
        return cast(JSON.parse(json), r("QADatum"));
    }
    static qADatumToJson(value) {
        return JSON.stringify(uncast(value, r("QADatum")), null, 2);
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
    static toFAQJSONLD(json) {
        return cast(JSON.parse(json), r("FAQJSONLD"));
    }
    static fAQJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("FAQJSONLD")), null, 2);
    }
    static toMainEntity(json) {
        return cast(JSON.parse(json), r("MainEntity"));
    }
    static mainEntityToJson(value) {
        return JSON.stringify(uncast(value, r("MainEntity")), null, 2);
    }
    static toAcceptedAnswer(json) {
        return cast(JSON.parse(json), r("AcceptedAnswer"));
    }
    static acceptedAnswerToJson(value) {
        return JSON.stringify(uncast(value, r("AcceptedAnswer")), null, 2);
    }
    static toSportsTeamJSONLD(json) {
        return cast(JSON.parse(json), r("SportsTeamJSONLD"));
    }
    static sportsTeamJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("SportsTeamJSONLD")), null, 2);
    }
    static toCoach(json) {
        return cast(JSON.parse(json), r("Coach"));
    }
    static coachToJson(value) {
        return JSON.stringify(uncast(value, r("Coach")), null, 2);
    }
    static toNationality(json) {
        return cast(JSON.parse(json), r("Nationality"));
    }
    static nationalityToJson(value) {
        return JSON.stringify(uncast(value, r("Nationality")), null, 2);
    }
    static toLocation(json) {
        return cast(JSON.parse(json), r("Location"));
    }
    static locationToJson(value) {
        return JSON.stringify(uncast(value, r("Location")), null, 2);
    }
    static toAddress(json) {
        return cast(JSON.parse(json), r("Address"));
    }
    static addressToJson(value) {
        return JSON.stringify(uncast(value, r("Address")), null, 2);
    }
    static toGeo(json) {
        return cast(JSON.parse(json), r("Geo"));
    }
    static geoToJson(value) {
        return JSON.stringify(uncast(value, r("Geo")), null, 2);
    }
    static toMemberOf(json) {
        return cast(JSON.parse(json), r("MemberOf"));
    }
    static memberOfToJson(value) {
        return JSON.stringify(uncast(value, r("MemberOf")), null, 2);
    }
    static toTeamFixtures(json) {
        return cast(JSON.parse(json), r("TeamFixtures"));
    }
    static teamFixturesToJson(value) {
        return JSON.stringify(uncast(value, r("TeamFixtures")), null, 2);
    }
    static toAllFixtures(json) {
        return cast(JSON.parse(json), r("AllFixtures"));
    }
    static allFixturesToJson(value) {
        return JSON.stringify(uncast(value, r("AllFixtures")), null, 2);
    }
    static toOverviewFixture(json) {
        return cast(JSON.parse(json), r("OverviewFixture"));
    }
    static overviewFixtureToJson(value) {
        return JSON.stringify(uncast(value, r("OverviewFixture")), null, 2);
    }
    static toOpponentClass(json) {
        return cast(JSON.parse(json), r("OpponentClass"));
    }
    static opponentClassToJson(value) {
        return JSON.stringify(uncast(value, r("OpponentClass")), null, 2);
    }
    static toOverviewFixtureStatus(json) {
        return cast(JSON.parse(json), r("OverviewFixtureStatus"));
    }
    static overviewFixtureStatusToJson(value) {
        return JSON.stringify(uncast(value, r("OverviewFixtureStatus")), null, 2);
    }
    static toReason(json) {
        return cast(JSON.parse(json), r("Reason"));
    }
    static reasonToJson(value) {
        return JSON.stringify(uncast(value, r("Reason")), null, 2);
    }
    static toTournament(json) {
        return cast(JSON.parse(json), r("Tournament"));
    }
    static tournamentToJson(value) {
        return JSON.stringify(uncast(value, r("Tournament")), null, 2);
    }
    static toLastMatch(json) {
        return cast(JSON.parse(json), r("LastMatch"));
    }
    static lastMatchToJson(value) {
        return JSON.stringify(uncast(value, r("LastMatch")), null, 2);
    }
    static toNextMatch(json) {
        return cast(JSON.parse(json), r("NextMatch"));
    }
    static nextMatchToJson(value) {
        return JSON.stringify(uncast(value, r("NextMatch")), null, 2);
    }
    static toNextMatchStatus(json) {
        return cast(JSON.parse(json), r("NextMatchStatus"));
    }
    static nextMatchStatusToJson(value) {
        return JSON.stringify(uncast(value, r("NextMatchStatus")), null, 2);
    }
    static toFixturesFixtures(json) {
        return cast(JSON.parse(json), r("FixturesFixtures"));
    }
    static fixturesFixturesToJson(value) {
        return JSON.stringify(uncast(value, r("FixturesFixtures")), null, 2);
    }
    static toThe2024(json) {
        return cast(JSON.parse(json), r("The2024"));
    }
    static the2024ToJson(value) {
        return JSON.stringify(uncast(value, r("The2024")), null, 2);
    }
    static toHistory(json) {
        return cast(JSON.parse(json), r("History"));
    }
    static historyToJson(value) {
        return JSON.stringify(uncast(value, r("History")), null, 2);
    }
    static toHistoricalTableData(json) {
        return cast(JSON.parse(json), r("HistoricalTableData"));
    }
    static historicalTableDataToJson(value) {
        return JSON.stringify(uncast(value, r("HistoricalTableData")), null, 2);
    }
    static toDivision(json) {
        return cast(JSON.parse(json), r("Division"));
    }
    static divisionToJson(value) {
        return JSON.stringify(uncast(value, r("Division")), null, 2);
    }
    static toRank(json) {
        return cast(JSON.parse(json), r("Rank"));
    }
    static rankToJson(value) {
        return JSON.stringify(uncast(value, r("Rank")), null, 2);
    }
    static toRankStats(json) {
        return cast(JSON.parse(json), r("RankStats"));
    }
    static rankStatsToJson(value) {
        return JSON.stringify(uncast(value, r("RankStats")), null, 2);
    }
    static toTables(json) {
        return cast(JSON.parse(json), r("Tables"));
    }
    static tablesToJson(value) {
        return JSON.stringify(uncast(value, r("Tables")), null, 2);
    }
    static toCurrent(json) {
        return cast(JSON.parse(json), r("Current"));
    }
    static currentToJson(value) {
        return JSON.stringify(uncast(value, r("Current")), null, 2);
    }
    static toLink(json) {
        return cast(JSON.parse(json), r("Link"));
    }
    static linkToJson(value) {
        return JSON.stringify(uncast(value, r("Link")), null, 2);
    }
    static toTeamColorMap(json) {
        return cast(JSON.parse(json), r("TeamColorMap"));
    }
    static teamColorMapToJson(value) {
        return JSON.stringify(uncast(value, r("TeamColorMap")), null, 2);
    }
    static toTrophyList(json) {
        return cast(JSON.parse(json), r("TrophyList"));
    }
    static trophyListToJson(value) {
        return JSON.stringify(uncast(value, r("TrophyList")), null, 2);
    }
    static toOverview(json) {
        return cast(JSON.parse(json), r("Overview"));
    }
    static overviewToJson(value) {
        return JSON.stringify(uncast(value, r("Overview")), null, 2);
    }
    static toOverviewTable(json) {
        return cast(JSON.parse(json), r("OverviewTable"));
    }
    static overviewTableToJson(value) {
        return JSON.stringify(uncast(value, r("OverviewTable")), null, 2);
    }
    static toTableData(json) {
        return cast(JSON.parse(json), r("TableData"));
    }
    static tableDataToJson(value) {
        return JSON.stringify(uncast(value, r("TableData")), null, 2);
    }
    static toLegend(json) {
        return cast(JSON.parse(json), r("Legend"));
    }
    static legendToJson(value) {
        return JSON.stringify(uncast(value, r("Legend")), null, 2);
    }
    static toPurpleTable(json) {
        return cast(JSON.parse(json), r("PurpleTable"));
    }
    static purpleTableToJson(value) {
        return JSON.stringify(uncast(value, r("PurpleTable")), null, 2);
    }
    static toAll(json) {
        return cast(JSON.parse(json), r("All"));
    }
    static allToJson(value) {
        return JSON.stringify(uncast(value, r("All")), null, 2);
    }
    static toFluffyTable(json) {
        return cast(JSON.parse(json), r("FluffyTable"));
    }
    static fluffyTableToJson(value) {
        return JSON.stringify(uncast(value, r("FluffyTable")), null, 2);
    }
    static toTableTable(json) {
        return cast(JSON.parse(json), r("TableTable"));
    }
    static tableTableToJson(value) {
        return JSON.stringify(uncast(value, r("TableTable")), null, 2);
    }
    static toNextOpponentClass(json) {
        return cast(JSON.parse(json), r("NextOpponentClass"));
    }
    static nextOpponentClassToJson(value) {
        return JSON.stringify(uncast(value, r("NextOpponentClass")), null, 2);
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
    static toDateClass(json) {
        return cast(JSON.parse(json), r("DateClass"));
    }
    static dateClassToJson(value) {
        return JSON.stringify(uncast(value, r("DateClass")), null, 2);
    }
    static toTooltipText(json) {
        return cast(JSON.parse(json), r("TooltipText"));
    }
    static tooltipTextToJson(value) {
        return JSON.stringify(uncast(value, r("TooltipText")), null, 2);
    }
    static toTeamColors(json) {
        return cast(JSON.parse(json), r("TeamColors"));
    }
    static teamColorsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
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
    static toParticipant(json) {
        return cast(JSON.parse(json), r("Participant"));
    }
    static participantToJson(value) {
        return JSON.stringify(uncast(value, r("Participant")), null, 2);
    }
    static toVenue(json) {
        return cast(JSON.parse(json), r("Venue"));
    }
    static venueToJson(value) {
        return JSON.stringify(uncast(value, r("Venue")), null, 2);
    }
    static toWidget(json) {
        return cast(JSON.parse(json), r("Widget"));
    }
    static widgetToJson(value) {
        return JSON.stringify(uncast(value, r("Widget")), null, 2);
    }
    static toSquadClass(json) {
        return cast(JSON.parse(json), r("SquadClass"));
    }
    static squadClassToJson(value) {
        return JSON.stringify(uncast(value, r("SquadClass")), null, 2);
    }
    static toTeamStats(json) {
        return cast(JSON.parse(json), r("TeamStats"));
    }
    static teamStatsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamStats")), null, 2);
    }
    static toPlayer(json) {
        return cast(JSON.parse(json), r("Player"));
    }
    static playerToJson(value) {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }
    static toTeamElement(json) {
        return cast(JSON.parse(json), r("TeamElement"));
    }
    static teamElementToJson(value) {
        return JSON.stringify(uncast(value, r("TeamElement")), null, 2);
    }
    static toTournamentSeason(json) {
        return cast(JSON.parse(json), r("TournamentSeason"));
    }
    static tournamentSeasonToJson(value) {
        return JSON.stringify(uncast(value, r("TournamentSeason")), null, 2);
    }
    static toTransfers(json) {
        return cast(JSON.parse(json), r("Transfers"));
    }
    static transfersToJson(value) {
        return JSON.stringify(uncast(value, r("Transfers")), null, 2);
    }
    static toTransfersData(json) {
        return cast(JSON.parse(json), r("TransfersData"));
    }
    static transfersDataToJson(value) {
        return JSON.stringify(uncast(value, r("TransfersData")), null, 2);
    }
    static toContractExtension(json) {
        return cast(JSON.parse(json), r("ContractExtension"));
    }
    static contractExtensionToJson(value) {
        return JSON.stringify(uncast(value, r("ContractExtension")), null, 2);
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
    static toPlayers(json) {
        return cast(JSON.parse(json), r("Players"));
    }
    static playersToJson(value) {
        return JSON.stringify(uncast(value, r("Players")), null, 2);
    }
    static toFee(json) {
        return cast(JSON.parse(json), r("Fee"));
    }
    static feeToJson(value) {
        return JSON.stringify(uncast(value, r("Fee")), null, 2);
    }
}
function invalidValue(typ, val, key, parent = "") {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : "";
    const keyText = key ? ` for key "${key}"` : "";
    throw new CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
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
    Team: o([
        { json: "tabs", js: "tabs", typ: u(undefined, a("")) },
        {
            json: "allAvailableSeasons",
            js: "allAvailableSeasons",
            typ: u(undefined, a("any")),
        },
        { json: "details", js: "details", typ: u(undefined, r("Details")) },
        { json: "seostr", js: "seostr", typ: u(undefined, "") },
        { json: "QAData", js: "QAData", typ: u(undefined, a(r("QADatum"))) },
        { json: "table", js: "table", typ: u(undefined, a(r("OverviewTable"))) },
        { json: "transfers", js: "transfers", typ: u(undefined, r("Transfers")) },
        { json: "overview", js: "overview", typ: u(undefined, r("Overview")) },
        { json: "stats", js: "stats", typ: u(undefined, r("TeamStats")) },
        {
            json: "fixtures",
            js: "fixtures",
            typ: u(undefined, r("TeamFixtures")),
        },
        {
            json: "squad",
            js: "squad",
            typ: u(undefined, a(a(u(a(r("SquadClass")), "")))),
        },
        { json: "history", js: "history", typ: u(undefined, r("History")) },
    ], false),
    QADatum: o([
        { json: "question", js: "question", typ: u(undefined, "") },
        { json: "answer", js: "answer", typ: u(undefined, "") },
    ], false),
    Details: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "latestSeason", js: "latestSeason", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
        {
            json: "sportsTeamJSONLD",
            js: "sportsTeamJSONLD",
            typ: u(undefined, r("SportsTeamJSONLD")),
        },
        {
            json: "breadcrumbJSONLD",
            js: "breadcrumbJSONLD",
            typ: u(undefined, r("BreadcrumbJSONLD")),
        },
        {
            json: "canSyncCalendar",
            js: "canSyncCalendar",
            typ: u(undefined, true),
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
    SportsTeamJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "sport", js: "sport", typ: u(undefined, "") },
        { json: "gender", js: "gender", typ: u(undefined, "") },
        { json: "logo", js: "logo", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "coach", js: "coach", typ: u(undefined, r("Coach")) },
        { json: "athlete", js: "athlete", typ: u(undefined, a(r("Coach"))) },
        { json: "location", js: "location", typ: u(undefined, r("Location")) },
        { json: "memberOf", js: "memberOf", typ: u(undefined, r("MemberOf")) },
    ], false),
    Coach: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, r("CoachType")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        {
            json: "nationality",
            js: "nationality",
            typ: u(undefined, u(r("Nationality"), null)),
        },
        { json: "affiliation", js: "affiliation", typ: u(undefined, null) },
        { json: "height", js: "height", typ: u(undefined, null) },
        { json: "weight", js: "weight", typ: u(undefined, null) },
    ], false),
    Nationality: o([
        { json: "@type", js: "@type", typ: u(undefined, r("NationalityType")) },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    Location: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "address", js: "address", typ: u(undefined, r("Address")) },
        { json: "geo", js: "geo", typ: u(undefined, r("Geo")) },
    ], false),
    Address: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "addressCountry", js: "addressCountry", typ: u(undefined, "") },
        { json: "addressLocality", js: "addressLocality", typ: u(undefined, "") },
    ], false),
    Geo: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "latitude", js: "latitude", typ: u(undefined, "") },
        { json: "longitude", js: "longitude", typ: u(undefined, "") },
    ], false),
    MemberOf: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], false),
    TeamFixtures: o([
        {
            json: "allFixtures",
            js: "allFixtures",
            typ: u(undefined, r("AllFixtures")),
        },
        {
            json: "previousFixturesUrl",
            js: "previousFixturesUrl",
            typ: u(undefined, ""),
        },
        {
            json: "hasOngoingMatch",
            js: "hasOngoingMatch",
            typ: u(undefined, true),
        },
        {
            json: "fixtures",
            js: "fixtures",
            typ: u(undefined, r("FixturesFixtures")),
        },
    ], false),
    AllFixtures: o([
        {
            json: "fixtures",
            js: "fixtures",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        { json: "nextMatch", js: "nextMatch", typ: u(undefined, r("NextMatch")) },
        { json: "lastMatch", js: "lastMatch", typ: u(undefined, r("LastMatch")) },
    ], false),
    OverviewFixture: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        {
            json: "opponent",
            js: "opponent",
            typ: u(undefined, r("OpponentClass")),
        },
        { json: "home", js: "home", typ: u(undefined, r("OpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("OpponentClass")) },
        {
            json: "displayTournament",
            js: "displayTournament",
            typ: u(undefined, true),
        },
        { json: "result", js: "result", typ: u(undefined, 0) },
        { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
        {
            json: "tournament",
            js: "tournament",
            typ: u(undefined, r("Tournament")),
        },
        {
            json: "status",
            js: "status",
            typ: u(undefined, r("OverviewFixtureStatus")),
        },
        { json: "monthYearKey", js: "monthYearKey", typ: u(undefined, "") },
        { json: "isPastMatch", js: "isPastMatch", typ: u(undefined, true) },
        {
            json: "lastPlayedMatch",
            js: "lastPlayedMatch",
            typ: u(undefined, true),
        },
    ], false),
    OpponentClass: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "score", js: "score", typ: u(undefined, 0) },
    ], false),
    OverviewFixtureStatus: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
        { json: "timezone", js: "timezone", typ: u(undefined, null) },
    ], false),
    Reason: o([
        { json: "short", js: "short", typ: u(undefined, r("Short")) },
        { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
        { json: "long", js: "long", typ: u(undefined, r("Long")) },
        { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ], false),
    Tournament: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
    ], false),
    LastMatch: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        {
            json: "opponent",
            js: "opponent",
            typ: u(undefined, r("OpponentClass")),
        },
        { json: "home", js: "home", typ: u(undefined, r("OpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("OpponentClass")) },
        {
            json: "displayTournament",
            js: "displayTournament",
            typ: u(undefined, true),
        },
        { json: "result", js: "result", typ: u(undefined, 0) },
        { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
        {
            json: "tournament",
            js: "tournament",
            typ: u(undefined, r("Tournament")),
        },
        {
            json: "status",
            js: "status",
            typ: u(undefined, r("OverviewFixtureStatus")),
        },
    ], false),
    NextMatch: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        {
            json: "opponent",
            js: "opponent",
            typ: u(undefined, r("OpponentClass")),
        },
        { json: "home", js: "home", typ: u(undefined, r("OpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("OpponentClass")) },
        {
            json: "displayTournament",
            js: "displayTournament",
            typ: u(undefined, true),
        },
        { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
        {
            json: "tournament",
            js: "tournament",
            typ: u(undefined, r("Tournament")),
        },
        { json: "status", js: "status", typ: u(undefined, r("NextMatchStatus")) },
    ], false),
    NextMatchStatus: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "timezone", js: "timezone", typ: u(undefined, null) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
    ], false),
    FixturesFixtures: o([
        {
            json: "July 2023",
            js: "July 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "August 2023",
            js: "August 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "September 2023",
            js: "September 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "October 2023",
            js: "October 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "November 2023",
            js: "November 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "December 2023",
            js: "December 2023",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        {
            json: "January 2024",
            js: "January 2024",
            typ: u(undefined, a(r("The2024"))),
        },
        {
            json: "February 2024",
            js: "February 2024",
            typ: u(undefined, a(r("The2024"))),
        },
        {
            json: "March 2024",
            js: "March 2024",
            typ: u(undefined, a(r("The2024"))),
        },
        {
            json: "April 2024",
            js: "April 2024",
            typ: u(undefined, a(r("The2024"))),
        },
        { json: "May 2024", js: "May 2024", typ: u(undefined, a(r("The2024"))) },
    ], false),
    The2024: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "monthYearKey", js: "monthYearKey", typ: u(undefined, "") },
        {
            json: "opponent",
            js: "opponent",
            typ: u(undefined, r("OpponentClass")),
        },
        { json: "home", js: "home", typ: u(undefined, r("OpponentClass")) },
        { json: "away", js: "away", typ: u(undefined, r("OpponentClass")) },
        {
            json: "displayTournament",
            js: "displayTournament",
            typ: u(undefined, true),
        },
        { json: "isPastMatch", js: "isPastMatch", typ: u(undefined, true) },
        {
            json: "lastPlayedMatch",
            js: "lastPlayedMatch",
            typ: u(undefined, true),
        },
        { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
        {
            json: "tournament",
            js: "tournament",
            typ: u(undefined, r("Tournament")),
        },
        { json: "status", js: "status", typ: u(undefined, r("NextMatchStatus")) },
    ], false),
    History: o([
        {
            json: "trophyList",
            js: "trophyList",
            typ: u(undefined, a(r("TrophyList"))),
        },
        {
            json: "historicalTableData",
            js: "historicalTableData",
            typ: u(undefined, r("HistoricalTableData")),
        },
        { json: "teamColor", js: "teamColor", typ: u(undefined, "") },
        {
            json: "teamColorMap",
            js: "teamColorMap",
            typ: u(undefined, r("TeamColorMap")),
        },
        { json: "tables", js: "tables", typ: u(undefined, r("Tables")) },
    ], false),
    HistoricalTableData: o([
        {
            json: "divisions",
            js: "divisions",
            typ: u(undefined, a(r("Division"))),
        },
        { json: "ranks", js: "ranks", typ: u(undefined, a(r("Rank"))) },
        { json: "isValid", js: "isValid", typ: u(undefined, true) },
    ], false),
    Division: o([
        { json: "divisionRank", js: "divisionRank", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "templateId", js: "templateId", typ: u(undefined, 0) },
    ], false),
    Rank: o([
        { json: "stageId", js: "stageId", typ: u(undefined, 0) },
        { json: "tournamentName", js: "tournamentName", typ: u(undefined, "") },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "templateId", js: "templateId", typ: u(undefined, 0) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "numberOfTeams", js: "numberOfTeams", typ: u(undefined, 0) },
        { json: "stats", js: "stats", typ: u(undefined, r("RankStats")) },
        { json: "tableLink", js: "tableLink", typ: u(undefined, "") },
        { json: "isConsecutive", js: "isConsecutive", typ: u(undefined, true) },
    ], false),
    RankStats: o([
        { json: "points", js: "points", typ: u(undefined, 0) },
        { json: "wins", js: "wins", typ: u(undefined, 0) },
        { json: "draws", js: "draws", typ: u(undefined, 0) },
        { json: "loss", js: "loss", typ: u(undefined, 0) },
    ], false),
    Tables: o([
        { json: "current", js: "current", typ: u(undefined, a(r("Current"))) },
        { json: "historic", js: "historic", typ: u(undefined, a(r("Current"))) },
    ], false),
    Current: o([{ json: "link", js: "link", typ: u(undefined, a(r("Link"))) }], false),
    Link: o([
        { json: "_", js: "_", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, a("")) },
        { json: "ccode", js: "ccode", typ: u(undefined, a("")) },
        { json: "season", js: "season", typ: u(undefined, a("")) },
        { json: "stage_id", js: "stage_id", typ: u(undefined, a("")) },
        { json: "tournament_id", js: "tournament_id", typ: u(undefined, a("")) },
        { json: "template_id", js: "template_id", typ: u(undefined, a("")) },
        { json: "league_id", js: "league_id", typ: u(undefined, a("")) },
    ], false),
    TeamColorMap: o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "colorAlternate", js: "colorAlternate", typ: u(undefined, "") },
        { json: "colorAway", js: "colorAway", typ: u(undefined, "") },
        {
            json: "colorAwayAlternate",
            js: "colorAwayAlternate",
            typ: u(undefined, ""),
        },
    ], false),
    TrophyList: o([
        { json: "name", js: "name", typ: u(undefined, a("")) },
        {
            json: "tournamentTemplateId",
            js: "tournamentTemplateId",
            typ: u(undefined, a("")),
        },
        { json: "area", js: "area", typ: u(undefined, a("")) },
        { json: "ccode", js: "ccode", typ: u(undefined, a("")) },
        { json: "won", js: "won", typ: u(undefined, a("")) },
        { json: "runnerup", js: "runnerup", typ: u(undefined, a("")) },
        { json: "season_won", js: "season_won", typ: u(undefined, a("")) },
        {
            json: "season_runnerup",
            js: "season_runnerup",
            typ: u(undefined, a("")),
        },
    ], false),
    Overview: o([
        { json: "season", js: "season", typ: u(undefined, "") },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        { json: "table", js: "table", typ: u(undefined, a(r("OverviewTable"))) },
        {
            json: "topPlayers",
            js: "topPlayers",
            typ: u(undefined, r("TopPlayers")),
        },
        { json: "venue", js: "venue", typ: u(undefined, r("Venue")) },
        {
            json: "overviewFixtures",
            js: "overviewFixtures",
            typ: u(undefined, a(r("OverviewFixture"))),
        },
        { json: "nextMatch", js: "nextMatch", typ: u(undefined, r("NextMatch")) },
        { json: "lastMatch", js: "lastMatch", typ: u(undefined, r("LastMatch")) },
        { json: "teamForm", js: "teamForm", typ: u(undefined, a(r("TeamForm"))) },
        {
            json: "hasOngoingMatch",
            js: "hasOngoingMatch",
            typ: u(undefined, true),
        },
        {
            json: "previousFixturesUrl",
            js: "previousFixturesUrl",
            typ: u(undefined, ""),
        },
        {
            json: "teamColors",
            js: "teamColors",
            typ: u(undefined, r("TeamColors")),
        },
    ], false),
    OverviewTable: o([
        { json: "data", js: "data", typ: u(undefined, r("TableData")) },
        {
            json: "teamForm",
            js: "teamForm",
            typ: u(undefined, m(a(r("TeamForm")))),
        },
        {
            json: "nextOpponent",
            js: "nextOpponent",
            typ: u(undefined, u(m(a(u(r("NextOpponentClass"), ""))), null)),
        },
        {
            json: "tableHeader",
            js: "tableHeader",
            typ: u(undefined, r("TableHeader")),
        },
    ], false),
    TableData: o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
        { json: "table", js: "table", typ: u(undefined, r("PurpleTable")) },
        {
            json: "tableFilterTypes",
            js: "tableFilterTypes",
            typ: u(undefined, a("")),
        },
        { json: "composite", js: "composite", typ: u(undefined, true) },
        { json: "tables", js: "tables", typ: u(undefined, a(r("FluffyTable"))) },
    ], false),
    Legend: o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "tKey", js: "tKey", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "indices", js: "indices", typ: u(undefined, a(0)) },
    ], false),
    PurpleTable: o([
        { json: "all", js: "all", typ: u(undefined, a(r("All"))) },
        { json: "home", js: "home", typ: u(undefined, a(r("All"))) },
        { json: "away", js: "away", typ: u(undefined, a(r("All"))) },
        { json: "form", js: "form", typ: u(undefined, a(r("All"))) },
    ], false),
    All: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        {
            json: "featuredInMatch",
            js: "featuredInMatch",
            typ: u(undefined, true),
        },
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
    ], false),
    FluffyTable: o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
        { json: "table", js: "table", typ: u(undefined, r("TableTable")) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
    ], false),
    TableTable: o([
        { json: "all", js: "all", typ: u(undefined, a(r("All"))) },
        { json: "home", js: "home", typ: u(undefined, a(r("All"))) },
        { json: "away", js: "away", typ: u(undefined, a(r("All"))) },
    ], false),
    NextOpponentClass: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
    ], false),
    TableHeader: o([
        {
            json: "staticTableHeaders",
            js: "staticTableHeaders",
            typ: u(undefined, a("")),
        },
        {
            json: "dynamicTableHeaders",
            js: "dynamicTableHeaders",
            typ: u(undefined, a("")),
        },
    ], false),
    TeamForm: o([
        { json: "result", js: "result", typ: u(undefined, 0) },
        {
            json: "resultString",
            js: "resultString",
            typ: u(undefined, r("ResultString")),
        },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "linkToMatch", js: "linkToMatch", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, u(r("DateClass"), null)) },
        { json: "teamPageUrl", js: "teamPageUrl", typ: u(undefined, "") },
        {
            json: "tooltipText",
            js: "tooltipText",
            typ: u(undefined, r("TooltipText")),
        },
        { json: "score", js: "score", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("TeamFormAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamFormAway")) },
    ], false),
    TeamFormAway: o([{ json: "isOurTeam", js: "isOurTeam", typ: u(undefined, true) }], false),
    DateClass: o([{ json: "utcTime", js: "utcTime", typ: u(undefined, Date) }], false),
    TooltipText: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, "") },
        { json: "homeTeamId", js: "homeTeamId", typ: u(undefined, 0) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, "") },
        { json: "awayTeamId", js: "awayTeamId", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
    ], false),
    TeamColors: o([
        { json: "darkMode", js: "darkMode", typ: u(undefined, "") },
        { json: "lightMode", js: "lightMode", typ: u(undefined, "") },
        { json: "fontDarkMode", js: "fontDarkMode", typ: u(undefined, "") },
        { json: "fontLightMode", js: "fontLightMode", typ: u(undefined, "") },
    ], false),
    TopPlayers: o([
        { json: "byRating", js: "byRating", typ: u(undefined, r("By")) },
        { json: "byGoals", js: "byGoals", typ: u(undefined, r("By")) },
        { json: "byAssists", js: "byAssists", typ: u(undefined, r("By")) },
        { json: "seeAllUrl", js: "seeAllUrl", typ: u(undefined, "") },
    ], false),
    By: o([
        {
            json: "players",
            js: "players",
            typ: u(undefined, a(r("Participant"))),
        },
        { json: "seeAllLink", js: "seeAllLink", typ: u(undefined, "") },
    ], false),
    Participant: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, u(null, "")) },
        { json: "assists", js: "assists", typ: u(undefined, u(null, "")) },
        { json: "rating", js: "rating", typ: u(undefined, u(null, "")) },
        { json: "positionId", js: "positionId", typ: u(undefined, u(0, null)) },
        { json: "ccode", js: "ccode", typ: u(undefined, u(null, "")) },
        { json: "cname", js: "cname", typ: u(undefined, u(null, "")) },
        { json: "teamId", js: "teamId", typ: u(undefined, u(0, null)) },
        { json: "teamName", js: "teamName", typ: u(undefined, u("", null)) },
        { json: "showRole", js: "showRole", typ: u(undefined, u(true, null)) },
        {
            json: "showCountryFlag",
            js: "showCountryFlag",
            typ: u(undefined, u(true, null)),
        },
        { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
        {
            json: "excludeFromRanking",
            js: "excludeFromRanking",
            typ: u(undefined, true),
        },
        { json: "rcards", js: "rcards", typ: u(undefined, "") },
        { json: "ycards", js: "ycards", typ: u(undefined, "") },
        {
            json: "teamColors",
            js: "teamColors",
            typ: u(undefined, r("TeamColors")),
        },
        { json: "injured", js: "injured", typ: u(undefined, true) },
        { json: "rank", js: "rank", typ: u(undefined, 0) },
        { json: "value", js: "value", typ: u(undefined, u(3.14, "")) },
    ], false),
    Venue: o([
        { json: "widget", js: "widget", typ: u(undefined, r("Widget")) },
        { json: "statPairs", js: "statPairs", typ: u(undefined, a(a(u(0, "")))) },
    ], false),
    Widget: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, a("")) },
        { json: "city", js: "city", typ: u(undefined, "") },
    ], false),
    SquadClass: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "cname", js: "cname", typ: u(undefined, "") },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "isInjured", js: "isInjured", typ: u(undefined, true) },
    ], false),
    TeamStats: o([
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "primaryLeagueId", js: "primaryLeagueId", typ: u(undefined, 0) },
        { json: "primarySeasonId", js: "primarySeasonId", typ: u(undefined, "") },
        { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
        { json: "teams", js: "teams", typ: u(undefined, a(r("TeamElement"))) },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
        {
            json: "tournamentSeasons",
            js: "tournamentSeasons",
            typ: u(undefined, a(r("TournamentSeason"))),
        },
    ], false),
    Player: o([
        { json: "header", js: "header", typ: u(undefined, "") },
        {
            json: "participant",
            js: "participant",
            typ: u(undefined, r("Participant")),
        },
        { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
        {
            json: "topThree",
            js: "topThree",
            typ: u(undefined, a(r("Participant"))),
        },
        { json: "order", js: "order", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        {
            json: "localizedTitleId",
            js: "localizedTitleId",
            typ: u(undefined, ""),
        },
    ], false),
    TeamElement: o([
        { json: "header", js: "header", typ: u(undefined, "") },
        {
            json: "localizedTitleId",
            js: "localizedTitleId",
            typ: u(undefined, ""),
        },
        {
            json: "participant",
            js: "participant",
            typ: u(undefined, r("Participant")),
        },
        { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
        {
            json: "topThree",
            js: "topThree",
            typ: u(undefined, a(r("Participant"))),
        },
        { json: "order", js: "order", typ: u(undefined, 0) },
        { json: "stat", js: "stat", typ: u(undefined, "") },
    ], false),
    TournamentSeason: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "season", js: "season", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, "") },
    ], false),
    Transfers: o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("TransfersData")) },
    ], false),
    TransfersData: o([
        {
            json: "Players in",
            js: "Players in",
            typ: u(undefined, a(r("Players"))),
        },
        {
            json: "Players out",
            js: "Players out",
            typ: u(undefined, a(r("Players"))),
        },
        {
            json: "Contract extension",
            js: "Contract extension",
            typ: u(undefined, a(r("ContractExtension"))),
        },
    ], false),
    ContractExtension: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, r("Position")) },
        { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
        {
            json: "transferText",
            js: "transferText",
            typ: u(undefined, a(u("", 0, null))),
        },
        { json: "fromClub", js: "fromClub", typ: u(undefined, "") },
        { json: "fromClubId", js: "fromClubId", typ: u(undefined, 0) },
        { json: "toClub", js: "toClub", typ: u(undefined, "") },
        { json: "toClubId", js: "toClubId", typ: u(undefined, 0) },
        { json: "fee", js: "fee", typ: u(undefined, null) },
        {
            json: "transferType",
            js: "transferType",
            typ: u(undefined, r("TransferType")),
        },
        {
            json: "contractExtension",
            js: "contractExtension",
            typ: u(undefined, true),
        },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        { json: "fromDate", js: "fromDate", typ: u(undefined, Date) },
        { json: "toDate", js: "toDate", typ: u(undefined, Date) },
        { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
    ], false),
    Position: o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    TransferType: o([
        { json: "text", js: "text", typ: u(undefined, r("Text")) },
        {
            json: "localizationKey",
            js: "localizationKey",
            typ: u(undefined, r("LocalizationKey")),
        },
    ], false),
    Players: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        {
            json: "position",
            js: "position",
            typ: u(undefined, u(r("Position"), null)),
        },
        { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
        {
            json: "transferText",
            js: "transferText",
            typ: u(undefined, a(u(0, ""))),
        },
        { json: "fromClub", js: "fromClub", typ: u(undefined, "") },
        { json: "fromClubId", js: "fromClubId", typ: u(undefined, 0) },
        { json: "toClub", js: "toClub", typ: u(undefined, "") },
        { json: "toClubId", js: "toClubId", typ: u(undefined, 0) },
        { json: "fee", js: "fee", typ: u(undefined, u(r("Fee"), null)) },
        {
            json: "transferType",
            js: "transferType",
            typ: u(undefined, r("TransferType")),
        },
        {
            json: "contractExtension",
            js: "contractExtension",
            typ: u(undefined, true),
        },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        { json: "fromDate", js: "fromDate", typ: u(undefined, Date) },
        { json: "toDate", js: "toDate", typ: u(undefined, Date) },
        { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
    ], false),
    Fee: o([
        { json: "feeText", js: "feeText", typ: u(undefined, r("FeeText")) },
        {
            json: "localizedFeeText",
            js: "localizedFeeText",
            typ: u(undefined, r("LocalizedFeeText")),
        },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    CoachType: ["Person"],
    Long: ["Full-Time"],
    LongKey: ["finished"],
    Short: ["FT"],
    ShortKey: ["fulltime_short"],
    ResultString: ["D", "L", "W"],
    Role: ["attackers", "defenders", "goalkeepers", "midfielders"],
    LocalizationKey: ["contract", "on_loan"],
    Text: ["contract", "on loan"],
    FeeText: ["fee", "free transfer", "on loan"],
    LocalizedFeeText: ["on_loan", "transfer_fee", "transfer_type_free_transfer"],
};
