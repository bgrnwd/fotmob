// To parse this data:
//
//   import { Convert, Matches } from "./file";
//
//   const matches = Convert.toMatches(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from "../type-cast-error";

export interface Matches {
  leagues?: League[];
  date?: string;
}

export interface League {
  isGroup?: boolean;
  groupName?: string;
  ccode?: string;
  id?: number;
  primaryId?: number;
  name?: string;
  matches?: Match[];
  parentLeagueId?: number;
  parentLeagueName?: string;
  internalRank?: number;
  liveRank?: number;
  simpleLeague?: boolean;
}

export interface Match {
  id?: number;
  leagueId?: number;
  time?: string;
  home?: Away;
  away?: Away;
  eliminatedTeamId?: null;
  statusId?: number;
  tournamentStage?: string;
  status?: Status;
  timeTS?: number;
}

export interface Away {
  id?: number;
  score?: number;
  name?: string;
  longName?: string;
}

export interface Status {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
}

export interface Reason {
  short?: Short;
  shortKey?: ShortKey;
  long?: Long;
  longKey?: LongKey;
}

export enum Long {
  Cancelled = "Cancelled",
  FullTime = "Full-Time",
  Postponed = "Postponed",
}

export enum LongKey {
  Cancelled = "cancelled",
  Finished = "finished",
  Postponed = "postponed",
}

export enum Short {
  Can = "Can",
  Ft = "FT",
  Pp = "PP",
}

export enum ShortKey {
  CancelledShort = "cancelled_short",
  FulltimeShort = "fulltime_short",
  PostponedShort = "postponed_short",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toMatches(json: string): Matches {
    return cast(JSON.parse(json), r("Matches"));
  }

  public static matchesToJson(value: Matches): string {
    return JSON.stringify(uncast(value, r("Matches")), null, 2);
  }

  public static toLeague(json: string): League {
    return cast(JSON.parse(json), r("League"));
  }

  public static leagueToJson(value: League): string {
    return JSON.stringify(uncast(value, r("League")), null, 2);
  }

  public static toMatch(json: string): Match {
    return cast(JSON.parse(json), r("Match"));
  }

  public static matchToJson(value: Match): string {
    return JSON.stringify(uncast(value, r("Match")), null, 2);
  }

  public static toAway(json: string): Away {
    return cast(JSON.parse(json), r("Away"));
  }

  public static awayToJson(value: Away): string {
    return JSON.stringify(uncast(value, r("Away")), null, 2);
  }

  public static toStatus(json: string): Status {
    return cast(JSON.parse(json), r("Status"));
  }

  public static statusToJson(value: Status): string {
    return JSON.stringify(uncast(value, r("Status")), null, 2);
  }

  public static toReason(json: string): Reason {
    return cast(JSON.parse(json), r("Reason"));
  }

  public static reasonToJson(value: Reason): string {
    return JSON.stringify(uncast(value, r("Reason")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw new CastingError(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val,
    )}`,
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
        result[key] = val[key];
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
  Matches: o(
    [
      { json: "leagues", js: "leagues", typ: u(undefined, a(r("League"))) },
      { json: "date", js: "date", typ: u(undefined, "") },
    ],
    false,
  ),
  League: o(
    [
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
    ],
    false,
  ),
  Match: o(
    [
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
    ],
    false,
  ),
  Away: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "score", js: "score", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "longName", js: "longName", typ: u(undefined, "") },
    ],
    false,
  ),
  Status: o(
    [
      { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
      { json: "finished", js: "finished", typ: u(undefined, true) },
      { json: "started", js: "started", typ: u(undefined, true) },
      { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
      { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
      { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
    ],
    false,
  ),
  Reason: o(
    [
      { json: "short", js: "short", typ: u(undefined, r("Short")) },
      { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
      { json: "long", js: "long", typ: u(undefined, r("Long")) },
      { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ],
    false,
  ),
  Long: ["Cancelled", "Full-Time", "Postponed"],
  LongKey: ["cancelled", "finished", "postponed"],
  Short: ["Can", "FT", "PP"],
  ShortKey: ["cancelled_short", "fulltime_short", "postponed_short"],
};
