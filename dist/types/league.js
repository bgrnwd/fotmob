import { CastingError } from '../type-cast-error';
export class Convert {
    static toLeague(json) {
        return cast(JSON.parse(json), r("League"));
    }
    static leagueToJson(value) {
        return JSON.stringify(uncast(value, r("League")), null, 2);
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
