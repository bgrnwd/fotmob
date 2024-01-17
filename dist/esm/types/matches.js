import { CastingError } from "../type-cast-error";
export var Long;
(function (Long) {
    Long["Cancelled"] = "Cancelled";
    Long["FullTime"] = "Full-Time";
    Long["Postponed"] = "Postponed";
})(Long || (Long = {}));
export var LongKey;
(function (LongKey) {
    LongKey["Cancelled"] = "cancelled";
    LongKey["Finished"] = "finished";
    LongKey["Postponed"] = "postponed";
})(LongKey || (LongKey = {}));
export var Short;
(function (Short) {
    Short["Can"] = "Can";
    Short["Ft"] = "FT";
    Short["Pp"] = "PP";
})(Short || (Short = {}));
export var ShortKey;
(function (ShortKey) {
    ShortKey["CancelledShort"] = "cancelled_short";
    ShortKey["FulltimeShort"] = "fulltime_short";
    ShortKey["PostponedShort"] = "postponed_short";
})(ShortKey || (ShortKey = {}));
export class Convert {
    static toMatches(json) {
        return cast(JSON.parse(json), r("Matches"));
    }
    static matchesToJson(value) {
        return JSON.stringify(uncast(value, r("Matches")), null, 2);
    }
    static toLeague(json) {
        return cast(JSON.parse(json), r("League"));
    }
    static leagueToJson(value) {
        return JSON.stringify(uncast(value, r("League")), null, 2);
    }
    static toMatch(json) {
        return cast(JSON.parse(json), r("Match"));
    }
    static matchToJson(value) {
        return JSON.stringify(uncast(value, r("Match")), null, 2);
    }
    static toAway(json) {
        return cast(JSON.parse(json), r("Away"));
    }
    static awayToJson(value) {
        return JSON.stringify(uncast(value, r("Away")), null, 2);
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
    Matches: o([
        { json: "leagues", js: "leagues", typ: u(undefined, a(r("League"))) },
        { json: "date", js: "date", typ: u(undefined, "") },
    ], false),
    League: o([
        { json: "isGroup", js: "isGroup", typ: u(undefined, true) },
        { json: "groupName", js: "groupName", typ: u(undefined, "") },
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "primaryId", js: "primaryId", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "matches", js: "matches", typ: u(undefined, a(r("Match"))) },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        {
            json: "parentLeagueName",
            js: "parentLeagueName",
            typ: u(undefined, ""),
        },
        { json: "internalRank", js: "internalRank", typ: u(undefined, 0) },
        { json: "liveRank", js: "liveRank", typ: u(undefined, 0) },
        { json: "simpleLeague", js: "simpleLeague", typ: u(undefined, true) },
    ], false),
    Match: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "time", js: "time", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("Away")) },
        { json: "away", js: "away", typ: u(undefined, r("Away")) },
        {
            json: "eliminatedTeamId",
            js: "eliminatedTeamId",
            typ: u(undefined, null),
        },
        { json: "statusId", js: "statusId", typ: u(undefined, 0) },
        { json: "tournamentStage", js: "tournamentStage", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "timeTS", js: "timeTS", typ: u(undefined, 0) },
    ], false),
    Away: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "score", js: "score", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "longName", js: "longName", typ: u(undefined, "") },
    ], false),
    Status: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
    ], false),
    Reason: o([
        { json: "short", js: "short", typ: u(undefined, r("Short")) },
        { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
        { json: "long", js: "long", typ: u(undefined, r("Long")) },
        { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ], false),
    Long: ["Cancelled", "Full-Time", "Postponed"],
    LongKey: ["cancelled", "finished", "postponed"],
    Short: ["Can", "FT", "PP"],
    ShortKey: ["cancelled_short", "fulltime_short", "postponed_short"],
};
