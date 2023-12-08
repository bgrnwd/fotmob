import { CastingError } from '../type-cast-error';
export var TeamNameElement;
(function (TeamNameElement) {
    TeamNameElement["ManchesterCity"] = "Manchester City";
    TeamNameElement["WolverhamptonWanderers"] = "Wolverhampton Wanderers";
})(TeamNameElement || (TeamNameElement = {}));
export var Long;
(function (Long) {
    Long["FullTime"] = "Full-Time";
})(Long || (Long = {}));
export var Short;
(function (Short) {
    Short["Ft"] = "FT";
})(Short || (Short = {}));
export var Bgcolor;
(function (Bgcolor) {
    Bgcolor["Ffa726"] = "#ffa726";
    Bgcolor["The0E87E0"] = "#0e87e0";
    Bgcolor["The6Ecb5B"] = "#6ecb5b";
    Bgcolor["The989898"] = "#989898";
})(Bgcolor || (Bgcolor = {}));
export var Role;
(function (Role) {
    Role["Attacker"] = "Attacker";
    Role["Defender"] = "Defender";
    Role["Keeper"] = "Keeper";
    Role["Midfielder"] = "Midfielder";
})(Role || (Role = {}));
export var AerialsLost;
(function (AerialsLost) {
    AerialsLost["Empty"] = "-";
    AerialsLost["The100"] = "100%";
    AerialsLost["The50"] = "50%";
    AerialsLost["The79"] = "79%";
})(AerialsLost || (AerialsLost = {}));
export var ShotAccuracy;
(function (ShotAccuracy) {
    ShotAccuracy["The0"] = "0%";
    ShotAccuracy["The100"] = "100%";
    ShotAccuracy["The33"] = "33%";
    ShotAccuracy["The50"] = "50%";
})(ShotAccuracy || (ShotAccuracy = {}));
export var Highlighted;
(function (Highlighted) {
    Highlighted["Away"] = "away";
    Highlighted["Equal"] = "equal";
    Highlighted["Home"] = "home";
})(Highlighted || (Highlighted = {}));
export var Type;
(function (Type) {
    Type["Graph"] = "graph";
    Type["Text"] = "text";
})(Type || (Type = {}));
export class Convert {
    static toMatchDetails(json) {
        return cast(JSON.parse(json), r("MatchDetails"));
    }
    static matchDetailsToJson(value) {
        return JSON.stringify(uncast(value, r("MatchDetails")), null, 2);
    }
}
function invalidValue(typ, val, key, parent = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw new CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
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
                result[key] = transform(val[key], additional, getProps, key, ref);
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
    "MatchDetails": o([
        { json: "header", js: "header", typ: r("Header") },
        { json: "nav", js: "nav", typ: a("") },
        { json: "ongoing", js: "ongoing", typ: true },
        { json: "content", js: "content", typ: r("Content") },
        { json: "seo", js: "seo", typ: r("SEO") },
    ], false),
    "Content": o([
        { json: "matchFacts", js: "matchFacts", typ: r("MatchFacts") },
        { json: "liveticker", js: "liveticker", typ: r("Liveticker") },
        { json: "stats", js: "stats", typ: r("Stats") },
        { json: "lineup", js: "lineup", typ: r("ContentLineup") },
        { json: "table", js: "table", typ: r("Table") },
        { json: "h2h", js: "h2h", typ: r("H2H") },
    ], false),
    "H2H": o([
        { json: "summary", js: "summary", typ: a(0) },
        { json: "matches", js: "matches", typ: a(r("Match")) },
    ], false),
    "Match": o([
        { json: "time", js: "time", typ: "" },
        { json: "matchUrl", js: "matchUrl", typ: "" },
        { json: "league", js: "league", typ: r("League") },
        { json: "home", js: "home", typ: r("Away") },
        { json: "status", js: "status", typ: r("Status") },
        { json: "finished", js: "finished", typ: true },
        { json: "away", js: "away", typ: r("Away") },
    ], false),
    "Away": o([
        { json: "name", js: "name", typ: r("TeamNameElement") },
        { json: "id", js: "id", typ: "" },
    ], false),
    "League": o([
        { json: "name", js: "name", typ: "" },
        { json: "pageUrl", js: "pageUrl", typ: "" },
    ], false),
    "Status": o([
        { json: "started", js: "started", typ: true },
        { json: "cancelled", js: "cancelled", typ: true },
        { json: "finished", js: "finished", typ: true },
        { json: "startTimeStr", js: "startTimeStr", typ: u(undefined, "") },
        { json: "startDateStr", js: "startDateStr", typ: "" },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
        { json: "whoLostOnPenalties", js: "whoLostOnPenalties", typ: u(undefined, null) },
    ], false),
    "Reason": o([
        { json: "short", js: "short", typ: r("Short") },
        { json: "long", js: "long", typ: r("Long") },
    ], false),
    "ContentLineup": o([
        { json: "lineup", js: "lineup", typ: a(r("LineupElement")) },
        { json: "bench", js: "bench", typ: a(a(r("Bench"))) },
        { json: "coaches", js: "coaches", typ: a(a(r("Coach"))) },
    ], false),
    "Bench": o([
        { json: "id", js: "id", typ: "" },
        { json: "usingOptaId", js: "usingOptaId", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "pageUrl", js: "pageUrl", typ: "" },
        { json: "shirt", js: "shirt", typ: 0 },
        { json: "positionRow", js: "positionRow", typ: 0 },
        { json: "role", js: "role", typ: r("Role") },
        { json: "rating", js: "rating", typ: r("BenchRating") },
        { json: "stats", js: "stats", typ: m(r("BenchStat")) },
        { json: "events", js: "events", typ: u(undefined, r("BenchEvents")) },
    ], false),
    "BenchEvents": o([
        { json: "sub", js: "sub", typ: r("Sub") },
    ], false),
    "Sub": o([
        { json: "time", js: "time", typ: 0 },
        { json: "isOut", js: "isOut", typ: true },
    ], false),
    "BenchRating": o([
        { json: "num", js: "num", typ: u(null, "") },
        { json: "bgcolor", js: "bgcolor", typ: r("Bgcolor") },
        { json: "isTop", js: "isTop", typ: true },
    ], false),
    "BenchStat": o([
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Goals conceded", js: "Goals conceded", typ: u(undefined, 0) },
        { json: "Saves", js: "Saves", typ: u(undefined, r("AerialsLost")) },
        { json: "Diving save", js: "Diving save", typ: u(undefined, r("AerialsLost")) },
        { json: "Saves inside box", js: "Saves inside box", typ: u(undefined, r("AerialsLost")) },
        { json: "Acted as sweeper", js: "Acted as sweeper", typ: u(undefined, r("AerialsLost")) },
        { json: "Punches", js: "Punches", typ: u(undefined, 0) },
        { json: "Throws", js: "Throws", typ: u(undefined, 0) },
        { json: "Goals", js: "Goals", typ: u(undefined, 0) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("AerialsLost")) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, 0) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Pass success", js: "Pass success", typ: u(undefined, r("AerialsLost")) },
        { json: "Chances created", js: "Chances created", typ: u(undefined, r("AerialsLost")) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("ShotAccuracy")) },
        { json: "Shot off target", js: "Shot off target", typ: u(undefined, r("AerialsLost")) },
        { json: "Shot on target", js: "Shot on target", typ: u(undefined, r("AerialsLost")) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, 0) },
        { json: "Shots woodwork", js: "Shots woodwork", typ: u(undefined, r("AerialsLost")) },
        { json: "Passes", js: "Passes", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Crosses", js: "Crosses", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Long balls", js: "Long balls", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, r("AerialsLost")) },
        { json: "Key passes", js: "Key passes", typ: u(undefined, r("AerialsLost")) },
        { json: "Touches", js: "Touches", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, 0) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, 0) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dribbles attempted", js: "Dribbles attempted", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dribbles succeeded", js: "Dribbles succeeded", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("AerialsLost")) },
        { json: "Fouls", js: "Fouls", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Tackles attempted", js: "Tackles attempted", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Tackles succeeded", js: "Tackles succeeded", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Aerials won", js: "Aerials won", typ: u(undefined, r("AerialsLost")) },
        { json: "Aerials lost", js: "Aerials lost", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Interceptions", js: "Interceptions", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, u(r("AerialsLost"), 0)) },
    ], false),
    "Coach": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "pageUrl", js: "pageUrl", typ: "" },
        { json: "positionRow", js: "positionRow", typ: null },
        { json: "role", js: "role", typ: "" },
    ], false),
    "LineupElement": o([
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "teamName", js: "teamName", typ: r("TeamNameElement") },
        { json: "bench", js: "bench", typ: a(r("Bench")) },
        { json: "coach", js: "coach", typ: a(r("Coach")) },
        { json: "players", js: "players", typ: a(a(r("Player"))) },
        { json: "lineup", js: "lineup", typ: "" },
    ], false),
    "Player": o([
        { json: "id", js: "id", typ: "" },
        { json: "usingOptaId", js: "usingOptaId", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "pageUrl", js: "pageUrl", typ: "" },
        { json: "shirt", js: "shirt", typ: 0 },
        { json: "positionRow", js: "positionRow", typ: 0 },
        { json: "role", js: "role", typ: r("Role") },
        { json: "rating", js: "rating", typ: r("BenchRating") },
        { json: "stats", js: "stats", typ: m(r("PlayerStat")) },
        { json: "events", js: "events", typ: u(undefined, r("PlayerEvents")) },
    ], false),
    "PlayerEvents": o([
        { json: "sub", js: "sub", typ: u(undefined, r("Sub")) },
        { json: "as", js: "as", typ: u(undefined, 0) },
        { json: "g", js: "g", typ: u(undefined, 0) },
        { json: "yc", js: "yc", typ: u(undefined, 0) },
    ], false),
    "PlayerStat": o([
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, 0) },
        { json: "Goals conceded", js: "Goals conceded", typ: u(undefined, 0) },
        { json: "Saves", js: "Saves", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Diving save", js: "Diving save", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Saves inside box", js: "Saves inside box", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Acted as sweeper", js: "Acted as sweeper", typ: u(undefined, r("AerialsLost")) },
        { json: "Punches", js: "Punches", typ: u(undefined, 0) },
        { json: "Throws", js: "Throws", typ: u(undefined, 0) },
        { json: "Goals", js: "Goals", typ: u(undefined, 0) },
        { json: "Assists", js: "Assists", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, 0) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, 0) },
        { json: "Pass success", js: "Pass success", typ: u(undefined, "") },
        { json: "Chances created", js: "Chances created", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("ShotAccuracy")) },
        { json: "Shot off target", js: "Shot off target", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Shot on target", js: "Shot on target", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, 0) },
        { json: "Shots woodwork", js: "Shots woodwork", typ: u(undefined, r("AerialsLost")) },
        { json: "Passes", js: "Passes", typ: u(undefined, 0) },
        { json: "Crosses", js: "Crosses", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Long balls", js: "Long balls", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Key passes", js: "Key passes", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Touches", js: "Touches", typ: u(undefined, 0) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, 0) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, 0) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dribbles attempted", js: "Dribbles attempted", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dribbles succeeded", js: "Dribbles succeeded", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Fouls", js: "Fouls", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Tackles attempted", js: "Tackles attempted", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Tackles succeeded", js: "Tackles succeeded", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Aerials won", js: "Aerials won", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Aerials lost", js: "Aerials lost", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Interceptions", js: "Interceptions", typ: u(undefined, u(r("AerialsLost"), 0)) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, u(r("AerialsLost"), 0)) },
    ], false),
    "Liveticker": o([
        { json: "url", js: "url", typ: "" },
        { json: "teams", js: "teams", typ: a(r("TeamNameElement")) },
        { json: "superLiveUrl", js: "superLiveUrl", typ: "" },
        { json: "showSuperLive", js: "showSuperLive", typ: true },
    ], false),
    "MatchFacts": o([
        { json: "matchId", js: "matchId", typ: 0 },
        { json: "highlights", js: "highlights", typ: r("Highlights") },
        { json: "playerOfTheMatch", js: "playerOfTheMatch", typ: r("PlayerOfTheMatch") },
        { json: "events", js: "events", typ: r("MatchFactsEvents") },
        { json: "infoBox", js: "infoBox", typ: r("InfoBox") },
        { json: "teamForm", js: "teamForm", typ: a(a(r("TeamForm"))) },
        { json: "odds", js: "odds", typ: r("Odds") },
    ], false),
    "MatchFactsEvents": o([
        { json: "ongoing", js: "ongoing", typ: true },
        { json: "events", js: "events", typ: a(r("Event")) },
        { json: "penaltyShootoutEvents", js: "penaltyShootoutEvents", typ: null },
    ], false),
    "Event": o([
        { json: "reactKey", js: "reactKey", typ: "" },
        { json: "timeStr", js: "timeStr", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "time", js: "time", typ: 0 },
        { json: "overloadTime", js: "overloadTime", typ: u(0, null) },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
        { json: "overloadTimeStr", js: "overloadTimeStr", typ: u(undefined, u(true, "")) },
        { json: "isHome", js: "isHome", typ: u(undefined, true) },
        { json: "swap", js: "swap", typ: u(undefined, a(r("Swap"))) },
        { json: "ownGoal", js: "ownGoal", typ: u(undefined, null) },
        { json: "nameStr", js: "nameStr", typ: u(undefined, "") },
        { json: "newScore", js: "newScore", typ: u(undefined, a(0)) },
        { json: "assistStr", js: "assistStr", typ: u(undefined, u(null, "")) },
        { json: "assistProfileUrl", js: "assistProfileUrl", typ: u(undefined, u(null, "")) },
        { json: "card", js: "card", typ: u(undefined, "") },
        { json: "minutesAddedStr", js: "minutesAddedStr", typ: u(undefined, "") },
    ], false),
    "Swap": o([
        { json: "name", js: "name", typ: "" },
        { json: "profileUrl", js: "profileUrl", typ: "" },
    ], false),
    "Highlights": o([
        { json: "image", js: "image", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "source", js: "source", typ: "" },
    ], false),
    "InfoBox": o([
        { json: "Match Date", js: "Match Date", typ: "" },
        { json: "Attendance", js: "Attendance", typ: null },
        { json: "Tournament", js: "Tournament", typ: r("Tournament") },
        { json: "Stadium", js: "Stadium", typ: "" },
        { json: "Referee", js: "Referee", typ: r("Referee") },
    ], false),
    "Referee": o([
        { json: "imgUrl", js: "imgUrl", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Tournament": o([
        { json: "id", js: "id", typ: 0 },
        { json: "link", js: "link", typ: "" },
        { json: "text", js: "text", typ: "" },
    ], false),
    "Odds": o([
        { json: "show", js: "show", typ: true },
    ], false),
    "PlayerOfTheMatch": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "teamName", js: "teamName", typ: r("TeamNameElement") },
        { json: "teamId", js: "teamId", typ: 0 },
        { json: "rating", js: "rating", typ: r("PlayerOfTheMatchRating") },
        { json: "pageUrl", js: "pageUrl", typ: "" },
        { json: "stats", js: "stats", typ: m(r("PlayerOfTheMatchStat")) },
    ], false),
    "PlayerOfTheMatchRating": o([
        { json: "num", js: "num", typ: "" },
        { json: "isTop", js: "isTop", typ: true },
    ], false),
    "PlayerOfTheMatchStat": o([
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, 0) },
        { json: "Goals", js: "Goals", typ: u(undefined, 0) },
        { json: "Assists", js: "Assists", typ: u(undefined, 0) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, 0) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, 0) },
        { json: "Pass success", js: "Pass success", typ: u(undefined, r("AerialsLost")) },
        { json: "Chances created", js: "Chances created", typ: u(undefined, 0) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("AerialsLost")) },
        { json: "Shot off target", js: "Shot off target", typ: u(undefined, r("AerialsLost")) },
        { json: "Shot on target", js: "Shot on target", typ: u(undefined, 0) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, 0) },
        { json: "Shots woodwork", js: "Shots woodwork", typ: u(undefined, r("AerialsLost")) },
        { json: "Passes", js: "Passes", typ: u(undefined, 0) },
        { json: "Crosses", js: "Crosses", typ: u(undefined, 0) },
        { json: "Long balls", js: "Long balls", typ: u(undefined, 0) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, 0) },
        { json: "Key passes", js: "Key passes", typ: u(undefined, 0) },
        { json: "Touches", js: "Touches", typ: u(undefined, 0) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, 0) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, 0) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, 0) },
        { json: "Dribbles attempted", js: "Dribbles attempted", typ: u(undefined, 0) },
        { json: "Dribbles succeeded", js: "Dribbles succeeded", typ: u(undefined, 0) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, r("AerialsLost")) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, 0) },
        { json: "Fouls", js: "Fouls", typ: u(undefined, 0) },
        { json: "Tackles attempted", js: "Tackles attempted", typ: u(undefined, 0) },
        { json: "Tackles succeeded", js: "Tackles succeeded", typ: u(undefined, 0) },
        { json: "Aerials won", js: "Aerials won", typ: u(undefined, r("AerialsLost")) },
        { json: "Aerials lost", js: "Aerials lost", typ: u(undefined, r("AerialsLost")) },
        { json: "Interceptions", js: "Interceptions", typ: u(undefined, r("AerialsLost")) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, 0) },
    ], false),
    "TeamForm": o([
        { json: "result", js: "result", typ: 0 },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "linkToMatch", js: "linkToMatch", typ: "" },
        { json: "teamPageUrl", js: "teamPageUrl", typ: "" },
        { json: "tooltipText", js: "tooltipText", typ: "" },
    ], false),
    "Stats": o([
        { json: "stats", js: "stats", typ: a(r("StatsStat")) },
        { json: "teamColors", js: "teamColors", typ: r("TeamColors") },
    ], false),
    "StatsStat": o([
        { json: "title", js: "title", typ: "" },
        { json: "stats", js: "stats", typ: a(r("StatStatClass")) },
    ], false),
    "StatStatClass": o([
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "stats", js: "stats", typ: a(u(0, "")) },
        { json: "highlighted", js: "highlighted", typ: r("Highlighted") },
    ], false),
    "TeamColors": o([
        { json: "home", js: "home", typ: "" },
        { json: "away", js: "away", typ: "" },
    ], false),
    "Table": o([
        { json: "url", js: "url", typ: "" },
        { json: "teams", js: "teams", typ: a(0) },
    ], false),
    "Header": o([
        { json: "teams", js: "teams", typ: a(r("TeamClass")) },
        { json: "status", js: "status", typ: r("Status") },
    ], false),
    "TeamClass": o([
        { json: "name", js: "name", typ: r("TeamNameElement") },
        { json: "score", js: "score", typ: 0 },
        { json: "imageUrl", js: "imageUrl", typ: "" },
        { json: "pageUrl", js: "pageUrl", typ: "" },
    ], false),
    "SEO": o([
        { json: "path", js: "path", typ: "" },
    ], false),
    "TeamNameElement": [
        "Manchester City",
        "Wolverhampton Wanderers",
    ],
    "Long": [
        "Full-Time",
    ],
    "Short": [
        "FT",
    ],
    "Bgcolor": [
        "#ffa726",
        "#0e87e0",
        "#6ecb5b",
        "#989898",
    ],
    "Role": [
        "Attacker",
        "Defender",
        "Keeper",
        "Midfielder",
    ],
    "AerialsLost": [
        "-",
        "100%",
        "50%",
        "79%",
    ],
    "ShotAccuracy": [
        "0%",
        "100%",
        "33%",
        "50%",
    ],
    "Highlighted": [
        "away",
        "equal",
        "home",
    ],
    "Type": [
        "graph",
        "text",
    ],
};
