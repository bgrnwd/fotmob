"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.RecentMatchTeamName = exports.LeagueName = exports.TeamGender = exports.TeamName = exports.Bgcolor = void 0;
var Bgcolor;
(function (Bgcolor) {
    Bgcolor["F08022"] = "#f08022";
    Bgcolor["The0E87E0"] = "#0e87e0";
    Bgcolor["The1Ec853"] = "#1ec853";
    Bgcolor["The989898"] = "#989898";
})(Bgcolor || (exports.Bgcolor = Bgcolor = {}));
var TeamName;
(function (TeamName) {
    TeamName["AlNassrFC"] = "Al Nassr FC";
    TeamName["Juventus"] = "Juventus";
    TeamName["ManchesterUnited"] = "Manchester United";
    TeamName["Portugal"] = "Portugal";
    TeamName["RealMadrid"] = "Real Madrid";
    TeamName["RiyadhSeasonTeamXI"] = "Riyadh Season Team XI";
    TeamName["SportingCP"] = "Sporting CP";
})(TeamName || (exports.TeamName = TeamName = {}));
var TeamGender;
(function (TeamGender) {
    TeamGender["Male"] = "male";
})(TeamGender || (exports.TeamGender = TeamGender = {}));
var LeagueName;
(function (LeagueName) {
    LeagueName["AFCChampionsLeagueGrpE"] = "AFC Champions League Grp. E";
    LeagueName["ArabClubChampionsCupFinalStage"] = "Arab Club Champions Cup Final Stage";
    LeagueName["ArabClubChampionsCupGrpC"] = "Arab Club Champions Cup Grp. C";
    LeagueName["ClubFriendlies"] = "Club Friendlies";
    LeagueName["EUROQualificationGrpJ"] = "EURO Qualification Grp. J";
    LeagueName["SaudiProfessionalLeague"] = "Saudi Professional League";
})(LeagueName || (exports.LeagueName = LeagueName = {}));
var RecentMatchTeamName;
(function (RecentMatchTeamName) {
    RecentMatchTeamName["AlNassrFC"] = "Al Nassr FC";
    RecentMatchTeamName["Portugal"] = "Portugal";
    RecentMatchTeamName["RiyadhAllStar"] = "Riyadh All-Star";
})(RecentMatchTeamName || (exports.RecentMatchTeamName = RecentMatchTeamName = {}));
class Convert {
    static toPlayer(json) {
        return cast(JSON.parse(json), r("Player"));
    }
    static playerToJson(value) {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }
    static toBirthDate(json) {
        return cast(JSON.parse(json), r("BirthDate"));
    }
    static birthDateToJson(value) {
        return JSON.stringify(uncast(value, r("BirthDate")), null, 2);
    }
    static toCareerHistory(json) {
        return cast(JSON.parse(json), r("CareerHistory"));
    }
    static careerHistoryToJson(value) {
        return JSON.stringify(uncast(value, r("CareerHistory")), null, 2);
    }
    static toCareerItems(json) {
        return cast(JSON.parse(json), r("CareerItems"));
    }
    static careerItemsToJson(value) {
        return JSON.stringify(uncast(value, r("CareerItems")), null, 2);
    }
    static toNationalTeam(json) {
        return cast(JSON.parse(json), r("NationalTeam"));
    }
    static nationalTeamToJson(value) {
        return JSON.stringify(uncast(value, r("NationalTeam")), null, 2);
    }
    static toSeasonEntry(json) {
        return cast(JSON.parse(json), r("SeasonEntry"));
    }
    static seasonEntryToJson(value) {
        return JSON.stringify(uncast(value, r("SeasonEntry")), null, 2);
    }
    static toRating(json) {
        return cast(JSON.parse(json), r("Rating"));
    }
    static ratingToJson(value) {
        return JSON.stringify(uncast(value, r("Rating")), null, 2);
    }
    static toTournamentStat(json) {
        return cast(JSON.parse(json), r("TournamentStat"));
    }
    static tournamentStatToJson(value) {
        return JSON.stringify(uncast(value, r("TournamentStat")), null, 2);
    }
    static toTransferType(json) {
        return cast(JSON.parse(json), r("TransferType"));
    }
    static transferTypeToJson(value) {
        return JSON.stringify(uncast(value, r("TransferType")), null, 2);
    }
    static toTeamEntry(json) {
        return cast(JSON.parse(json), r("TeamEntry"));
    }
    static teamEntryToJson(value) {
        return JSON.stringify(uncast(value, r("TeamEntry")), null, 2);
    }
    static toMainLeague(json) {
        return cast(JSON.parse(json), r("MainLeague"));
    }
    static mainLeagueToJson(value) {
        return JSON.stringify(uncast(value, r("MainLeague")), null, 2);
    }
    static toPlayerProp(json) {
        return cast(JSON.parse(json), r("PlayerProp"));
    }
    static playerPropToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerProp")), null, 2);
    }
    static toMeta(json) {
        return cast(JSON.parse(json), r("Meta"));
    }
    static metaToJson(value) {
        return JSON.stringify(uncast(value, r("Meta")), null, 2);
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
    static toPersonJSONLD(json) {
        return cast(JSON.parse(json), r("PersonJSONLD"));
    }
    static personJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("PersonJSONLD")), null, 2);
    }
    static toAffiliation(json) {
        return cast(JSON.parse(json), r("Affiliation"));
    }
    static affiliationToJson(value) {
        return JSON.stringify(uncast(value, r("Affiliation")), null, 2);
    }
    static toEight(json) {
        return cast(JSON.parse(json), r("Eight"));
    }
    static eightToJson(value) {
        return JSON.stringify(uncast(value, r("Eight")), null, 2);
    }
    static toPlayerInformation(json) {
        return cast(JSON.parse(json), r("PlayerInformation"));
    }
    static playerInformationToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerInformation")), null, 2);
    }
    static toIcon(json) {
        return cast(JSON.parse(json), r("Icon"));
    }
    static iconToJson(value) {
        return JSON.stringify(uncast(value, r("Icon")), null, 2);
    }
    static toValue(json) {
        return cast(JSON.parse(json), r("Value"));
    }
    static valueToJson(value) {
        return JSON.stringify(uncast(value, r("Value")), null, 2);
    }
    static toPositionDescription(json) {
        return cast(JSON.parse(json), r("PositionDescription"));
    }
    static positionDescriptionToJson(value) {
        return JSON.stringify(uncast(value, r("PositionDescription")), null, 2);
    }
    static toPrimaryPosition(json) {
        return cast(JSON.parse(json), r("PrimaryPosition"));
    }
    static primaryPositionToJson(value) {
        return JSON.stringify(uncast(value, r("PrimaryPosition")), null, 2);
    }
    static toPosition(json) {
        return cast(JSON.parse(json), r("Position"));
    }
    static positionToJson(value) {
        return JSON.stringify(uncast(value, r("Position")), null, 2);
    }
    static toPitchPositionData(json) {
        return cast(JSON.parse(json), r("PitchPositionData"));
    }
    static pitchPositionDataToJson(value) {
        return JSON.stringify(uncast(value, r("PitchPositionData")), null, 2);
    }
    static toPrimaryTeam(json) {
        return cast(JSON.parse(json), r("PrimaryTeam"));
    }
    static primaryTeamToJson(value) {
        return JSON.stringify(uncast(value, r("PrimaryTeam")), null, 2);
    }
    static toTeamColors(json) {
        return cast(JSON.parse(json), r("TeamColors"));
    }
    static teamColorsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
    }
    static toRecentMatch(json) {
        return cast(JSON.parse(json), r("RecentMatch"));
    }
    static recentMatchToJson(value) {
        return JSON.stringify(uncast(value, r("RecentMatch")), null, 2);
    }
    static toMatchDate(json) {
        return cast(JSON.parse(json), r("MatchDate"));
    }
    static matchDateToJson(value) {
        return JSON.stringify(uncast(value, r("MatchDate")), null, 2);
    }
    static toRatingProps(json) {
        return cast(JSON.parse(json), r("RatingProps"));
    }
    static ratingPropsToJson(value) {
        return JSON.stringify(uncast(value, r("RatingProps")), null, 2);
    }
    static toStatSeason(json) {
        return cast(JSON.parse(json), r("StatSeason"));
    }
    static statSeasonToJson(value) {
        return JSON.stringify(uncast(value, r("StatSeason")), null, 2);
    }
    static toStatSeasonTournament(json) {
        return cast(JSON.parse(json), r("StatSeasonTournament"));
    }
    static statSeasonTournamentToJson(value) {
        return JSON.stringify(uncast(value, r("StatSeasonTournament")), null, 2);
    }
    static toTraits(json) {
        return cast(JSON.parse(json), r("Traits"));
    }
    static traitsToJson(value) {
        return JSON.stringify(uncast(value, r("Traits")), null, 2);
    }
    static toItem(json) {
        return cast(JSON.parse(json), r("Item"));
    }
    static itemToJson(value) {
        return JSON.stringify(uncast(value, r("Item")), null, 2);
    }
    static toTrophies(json) {
        return cast(JSON.parse(json), r("Trophies"));
    }
    static trophiesToJson(value) {
        return JSON.stringify(uncast(value, r("Trophies")), null, 2);
    }
    static toPlayerTrophy(json) {
        return cast(JSON.parse(json), r("PlayerTrophy"));
    }
    static playerTrophyToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerTrophy")), null, 2);
    }
    static toPlayerTrophyTournament(json) {
        return cast(JSON.parse(json), r("PlayerTrophyTournament"));
    }
    static playerTrophyTournamentToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerTrophyTournament")), null, 2);
    }
}
exports.Convert = Convert;
function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
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
    "Player": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, r("BirthDate")) },
        { json: "isCoach", js: "isCoach", typ: u(undefined, true) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "primaryTeam", js: "primaryTeam", typ: u(undefined, r("PrimaryTeam")) },
        { json: "positionDescription", js: "positionDescription", typ: u(undefined, r("PositionDescription")) },
        { json: "injuryInformation", js: "injuryInformation", typ: u(undefined, null) },
        { json: "playerInformation", js: "playerInformation", typ: u(undefined, a(r("PlayerInformation"))) },
        { json: "mainLeague", js: "mainLeague", typ: u(undefined, r("MainLeague")) },
        { json: "trophies", js: "trophies", typ: u(undefined, r("Trophies")) },
        { json: "recentMatches", js: "recentMatches", typ: u(undefined, a(r("RecentMatch"))) },
        { json: "careerHistory", js: "careerHistory", typ: u(undefined, r("CareerHistory")) },
        { json: "traits", js: "traits", typ: u(undefined, r("Traits")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "coachStats", js: "coachStats", typ: u(undefined, null) },
        { json: "statSeasons", js: "statSeasons", typ: u(undefined, a(r("StatSeason"))) },
    ], false),
    "BirthDate": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
    ], false),
    "CareerHistory": o([
        { json: "showFootnote", js: "showFootnote", typ: u(undefined, true) },
        { json: "careerItems", js: "careerItems", typ: u(undefined, r("CareerItems")) },
        { json: "fullCareer", js: "fullCareer", typ: u(undefined, true) },
    ], false),
    "CareerItems": o([
        { json: "senior", js: "senior", typ: u(undefined, r("NationalTeam")) },
        { json: "national team", js: "national team", typ: u(undefined, r("NationalTeam")) },
    ], false),
    "NationalTeam": o([
        { json: "teamEntries", js: "teamEntries", typ: u(undefined, a(r("TeamEntry"))) },
        { json: "seasonEntries", js: "seasonEntries", typ: u(undefined, a(r("SeasonEntry"))) },
    ], false),
    "SeasonEntry": o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        { json: "tournamentStats", js: "tournamentStats", typ: u(undefined, a(r("TournamentStat"))) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, r("TeamName")) },
        { json: "teamGender", js: "teamGender", typ: u(undefined, r("TeamGender")) },
        { json: "transferType", js: "transferType", typ: u(undefined, u(r("TransferType"), null)) },
    ], false),
    "Rating": o([
        { json: "num", js: "num", typ: u(undefined, "") },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, u(r("Bgcolor"), null)) },
    ], false),
    "TournamentStat": o([
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "isFriendly", js: "isFriendly", typ: u(undefined, true) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "seasonRating", js: "seasonRating", typ: u(undefined, 3.14) },
    ], false),
    "TransferType": o([
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "localizationKey", js: "localizationKey", typ: u(undefined, "") },
    ], false),
    "TeamEntry": o([
        { json: "participantId", js: "participantId", typ: u(undefined, 0) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, r("TeamName")) },
        { json: "teamGender", js: "teamGender", typ: u(undefined, r("TeamGender")) },
        { json: "transferType", js: "transferType", typ: u(undefined, u(r("TransferType"), null)) },
        { json: "startDate", js: "startDate", typ: u(undefined, Date) },
        { json: "endDate", js: "endDate", typ: u(undefined, u(Date, null)) },
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "role", js: "role", typ: u(undefined, null) },
        { json: "appearances", js: "appearances", typ: u(undefined, u(null, "")) },
        { json: "goals", js: "goals", typ: u(undefined, u(null, "")) },
        { json: "assists", js: "assists", typ: u(undefined, u(null, "")) },
        { json: "hasUncertainData", js: "hasUncertainData", typ: u(undefined, true) },
    ], false),
    "MainLeague": o([
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "playerProps", js: "playerProps", typ: u(undefined, a(r("PlayerProp"))) },
    ], false),
    "PlayerProp": o([
        { json: "value", js: "value", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "ratingProps", js: "ratingProps", typ: u(undefined, r("Rating")) },
    ], false),
    "Meta": o([
        { json: "seopath", js: "seopath", typ: u(undefined, "") },
        { json: "pageurl", js: "pageurl", typ: u(undefined, "") },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
        { json: "personJSONLD", js: "personJSONLD", typ: u(undefined, r("PersonJSONLD")) },
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
    "FAQJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "mainEntity", js: "mainEntity", typ: u(undefined, a(r("MainEntity"))) },
    ], false),
    "MainEntity": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "acceptedAnswer", js: "acceptedAnswer", typ: u(undefined, r("AcceptedAnswer")) },
    ], false),
    "AcceptedAnswer": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    "PersonJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, Date) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "nationality", js: "nationality", typ: u(undefined, r("Affiliation")) },
        { json: "affiliation", js: "affiliation", typ: u(undefined, r("Affiliation")) },
        { json: "gender", js: "gender", typ: u(undefined, "") },
        { json: "height", js: "height", typ: u(undefined, r("Eight")) },
        { json: "weight", js: "weight", typ: u(undefined, r("Eight")) },
    ], false),
    "Affiliation": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, r("TeamName")) },
    ], false),
    "Eight": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "unitText", js: "unitText", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    "PlayerInformation": o([
        { json: "value", js: "value", typ: u(undefined, r("Value")) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "translationKey", js: "translationKey", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ], false),
    "Icon": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "Value": o([
        { json: "key", js: "key", typ: u(undefined, u(null, "")) },
        { json: "fallback", js: "fallback", typ: u(undefined, u(0, "")) },
    ], false),
    "PositionDescription": o([
        { json: "positions", js: "positions", typ: u(undefined, a(r("Position"))) },
        { json: "primaryPosition", js: "primaryPosition", typ: u(undefined, r("PrimaryPosition")) },
        { json: "nonPrimaryPositions", js: "nonPrimaryPositions", typ: u(undefined, a(r("PrimaryPosition"))) },
    ], false),
    "PrimaryPosition": o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "Position": o([
        { json: "strPos", js: "strPos", typ: u(undefined, r("PrimaryPosition")) },
        { json: "strPosShort", js: "strPosShort", typ: u(undefined, r("PrimaryPosition")) },
        { json: "occurences", js: "occurences", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, "") },
        { json: "isMainPosition", js: "isMainPosition", typ: u(undefined, true) },
        { json: "pitchPositionData", js: "pitchPositionData", typ: u(undefined, u(r("PitchPositionData"), null)) },
    ], false),
    "PitchPositionData": o([
        { json: "right", js: "right", typ: u(undefined, 3.14) },
        { json: "top", js: "top", typ: u(undefined, 3.14) },
        { json: "ratio", js: "ratio", typ: u(undefined, 3.14) },
    ], false),
    "PrimaryTeam": o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("TeamName")) },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
    ], false),
    "TeamColors": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "colorAlternate", js: "colorAlternate", typ: u(undefined, "") },
        { json: "colorAway", js: "colorAway", typ: u(undefined, "") },
        { json: "colorAwayAlternate", js: "colorAwayAlternate", typ: u(undefined, "") },
    ], false),
    "RecentMatch": o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("RecentMatchTeamName")) },
        { json: "opponentTeamId", js: "opponentTeamId", typ: u(undefined, 0) },
        { json: "opponentTeamName", js: "opponentTeamName", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "matchDate", js: "matchDate", typ: u(undefined, r("MatchDate")) },
        { json: "matchPageUrl", js: "matchPageUrl", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, r("LeagueName")) },
        { json: "stage", js: "stage", typ: u(undefined, u(null, "")) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "goals", js: "goals", typ: u(undefined, 0) },
        { json: "assists", js: "assists", typ: u(undefined, 0) },
        { json: "yellowCards", js: "yellowCards", typ: u(undefined, 0) },
        { json: "redCards", js: "redCards", typ: u(undefined, 0) },
        { json: "ratingProps", js: "ratingProps", typ: u(undefined, r("RatingProps")) },
        { json: "playerOfTheMatch", js: "playerOfTheMatch", typ: u(undefined, true) },
        { json: "onBench", js: "onBench", typ: u(undefined, true) },
    ], false),
    "MatchDate": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
    ], false),
    "RatingProps": o([
        { json: "num", js: "num", typ: u(undefined, u(0, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("Bgcolor")) },
    ], false),
    "StatSeason": o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "tournaments", js: "tournaments", typ: u(undefined, a(r("StatSeasonTournament"))) },
    ], false),
    "StatSeasonTournament": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "entryId", js: "entryId", typ: u(undefined, "") },
    ], false),
    "Traits": o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, a(r("Item"))) },
    ], false),
    "Item": o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    "Trophies": o([
        { json: "playerTrophies", js: "playerTrophies", typ: u(undefined, a(r("PlayerTrophy"))) },
        { json: "coachTrophies", js: "coachTrophies", typ: u(undefined, a("any")) },
    ], false),
    "PlayerTrophy": o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("TeamName")) },
        { json: "tournaments", js: "tournaments", typ: u(undefined, a(r("PlayerTrophyTournament"))) },
    ], false),
    "PlayerTrophyTournament": o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "seasonsWon", js: "seasonsWon", typ: u(undefined, a("")) },
        { json: "seasonsRunnerUp", js: "seasonsRunnerUp", typ: u(undefined, a("")) },
    ], false),
    "Bgcolor": [
        "#f08022",
        "#0e87e0",
        "#1ec853",
        "#989898",
    ],
    "TeamName": [
        "Al Nassr FC",
        "Juventus",
        "Manchester United",
        "Portugal",
        "Real Madrid",
        "Riyadh Season Team XI",
        "Sporting CP",
    ],
    "TeamGender": [
        "male",
    ],
    "LeagueName": [
        "AFC Champions League Grp. E",
        "Arab Club Champions Cup Final Stage",
        "Arab Club Champions Cup Grp. C",
        "Club Friendlies",
        "EURO Qualification Grp. J",
        "Saudi Professional League",
    ],
    "RecentMatchTeamName": [
        "Al Nassr FC",
        "Portugal",
        "Riyadh All-Star",
    ],
};
