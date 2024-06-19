import { CastingError } from "../type-cast-error";

export interface Suggestion {
  took: number;
  leagueSuggest: LeagueSuggest[];
  matchSuggest: MatchSuggest[];
  teamSuggest: Suggestion[];
  squadMemberSuggest: Suggestion[];
}

export interface LeagueSuggest {
  text: string;
  offset: number;
  length: number;
  options: LeagueSuggestOption[];
}

export interface LeagueSuggestOption {
  text: string;
  score: number;
  payload: PurplePayload;
}

export interface PurplePayload {
  matchDate: Date;
  id: string;
  countryCode: string;
}

export interface MatchSuggest {
  text: string;
  offset: number;
  length: number;
  options: MatchSuggestOption[];
}

export interface MatchSuggestOption {
  text: string;
  score: number;
  payload: FluffyPayload;
}

export interface FluffyPayload {
  matchDate: Date;
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  homeName: string;
  awayName: string;
}

export interface Suggestion {
  text: string;
  offset: number;
  length: number;
  options: SquadMemberSuggestOption[];
}

export interface SquadMemberSuggestOption {
  text: string;
  score: number;
  payload: TentacledPayload;
}

export interface TentacledPayload {
  matchDate: Date;
  id: string;
  newsLanguages: any[];
  isCoach?: boolean;
  leagueId?: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toSuggest(json: string): Suggestion {
    return cast(JSON.parse(json), r("Suggestion"));
  }

  public static suggestToJson(value: Suggestion): string {
    return JSON.stringify(uncast(value, r("Suggestion")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw new CastingError(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`,
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
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
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = "",
): any {
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
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent,
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
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

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any,
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
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
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")
          ? transformObject(getProps(typ), typ.additional, val)
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
  Suggestion: o(
    [
      { json: "took", js: "took", typ: 0 },
      {
        json: "leagueSuggest",
        js: "leagueSuggest",
        typ: a(r("LeagueSuggest")),
      },
      { json: "matchSuggest", js: "matchSuggest", typ: a(r("MatchSuggest")) },
      { json: "teamSuggest", js: "teamSuggest", typ: a(r("Suggest")) },
      {
        json: "squadMemberSuggest",
        js: "squadMemberSuggest",
        typ: a(r("Suggest")),
      },
    ],
    false,
  ),
  LeagueSuggest: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "offset", js: "offset", typ: 0 },
      { json: "length", js: "length", typ: 0 },
      { json: "options", js: "options", typ: a(r("LeagueSuggestOption")) },
    ],
    false,
  ),
  LeagueSuggestOption: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "score", js: "score", typ: 0 },
      { json: "payload", js: "payload", typ: r("PurplePayload") },
    ],
    false,
  ),
  PurplePayload: o(
    [
      { json: "matchDate", js: "matchDate", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "countryCode", js: "countryCode", typ: "" },
    ],
    false,
  ),
  MatchSuggest: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "offset", js: "offset", typ: 0 },
      { json: "length", js: "length", typ: 0 },
      { json: "options", js: "options", typ: a(r("MatchSuggestOption")) },
    ],
    false,
  ),
  MatchSuggestOption: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "score", js: "score", typ: 0 },
      { json: "payload", js: "payload", typ: r("FluffyPayload") },
    ],
    false,
  ),
  FluffyPayload: o(
    [
      { json: "matchDate", js: "matchDate", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "homeTeamId", js: "homeTeamId", typ: "" },
      { json: "awayTeamId", js: "awayTeamId", typ: "" },
      { json: "homeName", js: "homeName", typ: "" },
      { json: "awayName", js: "awayName", typ: "" },
    ],
    false,
  ),
  Suggest: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "offset", js: "offset", typ: 0 },
      { json: "length", js: "length", typ: 0 },
      { json: "options", js: "options", typ: a(r("SquadMemberSuggestOption")) },
    ],
    false,
  ),
  SquadMemberSuggestOption: o(
    [
      { json: "text", js: "text", typ: "" },
      { json: "score", js: "score", typ: 0 },
      { json: "payload", js: "payload", typ: r("TentacledPayload") },
    ],
    false,
  ),
  TentacledPayload: o(
    [
      { json: "matchDate", js: "matchDate", typ: Date },
      { json: "id", js: "id", typ: "" },
      { json: "newsLanguages", js: "newsLanguages", typ: a("any") },
      { json: "isCoach", js: "isCoach", typ: u(undefined, true) },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
    ],
    false,
  ),
};
