import { CastingError } from "../type-cast-error";
export class Convert {
    static toTransfers(json) {
        return cast(JSON.parse(json), r("Transfers"));
    }
    static transfersToJson(value) {
        return JSON.stringify(uncast(value, r("Transfers")), null, 2);
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
    Transfers: o([
        { json: "transfers", js: "transfers", typ: a(r("Transfer")) },
        { json: "hits", js: "hits", typ: "number" },
    ], false),
    Transfer: o([
        { json: "name", js: "name", typ: "string" },
        { json: "playerId", js: "playerId", typ: "number" },
        { json: "position", js: "position", typ: u(r("Position"), null) },
        { json: "transferDate", js: "transferDate", typ: Date },
        { json: "transferText", js: "transferText", typ: a(u(null, "string")) },
        { json: "fromClub", js: "fromClub", typ: "string" },
        { json: "fromClubId", js: "fromClubId", typ: "number" },
        { json: "toClub", js: "toClub", typ: "string" },
        { json: "toClubId", js: "toClubId", typ: "number" },
        { json: "fee", js: "fee", typ: u(r("Fee"), null) },
        { json: "transferType", js: "transferType", typ: r("TransferType") },
        { json: "contractExtension", js: "contractExtension", typ: "boolean" },
        { json: "onLoan", js: "onLoan", typ: "boolean" },
        { json: "fromDate", js: "fromDate", typ: Date },
        { json: "toDate", js: "toDate", typ: u(undefined, Date) },
        { json: "marketValue", js: "marketValue", typ: u(undefined, "string") },
    ], false),
    Fee: o([
        { json: "feeText", js: "feeText", typ: "string" },
        { json: "localizedFeeText", js: "localizedFeeText", typ: "string" },
        { json: "value", js: "value", typ: u(undefined, "string") },
    ], false),
    Position: o([
        { json: "label", js: "label", typ: "string" },
        { json: "key", js: "key", typ: "string" },
    ], false),
    TransferType: o([
        { json: "text", js: "text", typ: "string" },
        { json: "localizationKey", js: "localizationKey", typ: "string" },
    ], false),
};
