// To parse this data:
//
//   import { Convert, League } from "./file";
//
//   const league = Convert.toLeague(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from "../type-cast-error";

export interface League {
  tabs?: string[];
  allAvailableSeasons?: string[];
  details?: Details;
  seostr?: string;
  QAData?: any[];
  table?: TableElement[];
  transfers?: Transfers;
  overview?: Overview;
  stats?: Stats;
  matches?: Matches;
  playoff?: null;
}

export interface Details {
  id?: number;
  type?: string;
  name?: string;
  selectedSeason?: string;
  latestSeason?: string;
  shortName?: string;
  country?: string;
  faqJSONLD?: null;
  breadcrumbJSONLD?: BreadcrumbJSONLD;
}

export interface BreadcrumbJSONLD {
  "@context"?: string;
  "@type"?: string;
  itemListElement?: ItemListElement[];
}

export interface ItemListElement {
  "@type"?: string;
  position?: number;
  name?: string;
  item?: string;
}

export interface Matches {
  firstUnplayedMatch?: FirstUnplayedMatch;
  allMatches?: AllMatch[];
  hasOngoingMatch?: boolean;
}

export interface AllMatch {
  round?: number;
  roundName?: number;
  pageUrl?: string;
  id?: string;
  home?: NextOpponentClass;
  away?: NextOpponentClass;
  status?: Status;
}

export interface NextOpponentClass {
  name?: string;
  shortName?: string;
  id?: string;
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
  Abandoned = "Abandoned",
  FullTime = "Full-Time",
  Postponed = "Postponed",
}

export enum LongKey {
  Aborted = "aborted",
  Finished = "finished",
  Postponed = "postponed",
}

export enum Short {
  Ab = "Ab",
  Ft = "FT",
  Pp = "PP",
}

export enum ShortKey {
  AbortedShort = "aborted_short",
  FulltimeShort = "fulltime_short",
  PostponedShort = "postponed_short",
}

export interface FirstUnplayedMatch {
  firstRoundWithUnplayedMatch?: number;
  firstUnplayedMatchIndex?: number;
  firstUnplayedMatchId?: string;
}

export interface Overview {
  season?: string;
  selectedSeason?: string;
  table?: TableElement[];
  topPlayers?: TopPlayers;
  hasTotw?: boolean;
  leagueOverviewMatches?: LeagueOverviewMatch[];
  hasOngoingMatch?: boolean;
}

export interface LeagueOverviewMatch {
  id?: string;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: Status;
}

export interface OpponentClass {
  id?: string;
  name?: string;
  score?: number;
}

export interface Tournament {}

export interface TableElement {
  data?: Data;
  teamForm?: { [key: string]: TeamForm[] };
  nextOpponent?: { [key: string]: Array<NextOpponentClass | string> };
  tableHeader?: TableHeader;
}

export interface Data {
  ccode?: string;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: string;
  legend?: Legend[];
  ongoing?: any[];
  table?: DataTable;
  tableFilterTypes?: string[];
  composite?: boolean;
  selectedSeason?: string;
  isCurrentSeason?: boolean;
}

export interface Legend {
  title?: string;
  tKey?: string;
  color?: string;
  indices?: number[];
}

export interface DataTable {
  all?: All[];
  home?: All[];
  away?: All[];
  form?: All[];
}

export interface All {
  name?: string;
  shortName?: string;
  id?: number;
  pageUrl?: string;
  deduction?: number | null;
  ongoing?: null;
  played?: number;
  wins?: number;
  draws?: number;
  losses?: number;
  scoresStr?: string;
  goalConDiff?: number;
  pts?: number;
  idx?: number;
  qualColor?: string | null;
  featuredInMatch?: boolean;
}

export interface TableHeader {
  staticTableHeaders?: string[];
  dynamicTableHeaders?: string[];
}

export interface TeamForm {
  result?: number;
  resultString?: ResultString;
  imageUrl?: string;
  linkToMatch?: string;
  date?: null;
  teamPageUrl?: string;
  tooltipText?: TooltipText;
  score?: string;
  home?: TeamFormAway;
  away?: TeamFormAway;
}

export interface TeamFormAway {
  isOurTeam?: boolean;
}

export enum ResultString {
  D = "D",
  L = "L",
  W = "W",
}

export interface TooltipText {
  utcTime?: Date;
  homeTeam?: string;
  homeTeamId?: number;
  homeScore?: number;
  awayTeam?: string;
  awayTeamId?: number;
  awayScore?: number;
}

export interface TopPlayers {
  byRating?: By[];
  byGoals?: By[];
  byAssists?: By[];
  seeAllUrl?: string;
}

export interface By {
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
  teamName?: string;
  showRole?: null;
  showCountryFlag?: null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  value?: number;
}

export interface Stats {
  players?: Player[];
  teams?: Player[];
  trophies?: Trophy[];
  seasonStatLinks?: SeasonStatLink[];
  seasonsWithLinks?: string[];
}

export interface Player {
  header?: string;
  participant?: Participant;
  fetchAllUrl?: string;
  topThree?: Participant[];
  order?: number;
  name?: string;
  localizedTitleId?: string;
}

export interface Participant {
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
  teamName?: string | null;
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
  fontDarkMode?: string;
  fontLightMode?: string;
}

export interface SeasonStatLink {
  Name?: string;
  CountryCode?: string;
  RelativePath?: string;
  League?: string;
  StageId?: number;
  TemplateId?: number;
  TournamentId?: number;
  TotwRoundsLink?: string;
}

export interface Trophy {
  seasonName?: string;
  winner?: Loser;
  loser?: Loser;
}

export interface Loser {
  id?: number;
  seasonName?: string;
  name?: string;
  winner?: boolean;
}

export interface Transfers {
  type?: string;
  data?: Datum[];
}

export interface Datum {
  name?: string;
  playerId?: number;
  position?: Position | null;
  transferDate?: Date;
  transferText?: null[];
  fromClub?: string;
  fromClubId?: number;
  toClub?: string;
  toClubId?: number;
  fee?: Fee | null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  marketValue?: string;
  toDate?: Date;
}

export interface Fee {
  feeText?: FeeText;
  localizedFeeText?: LocalizedFeeText;
  value?: string;
}

export enum FeeText {
  Fee = "fee",
  FreeTransfer = "free transfer",
  OnLoan = "on loan",
}

export enum LocalizedFeeText {
  OnLoan = "on_loan",
  TransferFee = "transfer_fee",
  TransferTypeFreeTransfer = "transfer_type_free_transfer",
}

export interface Position {
  label?: string;
  key?: string;
}

export interface TransferType {
  text?: Text;
  localizationKey?: LocalizationKey;
}

export enum LocalizationKey {
  Contract = "contract",
  OnLoan = "on_loan",
}

export enum Text {
  Contract = "contract",
  OnLoan = "on loan",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toLeague(json: string): League {
    return cast(JSON.parse(json), r("League"));
  }

  public static leagueToJson(value: League): string {
    return JSON.stringify(uncast(value, r("League")), null, 2);
  }

  public static toDetails(json: string): Details {
    return cast(JSON.parse(json), r("Details"));
  }

  public static detailsToJson(value: Details): string {
    return JSON.stringify(uncast(value, r("Details")), null, 2);
  }

  public static toBreadcrumbJSONLD(json: string): BreadcrumbJSONLD {
    return cast(JSON.parse(json), r("BreadcrumbJSONLD"));
  }

  public static breadcrumbJSONLDToJson(value: BreadcrumbJSONLD): string {
    return JSON.stringify(uncast(value, r("BreadcrumbJSONLD")), null, 2);
  }

  public static toItemListElement(json: string): ItemListElement {
    return cast(JSON.parse(json), r("ItemListElement"));
  }

  public static itemListElementToJson(value: ItemListElement): string {
    return JSON.stringify(uncast(value, r("ItemListElement")), null, 2);
  }

  public static toMatches(json: string): Matches {
    return cast(JSON.parse(json), r("Matches"));
  }

  public static matchesToJson(value: Matches): string {
    return JSON.stringify(uncast(value, r("Matches")), null, 2);
  }

  public static toAllMatch(json: string): AllMatch {
    return cast(JSON.parse(json), r("AllMatch"));
  }

  public static allMatchToJson(value: AllMatch): string {
    return JSON.stringify(uncast(value, r("AllMatch")), null, 2);
  }

  public static toNextOpponentClass(json: string): NextOpponentClass {
    return cast(JSON.parse(json), r("NextOpponentClass"));
  }

  public static nextOpponentClassToJson(value: NextOpponentClass): string {
    return JSON.stringify(uncast(value, r("NextOpponentClass")), null, 2);
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

  public static toFirstUnplayedMatch(json: string): FirstUnplayedMatch {
    return cast(JSON.parse(json), r("FirstUnplayedMatch"));
  }

  public static firstUnplayedMatchToJson(value: FirstUnplayedMatch): string {
    return JSON.stringify(uncast(value, r("FirstUnplayedMatch")), null, 2);
  }

  public static toOverview(json: string): Overview {
    return cast(JSON.parse(json), r("Overview"));
  }

  public static overviewToJson(value: Overview): string {
    return JSON.stringify(uncast(value, r("Overview")), null, 2);
  }

  public static toLeagueOverviewMatch(json: string): LeagueOverviewMatch {
    return cast(JSON.parse(json), r("LeagueOverviewMatch"));
  }

  public static leagueOverviewMatchToJson(value: LeagueOverviewMatch): string {
    return JSON.stringify(uncast(value, r("LeagueOverviewMatch")), null, 2);
  }

  public static toOpponentClass(json: string): OpponentClass {
    return cast(JSON.parse(json), r("OpponentClass"));
  }

  public static opponentClassToJson(value: OpponentClass): string {
    return JSON.stringify(uncast(value, r("OpponentClass")), null, 2);
  }

  public static toTournament(json: string): Tournament {
    return cast(JSON.parse(json), r("Tournament"));
  }

  public static tournamentToJson(value: Tournament): string {
    return JSON.stringify(uncast(value, r("Tournament")), null, 2);
  }

  public static toTableElement(json: string): TableElement {
    return cast(JSON.parse(json), r("TableElement"));
  }

  public static tableElementToJson(value: TableElement): string {
    return JSON.stringify(uncast(value, r("TableElement")), null, 2);
  }

  public static toData(json: string): Data {
    return cast(JSON.parse(json), r("Data"));
  }

  public static dataToJson(value: Data): string {
    return JSON.stringify(uncast(value, r("Data")), null, 2);
  }

  public static toLegend(json: string): Legend {
    return cast(JSON.parse(json), r("Legend"));
  }

  public static legendToJson(value: Legend): string {
    return JSON.stringify(uncast(value, r("Legend")), null, 2);
  }

  public static toDataTable(json: string): DataTable {
    return cast(JSON.parse(json), r("DataTable"));
  }

  public static dataTableToJson(value: DataTable): string {
    return JSON.stringify(uncast(value, r("DataTable")), null, 2);
  }

  public static toAll(json: string): All {
    return cast(JSON.parse(json), r("All"));
  }

  public static allToJson(value: All): string {
    return JSON.stringify(uncast(value, r("All")), null, 2);
  }

  public static toTableHeader(json: string): TableHeader {
    return cast(JSON.parse(json), r("TableHeader"));
  }

  public static tableHeaderToJson(value: TableHeader): string {
    return JSON.stringify(uncast(value, r("TableHeader")), null, 2);
  }

  public static toTeamForm(json: string): TeamForm {
    return cast(JSON.parse(json), r("TeamForm"));
  }

  public static teamFormToJson(value: TeamForm): string {
    return JSON.stringify(uncast(value, r("TeamForm")), null, 2);
  }

  public static toTeamFormAway(json: string): TeamFormAway {
    return cast(JSON.parse(json), r("TeamFormAway"));
  }

  public static teamFormAwayToJson(value: TeamFormAway): string {
    return JSON.stringify(uncast(value, r("TeamFormAway")), null, 2);
  }

  public static toTooltipText(json: string): TooltipText {
    return cast(JSON.parse(json), r("TooltipText"));
  }

  public static tooltipTextToJson(value: TooltipText): string {
    return JSON.stringify(uncast(value, r("TooltipText")), null, 2);
  }

  public static toTopPlayers(json: string): TopPlayers {
    return cast(JSON.parse(json), r("TopPlayers"));
  }

  public static topPlayersToJson(value: TopPlayers): string {
    return JSON.stringify(uncast(value, r("TopPlayers")), null, 2);
  }

  public static toBy(json: string): By {
    return cast(JSON.parse(json), r("By"));
  }

  public static byToJson(value: By): string {
    return JSON.stringify(uncast(value, r("By")), null, 2);
  }

  public static toStats(json: string): Stats {
    return cast(JSON.parse(json), r("Stats"));
  }

  public static statsToJson(value: Stats): string {
    return JSON.stringify(uncast(value, r("Stats")), null, 2);
  }

  public static toPlayer(json: string): Player {
    return cast(JSON.parse(json), r("Player"));
  }

  public static playerToJson(value: Player): string {
    return JSON.stringify(uncast(value, r("Player")), null, 2);
  }

  public static toParticipant(json: string): Participant {
    return cast(JSON.parse(json), r("Participant"));
  }

  public static participantToJson(value: Participant): string {
    return JSON.stringify(uncast(value, r("Participant")), null, 2);
  }

  public static toTeamColors(json: string): TeamColors {
    return cast(JSON.parse(json), r("TeamColors"));
  }

  public static teamColorsToJson(value: TeamColors): string {
    return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
  }

  public static toSeasonStatLink(json: string): SeasonStatLink {
    return cast(JSON.parse(json), r("SeasonStatLink"));
  }

  public static seasonStatLinkToJson(value: SeasonStatLink): string {
    return JSON.stringify(uncast(value, r("SeasonStatLink")), null, 2);
  }

  public static toTrophy(json: string): Trophy {
    return cast(JSON.parse(json), r("Trophy"));
  }

  public static trophyToJson(value: Trophy): string {
    return JSON.stringify(uncast(value, r("Trophy")), null, 2);
  }

  public static toLoser(json: string): Loser {
    return cast(JSON.parse(json), r("Loser"));
  }

  public static loserToJson(value: Loser): string {
    return JSON.stringify(uncast(value, r("Loser")), null, 2);
  }

  public static toTransfers(json: string): Transfers {
    return cast(JSON.parse(json), r("Transfers"));
  }

  public static transfersToJson(value: Transfers): string {
    return JSON.stringify(uncast(value, r("Transfers")), null, 2);
  }

  public static toDatum(json: string): Datum {
    return cast(JSON.parse(json), r("Datum"));
  }

  public static datumToJson(value: Datum): string {
    return JSON.stringify(uncast(value, r("Datum")), null, 2);
  }

  public static toFee(json: string): Fee {
    return cast(JSON.parse(json), r("Fee"));
  }

  public static feeToJson(value: Fee): string {
    return JSON.stringify(uncast(value, r("Fee")), null, 2);
  }

  public static toPosition(json: string): Position {
    return cast(JSON.parse(json), r("Position"));
  }

  public static positionToJson(value: Position): string {
    return JSON.stringify(uncast(value, r("Position")), null, 2);
  }

  public static toTransferType(json: string): TransferType {
    return cast(JSON.parse(json), r("TransferType"));
  }

  public static transferTypeToJson(value: TransferType): string {
    return JSON.stringify(uncast(value, r("TransferType")), null, 2);
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
  League: o(
    [
      { json: "tabs", js: "tabs", typ: u(undefined, a("")) },
      {
        json: "allAvailableSeasons",
        js: "allAvailableSeasons",
        typ: u(undefined, a("")),
      },
      { json: "details", js: "details", typ: u(undefined, r("Details")) },
      { json: "seostr", js: "seostr", typ: u(undefined, "") },
      { json: "QAData", js: "QAData", typ: u(undefined, a("any")) },
      { json: "table", js: "table", typ: u(undefined, a(r("TableElement"))) },
      { json: "transfers", js: "transfers", typ: u(undefined, r("Transfers")) },
      { json: "overview", js: "overview", typ: u(undefined, r("Overview")) },
      { json: "stats", js: "stats", typ: u(undefined, r("Stats")) },
      { json: "matches", js: "matches", typ: u(undefined, r("Matches")) },
      { json: "playoff", js: "playoff", typ: u(undefined, null) },
    ],
    false,
  ),
  Details: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
      { json: "latestSeason", js: "latestSeason", typ: u(undefined, "") },
      { json: "shortName", js: "shortName", typ: u(undefined, "") },
      { json: "country", js: "country", typ: u(undefined, "") },
      { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, null) },
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
  Matches: o(
    [
      {
        json: "firstUnplayedMatch",
        js: "firstUnplayedMatch",
        typ: u(undefined, r("FirstUnplayedMatch")),
      },
      {
        json: "allMatches",
        js: "allMatches",
        typ: u(undefined, a(r("AllMatch"))),
      },
      {
        json: "hasOngoingMatch",
        js: "hasOngoingMatch",
        typ: u(undefined, true),
      },
    ],
    false,
  ),
  AllMatch: o(
    [
      { json: "round", js: "round", typ: u(undefined, 0) },
      { json: "roundName", js: "roundName", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "home", js: "home", typ: u(undefined, r("NextOpponentClass")) },
      { json: "away", js: "away", typ: u(undefined, r("NextOpponentClass")) },
      { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ],
    false,
  ),
  NextOpponentClass: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "shortName", js: "shortName", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, "") },
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
  FirstUnplayedMatch: o(
    [
      {
        json: "firstRoundWithUnplayedMatch",
        js: "firstRoundWithUnplayedMatch",
        typ: u(undefined, 0),
      },
      {
        json: "firstUnplayedMatchIndex",
        js: "firstUnplayedMatchIndex",
        typ: u(undefined, 0),
      },
      {
        json: "firstUnplayedMatchId",
        js: "firstUnplayedMatchId",
        typ: u(undefined, ""),
      },
    ],
    false,
  ),
  Overview: o(
    [
      { json: "season", js: "season", typ: u(undefined, "") },
      { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
      { json: "table", js: "table", typ: u(undefined, a(r("TableElement"))) },
      {
        json: "topPlayers",
        js: "topPlayers",
        typ: u(undefined, r("TopPlayers")),
      },
      { json: "hasTotw", js: "hasTotw", typ: u(undefined, true) },
      {
        json: "leagueOverviewMatches",
        js: "leagueOverviewMatches",
        typ: u(undefined, a(r("LeagueOverviewMatch"))),
      },
      {
        json: "hasOngoingMatch",
        js: "hasOngoingMatch",
        typ: u(undefined, true),
      },
    ],
    false,
  ),
  LeagueOverviewMatch: o(
    [
      { json: "id", js: "id", typ: u(undefined, "") },
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
      { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ],
    false,
  ),
  OpponentClass: o(
    [
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "score", js: "score", typ: u(undefined, 0) },
    ],
    false,
  ),
  Tournament: o([], false),
  TableElement: o(
    [
      { json: "data", js: "data", typ: u(undefined, r("Data")) },
      {
        json: "teamForm",
        js: "teamForm",
        typ: u(undefined, m(a(r("TeamForm")))),
      },
      {
        json: "nextOpponent",
        js: "nextOpponent",
        typ: u(undefined, m(a(u(r("NextOpponentClass"), "")))),
      },
      {
        json: "tableHeader",
        js: "tableHeader",
        typ: u(undefined, r("TableHeader")),
      },
    ],
    false,
  ),
  Data: o(
    [
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
      { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
      { json: "table", js: "table", typ: u(undefined, r("DataTable")) },
      {
        json: "tableFilterTypes",
        js: "tableFilterTypes",
        typ: u(undefined, a("")),
      },
      { json: "composite", js: "composite", typ: u(undefined, true) },
      { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
      {
        json: "isCurrentSeason",
        js: "isCurrentSeason",
        typ: u(undefined, true),
      },
    ],
    false,
  ),
  Legend: o(
    [
      { json: "title", js: "title", typ: u(undefined, "") },
      { json: "tKey", js: "tKey", typ: u(undefined, "") },
      { json: "color", js: "color", typ: u(undefined, "") },
      { json: "indices", js: "indices", typ: u(undefined, a(0)) },
    ],
    false,
  ),
  DataTable: o(
    [
      { json: "all", js: "all", typ: u(undefined, a(r("All"))) },
      { json: "home", js: "home", typ: u(undefined, a(r("All"))) },
      { json: "away", js: "away", typ: u(undefined, a(r("All"))) },
      { json: "form", js: "form", typ: u(undefined, a(r("All"))) },
    ],
    false,
  ),
  All: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "shortName", js: "shortName", typ: u(undefined, "") },
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
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
      {
        json: "featuredInMatch",
        js: "featuredInMatch",
        typ: u(undefined, true),
      },
    ],
    false,
  ),
  TableHeader: o(
    [
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
    ],
    false,
  ),
  TeamForm: o(
    [
      { json: "result", js: "result", typ: u(undefined, 0) },
      {
        json: "resultString",
        js: "resultString",
        typ: u(undefined, r("ResultString")),
      },
      { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
      { json: "linkToMatch", js: "linkToMatch", typ: u(undefined, "") },
      { json: "date", js: "date", typ: u(undefined, null) },
      { json: "teamPageUrl", js: "teamPageUrl", typ: u(undefined, "") },
      {
        json: "tooltipText",
        js: "tooltipText",
        typ: u(undefined, r("TooltipText")),
      },
      { json: "score", js: "score", typ: u(undefined, "") },
      { json: "home", js: "home", typ: u(undefined, r("TeamFormAway")) },
      { json: "away", js: "away", typ: u(undefined, r("TeamFormAway")) },
    ],
    false,
  ),
  TeamFormAway: o(
    [{ json: "isOurTeam", js: "isOurTeam", typ: u(undefined, true) }],
    false,
  ),
  TooltipText: o(
    [
      { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
      { json: "homeTeam", js: "homeTeam", typ: u(undefined, "") },
      { json: "homeTeamId", js: "homeTeamId", typ: u(undefined, 0) },
      { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
      { json: "awayTeam", js: "awayTeam", typ: u(undefined, "") },
      { json: "awayTeamId", js: "awayTeamId", typ: u(undefined, 0) },
      { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
    ],
    false,
  ),
  TopPlayers: o(
    [
      { json: "byRating", js: "byRating", typ: u(undefined, a(r("By"))) },
      { json: "byGoals", js: "byGoals", typ: u(undefined, a(r("By"))) },
      { json: "byAssists", js: "byAssists", typ: u(undefined, a(r("By"))) },
      { json: "seeAllUrl", js: "seeAllUrl", typ: u(undefined, "") },
    ],
    false,
  ),
  By: o(
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
      { json: "teamName", js: "teamName", typ: u(undefined, "") },
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
    ],
    false,
  ),
  Stats: o(
    [
      { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
      { json: "teams", js: "teams", typ: u(undefined, a(r("Player"))) },
      { json: "trophies", js: "trophies", typ: u(undefined, a(r("Trophy"))) },
      {
        json: "seasonStatLinks",
        js: "seasonStatLinks",
        typ: u(undefined, a(r("SeasonStatLink"))),
      },
      {
        json: "seasonsWithLinks",
        js: "seasonsWithLinks",
        typ: u(undefined, a("")),
      },
    ],
    false,
  ),
  Player: o(
    [
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
    ],
    false,
  ),
  Participant: o(
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
      { json: "teamName", js: "teamName", typ: u(undefined, u("", null)) },
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
      { json: "fontDarkMode", js: "fontDarkMode", typ: u(undefined, "") },
      { json: "fontLightMode", js: "fontLightMode", typ: u(undefined, "") },
    ],
    false,
  ),
  SeasonStatLink: o(
    [
      { json: "Name", js: "Name", typ: u(undefined, "") },
      { json: "CountryCode", js: "CountryCode", typ: u(undefined, "") },
      { json: "RelativePath", js: "RelativePath", typ: u(undefined, "") },
      { json: "League", js: "League", typ: u(undefined, "") },
      { json: "StageId", js: "StageId", typ: u(undefined, 0) },
      { json: "TemplateId", js: "TemplateId", typ: u(undefined, 0) },
      { json: "TournamentId", js: "TournamentId", typ: u(undefined, 0) },
      { json: "TotwRoundsLink", js: "TotwRoundsLink", typ: u(undefined, "") },
    ],
    false,
  ),
  Trophy: o(
    [
      { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
      { json: "winner", js: "winner", typ: u(undefined, r("Loser")) },
      { json: "loser", js: "loser", typ: u(undefined, r("Loser")) },
    ],
    false,
  ),
  Loser: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "winner", js: "winner", typ: u(undefined, true) },
    ],
    false,
  ),
  Transfers: o(
    [
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "data", js: "data", typ: u(undefined, a(r("Datum"))) },
    ],
    false,
  ),
  Datum: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "playerId", js: "playerId", typ: u(undefined, 0) },
      {
        json: "position",
        js: "position",
        typ: u(undefined, u(r("Position"), null)),
      },
      { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
      { json: "transferText", js: "transferText", typ: u(undefined, a(null)) },
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
      { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
      { json: "toDate", js: "toDate", typ: u(undefined, Date) },
    ],
    false,
  ),
  Fee: o(
    [
      { json: "feeText", js: "feeText", typ: u(undefined, r("FeeText")) },
      {
        json: "localizedFeeText",
        js: "localizedFeeText",
        typ: u(undefined, r("LocalizedFeeText")),
      },
      { json: "value", js: "value", typ: u(undefined, "") },
    ],
    false,
  ),
  Position: o(
    [
      { json: "label", js: "label", typ: u(undefined, "") },
      { json: "key", js: "key", typ: u(undefined, "") },
    ],
    false,
  ),
  TransferType: o(
    [
      { json: "text", js: "text", typ: u(undefined, r("Text")) },
      {
        json: "localizationKey",
        js: "localizationKey",
        typ: u(undefined, r("LocalizationKey")),
      },
    ],
    false,
  ),
  Long: ["Abandoned", "Full-Time", "Postponed"],
  LongKey: ["aborted", "finished", "postponed"],
  Short: ["Ab", "FT", "PP"],
  ShortKey: ["aborted_short", "fulltime_short", "postponed_short"],
  ResultString: ["D", "L", "W"],

  FeeText: ["fee", "free transfer", "on loan"],
  LocalizedFeeText: ["on_loan", "transfer_fee", "transfer_type_free_transfer"],
  LocalizationKey: ["contract", "on_loan"],
  Text: ["contract", "on loan"],
};
