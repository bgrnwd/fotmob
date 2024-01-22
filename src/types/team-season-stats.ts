// To parse this data:
//
//   import { Convert, TeamSeasonStats } from "./file";
//
//   const teamSeasonStats = Convert.toTeamSeasonStats(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from "../type-cast-error";

export interface TeamSeasonStats {
  players?: Player[];
  teams?: Team[];
  tournamentSeasons?: TournamentSeason[];
  currentTournament?: string;
  tournamentStats?: TournamentStats;
  tournamentId?: string;
}

export interface Player {
  header?: string;
  participant?: PlayerParticipant;
  fetchAllUrl?: string;
  topThree?: PlayerParticipant[];
  order?: number;
  name?: string;
  localizedTitleId?: string;
}

export interface PlayerParticipant {
  id?: number;
  name?: string;
  rank?: number;
  goals?: null;
  assists?: null;
  rating?: null;
  positionId?: null;
  ccode?: null;
  cname?: null;
  teamId?: number;
  teamName?: TeamName;
  showRole?: null;
  showCountryFlag?: null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  value?: number | string;
  teamColors?: TeamColors;
}

export interface TeamColors {
  darkMode?: string;
  lightMode?: string;
  fontDarkMode?: FontMode;
  fontLightMode?: FontMode;
}

export type FontMode = "rgba(255, 255, 255, 1.0)" | "rgba(29, 29, 29, 1.0)";

export type TeamName = "Everton";

export interface Team {
  header?: string;
  localizedTitleId?: string;
  participant?: TeamParticipant;
  fetchAllUrl?: string;
  topThree?: TeamParticipant[];
  order?: number;
  stat?: string;
}

export interface TeamParticipant {
  id?: number;
  name?: string;
  rank?: number;
  goals?: null;
  assists?: null;
  rating?: null;
  positionId?: null;
  ccode?: null;
  cname?: null;
  teamId?: number;
  teamName?: null;
  showRole?: null;
  showCountryFlag?: null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  value?: number;
  teamColors?: TeamColors;
}

export interface TournamentSeason {
  name?: string;
  season?: string;
  leagueName?: LeagueName;
  tournamentId?: string;
  parentLeagueId?: string;
}

export type LeagueName =
  | "Premier League"
  | "Europa League"
  | "FA Cup"
  | "EFL Cup";

export interface TournamentStats {
  Table?: Table;
  Goals?: Goals;
  Rating?: number;
  AverageStageRating?: number;
  TeamId?: number;
  StageId?: number;
  RelegationInfo?: RelegationInfo;
  CleanSheets?: number;
  YellowCards?: number;
  RedCards?: number;
  TeamName?: TeamName;
  GoalsAgainst?: Goals;
  TopStatRanking?: TopStatRanking[];
  TopStats?: TopStat[];
  StatCardSections?: StatCardSection[];
}

export interface Goals {
  Total?: number;
  OpenPlayGoals?: number;
  PenaltyGoals?: number;
  FreeKickGoals?: number;
  AccruedOwnGoals?: number;
  FastBreakGoals?: number;
  SetPiece?: number;
  ExpectedGoals?: number;
  ExpectedGoalsConceded?: number;
}

export interface RelegationInfo {
  Promotion?: number;
  Relegation?: number;
  ChampionsLeague?: string;
  UefaCup?: string;
  StageId?: number;
  Rules?: Rule[];
}

export interface Rule {
  Id?: number;
  Description?: string;
  Color?: string;
  LeagacyId?: string;
  Value?: string;
  Name?: string;
  TranslationKey?: string;
  SortOrder?: number;
}

export interface StatCardSection {
  Title?: string;
  LocalizedTitleId?: string;
  LocalizedCategoryId?: LocalizedCategoryID;
  Stats?: string[];
}

export type LocalizedCategoryID =
  | "top_stats"
  | "attack"
  | "defense"
  | "discipline"
  | "goalkeeping";

export interface Table {
  Lines?: Line[];
  SubTables?: any[];
  WinningPositions?: number;
  TopPositions?: number;
  QualifyingPositions?: number;
  RelegationPositions?: number;
  LeagueName?: string;
  SeasonId?: number;
  LeagueId?: number;
  IsComposite?: boolean;
  CountryCode?: CountryCode;
  HasXgTable?: boolean;
}

export type CountryCode =
  | "ENG"
  | "MLI"
  | "SCO"
  | "UKR"
  | "NED"
  | "POR"
  | "SEN"
  | "BEL";

export interface Line {
  TeamId?: number;
  TeamName?: string;
  Position?: number;
  Won?: number;
  Drawn?: number;
  Lost?: number;
  Scored?: number;
  Conceeded?: number;
  Points?: number;
  Conference?: string;
  PointsHome?: number;
  WonHome?: number;
  DrawnHome?: number;
  LostHome?: number;
  ScoredHome?: number;
  ConceededHome?: number;
  PointsDeduction?: number;
}

export interface TopStatRanking {
  StatName?: string;
  Title?: string;
  LocalizedTitleId?: string;
  StatList?: StatList[];
  StatFormat?: StatFormat;
  StatDecimals?: number;
  SubstatDecimals?: number;
  Order?: number;
  Category?: Category;
  LocalizedCategoryId?: LocalizedCategoryID;
  Subtitle?: string;
  LocalizedSubtitleId?: string;
  SubstatFormat?: StatFormat;
}

export type Category =
  | "Top Stat"
  | "Attacking"
  | "Defending"
  | "Discipline"
  | "Goalkeeping";

export type StatFormat = "fraction" | "percent" | "number";

export interface StatList {
  ParticipantName?: string;
  ParticiantId?: number;
  TeamId?: number;
  TeamColor?: string;
  StatValue?: number;
  SubStatValue?: number;
  MinutesPlayed?: number;
  MatchesPlayed?: number;
  StatValueCount?: number;
  Rank?: number;
  ParticipantCountryCode?: CountryCode;
  TeamName?: TeamName;
}

export interface TopStat {
  StatName?: string;
  Title?: string;
  Subtitle?: string;
  LocalizedTitleId?: string;
  LocalizedSubtitleId?: string;
  StatList?: StatList[];
  StatFormat?: StatFormat;
  SubstatFormat?: StatFormat;
  StatDecimals?: number;
  SubstatDecimals?: number;
  StatLocation?: string;
  Order?: number;
  Category?: Category;
  LocalizedCategoryId?: LocalizedCategoryID;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTeamSeasonStats(json: string): TeamSeasonStats {
    return cast(JSON.parse(json), r("TeamSeasonStats"));
  }

  public static teamSeasonStatsToJson(value: TeamSeasonStats): string {
    return JSON.stringify(uncast(value, r("TeamSeasonStats")), null, 2);
  }

  public static toPlayer(json: string): Player {
    return cast(JSON.parse(json), r("Player"));
  }

  public static playerToJson(value: Player): string {
    return JSON.stringify(uncast(value, r("Player")), null, 2);
  }

  public static toPlayerParticipant(json: string): PlayerParticipant {
    return cast(JSON.parse(json), r("PlayerParticipant"));
  }

  public static playerParticipantToJson(value: PlayerParticipant): string {
    return JSON.stringify(uncast(value, r("PlayerParticipant")), null, 2);
  }

  public static toTeamColors(json: string): TeamColors {
    return cast(JSON.parse(json), r("TeamColors"));
  }

  public static teamColorsToJson(value: TeamColors): string {
    return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
  }

  public static toTeam(json: string): Team {
    return cast(JSON.parse(json), r("Team"));
  }

  public static teamToJson(value: Team): string {
    return JSON.stringify(uncast(value, r("Team")), null, 2);
  }

  public static toTeamParticipant(json: string): TeamParticipant {
    return cast(JSON.parse(json), r("TeamParticipant"));
  }

  public static teamParticipantToJson(value: TeamParticipant): string {
    return JSON.stringify(uncast(value, r("TeamParticipant")), null, 2);
  }

  public static toTournamentSeason(json: string): TournamentSeason {
    return cast(JSON.parse(json), r("TournamentSeason"));
  }

  public static tournamentSeasonToJson(value: TournamentSeason): string {
    return JSON.stringify(uncast(value, r("TournamentSeason")), null, 2);
  }

  public static toTournamentStats(json: string): TournamentStats {
    return cast(JSON.parse(json), r("TournamentStats"));
  }

  public static tournamentStatsToJson(value: TournamentStats): string {
    return JSON.stringify(uncast(value, r("TournamentStats")), null, 2);
  }

  public static toGoals(json: string): Goals {
    return cast(JSON.parse(json), r("Goals"));
  }

  public static goalsToJson(value: Goals): string {
    return JSON.stringify(uncast(value, r("Goals")), null, 2);
  }

  public static toRelegationInfo(json: string): RelegationInfo {
    return cast(JSON.parse(json), r("RelegationInfo"));
  }

  public static relegationInfoToJson(value: RelegationInfo): string {
    return JSON.stringify(uncast(value, r("RelegationInfo")), null, 2);
  }

  public static toRule(json: string): Rule {
    return cast(JSON.parse(json), r("Rule"));
  }

  public static ruleToJson(value: Rule): string {
    return JSON.stringify(uncast(value, r("Rule")), null, 2);
  }

  public static toStatCardSection(json: string): StatCardSection {
    return cast(JSON.parse(json), r("StatCardSection"));
  }

  public static statCardSectionToJson(value: StatCardSection): string {
    return JSON.stringify(uncast(value, r("StatCardSection")), null, 2);
  }

  public static toTable(json: string): Table {
    return cast(JSON.parse(json), r("Table"));
  }

  public static tableToJson(value: Table): string {
    return JSON.stringify(uncast(value, r("Table")), null, 2);
  }

  public static toLine(json: string): Line {
    return cast(JSON.parse(json), r("Line"));
  }

  public static lineToJson(value: Line): string {
    return JSON.stringify(uncast(value, r("Line")), null, 2);
  }

  public static toTopStatRanking(json: string): TopStatRanking {
    return cast(JSON.parse(json), r("TopStatRanking"));
  }

  public static topStatRankingToJson(value: TopStatRanking): string {
    return JSON.stringify(uncast(value, r("TopStatRanking")), null, 2);
  }

  public static toStatList(json: string): StatList {
    return cast(JSON.parse(json), r("StatList"));
  }

  public static statListToJson(value: StatList): string {
    return JSON.stringify(uncast(value, r("StatList")), null, 2);
  }

  public static toTopStat(json: string): TopStat {
    return cast(JSON.parse(json), r("TopStat"));
  }

  public static topStatToJson(value: TopStat): string {
    return JSON.stringify(uncast(value, r("TopStat")), null, 2);
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
  TeamSeasonStats: o(
    [
      { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
      { json: "teams", js: "teams", typ: u(undefined, a(r("Team"))) },
      {
        json: "tournamentSeasons",
        js: "tournamentSeasons",
        typ: u(undefined, a(r("TournamentSeason"))),
      },
      {
        json: "currentTournament",
        js: "currentTournament",
        typ: u(undefined, ""),
      },
      {
        json: "tournamentStats",
        js: "tournamentStats",
        typ: u(undefined, r("TournamentStats")),
      },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
    ],
    false,
  ),
  Player: o(
    [
      { json: "header", js: "header", typ: u(undefined, "") },
      {
        json: "participant",
        js: "participant",
        typ: u(undefined, r("PlayerParticipant")),
      },
      { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
      {
        json: "topThree",
        js: "topThree",
        typ: u(undefined, a(r("PlayerParticipant"))),
      },
      { json: "order", js: "order", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      {
        json: "localizedTitleId",
        js: "localizedTitleId",
        typ: u(undefined, ""),
      },
    ],
    false,
  ),
  PlayerParticipant: o(
    [
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
      { json: "teamName", js: "teamName", typ: u(undefined, r("TeamName")) },
      { json: "showRole", js: "showRole", typ: u(undefined, null) },
      {
        json: "showCountryFlag",
        js: "showCountryFlag",
        typ: u(undefined, null),
      },
      { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
      {
        json: "excludeFromRanking",
        js: "excludeFromRanking",
        typ: u(undefined, true),
      },
      { json: "value", js: "value", typ: u(undefined, u(0, "")) },
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
      { json: "darkMode", js: "darkMode", typ: u(undefined, "") },
      { json: "lightMode", js: "lightMode", typ: u(undefined, "") },
      {
        json: "fontDarkMode",
        js: "fontDarkMode",
        typ: u(undefined, r("FontMode")),
      },
      {
        json: "fontLightMode",
        js: "fontLightMode",
        typ: u(undefined, r("FontMode")),
      },
    ],
    false,
  ),
  Team: o(
    [
      { json: "header", js: "header", typ: u(undefined, "") },
      {
        json: "localizedTitleId",
        js: "localizedTitleId",
        typ: u(undefined, ""),
      },
      {
        json: "participant",
        js: "participant",
        typ: u(undefined, r("TeamParticipant")),
      },
      { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
      {
        json: "topThree",
        js: "topThree",
        typ: u(undefined, a(r("TeamParticipant"))),
      },
      { json: "order", js: "order", typ: u(undefined, 0) },
      { json: "stat", js: "stat", typ: u(undefined, "") },
    ],
    false,
  ),
  TeamParticipant: o(
    [
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
      { json: "teamName", js: "teamName", typ: u(undefined, null) },
      { json: "showRole", js: "showRole", typ: u(undefined, null) },
      {
        json: "showCountryFlag",
        js: "showCountryFlag",
        typ: u(undefined, null),
      },
      { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
      {
        json: "excludeFromRanking",
        js: "excludeFromRanking",
        typ: u(undefined, true),
      },
      { json: "value", js: "value", typ: u(undefined, 3.14) },
      {
        json: "teamColors",
        js: "teamColors",
        typ: u(undefined, r("TeamColors")),
      },
    ],
    false,
  ),
  TournamentSeason: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "season", js: "season", typ: u(undefined, "") },
      {
        json: "leagueName",
        js: "leagueName",
        typ: u(undefined, r("LeagueName")),
      },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
      { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, "") },
    ],
    false,
  ),
  TournamentStats: o(
    [
      { json: "Table", js: "Table", typ: u(undefined, r("Table")) },
      { json: "Goals", js: "Goals", typ: u(undefined, r("Goals")) },
      { json: "Rating", js: "Rating", typ: u(undefined, 3.14) },
      {
        json: "AverageStageRating",
        js: "AverageStageRating",
        typ: u(undefined, 3.14),
      },
      { json: "TeamId", js: "TeamId", typ: u(undefined, 0) },
      { json: "StageId", js: "StageId", typ: u(undefined, 0) },
      {
        json: "RelegationInfo",
        js: "RelegationInfo",
        typ: u(undefined, r("RelegationInfo")),
      },
      { json: "CleanSheets", js: "CleanSheets", typ: u(undefined, 0) },
      { json: "YellowCards", js: "YellowCards", typ: u(undefined, 0) },
      { json: "RedCards", js: "RedCards", typ: u(undefined, 0) },
      { json: "TeamName", js: "TeamName", typ: u(undefined, r("TeamName")) },
      {
        json: "GoalsAgainst",
        js: "GoalsAgainst",
        typ: u(undefined, r("Goals")),
      },
      {
        json: "TopStatRanking",
        js: "TopStatRanking",
        typ: u(undefined, a(r("TopStatRanking"))),
      },
      { json: "TopStats", js: "TopStats", typ: u(undefined, a(r("TopStat"))) },
      {
        json: "StatCardSections",
        js: "StatCardSections",
        typ: u(undefined, a(r("StatCardSection"))),
      },
    ],
    false,
  ),
  Goals: o(
    [
      { json: "Total", js: "Total", typ: u(undefined, 0) },
      { json: "OpenPlayGoals", js: "OpenPlayGoals", typ: u(undefined, 0) },
      { json: "PenaltyGoals", js: "PenaltyGoals", typ: u(undefined, 0) },
      { json: "FreeKickGoals", js: "FreeKickGoals", typ: u(undefined, 0) },
      { json: "AccruedOwnGoals", js: "AccruedOwnGoals", typ: u(undefined, 0) },
      { json: "FastBreakGoals", js: "FastBreakGoals", typ: u(undefined, 0) },
      { json: "SetPiece", js: "SetPiece", typ: u(undefined, 0) },
      { json: "ExpectedGoals", js: "ExpectedGoals", typ: u(undefined, 3.14) },
      {
        json: "ExpectedGoalsConceded",
        js: "ExpectedGoalsConceded",
        typ: u(undefined, 3.14),
      },
    ],
    false,
  ),
  RelegationInfo: o(
    [
      { json: "Promotion", js: "Promotion", typ: u(undefined, 0) },
      { json: "Relegation", js: "Relegation", typ: u(undefined, 0) },
      { json: "ChampionsLeague", js: "ChampionsLeague", typ: u(undefined, "") },
      { json: "UefaCup", js: "UefaCup", typ: u(undefined, "") },
      { json: "StageId", js: "StageId", typ: u(undefined, 0) },
      { json: "Rules", js: "Rules", typ: u(undefined, a(r("Rule"))) },
    ],
    false,
  ),
  Rule: o(
    [
      { json: "Id", js: "Id", typ: u(undefined, 0) },
      { json: "Description", js: "Description", typ: u(undefined, "") },
      { json: "Color", js: "Color", typ: u(undefined, "") },
      { json: "LeagacyId", js: "LeagacyId", typ: u(undefined, "") },
      { json: "Value", js: "Value", typ: u(undefined, "") },
      { json: "Name", js: "Name", typ: u(undefined, "") },
      { json: "TranslationKey", js: "TranslationKey", typ: u(undefined, "") },
      { json: "SortOrder", js: "SortOrder", typ: u(undefined, 0) },
    ],
    false,
  ),
  StatCardSection: o(
    [
      { json: "Title", js: "Title", typ: u(undefined, "") },
      {
        json: "LocalizedTitleId",
        js: "LocalizedTitleId",
        typ: u(undefined, ""),
      },
      {
        json: "LocalizedCategoryId",
        js: "LocalizedCategoryId",
        typ: u(undefined, r("LocalizedCategoryID")),
      },
      { json: "Stats", js: "Stats", typ: u(undefined, a("")) },
    ],
    false,
  ),
  Table: o(
    [
      { json: "Lines", js: "Lines", typ: u(undefined, a(r("Line"))) },
      { json: "SubTables", js: "SubTables", typ: u(undefined, a("any")) },
      {
        json: "WinningPositions",
        js: "WinningPositions",
        typ: u(undefined, 0),
      },
      { json: "TopPositions", js: "TopPositions", typ: u(undefined, 0) },
      {
        json: "QualifyingPositions",
        js: "QualifyingPositions",
        typ: u(undefined, 0),
      },
      {
        json: "RelegationPositions",
        js: "RelegationPositions",
        typ: u(undefined, 0),
      },
      { json: "LeagueName", js: "LeagueName", typ: u(undefined, "") },
      { json: "SeasonId", js: "SeasonId", typ: u(undefined, 0) },
      { json: "LeagueId", js: "LeagueId", typ: u(undefined, 0) },
      { json: "IsComposite", js: "IsComposite", typ: u(undefined, true) },
      {
        json: "CountryCode",
        js: "CountryCode",
        typ: u(undefined, r("CountryCode")),
      },
      { json: "HasXgTable", js: "HasXgTable", typ: u(undefined, true) },
    ],
    false,
  ),
  Line: o(
    [
      { json: "TeamId", js: "TeamId", typ: u(undefined, 0) },
      { json: "TeamName", js: "TeamName", typ: u(undefined, "") },
      { json: "Position", js: "Position", typ: u(undefined, 0) },
      { json: "Won", js: "Won", typ: u(undefined, 0) },
      { json: "Drawn", js: "Drawn", typ: u(undefined, 0) },
      { json: "Lost", js: "Lost", typ: u(undefined, 0) },
      { json: "Scored", js: "Scored", typ: u(undefined, 0) },
      { json: "Conceeded", js: "Conceeded", typ: u(undefined, 0) },
      { json: "Points", js: "Points", typ: u(undefined, 0) },
      { json: "Conference", js: "Conference", typ: u(undefined, "") },
      { json: "PointsHome", js: "PointsHome", typ: u(undefined, 0) },
      { json: "WonHome", js: "WonHome", typ: u(undefined, 0) },
      { json: "DrawnHome", js: "DrawnHome", typ: u(undefined, 0) },
      { json: "LostHome", js: "LostHome", typ: u(undefined, 0) },
      { json: "ScoredHome", js: "ScoredHome", typ: u(undefined, 0) },
      { json: "ConceededHome", js: "ConceededHome", typ: u(undefined, 0) },
      { json: "PointsDeduction", js: "PointsDeduction", typ: u(undefined, 0) },
    ],
    false,
  ),
  TopStatRanking: o(
    [
      { json: "StatName", js: "StatName", typ: u(undefined, "") },
      { json: "Title", js: "Title", typ: u(undefined, "") },
      {
        json: "LocalizedTitleId",
        js: "LocalizedTitleId",
        typ: u(undefined, ""),
      },
      { json: "StatList", js: "StatList", typ: u(undefined, a(r("StatList"))) },
      {
        json: "StatFormat",
        js: "StatFormat",
        typ: u(undefined, r("StatFormat")),
      },
      { json: "StatDecimals", js: "StatDecimals", typ: u(undefined, 0) },
      { json: "SubstatDecimals", js: "SubstatDecimals", typ: u(undefined, 0) },
      { json: "Order", js: "Order", typ: u(undefined, 0) },
      { json: "Category", js: "Category", typ: u(undefined, r("Category")) },
      {
        json: "LocalizedCategoryId",
        js: "LocalizedCategoryId",
        typ: u(undefined, r("LocalizedCategoryID")),
      },
      { json: "Subtitle", js: "Subtitle", typ: u(undefined, "") },
      {
        json: "LocalizedSubtitleId",
        js: "LocalizedSubtitleId",
        typ: u(undefined, ""),
      },
      {
        json: "SubstatFormat",
        js: "SubstatFormat",
        typ: u(undefined, r("StatFormat")),
      },
    ],
    false,
  ),
  StatList: o(
    [
      { json: "ParticipantName", js: "ParticipantName", typ: u(undefined, "") },
      { json: "ParticiantId", js: "ParticiantId", typ: u(undefined, 0) },
      { json: "TeamId", js: "TeamId", typ: u(undefined, 0) },
      { json: "TeamColor", js: "TeamColor", typ: u(undefined, "") },
      { json: "StatValue", js: "StatValue", typ: u(undefined, 3.14) },
      { json: "SubStatValue", js: "SubStatValue", typ: u(undefined, 3.14) },
      { json: "MinutesPlayed", js: "MinutesPlayed", typ: u(undefined, 0) },
      { json: "MatchesPlayed", js: "MatchesPlayed", typ: u(undefined, 0) },
      { json: "StatValueCount", js: "StatValueCount", typ: u(undefined, 0) },
      { json: "Rank", js: "Rank", typ: u(undefined, 0) },
      {
        json: "ParticipantCountryCode",
        js: "ParticipantCountryCode",
        typ: u(undefined, r("CountryCode")),
      },
      { json: "TeamName", js: "TeamName", typ: u(undefined, r("TeamName")) },
    ],
    false,
  ),
  TopStat: o(
    [
      { json: "StatName", js: "StatName", typ: u(undefined, "") },
      { json: "Title", js: "Title", typ: u(undefined, "") },
      { json: "Subtitle", js: "Subtitle", typ: u(undefined, "") },
      {
        json: "LocalizedTitleId",
        js: "LocalizedTitleId",
        typ: u(undefined, ""),
      },
      {
        json: "LocalizedSubtitleId",
        js: "LocalizedSubtitleId",
        typ: u(undefined, ""),
      },
      { json: "StatList", js: "StatList", typ: u(undefined, a(r("StatList"))) },
      {
        json: "StatFormat",
        js: "StatFormat",
        typ: u(undefined, r("StatFormat")),
      },
      {
        json: "SubstatFormat",
        js: "SubstatFormat",
        typ: u(undefined, r("StatFormat")),
      },
      { json: "StatDecimals", js: "StatDecimals", typ: u(undefined, 0) },
      { json: "SubstatDecimals", js: "SubstatDecimals", typ: u(undefined, 0) },
      { json: "StatLocation", js: "StatLocation", typ: u(undefined, "") },
      { json: "Order", js: "Order", typ: u(undefined, 0) },
      { json: "Category", js: "Category", typ: u(undefined, r("Category")) },
      {
        json: "LocalizedCategoryId",
        js: "LocalizedCategoryId",
        typ: u(undefined, r("LocalizedCategoryID")),
      },
    ],
    false,
  ),
  FontMode: ["rgba(255, 255, 255, 1.0)", "rgba(29, 29, 29, 1.0)"],
  TeamName: ["Everton"],
  LeagueName: ["EFL Cup", "Europa League", "FA Cup", "Premier League"],
  LocalizedCategoryID: [
    "attack",
    "defense",
    "discipline",
    "goalkeeping",
    "top_stats",
  ],
  CountryCode: ["BEL", "ENG", "MLI", "NED", "POR", "SCO", "SEN", "UKR"],
  Category: ["Attacking", "Defending", "Discipline", "Goalkeeping", "Top Stat"],
  StatFormat: ["fraction", "number", "percent"],
};
