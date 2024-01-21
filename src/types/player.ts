// To parse this data:
//
//   import { Convert, Player } from "./file";
//
//   const player = Convert.toPlayer(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from "../type-cast-error";

export type Player = {
  id?: number;
  name?: string;
  birthDate?: BirthDate;
  isCoach?: boolean;
  isCaptain?: boolean;
  primaryTeam?: PrimaryTeam;
  positionDescription?: PositionDescription;
  injuryInformation?: null;
  playerInformation?: PlayerInformation[];
  mainLeague?: MainLeague;
  trophies?: Trophies;
  recentMatches?: RecentMatch[];
  careerHistory?: CareerHistory;
  traits?: Traits;
  meta?: Meta;
  coachStats?: null;
  statSeasons?: StatSeason[];
};

export type BirthDate = {
  utcTime?: Date;
  timezone?: string;
};

export type CareerHistory = {
  showFootnote?: boolean;
  careerItems?: CareerItems;
  fullCareer?: boolean;
};

export type CareerItems = {
  senior?: NationalTeam;
  youth?: Youth;
  "national team"?: NationalTeam;
};

export type NationalTeam = {
  teamEntries?: TeamEntry[];
  seasonEntries?: NationalTeamSeasonEntry[];
};

export type NationalTeamSeasonEntry = {
  seasonName?: string;
  appearances?: string;
  goals?: string;
  assists?: string;
  rating?: Rating;
  tournamentStats?: PurpleTournamentStat[];
  teamId?: number;
  team?: string;
  teamGender?: string;
  transferType?: null;
};

export type Rating = {
  num?: string;
  bgcolor?: string | null;
};

export type PurpleTournamentStat = {
  leagueId?: number;
  tournamentId?: number;
  leagueName?: string;
  seasonRating?: number;
  isFriendly?: boolean;
  seasonName?: string;
  goals?: string;
  assists?: string;
  appearances?: string;
  rating?: Rating;
};

export type TeamEntry = {
  participantId?: number;
  teamId?: number;
  team?: string;
  teamGender?: string;
  transferType?: null;
  startDate?: Date;
  endDate?: Date | null;
  active?: boolean;
  role?: null;
  appearances?: string;
  goals?: string;
  assists?: string;
  hasUncertainData?: boolean;
};

export type Youth = {
  teamEntries?: TeamEntry[];
  seasonEntries?: YouthSeasonEntry[];
};

export type YouthSeasonEntry = {
  seasonName?: string;
  appearances?: string;
  goals?: string;
  assists?: string;
  rating?: Rating;
  tournamentStats?: FluffyTournamentStat[];
  teamId?: number;
  team?: string;
  teamGender?: string;
  transferType?: null;
};

export type FluffyTournamentStat = {
  tournamentId?: number;
  leagueName?: string;
  isFriendly?: boolean;
  seasonName?: string;
  goals?: string;
  assists?: string;
  appearances?: string;
  rating?: Rating;
};

export type MainLeague = {
  topStats?: TopStats;
  leagueId?: number;
  leagueName?: string;
};

export type TopStats = {
  id?: string;
  type?: string;
  display?: string;
  items?: TopStatsItem[];
};

export type TopStatsItem = {
  title?: string;
  localizedTitleId?: string;
  statValue?: string;
  per90?: number;
  percentileRank?: number;
  percentileRankPer90?: number;
  statFormat?: string;
};

export type Meta = {
  seopath?: string;
  pageurl?: string;
  faqJSONLD?: FAQJSONLD;
  personJSONLD?: PersonJSONLD;
  breadcrumbJSONLD?: BreadcrumbJSONLD;
};

export type BreadcrumbJSONLD = {
  "@context"?: string;
  "@type"?: string;
  itemListElement?: ItemListElement[];
};

export type ItemListElement = {
  "@type"?: string;
  position?: number;
  name?: string;
  item?: string;
};

export type FAQJSONLD = {
  "@context"?: string;
  "@type"?: string;
  mainEntity?: MainEntity[];
};

export type MainEntity = {
  "@type"?: string;
  name?: string;
  acceptedAnswer?: AcceptedAnswer;
};

export type AcceptedAnswer = {
  "@type"?: string;
  text?: string;
};

export type PersonJSONLD = {
  "@context"?: string;
  "@type"?: string;
  name?: string;
  birthDate?: Date;
  url?: string;
  nationality?: Affiliation;
  affiliation?: Affiliation;
  gender?: string;
  height?: Eight;
  weight?: Eight;
};

export type Affiliation = {
  "@type"?: string;
  name?: string;
};

export type Eight = {
  "@type"?: string;
  unitText?: string;
  value?: string;
};

export type PlayerInformation = {
  value?: Value;
  title?: string;
  translationKey?: string;
  icon?: Icon;
  countryCode?: string;
};

export type Icon = {
  type?: string;
  id?: string;
};

export type Value = {
  key?: null | string;
  fallback?: Fallback;
};

export type Fallback = number | string;

export type PositionDescription = {
  positions?: Position[];
  primaryPosition?: PrimaryPosition;
  nonPrimaryPositions?: PrimaryPosition[];
};

export type PrimaryPosition = {
  label?: string;
  key?: string;
};

export type Position = {
  strPos?: PrimaryPosition;
  strPosShort?: PrimaryPosition;
  occurences?: number;
  position?: string;
  isMainPosition?: boolean;
  pitchPositionData?: PitchPositionData | null;
};

export type PitchPositionData = {
  right?: number;
  top?: number;
  ratio?: number;
};

export type PrimaryTeam = {
  teamId?: number;
  teamName?: string;
  onLoan?: boolean;
  teamColors?: TeamColors;
};

export type TeamColors = {
  color?: string;
  colorAlternate?: string;
  colorAway?: string;
  colorAwayAlternate?: string;
};

export type RecentMatch = {
  teamId?: number;
  teamName?: string;
  opponentTeamId?: number;
  opponentTeamName?: string;
  isHomeTeam?: boolean;
  id?: number;
  matchDate?: MatchDate;
  matchPageUrl?: string;
  leagueId?: number;
  leagueName?: string;
  stage?: null | string;
  homeScore?: number;
  awayScore?: number;
  minutesPlayed?: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  ratingProps?: RatingProps;
  playerOfTheMatch?: boolean;
  onBench?: boolean;
};

export type MatchDate = {
  utcTime?: Date;
};

export type RatingProps = {
  num?: Fallback;
  bgcolor?: string;
};

export type StatSeason = {
  seasonName?: string;
  tournaments?: StatSeasonTournament[];
};

export type StatSeasonTournament = {
  name?: string;
  tournamentId?: number;
  entryId?: string;
};

export type Traits = {
  key?: string;
  title?: string;
  items?: TraitsItem[];
};

export type TraitsItem = {
  key?: string;
  title?: string;
  value?: number;
};

export type Trophies = {
  playerTrophies?: PlayerTrophy[];
  coachTrophies?: any[];
};

export type PlayerTrophy = {
  ccode?: string;
  teamId?: number;
  teamName?: string;
  tournaments?: PlayerTrophyTournament[];
};

export type PlayerTrophyTournament = {
  ccode?: string;
  leagueId?: number;
  leagueName?: string;
  seasonsWon?: string[];
  seasonsRunnerUp?: string[];
};

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toPlayer(json: string): Player {
    return cast(JSON.parse(json), r("Player"));
  }

  public static playerToJson(value: Player): string {
    return JSON.stringify(uncast(value, r("Player")), null, 2);
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
  Player: o(
    [
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
    ],
    false,
  ),
  BirthDate: o(
    [
      { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
      { json: "timezone", js: "timezone", typ: u(undefined, "") },
    ],
    false,
  ),
  CareerHistory: o(
    [
      { json: "showFootnote", js: "showFootnote", typ: u(undefined, true) },
      {
        json: "careerItems",
        js: "careerItems",
        typ: u(undefined, r("CareerItems")),
      },
      { json: "fullCareer", js: "fullCareer", typ: u(undefined, true) },
    ],
    false,
  ),
  CareerItems: o(
    [
      { json: "senior", js: "senior", typ: u(undefined, r("NationalTeam")) },
      { json: "youth", js: "youth", typ: u(undefined, r("Youth")) },
      {
        json: "national team",
        js: "national team",
        typ: u(undefined, r("NationalTeam")),
      },
    ],
    false,
  ),
  NationalTeam: o(
    [
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
    ],
    false,
  ),
  NationalTeamSeasonEntry: o(
    [
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
    ],
    false,
  ),
  Rating: o(
    [
      { json: "num", js: "num", typ: u(undefined, "") },
      { json: "bgcolor", js: "bgcolor", typ: u(undefined, u(undefined, "")) },
    ],
    false,
  ),
  PurpleTournamentStat: o(
    [
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
    ],
    false,
  ),
  TeamEntry: o(
    [
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
    ],
    false,
  ),
  Youth: o(
    [
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
    ],
    false,
  ),
  YouthSeasonEntry: o(
    [
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
    ],
    false,
  ),
  FluffyTournamentStat: o(
    [
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "isFriendly", js: "isFriendly", typ: u(undefined, true) },
      { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
      { json: "goals", js: "goals", typ: u(undefined, "") },
      { json: "assists", js: "assists", typ: u(undefined, "") },
      { json: "appearances", js: "appearances", typ: u(undefined, "") },
      { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
    ],
    false,
  ),
  MainLeague: o(
    [
      { json: "topStats", js: "topStats", typ: u(undefined, r("TopStats")) },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
    ],
    false,
  ),
  TopStats: o(
    [
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "display", js: "display", typ: u(undefined, "") },
      { json: "items", js: "items", typ: u(undefined, a(r("TopStatsItem"))) },
    ],
    false,
  ),
  TopStatsItem: o(
    [
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
    ],
    false,
  ),
  Meta: o(
    [
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
    ],
    false,
  ),
  BreadcrumbJSONLD: o(
    [
      { json: "@context", js: "@context", typ: u(undefined, "") },
      { json: "@type", js: "@type", typ: u(undefined, "") },
      {
        json: "itemListElement",
        js: "itemListElement",
        typ: u(undefined, a(r("ItemListElement"))),
      },
    ],
    false,
  ),
  ItemListElement: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "position", js: "position", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "item", js: "item", typ: u(undefined, "") },
    ],
    false,
  ),
  FAQJSONLD: o(
    [
      { json: "@context", js: "@context", typ: u(undefined, "") },
      { json: "@type", js: "@type", typ: u(undefined, "") },
      {
        json: "mainEntity",
        js: "mainEntity",
        typ: u(undefined, a(r("MainEntity"))),
      },
    ],
    false,
  ),
  MainEntity: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      {
        json: "acceptedAnswer",
        js: "acceptedAnswer",
        typ: u(undefined, r("AcceptedAnswer")),
      },
    ],
    false,
  ),
  AcceptedAnswer: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "text", js: "text", typ: u(undefined, "") },
    ],
    false,
  ),
  PersonJSONLD: o(
    [
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
    ],
    false,
  ),
  Affiliation: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
    ],
    false,
  ),
  Eight: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "unitText", js: "unitText", typ: u(undefined, "") },
      { json: "value", js: "value", typ: u(undefined, "") },
    ],
    false,
  ),
  PlayerInformation: o(
    [
      { json: "value", js: "value", typ: u(undefined, r("Value")) },
      { json: "title", js: "title", typ: u(undefined, "") },
      { json: "translationKey", js: "translationKey", typ: u(undefined, "") },
      { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
      { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ],
    false,
  ),
  Icon: o(
    [
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, "") },
    ],
    false,
  ),
  Value: o(
    [
      { json: "key", js: "key", typ: u(undefined, u(null, "")) },
      { json: "fallback", js: "fallback", typ: u(undefined, u(0, "")) },
    ],
    false,
  ),
  PositionDescription: o(
    [
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
    ],
    false,
  ),
  PrimaryPosition: o(
    [
      { json: "label", js: "label", typ: u(undefined, "") },
      { json: "key", js: "key", typ: u(undefined, "") },
    ],
    false,
  ),
  Position: o(
    [
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
    ],
    false,
  ),
  PitchPositionData: o(
    [
      { json: "right", js: "right", typ: u(undefined, 3.14) },
      { json: "top", js: "top", typ: u(undefined, 3.14) },
      { json: "ratio", js: "ratio", typ: u(undefined, 3.14) },
    ],
    false,
  ),
  PrimaryTeam: o(
    [
      { json: "teamId", js: "teamId", typ: u(undefined, 0) },
      { json: "teamName", js: "teamName", typ: u(undefined, "") },
      { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
      {
        json: "teamColors",
        js: "teamColors",
        typ: u(undefined, r("TeamColors")),
      },
    ],
    false,
  ),
  TeamColors: o(
    [
      { json: "color", js: "color", typ: u(undefined, "") },
      { json: "colorAlternate", js: "colorAlternate", typ: u(undefined, "") },
      { json: "colorAway", js: "colorAway", typ: u(undefined, "") },
      {
        json: "colorAwayAlternate",
        js: "colorAwayAlternate",
        typ: u(undefined, ""),
      },
    ],
    false,
  ),
  RecentMatch: o(
    [
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
    ],
    false,
  ),
  MatchDate: o(
    [{ json: "utcTime", js: "utcTime", typ: u(undefined, Date) }],
    false,
  ),
  RatingProps: o(
    [
      { json: "num", js: "num", typ: u(undefined, u(0, "")) },
      { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("Bgcolor")) },
    ],
    false,
  ),
  StatSeason: o(
    [
      { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
      {
        json: "tournaments",
        js: "tournaments",
        typ: u(undefined, a(r("StatSeasonTournament"))),
      },
    ],
    false,
  ),
  StatSeasonTournament: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
      { json: "entryId", js: "entryId", typ: u(undefined, "") },
    ],
    false,
  ),
  Traits: o(
    [
      { json: "key", js: "key", typ: u(undefined, "") },
      { json: "title", js: "title", typ: u(undefined, "") },
      { json: "items", js: "items", typ: u(undefined, a(r("TraitsItem"))) },
    ],
    false,
  ),
  TraitsItem: o(
    [
      { json: "key", js: "key", typ: u(undefined, "") },
      { json: "title", js: "title", typ: u(undefined, "") },
      { json: "value", js: "value", typ: u(undefined, 3.14) },
    ],
    false,
  ),
  Trophies: o(
    [
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
    ],
    false,
  ),
  PlayerTrophy: o(
    [
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "teamId", js: "teamId", typ: u(undefined, 0) },
      { json: "teamName", js: "teamName", typ: u(undefined, "") },
      {
        json: "tournaments",
        js: "tournaments",
        typ: u(undefined, a(r("PlayerTrophyTournament"))),
      },
    ],
    false,
  ),
  PlayerTrophyTournament: o(
    [
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "seasonsWon", js: "seasonsWon", typ: u(undefined, a("")) },
      {
        json: "seasonsRunnerUp",
        js: "seasonsRunnerUp",
        typ: u(undefined, a("")),
      },
    ],
    false,
  ),
};
