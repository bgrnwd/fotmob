// To parse this data:
//
//   import { Convert, Team } from "./file";
//
//   const team = Convert.toTeam(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from '../type-cast-error';

export interface Team {
  tabs: string[];
  allAvailableSeasons: any[];
  details: Details;
  seostr: string;
  QAData: QADatum[];
  table: OverviewTable[];
  transfers: Transfers;
  overview: Overview;
  stats: TeamStats;
  fixtures: TeamFixtures;
  squad: Array<Array<SquadClass[] | string>>;
  history: History;
}

export interface QADatum {
  question: string;
  answer: string;
}

export interface Details {
  id: number;
  type: string;
  name: ShortNameEnum;
  latestSeason: string;
  shortName: ShortNameEnum;
  country: Country;
  faqJSONLD: FAQJSONLD;
  sportsTeamJSONLD: SportsTeamJSONLD;
  breadcrumbJSONLD: BreadcrumbJSONLD;
  canSyncCalendar: boolean;
}

export interface BreadcrumbJSONLD {
  "@context": string;
  "@type": string;
  itemListElement: ItemListElement[];
}

export interface ItemListElement {
  "@type": string;
  position: number;
  name: string;
  item: string;
}

export enum Country {
  Eng = "ENG",
  Int = "INT",
}

export interface FAQJSONLD {
  "@context": string;
  "@type": string;
  mainEntity: MainEntity[];
}

export interface MainEntity {
  "@type": string;
  name: string;
  acceptedAnswer: AcceptedAnswer;
}

export interface AcceptedAnswer {
  "@type": string;
  text: string;
}

export enum ShortNameEnum {
  Liverpool = "Liverpool",
}

export interface SportsTeamJSONLD {
  "@context": string;
  "@type": string;
  name: ShortNameEnum;
  sport: string;
  gender: string;
  logo: string;
  url: string;
  coach: Coach;
  athlete: Coach[];
  location: Location;
  memberOf: MemberOf;
}

export interface Coach {
  "@context": string;
  "@type": CoachType;
  name: string;
  url: string;
  nationality: Nationality | null;
  affiliation: null;
  height: null;
  weight: null;
}

export enum CoachType {
  Person = "Person",
}

export interface Nationality {
  "@type": NationalityType;
  name: string;
}

export enum NationalityType {
  Country = "Country",
}

export interface Location {
  "@type": string;
  name: string;
  address: Address;
  geo: Geo;
}

export interface Address {
  "@type": string;
  addressCountry: AddressCountry;
  addressLocality: ShortNameEnum;
}

export enum AddressCountry {
  England = "England",
  Europe = "Europe",
  World = "World",
}

export interface Geo {
  "@type": string;
  latitude: string;
  longitude: string;
}

export interface MemberOf {
  "@type": string;
  name: NameElement;
  url: string;
}

export enum NameElement {
  ChampionsLeague = "Champions League",
  ClubFriendlies = "Club Friendlies",
  EFLCup = "EFL Cup",
  EuropaLeague = "Europa League",
  FACup = "FA Cup",
  PremierLeague = "Premier League",
}

export interface TeamFixtures {
  allFixtures: AllFixtures;
  previousFixturesUrl: string;
  fixtures: FixturesFixtures;
}

export interface AllFixtures {
  fixtures: LastMatch[];
  nextMatch: NextMatch;
  lastMatch: LastMatch;
}

export interface LastMatch {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  lnameArr: LnameArr[];
  result?: number;
  notStarted: boolean;
  tournament: LastMatchTournament;
  status: LastMatchStatus;
}

export interface OpponentClass {
  id: number;
  name: string;
  score: number;
}

export enum LnameArr {
  A = "A",
  ClubFriendlies = " | Club Friendlies",
  EFLCup = " | EFL Cup",
  EuropaLeague = " | Europa League",
  FACup = " | FA Cup",
  H = "H",
  PremierLeague = " | Premier League",
}

export interface LastMatchStatus {
  utcTime: Date;
  finished: boolean;
  started: boolean;
  cancelled: boolean;
  scoreStr?: string;
  reason?: Reason;
  timezone?: null;
}

export interface Reason {
  short: Short;
  shortKey: ShortKey;
  long: Long;
  longKey: LongKey;
}

export enum Long {
  FullTime = "Full-Time",
}

export enum LongKey {
  Finished = "finished",
}

export enum Short {
  Ft = "FT",
}

export enum ShortKey {
  FulltimeShort = "fulltime_short",
}

export interface LastMatchTournament {
  name: NameElement;
  leagueId: number;
}

export interface NextMatch {
  id: number;
  pageUrl: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  lnameArr: LnameArr[];
  notStarted: boolean;
  tournament: LastMatchTournament;
  status: NextMatchStatus;
}

export interface NextMatchStatus {
  utcTime: Date;
  timezone?: null;
  started: boolean;
  cancelled: boolean;
  finished: boolean;
}

export interface FixturesFixtures {
  "July 2023": The2023[];
  "August 2023": The2023[];
  "September 2023": The2023[];
  "October 2023": The2023[];
  "November 2023": The2023[];
  "December 2023": The2023[];
  "January 2024": The2024[];
  "February 2024": The2024[];
  "March 2024": The2024[];
  "April 2024": The2024[];
  "May 2024": The2024[];
}

export interface The2024 {
  id: number;
  pageUrl: string;
  monthYearKey: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  isPastMatch: boolean;
  lastPlayedMatch: boolean;
  lnameArr: LnameArr[];
  notStarted: boolean;
  tournament: April2024_Tournament;
  status: NextMatchStatus;
}

export interface April2024_Tournament {
  name: NameElement;
}

export interface The2023 {
  id: number;
  pageUrl: string;
  monthYearKey: string;
  opponent: OpponentClass;
  home: OpponentClass;
  away: OpponentClass;
  displayTournament: boolean;
  isPastMatch: boolean;
  lastPlayedMatch: boolean;
  lnameArr: LnameArr[];
  result?: number;
  notStarted: boolean;
  tournament: April2024_Tournament;
  status: LastMatchStatus;
}

export interface History {
  trophyList: TrophyList[];
  historicalTableData: HistoricalTableData;
  teamColor: string;
  teamColorMap: TeamColorMap;
  tables: Tables;
}

export interface HistoricalTableData {
  divisions: Division[];
  ranks: Rank[];
  isValid: boolean;
}

export interface Division {
  divisionRank: number;
  name: NameElement;
  templateId: number;
}

export interface Rank {
  stageId: number;
  tournamentName: NameElement;
  tournamentId: number;
  templateId: number;
  seasonName: string;
  position: number;
  numberOfTeams: number;
  stats: RankStats;
  tableLink: string;
  isConsecutive: boolean;
}

export interface RankStats {
  points: number;
  wins: number;
  draws: number;
  loss: number;
}

export interface Tables {
  current: Current[];
  historic: Current[];
}

export interface Current {
  link: Link[];
}

export interface Link {
  _: string;
  name: NameElement[];
  ccode: Country[];
  season: string[];
  stage_id: string[];
  tournament_id: string[];
  template_id: string[];
  league_id: string[];
}

export interface TeamColorMap {
  color: string;
  colorAlternate: string;
  colorAway: string;
  colorAwayAlternate: string;
}

export interface TrophyList {
  name: string[];
  tournamentTemplateId: string[];
  area: AddressCountry[];
  ccode: Country[];
  won: string[];
  runnerup: string[];
  season_won: string[];
  season_runnerup: string[];
}

export interface Overview {
  season: string;
  selectedSeason: string;
  table: OverviewTable[];
  topPlayers: TopPlayers;
  venue: Venue;
  overviewFixtures: LastMatch[];
  nextMatch: NextMatch;
  lastMatch: LastMatch;
  teamForm: TeamForm[];
  previousFixturesUrl: string;
  teamColors: TeamColors;
}

export interface OverviewTable {
  data: TableData;
  teamForm: { [key: string]: TeamForm[] };
  nextOpponent: { [key: string]: Array<NextOpponentClass | string> };
  tableHeader: TableHeader;
}

export interface TableData {
  ccode: Country;
  leagueId: number;
  pageUrl: string;
  leagueName: NameElement;
  legend: Legend[];
  ongoing?: any[];
  table?: PurpleTable;
  tableFilterTypes?: string[];
  composite: boolean;
  tables?: FluffyTable[];
}

export interface Legend {
  title: Title;
  tKey: TKey;
  color: Color;
  indices: number[];
}

export enum Color {
  Ff4646 = "#FF4646",
  Ffd908 = "#FFD908",
  The0046A7 = "#0046A7",
  The2Ad572 = "#2AD572",
}

export enum TKey {
  Championsleague = "championsleague",
  Europaleague = "europaleague",
  Qualeuropaconffinalstage = "qualeuropaconffinalstage",
  QualificationNextStage = "qualification_next_stage",
  Relegation = "relegation",
}

export enum Title {
  ChampionsLeague = "Champions League",
  EuropaLeague = "Europa League",
  QualificationNextStage = "Qualification next stage",
  QualificationToEuropaConferenceLeagueFinalStage = "Qualification to Europa Conference League Final Stage",
  Relegation = "Relegation",
}

export interface PurpleTable {
  all: All[];
  home: All[];
  away: All[];
  form: All[];
}

export interface All {
  name: string;
  shortName: string;
  id: number;
  pageUrl: string;
  featuredInMatch: boolean;
  deduction?: number | null;
  ongoing: null;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  scoresStr: string;
  goalConDiff: number;
  pts: number;
  idx: number;
  qualColor: Color | null;
}

export interface FluffyTable {
  ccode: Country;
  leagueId: number;
  pageUrl: string;
  leagueName: string;
  legend: Legend[];
  table: TableTable;
  ongoing: any[];
}

export interface TableTable {
  all: All[];
  home: All[];
  away: All[];
}

export interface NextOpponentClass {
  id: string;
  name: string;
  shortName: string;
}

export interface TableHeader {
  staticTableHeaders: string[];
  dynamicTableHeaders: string[];
}

export interface TeamForm {
  result: number;
  resultString: ResultString;
  imageUrl: string;
  linkToMatch: string;
  date: DateClass | null;
  teamPageUrl: string;
  tooltipText: TooltipText;
  score: string;
  home: TeamFormAway;
  away: TeamFormAway;
}

export interface TeamFormAway {
  isOurTeam: boolean;
}

export interface DateClass {
  utcTime: Date;
}

export enum ResultString {
  D = "D",
  L = "L",
  W = "W",
}

export interface TooltipText {
  utcTime: Date;
  homeTeam: string;
  homeTeamId: number;
  homeScore: number;
  awayTeam: string;
  awayTeamId: number;
  awayScore: number;
}

export interface TeamColors {
  darkMode: string;
  lightMode: string;
  fontDarkMode: FontMode;
  fontLightMode: FontMode;
}

export enum FontMode {
  RGBA25525525510 = "rgba(255, 255, 255, 1.0)",
  RGBA29292910 = "rgba(29, 29, 29, 1.0)",
}

export interface TopPlayers {
  byRating: By;
  byGoals: By;
  byAssists: By;
  seeAllUrl: string;
}

export interface By {
  players: Participant[];
  seeAllLink: string;
}

export interface Participant {
  id: number;
  name: string;
  goals: null | string;
  assists: null | string;
  rating: null | string;
  positionId: number | null;
  ccode: null | string;
  cname: null | string;
  teamId: number | null;
  teamName: ShortNameEnum | null;
  showRole: boolean | null;
  showCountryFlag: boolean | null;
  showTeamFlag: boolean;
  excludeFromRanking: boolean;
  rcards?: string;
  ycards?: string;
  teamColors?: TeamColors;
  injured?: boolean;
  rank?: number;
  value?: number | string;
}

export interface Venue {
  widget: Widget;
  statPairs: Array<Array<number | string>>;
}

export interface Widget {
  name: string;
  location: string[];
  city: ShortNameEnum;
}

export interface SquadClass {
  id: number;
  name: string;
  ccode: string;
  cname: string;
  role?: Role;
  isInjured?: boolean;
}

export enum Role {
  Attackers = "attackers",
  Defenders = "defenders",
  Goalkeepers = "goalkeepers",
  Midfielders = "midfielders",
}

export interface TeamStats {
  teamId: string;
  primaryLeagueId: number;
  primarySeasonId: string;
  players: Player[];
  teams: TeamElement[];
  tournamentId: string;
  tournamentSeasons: TournamentSeason[];
}

export interface Player {
  header: string;
  participant: Participant;
  fetchAllUrl: string;
  topThree: Participant[];
  order: number;
  name: string;
  localizedTitleId: string;
}

export interface TeamElement {
  header: string;
  localizedTitleId: string;
  participant: Participant;
  fetchAllUrl: string;
  topThree: Participant[];
  order: number;
  stat: string;
}

export interface TournamentSeason {
  name: string;
  season: string;
  leagueName: NameElement;
  tournamentId: string;
  parentLeagueId: string;
}

export interface Transfers {
  type: string;
  data: TransfersData;
}

export interface TransfersData {
  "Players in": Players[];
  "Players out": Players[];
  "Contract extension": ContractExtension[];
}

export interface ContractExtension {
  name: string;
  playerId: number;
  position: Position;
  transferDate: Date;
  transferText: Array<ShortNameEnum | number | null>;
  fromClub: ShortNameEnum;
  fromClubId: number;
  toClub: ShortNameEnum;
  toClubId: number;
  fee: null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: Date;
  toDate: Date;
  marketValue: string;
}

export interface Position {
  label: string;
  key: string;
}

export interface TransferType {
  text: Text;
  localizationKey: LocalizationKey;
}

export enum LocalizationKey {
  Contract = "contract",
  OnLoan = "on_loan",
}

export enum Text {
  Contract = "contract",
  OnLoan = "on loan",
}

export interface Players {
  name: string;
  playerId: number;
  position: Position | null;
  transferDate: Date;
  transferText: Array<number | string>;
  fromClub: string;
  fromClubId: number;
  toClub: string;
  toClubId: number;
  fee: Fee | null;
  transferType: TransferType;
  contractExtension: boolean;
  onLoan: boolean;
  fromDate: Date;
  toDate?: Date;
  marketValue?: string;
}

export interface Fee {
  feeText: FeeText;
  localizedFeeText: LocalizedFeeText;
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTeam(json: string): Team {
    return cast(JSON.parse(json), r("Team"));
  }

  public static teamToJson(value: Team): string {
    return JSON.stringify(uncast(value, r("Team")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw new CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
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
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
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
      } catch (_) { }
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map(el => transform(el, typ, getProps));
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

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
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
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
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
  "Team": o([
    { json: "tabs", js: "tabs", typ: a("") },
    { json: "allAvailableSeasons", js: "allAvailableSeasons", typ: a("any") },
    { json: "details", js: "details", typ: r("Details") },
    { json: "seostr", js: "seostr", typ: "" },
    { json: "QAData", js: "QAData", typ: a(r("QADatum")) },
    { json: "table", js: "table", typ: a(r("OverviewTable")) },
    { json: "transfers", js: "transfers", typ: r("Transfers") },
    { json: "overview", js: "overview", typ: r("Overview") },
    { json: "stats", js: "stats", typ: r("TeamStats") },
    { json: "fixtures", js: "fixtures", typ: r("TeamFixtures") },
    { json: "squad", js: "squad", typ: a(a(u(a(r("SquadClass")), ""))) },
    { json: "history", js: "history", typ: r("History") },
  ], false),
  "QADatum": o([
    { json: "question", js: "question", typ: "" },
    { json: "answer", js: "answer", typ: "" },
  ], false),
  "Details": o([
    { json: "id", js: "id", typ: 0 },
    { json: "type", js: "type", typ: "" },
    { json: "name", js: "name", typ: r("ShortNameEnum") },
    { json: "latestSeason", js: "latestSeason", typ: "" },
    { json: "shortName", js: "shortName", typ: r("ShortNameEnum") },
    { json: "country", js: "country", typ: r("Country") },
    { json: "faqJSONLD", js: "faqJSONLD", typ: r("FAQJSONLD") },
    { json: "sportsTeamJSONLD", js: "sportsTeamJSONLD", typ: r("SportsTeamJSONLD") },
    { json: "breadcrumbJSONLD", js: "breadcrumbJSONLD", typ: r("BreadcrumbJSONLD") },
    { json: "canSyncCalendar", js: "canSyncCalendar", typ: true },
  ], false),
  "BreadcrumbJSONLD": o([
    { json: "@context", js: "@context", typ: "" },
    { json: "@type", js: "@type", typ: "" },
    { json: "itemListElement", js: "itemListElement", typ: a(r("ItemListElement")) },
  ], false),
  "ItemListElement": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "position", js: "position", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "item", js: "item", typ: "" },
  ], false),
  "FAQJSONLD": o([
    { json: "@context", js: "@context", typ: "" },
    { json: "@type", js: "@type", typ: "" },
    { json: "mainEntity", js: "mainEntity", typ: a(r("MainEntity")) },
  ], false),
  "MainEntity": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "acceptedAnswer", js: "acceptedAnswer", typ: r("AcceptedAnswer") },
  ], false),
  "AcceptedAnswer": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "text", js: "text", typ: "" },
  ], false),
  "SportsTeamJSONLD": o([
    { json: "@context", js: "@context", typ: "" },
    { json: "@type", js: "@type", typ: "" },
    { json: "name", js: "name", typ: r("ShortNameEnum") },
    { json: "sport", js: "sport", typ: "" },
    { json: "gender", js: "gender", typ: "" },
    { json: "logo", js: "logo", typ: "" },
    { json: "url", js: "url", typ: "" },
    { json: "coach", js: "coach", typ: r("Coach") },
    { json: "athlete", js: "athlete", typ: a(r("Coach")) },
    { json: "location", js: "location", typ: r("Location") },
    { json: "memberOf", js: "memberOf", typ: r("MemberOf") },
  ], false),
  "Coach": o([
    { json: "@context", js: "@context", typ: "" },
    { json: "@type", js: "@type", typ: r("CoachType") },
    { json: "name", js: "name", typ: "" },
    { json: "url", js: "url", typ: "" },
    { json: "nationality", js: "nationality", typ: u(r("Nationality"), null) },
    { json: "affiliation", js: "affiliation", typ: null },
    { json: "height", js: "height", typ: null },
    { json: "weight", js: "weight", typ: null },
  ], false),
  "Nationality": o([
    { json: "@type", js: "@type", typ: r("NationalityType") },
    { json: "name", js: "name", typ: "" },
  ], false),
  "Location": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "address", js: "address", typ: r("Address") },
    { json: "geo", js: "geo", typ: r("Geo") },
  ], false),
  "Address": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "addressCountry", js: "addressCountry", typ: r("AddressCountry") },
    { json: "addressLocality", js: "addressLocality", typ: r("ShortNameEnum") },
  ], false),
  "Geo": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "latitude", js: "latitude", typ: "" },
    { json: "longitude", js: "longitude", typ: "" },
  ], false),
  "MemberOf": o([
    { json: "@type", js: "@type", typ: "" },
    { json: "name", js: "name", typ: r("NameElement") },
    { json: "url", js: "url", typ: "" },
  ], false),
  "TeamFixtures": o([
    { json: "allFixtures", js: "allFixtures", typ: r("AllFixtures") },
    { json: "previousFixturesUrl", js: "previousFixturesUrl", typ: "" },
    { json: "fixtures", js: "fixtures", typ: r("FixturesFixtures") },
  ], false),
  "AllFixtures": o([
    { json: "fixtures", js: "fixtures", typ: a(r("LastMatch")) },
    { json: "nextMatch", js: "nextMatch", typ: r("NextMatch") },
    { json: "lastMatch", js: "lastMatch", typ: r("LastMatch") },
  ], false),
  "LastMatch": o([
    { json: "id", js: "id", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "opponent", js: "opponent", typ: r("OpponentClass") },
    { json: "home", js: "home", typ: r("OpponentClass") },
    { json: "away", js: "away", typ: r("OpponentClass") },
    { json: "displayTournament", js: "displayTournament", typ: true },
    { json: "lnameArr", js: "lnameArr", typ: a(r("LnameArr")) },
    { json: "result", js: "result", typ: u(undefined, 0) },
    { json: "notStarted", js: "notStarted", typ: true },
    { json: "tournament", js: "tournament", typ: r("LastMatchTournament") },
    { json: "status", js: "status", typ: r("LastMatchStatus") },
  ], false),
  "OpponentClass": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "score", js: "score", typ: 0 },
  ], false),
  "LastMatchStatus": o([
    { json: "utcTime", js: "utcTime", typ: Date },
    { json: "finished", js: "finished", typ: true },
    { json: "started", js: "started", typ: true },
    { json: "cancelled", js: "cancelled", typ: true },
    { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
    { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
    { json: "timezone", js: "timezone", typ: u(undefined, null) },
  ], false),
  "Reason": o([
    { json: "short", js: "short", typ: r("Short") },
    { json: "shortKey", js: "shortKey", typ: r("ShortKey") },
    { json: "long", js: "long", typ: r("Long") },
    { json: "longKey", js: "longKey", typ: r("LongKey") },
  ], false),
  "LastMatchTournament": o([
    { json: "name", js: "name", typ: r("NameElement") },
    { json: "leagueId", js: "leagueId", typ: 0 },
  ], false),
  "NextMatch": o([
    { json: "id", js: "id", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "opponent", js: "opponent", typ: r("OpponentClass") },
    { json: "home", js: "home", typ: r("OpponentClass") },
    { json: "away", js: "away", typ: r("OpponentClass") },
    { json: "displayTournament", js: "displayTournament", typ: true },
    { json: "lnameArr", js: "lnameArr", typ: a(r("LnameArr")) },
    { json: "notStarted", js: "notStarted", typ: true },
    { json: "tournament", js: "tournament", typ: r("LastMatchTournament") },
    { json: "status", js: "status", typ: r("NextMatchStatus") },
  ], false),
  "NextMatchStatus": o([
    { json: "utcTime", js: "utcTime", typ: Date },
    { json: "timezone", js: "timezone", typ: u(undefined, null) },
    { json: "started", js: "started", typ: true },
    { json: "cancelled", js: "cancelled", typ: true },
    { json: "finished", js: "finished", typ: true },
  ], false),
  "FixturesFixtures": o([
    { json: "July 2023", js: "July 2023", typ: a(r("The2023")) },
    { json: "August 2023", js: "August 2023", typ: a(r("The2023")) },
    { json: "September 2023", js: "September 2023", typ: a(r("The2023")) },
    { json: "October 2023", js: "October 2023", typ: a(r("The2023")) },
    { json: "November 2023", js: "November 2023", typ: a(r("The2023")) },
    { json: "December 2023", js: "December 2023", typ: a(r("The2023")) },
    { json: "January 2024", js: "January 2024", typ: a(r("The2024")) },
    { json: "February 2024", js: "February 2024", typ: a(r("The2024")) },
    { json: "March 2024", js: "March 2024", typ: a(r("The2024")) },
    { json: "April 2024", js: "April 2024", typ: a(r("The2024")) },
    { json: "May 2024", js: "May 2024", typ: a(r("The2024")) },
  ], false),
  "The2024": o([
    { json: "id", js: "id", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "monthYearKey", js: "monthYearKey", typ: "" },
    { json: "opponent", js: "opponent", typ: r("OpponentClass") },
    { json: "home", js: "home", typ: r("OpponentClass") },
    { json: "away", js: "away", typ: r("OpponentClass") },
    { json: "displayTournament", js: "displayTournament", typ: true },
    { json: "isPastMatch", js: "isPastMatch", typ: true },
    { json: "lastPlayedMatch", js: "lastPlayedMatch", typ: true },
    { json: "lnameArr", js: "lnameArr", typ: a(r("LnameArr")) },
    { json: "notStarted", js: "notStarted", typ: true },
    { json: "tournament", js: "tournament", typ: r("April2024_Tournament") },
    { json: "status", js: "status", typ: r("NextMatchStatus") },
  ], false),
  "April2024_Tournament": o([
    { json: "name", js: "name", typ: r("NameElement") },
  ], false),
  "The2023": o([
    { json: "id", js: "id", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "monthYearKey", js: "monthYearKey", typ: "" },
    { json: "opponent", js: "opponent", typ: r("OpponentClass") },
    { json: "home", js: "home", typ: r("OpponentClass") },
    { json: "away", js: "away", typ: r("OpponentClass") },
    { json: "displayTournament", js: "displayTournament", typ: true },
    { json: "isPastMatch", js: "isPastMatch", typ: true },
    { json: "lastPlayedMatch", js: "lastPlayedMatch", typ: true },
    { json: "lnameArr", js: "lnameArr", typ: a(r("LnameArr")) },
    { json: "result", js: "result", typ: u(undefined, 0) },
    { json: "notStarted", js: "notStarted", typ: true },
    { json: "tournament", js: "tournament", typ: r("April2024_Tournament") },
    { json: "status", js: "status", typ: r("LastMatchStatus") },
  ], false),
  "History": o([
    { json: "trophyList", js: "trophyList", typ: a(r("TrophyList")) },
    { json: "historicalTableData", js: "historicalTableData", typ: r("HistoricalTableData") },
    { json: "teamColor", js: "teamColor", typ: "" },
    { json: "teamColorMap", js: "teamColorMap", typ: r("TeamColorMap") },
    { json: "tables", js: "tables", typ: r("Tables") },
  ], false),
  "HistoricalTableData": o([
    { json: "divisions", js: "divisions", typ: a(r("Division")) },
    { json: "ranks", js: "ranks", typ: a(r("Rank")) },
    { json: "isValid", js: "isValid", typ: true },
  ], false),
  "Division": o([
    { json: "divisionRank", js: "divisionRank", typ: 0 },
    { json: "name", js: "name", typ: r("NameElement") },
    { json: "templateId", js: "templateId", typ: 0 },
  ], false),
  "Rank": o([
    { json: "stageId", js: "stageId", typ: 0 },
    { json: "tournamentName", js: "tournamentName", typ: r("NameElement") },
    { json: "tournamentId", js: "tournamentId", typ: 0 },
    { json: "templateId", js: "templateId", typ: 0 },
    { json: "seasonName", js: "seasonName", typ: "" },
    { json: "position", js: "position", typ: 0 },
    { json: "numberOfTeams", js: "numberOfTeams", typ: 0 },
    { json: "stats", js: "stats", typ: r("RankStats") },
    { json: "tableLink", js: "tableLink", typ: "" },
    { json: "isConsecutive", js: "isConsecutive", typ: true },
  ], false),
  "RankStats": o([
    { json: "points", js: "points", typ: 0 },
    { json: "wins", js: "wins", typ: 0 },
    { json: "draws", js: "draws", typ: 0 },
    { json: "loss", js: "loss", typ: 0 },
  ], false),
  "Tables": o([
    { json: "current", js: "current", typ: a(r("Current")) },
    { json: "historic", js: "historic", typ: a(r("Current")) },
  ], false),
  "Current": o([
    { json: "link", js: "link", typ: a(r("Link")) },
  ], false),
  "Link": o([
    { json: "_", js: "_", typ: "" },
    { json: "name", js: "name", typ: a(r("NameElement")) },
    { json: "ccode", js: "ccode", typ: a(r("Country")) },
    { json: "season", js: "season", typ: a("") },
    { json: "stage_id", js: "stage_id", typ: a("") },
    { json: "tournament_id", js: "tournament_id", typ: a("") },
    { json: "template_id", js: "template_id", typ: a("") },
    { json: "league_id", js: "league_id", typ: a("") },
  ], false),
  "TeamColorMap": o([
    { json: "color", js: "color", typ: "" },
    { json: "colorAlternate", js: "colorAlternate", typ: "" },
    { json: "colorAway", js: "colorAway", typ: "" },
    { json: "colorAwayAlternate", js: "colorAwayAlternate", typ: "" },
  ], false),
  "TrophyList": o([
    { json: "name", js: "name", typ: a("") },
    { json: "tournamentTemplateId", js: "tournamentTemplateId", typ: a("") },
    { json: "area", js: "area", typ: a(r("AddressCountry")) },
    { json: "ccode", js: "ccode", typ: a(r("Country")) },
    { json: "won", js: "won", typ: a("") },
    { json: "runnerup", js: "runnerup", typ: a("") },
    { json: "season_won", js: "season_won", typ: a("") },
    { json: "season_runnerup", js: "season_runnerup", typ: a("") },
  ], false),
  "Overview": o([
    { json: "season", js: "season", typ: "" },
    { json: "selectedSeason", js: "selectedSeason", typ: "" },
    { json: "table", js: "table", typ: a(r("OverviewTable")) },
    { json: "topPlayers", js: "topPlayers", typ: r("TopPlayers") },
    { json: "venue", js: "venue", typ: r("Venue") },
    { json: "overviewFixtures", js: "overviewFixtures", typ: a(r("LastMatch")) },
    { json: "nextMatch", js: "nextMatch", typ: r("NextMatch") },
    { json: "lastMatch", js: "lastMatch", typ: r("LastMatch") },
    { json: "teamForm", js: "teamForm", typ: a(r("TeamForm")) },
    { json: "previousFixturesUrl", js: "previousFixturesUrl", typ: "" },
    { json: "teamColors", js: "teamColors", typ: r("TeamColors") },
  ], false),
  "OverviewTable": o([
    { json: "data", js: "data", typ: r("TableData") },
    { json: "teamForm", js: "teamForm", typ: m(a(r("TeamForm"))) },
    { json: "nextOpponent", js: "nextOpponent", typ: m(a(u(r("NextOpponentClass"), ""))) },
    { json: "tableHeader", js: "tableHeader", typ: r("TableHeader") },
  ], false),
  "TableData": o([
    { json: "ccode", js: "ccode", typ: r("Country") },
    { json: "leagueId", js: "leagueId", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "leagueName", js: "leagueName", typ: r("NameElement") },
    { json: "legend", js: "legend", typ: a(r("Legend")) },
    { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
    { json: "table", js: "table", typ: u(undefined, r("PurpleTable")) },
    { json: "tableFilterTypes", js: "tableFilterTypes", typ: u(undefined, a("")) },
    { json: "composite", js: "composite", typ: true },
    { json: "tables", js: "tables", typ: u(undefined, a(r("FluffyTable"))) },
  ], false),
  "Legend": o([
    { json: "title", js: "title", typ: r("Title") },
    { json: "tKey", js: "tKey", typ: r("TKey") },
    { json: "color", js: "color", typ: r("Color") },
    { json: "indices", js: "indices", typ: a(0) },
  ], false),
  "PurpleTable": o([
    { json: "all", js: "all", typ: a(r("All")) },
    { json: "home", js: "home", typ: a(r("All")) },
    { json: "away", js: "away", typ: a(r("All")) },
    { json: "form", js: "form", typ: a(r("All")) },
  ], false),
  "All": o([
    { json: "name", js: "name", typ: "" },
    { json: "shortName", js: "shortName", typ: "" },
    { json: "id", js: "id", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "featuredInMatch", js: "featuredInMatch", typ: true },
    { json: "deduction", js: "deduction", typ: u(undefined, u(0, null)) },
    { json: "ongoing", js: "ongoing", typ: null },
    { json: "played", js: "played", typ: 0 },
    { json: "wins", js: "wins", typ: 0 },
    { json: "draws", js: "draws", typ: 0 },
    { json: "losses", js: "losses", typ: 0 },
    { json: "scoresStr", js: "scoresStr", typ: "" },
    { json: "goalConDiff", js: "goalConDiff", typ: 0 },
    { json: "pts", js: "pts", typ: 0 },
    { json: "idx", js: "idx", typ: 0 },
    { json: "qualColor", js: "qualColor", typ: u(r("Color"), null) },
  ], false),
  "FluffyTable": o([
    { json: "ccode", js: "ccode", typ: r("Country") },
    { json: "leagueId", js: "leagueId", typ: 0 },
    { json: "pageUrl", js: "pageUrl", typ: "" },
    { json: "leagueName", js: "leagueName", typ: "" },
    { json: "legend", js: "legend", typ: a(r("Legend")) },
    { json: "table", js: "table", typ: r("TableTable") },
    { json: "ongoing", js: "ongoing", typ: a("any") },
  ], false),
  "TableTable": o([
    { json: "all", js: "all", typ: a(r("All")) },
    { json: "home", js: "home", typ: a(r("All")) },
    { json: "away", js: "away", typ: a(r("All")) },
  ], false),
  "NextOpponentClass": o([
    { json: "id", js: "id", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "shortName", js: "shortName", typ: "" },
  ], false),
  "TableHeader": o([
    { json: "staticTableHeaders", js: "staticTableHeaders", typ: a("") },
    { json: "dynamicTableHeaders", js: "dynamicTableHeaders", typ: a("") },
  ], false),
  "TeamForm": o([
    { json: "result", js: "result", typ: 0 },
    { json: "resultString", js: "resultString", typ: r("ResultString") },
    { json: "imageUrl", js: "imageUrl", typ: "" },
    { json: "linkToMatch", js: "linkToMatch", typ: "" },
    { json: "date", js: "date", typ: u(r("DateClass"), null) },
    { json: "teamPageUrl", js: "teamPageUrl", typ: "" },
    { json: "tooltipText", js: "tooltipText", typ: r("TooltipText") },
    { json: "score", js: "score", typ: "" },
    { json: "home", js: "home", typ: r("TeamFormAway") },
    { json: "away", js: "away", typ: r("TeamFormAway") },
  ], false),
  "TeamFormAway": o([
    { json: "isOurTeam", js: "isOurTeam", typ: true },
  ], false),
  "DateClass": o([
    { json: "utcTime", js: "utcTime", typ: Date },
  ], false),
  "TooltipText": o([
    { json: "utcTime", js: "utcTime", typ: Date },
    { json: "homeTeam", js: "homeTeam", typ: "" },
    { json: "homeTeamId", js: "homeTeamId", typ: 0 },
    { json: "homeScore", js: "homeScore", typ: 0 },
    { json: "awayTeam", js: "awayTeam", typ: "" },
    { json: "awayTeamId", js: "awayTeamId", typ: 0 },
    { json: "awayScore", js: "awayScore", typ: 0 },
  ], false),
  "TeamColors": o([
    { json: "darkMode", js: "darkMode", typ: "" },
    { json: "lightMode", js: "lightMode", typ: "" },
    { json: "fontDarkMode", js: "fontDarkMode", typ: r("FontMode") },
    { json: "fontLightMode", js: "fontLightMode", typ: r("FontMode") },
  ], false),
  "TopPlayers": o([
    { json: "byRating", js: "byRating", typ: r("By") },
    { json: "byGoals", js: "byGoals", typ: r("By") },
    { json: "byAssists", js: "byAssists", typ: r("By") },
    { json: "seeAllUrl", js: "seeAllUrl", typ: "" },
  ], false),
  "By": o([
    { json: "players", js: "players", typ: a(r("Participant")) },
    { json: "seeAllLink", js: "seeAllLink", typ: "" },
  ], false),
  "Participant": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "goals", js: "goals", typ: u(null, "") },
    { json: "assists", js: "assists", typ: u(null, "") },
    { json: "rating", js: "rating", typ: u(null, "") },
    { json: "positionId", js: "positionId", typ: u(0, null) },
    { json: "ccode", js: "ccode", typ: u(null, "") },
    { json: "cname", js: "cname", typ: u(null, "") },
    { json: "teamId", js: "teamId", typ: u(0, null) },
    { json: "teamName", js: "teamName", typ: u(r("ShortNameEnum"), null) },
    { json: "showRole", js: "showRole", typ: u(true, null) },
    { json: "showCountryFlag", js: "showCountryFlag", typ: u(true, null) },
    { json: "showTeamFlag", js: "showTeamFlag", typ: true },
    { json: "excludeFromRanking", js: "excludeFromRanking", typ: true },
    { json: "rcards", js: "rcards", typ: u(undefined, "") },
    { json: "ycards", js: "ycards", typ: u(undefined, "") },
    { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
    { json: "injured", js: "injured", typ: u(undefined, true) },
    { json: "rank", js: "rank", typ: u(undefined, 0) },
    { json: "value", js: "value", typ: u(undefined, u(3.14, "")) },
  ], false),
  "Venue": o([
    { json: "widget", js: "widget", typ: r("Widget") },
    { json: "statPairs", js: "statPairs", typ: a(a(u(0, ""))) },
  ], false),
  "Widget": o([
    { json: "name", js: "name", typ: "" },
    { json: "location", js: "location", typ: a("") },
    { json: "city", js: "city", typ: r("ShortNameEnum") },
  ], false),
  "SquadClass": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "ccode", js: "ccode", typ: "" },
    { json: "cname", js: "cname", typ: "" },
    { json: "role", js: "role", typ: u(undefined, r("Role")) },
    { json: "isInjured", js: "isInjured", typ: u(undefined, true) },
  ], false),
  "TeamStats": o([
    { json: "teamId", js: "teamId", typ: "" },
    { json: "primaryLeagueId", js: "primaryLeagueId", typ: 0 },
    { json: "primarySeasonId", js: "primarySeasonId", typ: "" },
    { json: "players", js: "players", typ: a(r("Player")) },
    { json: "teams", js: "teams", typ: a(r("TeamElement")) },
    { json: "tournamentId", js: "tournamentId", typ: "" },
    { json: "tournamentSeasons", js: "tournamentSeasons", typ: a(r("TournamentSeason")) },
  ], false),
  "Player": o([
    { json: "header", js: "header", typ: "" },
    { json: "participant", js: "participant", typ: r("Participant") },
    { json: "fetchAllUrl", js: "fetchAllUrl", typ: "" },
    { json: "topThree", js: "topThree", typ: a(r("Participant")) },
    { json: "order", js: "order", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "localizedTitleId", js: "localizedTitleId", typ: "" },
  ], false),
  "TeamElement": o([
    { json: "header", js: "header", typ: "" },
    { json: "localizedTitleId", js: "localizedTitleId", typ: "" },
    { json: "participant", js: "participant", typ: r("Participant") },
    { json: "fetchAllUrl", js: "fetchAllUrl", typ: "" },
    { json: "topThree", js: "topThree", typ: a(r("Participant")) },
    { json: "order", js: "order", typ: 0 },
    { json: "stat", js: "stat", typ: "" },
  ], false),
  "TournamentSeason": o([
    { json: "name", js: "name", typ: "" },
    { json: "season", js: "season", typ: "" },
    { json: "leagueName", js: "leagueName", typ: r("NameElement") },
    { json: "tournamentId", js: "tournamentId", typ: "" },
    { json: "parentLeagueId", js: "parentLeagueId", typ: "" },
  ], false),
  "Transfers": o([
    { json: "type", js: "type", typ: "" },
    { json: "data", js: "data", typ: r("TransfersData") },
  ], false),
  "TransfersData": o([
    { json: "Players in", js: "Players in", typ: a(r("Players")) },
    { json: "Players out", js: "Players out", typ: a(r("Players")) },
    { json: "Contract extension", js: "Contract extension", typ: a(r("ContractExtension")) },
  ], false),
  "ContractExtension": o([
    { json: "name", js: "name", typ: "" },
    { json: "playerId", js: "playerId", typ: 0 },
    { json: "position", js: "position", typ: r("Position") },
    { json: "transferDate", js: "transferDate", typ: Date },
    { json: "transferText", js: "transferText", typ: a(u(r("ShortNameEnum"), 0, null)) },
    { json: "fromClub", js: "fromClub", typ: r("ShortNameEnum") },
    { json: "fromClubId", js: "fromClubId", typ: 0 },
    { json: "toClub", js: "toClub", typ: r("ShortNameEnum") },
    { json: "toClubId", js: "toClubId", typ: 0 },
    { json: "fee", js: "fee", typ: null },
    { json: "transferType", js: "transferType", typ: r("TransferType") },
    { json: "contractExtension", js: "contractExtension", typ: true },
    { json: "onLoan", js: "onLoan", typ: true },
    { json: "fromDate", js: "fromDate", typ: Date },
    { json: "toDate", js: "toDate", typ: Date },
    { json: "marketValue", js: "marketValue", typ: "" },
  ], false),
  "Position": o([
    { json: "label", js: "label", typ: "" },
    { json: "key", js: "key", typ: "" },
  ], false),
  "TransferType": o([
    { json: "text", js: "text", typ: r("Text") },
    { json: "localizationKey", js: "localizationKey", typ: r("LocalizationKey") },
  ], false),
  "Players": o([
    { json: "name", js: "name", typ: "" },
    { json: "playerId", js: "playerId", typ: 0 },
    { json: "position", js: "position", typ: u(r("Position"), null) },
    { json: "transferDate", js: "transferDate", typ: Date },
    { json: "transferText", js: "transferText", typ: a(u(0, "")) },
    { json: "fromClub", js: "fromClub", typ: "" },
    { json: "fromClubId", js: "fromClubId", typ: 0 },
    { json: "toClub", js: "toClub", typ: "" },
    { json: "toClubId", js: "toClubId", typ: 0 },
    { json: "fee", js: "fee", typ: u(r("Fee"), null) },
    { json: "transferType", js: "transferType", typ: r("TransferType") },
    { json: "contractExtension", js: "contractExtension", typ: true },
    { json: "onLoan", js: "onLoan", typ: true },
    { json: "fromDate", js: "fromDate", typ: Date },
    { json: "toDate", js: "toDate", typ: u(undefined, Date) },
    { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
  ], false),
  "Fee": o([
    { json: "feeText", js: "feeText", typ: r("FeeText") },
    { json: "localizedFeeText", js: "localizedFeeText", typ: r("LocalizedFeeText") },
    { json: "value", js: "value", typ: u(undefined, "") },
  ], false),
  "Country": [
    "ENG",
    "INT",
  ],
  "ShortNameEnum": [
    "Liverpool",
  ],
  "CoachType": [
    "Person",
  ],
  "NationalityType": [
    "Country",
  ],
  "AddressCountry": [
    "England",
    "Europe",
    "World",
  ],
  "NameElement": [
    "Champions League",
    "Club Friendlies",
    "EFL Cup",
    "Europa League",
    "FA Cup",
    "Premier League",
  ],
  "LnameArr": [
    "A",
    " | Club Friendlies",
    " | EFL Cup",
    " | Europa League",
    " | FA Cup",
    "H",
    " | Premier League",
  ],
  "Long": [
    "Full-Time",
  ],
  "LongKey": [
    "finished",
  ],
  "Short": [
    "FT",
  ],
  "ShortKey": [
    "fulltime_short",
  ],
  "Color": [
    "#FF4646",
    "#FFD908",
    "#0046A7",
    "#2AD572",
  ],
  "TKey": [
    "championsleague",
    "europaleague",
    "qualeuropaconffinalstage",
    "qualification_next_stage",
    "relegation",
  ],
  "Title": [
    "Champions League",
    "Europa League",
    "Qualification next stage",
    "Qualification to Europa Conference League Final Stage",
    "Relegation",
  ],
  "ResultString": [
    "D",
    "L",
    "W",
  ],
  "FontMode": [
    "rgba(255, 255, 255, 1.0)",
    "rgba(29, 29, 29, 1.0)",
  ],
  "Role": [
    "attackers",
    "defenders",
    "goalkeepers",
    "midfielders",
  ],
  "LocalizationKey": [
    "contract",
    "on_loan",
  ],
  "Text": [
    "contract",
    "on loan",
  ],
  "FeeText": [
    "fee",
    "free transfer",
    "on loan",
  ],
  "LocalizedFeeText": [
    "on_loan",
    "transfer_fee",
    "transfer_type_free_transfer",
  ],
};
