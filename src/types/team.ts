// To parse this data:
//
//   import { Convert, Team } from "./file";
//
//   const team = Convert.toTeam(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { CastingError } from "../type-cast-error";

export interface Team {
  tabs?: string[];
  allAvailableSeasons?: any[];
  details?: Details;
  seostr?: string;
  QAData?: QADatum[];
  table?: OverviewTable[];
  transfers?: Transfers;
  overview?: Overview;
  stats?: TeamStats;
  fixtures?: TeamFixtures;
  squad?: Array<Array<SquadClass[] | string>>;
  history?: History;
}

export interface QADatum {
  question?: string;
  answer?: string;
}

export interface Details {
  id?: number;
  type?: string;
  name?: string;
  latestSeason?: string;
  shortName?: string;
  country?: Country;
  faqJSONLD?: FAQJSONLD;
  sportsTeamJSONLD?: SportsTeamJSONLD;
  breadcrumbJSONLD?: BreadcrumbJSONLD;
  canSyncCalendar?: boolean;
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

export enum Country {
  Eng = "ENG",
  Int = "INT",
}

export interface FAQJSONLD {
  "@context"?: string;
  "@type"?: string;
  mainEntity?: MainEntity[];
}

export interface MainEntity {
  "@type"?: string;
  name?: string;
  acceptedAnswer?: AcceptedAnswer;
}

export interface AcceptedAnswer {
  "@type"?: string;
  text?: string;
}

export interface SportsTeamJSONLD {
  "@context"?: string;
  "@type"?: string;
  name?: string;
  sport?: string;
  gender?: string;
  logo?: string;
  url?: string;
  coach?: Coach;
  athlete?: Coach[];
  location?: Location;
  memberOf?: MemberOf;
}

export interface Coach {
  "@context"?: string;
  "@type"?: CoachType;
  name?: string;
  url?: string;
  nationality?: Nationality | null;
  affiliation?: null;
  height?: null;
  weight?: null;
}

export enum CoachType {
  Person = "Person",
}

export interface Nationality {
  "@type"?: string;
  name?: string;
}
export interface Location {
  "@type"?: string;
  name?: string;
  address?: Address;
  geo?: Geo;
}

export interface Address {
  "@type"?: string;
  addressCountry?: string;
  addressLocality?: string;
}

export interface Geo {
  "@type"?: string;
  latitude?: string;
  longitude?: string;
}

export interface MemberOf {
  "@type"?: string;
  name?: string;
  url?: string;
}

export interface TeamFixtures {
  allFixtures?: AllFixtures;
  previousFixturesUrl?: string;
  hasOngoingMatch?: boolean;
  fixtures?: FixturesFixtures;
}

export interface AllFixtures {
  fixtures?: OverviewFixture[];
  nextMatch?: NextMatch;
  lastMatch?: LastMatch;
}

export interface OverviewFixture {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  result?: number;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: OverviewFixtureStatus;
  monthYearKey?: string;
  isPastMatch?: boolean;
  lastPlayedMatch?: boolean;
}

export interface OpponentClass {
  id?: number;
  name?: string;
  score?: number;
}

export interface OverviewFixtureStatus {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
  timezone?: null;
}

export interface Reason {
  short?: Short;
  shortKey?: ShortKey;
  long?: Long;
  longKey?: LongKey;
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

export interface Tournament {
  name?: string;
  leagueId?: number;
}

export interface LastMatch {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  result?: number;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: OverviewFixtureStatus;
}

export interface NextMatch {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: NextMatchStatus;
}

export interface NextMatchStatus {
  utcTime?: Date;
  timezone?: null;
  started?: boolean;
  cancelled?: boolean;
  finished?: boolean;
}

export interface FixturesFixtures {
  "July 2023"?: OverviewFixture[];
  "August 2023"?: OverviewFixture[];
  "September 2023"?: OverviewFixture[];
  "October 2023"?: OverviewFixture[];
  "November 2023"?: OverviewFixture[];
  "December 2023"?: OverviewFixture[];
  "January 2024"?: The2024[];
  "February 2024"?: The2024[];
  "March 2024"?: The2024[];
  "April 2024"?: The2024[];
  "May 2024"?: The2024[];
}

export interface The2024 {
  id?: number;
  pageUrl?: string;
  monthYearKey?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  isPastMatch?: boolean;
  lastPlayedMatch?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: NextMatchStatus;
}

export interface History {
  trophyList?: TrophyList[];
  historicalTableData?: HistoricalTableData;
  teamColor?: string;
  teamColorMap?: TeamColorMap;
  tables?: Tables;
}

export interface HistoricalTableData {
  divisions?: Division[];
  ranks?: Rank[];
  isValid?: boolean;
}

export interface Division {
  divisionRank?: number;
  name?: string;
  templateId?: number;
}

export interface Rank {
  stageId?: number;
  tournamentName?: string;
  tournamentId?: number;
  templateId?: number;
  seasonName?: string;
  position?: number;
  numberOfTeams?: number;
  stats?: RankStats;
  tableLink?: string;
  isConsecutive?: boolean;
}

export interface RankStats {
  points?: number;
  wins?: number;
  draws?: number;
  loss?: number;
}

export interface Tables {
  current?: Current[];
  historic?: Current[];
}

export interface Current {
  link?: Link[];
}

export interface Link {
  _?: string;
  name?: string[];
  ccode?: string[];
  season?: string[];
  stage_id?: string[];
  tournament_id?: string[];
  template_id?: string[];
  league_id?: string[];
}

export interface TeamColorMap {
  color?: string;
  colorAlternate?: string;
  colorAway?: string;
  colorAwayAlternate?: string;
}

export interface TrophyList {
  name?: string[];
  tournamentTemplateId?: string[];
  area?: string[];
  ccode?: string[];
  won?: string[];
  runnerup?: string[];
  season_won?: string[];
  season_runnerup?: string[];
}

export interface Overview {
  season?: string;
  selectedSeason?: string;
  table?: OverviewTable[];
  topPlayers?: TopPlayers;
  venue?: Venue;
  overviewFixtures?: OverviewFixture[];
  nextMatch?: NextMatch;
  lastMatch?: LastMatch;
  teamForm?: TeamForm[];
  hasOngoingMatch?: boolean;
  previousFixturesUrl?: string;
  teamColors?: TeamColors;
}

export interface OverviewTable {
  data?: TableData;
  teamForm?: { [key: string]: TeamForm[] };
  nextOpponent?: { [key: string]: Array<NextOpponentClass | string> } | null;
  tableHeader?: TableHeader;
}

export interface TableData {
  ccode?: string;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: string;
  legend?: Legend[];
  ongoing?: any[];
  table?: PurpleTable;
  tableFilterTypes?: string[];
  composite?: boolean;
  tables?: FluffyTable[];
}

export interface Legend {
  title?: string;
  tKey?: string;
  color?: string;
  indices?: number[];
}

export interface PurpleTable {
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
  featuredInMatch?: boolean;
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
}

export interface FluffyTable {
  ccode?: string;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: string;
  legend?: Legend[];
  table?: TableTable;
  ongoing?: any[];
}

export interface TableTable {
  all?: All[];
  home?: All[];
  away?: All[];
}

export interface NextOpponentClass {
  id?: string;
  name?: string;
  shortName?: string;
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
  date?: DateClass | null;
  teamPageUrl?: string;
  tooltipText?: TooltipText;
  score?: string;
  home?: TeamFormAway;
  away?: TeamFormAway;
}

export interface TeamFormAway {
  isOurTeam?: boolean;
}

export interface DateClass {
  utcTime?: Date;
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

export interface TeamColors {
  darkMode?: string;
  lightMode?: string;
  fontDarkMode?: string;
  fontLightMode?: string;
}

export interface TopPlayers {
  byRating?: By;
  byGoals?: By;
  byAssists?: By;
  seeAllUrl?: string;
}

export interface By {
  players?: Participant[];
  seeAllLink?: string;
}

export interface Participant {
  id?: number;
  name?: string;
  goals?: null | string;
  assists?: null | string;
  rating?: null | string;
  positionId?: number | null;
  ccode?: null | string;
  cname?: null | string;
  teamId?: number | null;
  teamName?: string | null;
  showRole?: boolean | null;
  showCountryFlag?: boolean | null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  rcards?: string;
  ycards?: string;
  teamColors?: TeamColors;
  injured?: boolean;
  rank?: number;
  value?: number | string;
}

export interface Venue {
  widget?: Widget;
  statPairs?: Array<Array<number | string>>;
}

export interface Widget {
  name?: string;
  location?: string[];
  city?: string;
}

export interface SquadClass {
  id?: number;
  name?: string;
  ccode?: string;
  cname?: string;
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
  teamId?: string;
  primaryLeagueId?: number;
  primarySeasonId?: string;
  players?: Player[];
  teams?: TeamElement[];
  tournamentId?: string;
  tournamentSeasons?: TournamentSeason[];
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

export interface TeamElement {
  header?: string;
  localizedTitleId?: string;
  participant?: Participant;
  fetchAllUrl?: string;
  topThree?: Participant[];
  order?: number;
  stat?: string;
}

export interface TournamentSeason {
  name?: string;
  season?: string;
  leagueName?: string;
  tournamentId?: string;
  parentLeagueId?: string;
}

export interface Transfers {
  type?: string;
  data?: TransfersData;
}

export interface TransfersData {
  "Players in"?: Players[];
  "Players out"?: Players[];
  "Contract extension"?: ContractExtension[];
}

export interface ContractExtension {
  name?: string;
  playerId?: number;
  position?: Position;
  transferDate?: Date;
  transferText?: Array<string | number | null>;
  fromClub?: string;
  fromClubId?: number;
  toClub?: string;
  toClubId?: number;
  fee?: null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  toDate?: Date;
  marketValue?: string;
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

export interface Players {
  name?: string;
  playerId?: number;
  position?: Position | null;
  transferDate?: Date;
  transferText?: Array<number | string>;
  fromClub?: string;
  fromClubId?: number;
  toClub?: string;
  toClubId?: number;
  fee?: Fee | null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  toDate?: Date;
  marketValue?: string;
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toTeam(json: string): Team {
    return cast(JSON.parse(json), r("Team"));
  }

  public static teamToJson(value: Team): string {
    return JSON.stringify(uncast(value, r("Team")), null, 2);
  }

  public static toQADatum(json: string): QADatum {
    return cast(JSON.parse(json), r("QADatum"));
  }

  public static qADatumToJson(value: QADatum): string {
    return JSON.stringify(uncast(value, r("QADatum")), null, 2);
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

  public static toFAQJSONLD(json: string): FAQJSONLD {
    return cast(JSON.parse(json), r("FAQJSONLD"));
  }

  public static fAQJSONLDToJson(value: FAQJSONLD): string {
    return JSON.stringify(uncast(value, r("FAQJSONLD")), null, 2);
  }

  public static toMainEntity(json: string): MainEntity {
    return cast(JSON.parse(json), r("MainEntity"));
  }

  public static mainEntityToJson(value: MainEntity): string {
    return JSON.stringify(uncast(value, r("MainEntity")), null, 2);
  }

  public static toAcceptedAnswer(json: string): AcceptedAnswer {
    return cast(JSON.parse(json), r("AcceptedAnswer"));
  }

  public static acceptedAnswerToJson(value: AcceptedAnswer): string {
    return JSON.stringify(uncast(value, r("AcceptedAnswer")), null, 2);
  }

  public static toSportsTeamJSONLD(json: string): SportsTeamJSONLD {
    return cast(JSON.parse(json), r("SportsTeamJSONLD"));
  }

  public static sportsTeamJSONLDToJson(value: SportsTeamJSONLD): string {
    return JSON.stringify(uncast(value, r("SportsTeamJSONLD")), null, 2);
  }

  public static toCoach(json: string): Coach {
    return cast(JSON.parse(json), r("Coach"));
  }

  public static coachToJson(value: Coach): string {
    return JSON.stringify(uncast(value, r("Coach")), null, 2);
  }

  public static toNationality(json: string): Nationality {
    return cast(JSON.parse(json), r("Nationality"));
  }

  public static nationalityToJson(value: Nationality): string {
    return JSON.stringify(uncast(value, r("Nationality")), null, 2);
  }

  public static toLocation(json: string): Location {
    return cast(JSON.parse(json), r("Location"));
  }

  public static locationToJson(value: Location): string {
    return JSON.stringify(uncast(value, r("Location")), null, 2);
  }

  public static toAddress(json: string): Address {
    return cast(JSON.parse(json), r("Address"));
  }

  public static addressToJson(value: Address): string {
    return JSON.stringify(uncast(value, r("Address")), null, 2);
  }

  public static toGeo(json: string): Geo {
    return cast(JSON.parse(json), r("Geo"));
  }

  public static geoToJson(value: Geo): string {
    return JSON.stringify(uncast(value, r("Geo")), null, 2);
  }

  public static toMemberOf(json: string): MemberOf {
    return cast(JSON.parse(json), r("MemberOf"));
  }

  public static memberOfToJson(value: MemberOf): string {
    return JSON.stringify(uncast(value, r("MemberOf")), null, 2);
  }

  public static toTeamFixtures(json: string): TeamFixtures {
    return cast(JSON.parse(json), r("TeamFixtures"));
  }

  public static teamFixturesToJson(value: TeamFixtures): string {
    return JSON.stringify(uncast(value, r("TeamFixtures")), null, 2);
  }

  public static toAllFixtures(json: string): AllFixtures {
    return cast(JSON.parse(json), r("AllFixtures"));
  }

  public static allFixturesToJson(value: AllFixtures): string {
    return JSON.stringify(uncast(value, r("AllFixtures")), null, 2);
  }

  public static toOverviewFixture(json: string): OverviewFixture {
    return cast(JSON.parse(json), r("OverviewFixture"));
  }

  public static overviewFixtureToJson(value: OverviewFixture): string {
    return JSON.stringify(uncast(value, r("OverviewFixture")), null, 2);
  }

  public static toOpponentClass(json: string): OpponentClass {
    return cast(JSON.parse(json), r("OpponentClass"));
  }

  public static opponentClassToJson(value: OpponentClass): string {
    return JSON.stringify(uncast(value, r("OpponentClass")), null, 2);
  }

  public static toOverviewFixtureStatus(json: string): OverviewFixtureStatus {
    return cast(JSON.parse(json), r("OverviewFixtureStatus"));
  }

  public static overviewFixtureStatusToJson(
    value: OverviewFixtureStatus,
  ): string {
    return JSON.stringify(uncast(value, r("OverviewFixtureStatus")), null, 2);
  }

  public static toReason(json: string): Reason {
    return cast(JSON.parse(json), r("Reason"));
  }

  public static reasonToJson(value: Reason): string {
    return JSON.stringify(uncast(value, r("Reason")), null, 2);
  }

  public static toTournament(json: string): Tournament {
    return cast(JSON.parse(json), r("Tournament"));
  }

  public static tournamentToJson(value: Tournament): string {
    return JSON.stringify(uncast(value, r("Tournament")), null, 2);
  }

  public static toLastMatch(json: string): LastMatch {
    return cast(JSON.parse(json), r("LastMatch"));
  }

  public static lastMatchToJson(value: LastMatch): string {
    return JSON.stringify(uncast(value, r("LastMatch")), null, 2);
  }

  public static toNextMatch(json: string): NextMatch {
    return cast(JSON.parse(json), r("NextMatch"));
  }

  public static nextMatchToJson(value: NextMatch): string {
    return JSON.stringify(uncast(value, r("NextMatch")), null, 2);
  }

  public static toNextMatchStatus(json: string): NextMatchStatus {
    return cast(JSON.parse(json), r("NextMatchStatus"));
  }

  public static nextMatchStatusToJson(value: NextMatchStatus): string {
    return JSON.stringify(uncast(value, r("NextMatchStatus")), null, 2);
  }

  public static toFixturesFixtures(json: string): FixturesFixtures {
    return cast(JSON.parse(json), r("FixturesFixtures"));
  }

  public static fixturesFixturesToJson(value: FixturesFixtures): string {
    return JSON.stringify(uncast(value, r("FixturesFixtures")), null, 2);
  }

  public static toThe2024(json: string): The2024 {
    return cast(JSON.parse(json), r("The2024"));
  }

  public static the2024ToJson(value: The2024): string {
    return JSON.stringify(uncast(value, r("The2024")), null, 2);
  }

  public static toHistory(json: string): History {
    return cast(JSON.parse(json), r("History"));
  }

  public static historyToJson(value: History): string {
    return JSON.stringify(uncast(value, r("History")), null, 2);
  }

  public static toHistoricalTableData(json: string): HistoricalTableData {
    return cast(JSON.parse(json), r("HistoricalTableData"));
  }

  public static historicalTableDataToJson(value: HistoricalTableData): string {
    return JSON.stringify(uncast(value, r("HistoricalTableData")), null, 2);
  }

  public static toDivision(json: string): Division {
    return cast(JSON.parse(json), r("Division"));
  }

  public static divisionToJson(value: Division): string {
    return JSON.stringify(uncast(value, r("Division")), null, 2);
  }

  public static toRank(json: string): Rank {
    return cast(JSON.parse(json), r("Rank"));
  }

  public static rankToJson(value: Rank): string {
    return JSON.stringify(uncast(value, r("Rank")), null, 2);
  }

  public static toRankStats(json: string): RankStats {
    return cast(JSON.parse(json), r("RankStats"));
  }

  public static rankStatsToJson(value: RankStats): string {
    return JSON.stringify(uncast(value, r("RankStats")), null, 2);
  }

  public static toTables(json: string): Tables {
    return cast(JSON.parse(json), r("Tables"));
  }

  public static tablesToJson(value: Tables): string {
    return JSON.stringify(uncast(value, r("Tables")), null, 2);
  }

  public static toCurrent(json: string): Current {
    return cast(JSON.parse(json), r("Current"));
  }

  public static currentToJson(value: Current): string {
    return JSON.stringify(uncast(value, r("Current")), null, 2);
  }

  public static toLink(json: string): Link {
    return cast(JSON.parse(json), r("Link"));
  }

  public static linkToJson(value: Link): string {
    return JSON.stringify(uncast(value, r("Link")), null, 2);
  }

  public static toTeamColorMap(json: string): TeamColorMap {
    return cast(JSON.parse(json), r("TeamColorMap"));
  }

  public static teamColorMapToJson(value: TeamColorMap): string {
    return JSON.stringify(uncast(value, r("TeamColorMap")), null, 2);
  }

  public static toTrophyList(json: string): TrophyList {
    return cast(JSON.parse(json), r("TrophyList"));
  }

  public static trophyListToJson(value: TrophyList): string {
    return JSON.stringify(uncast(value, r("TrophyList")), null, 2);
  }

  public static toOverview(json: string): Overview {
    return cast(JSON.parse(json), r("Overview"));
  }

  public static overviewToJson(value: Overview): string {
    return JSON.stringify(uncast(value, r("Overview")), null, 2);
  }

  public static toOverviewTable(json: string): OverviewTable {
    return cast(JSON.parse(json), r("OverviewTable"));
  }

  public static overviewTableToJson(value: OverviewTable): string {
    return JSON.stringify(uncast(value, r("OverviewTable")), null, 2);
  }

  public static toTableData(json: string): TableData {
    return cast(JSON.parse(json), r("TableData"));
  }

  public static tableDataToJson(value: TableData): string {
    return JSON.stringify(uncast(value, r("TableData")), null, 2);
  }

  public static toLegend(json: string): Legend {
    return cast(JSON.parse(json), r("Legend"));
  }

  public static legendToJson(value: Legend): string {
    return JSON.stringify(uncast(value, r("Legend")), null, 2);
  }

  public static toPurpleTable(json: string): PurpleTable {
    return cast(JSON.parse(json), r("PurpleTable"));
  }

  public static purpleTableToJson(value: PurpleTable): string {
    return JSON.stringify(uncast(value, r("PurpleTable")), null, 2);
  }

  public static toAll(json: string): All {
    return cast(JSON.parse(json), r("All"));
  }

  public static allToJson(value: All): string {
    return JSON.stringify(uncast(value, r("All")), null, 2);
  }

  public static toFluffyTable(json: string): FluffyTable {
    return cast(JSON.parse(json), r("FluffyTable"));
  }

  public static fluffyTableToJson(value: FluffyTable): string {
    return JSON.stringify(uncast(value, r("FluffyTable")), null, 2);
  }

  public static toTableTable(json: string): TableTable {
    return cast(JSON.parse(json), r("TableTable"));
  }

  public static tableTableToJson(value: TableTable): string {
    return JSON.stringify(uncast(value, r("TableTable")), null, 2);
  }

  public static toNextOpponentClass(json: string): NextOpponentClass {
    return cast(JSON.parse(json), r("NextOpponentClass"));
  }

  public static nextOpponentClassToJson(value: NextOpponentClass): string {
    return JSON.stringify(uncast(value, r("NextOpponentClass")), null, 2);
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

  public static toDateClass(json: string): DateClass {
    return cast(JSON.parse(json), r("DateClass"));
  }

  public static dateClassToJson(value: DateClass): string {
    return JSON.stringify(uncast(value, r("DateClass")), null, 2);
  }

  public static toTooltipText(json: string): TooltipText {
    return cast(JSON.parse(json), r("TooltipText"));
  }

  public static tooltipTextToJson(value: TooltipText): string {
    return JSON.stringify(uncast(value, r("TooltipText")), null, 2);
  }

  public static toTeamColors(json: string): TeamColors {
    return cast(JSON.parse(json), r("TeamColors"));
  }

  public static teamColorsToJson(value: TeamColors): string {
    return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
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

  public static toParticipant(json: string): Participant {
    return cast(JSON.parse(json), r("Participant"));
  }

  public static participantToJson(value: Participant): string {
    return JSON.stringify(uncast(value, r("Participant")), null, 2);
  }

  public static toVenue(json: string): Venue {
    return cast(JSON.parse(json), r("Venue"));
  }

  public static venueToJson(value: Venue): string {
    return JSON.stringify(uncast(value, r("Venue")), null, 2);
  }

  public static toWidget(json: string): Widget {
    return cast(JSON.parse(json), r("Widget"));
  }

  public static widgetToJson(value: Widget): string {
    return JSON.stringify(uncast(value, r("Widget")), null, 2);
  }

  public static toSquadClass(json: string): SquadClass {
    return cast(JSON.parse(json), r("SquadClass"));
  }

  public static squadClassToJson(value: SquadClass): string {
    return JSON.stringify(uncast(value, r("SquadClass")), null, 2);
  }

  public static toTeamStats(json: string): TeamStats {
    return cast(JSON.parse(json), r("TeamStats"));
  }

  public static teamStatsToJson(value: TeamStats): string {
    return JSON.stringify(uncast(value, r("TeamStats")), null, 2);
  }

  public static toPlayer(json: string): Player {
    return cast(JSON.parse(json), r("Player"));
  }

  public static playerToJson(value: Player): string {
    return JSON.stringify(uncast(value, r("Player")), null, 2);
  }

  public static toTeamElement(json: string): TeamElement {
    return cast(JSON.parse(json), r("TeamElement"));
  }

  public static teamElementToJson(value: TeamElement): string {
    return JSON.stringify(uncast(value, r("TeamElement")), null, 2);
  }

  public static toTournamentSeason(json: string): TournamentSeason {
    return cast(JSON.parse(json), r("TournamentSeason"));
  }

  public static tournamentSeasonToJson(value: TournamentSeason): string {
    return JSON.stringify(uncast(value, r("TournamentSeason")), null, 2);
  }

  public static toTransfers(json: string): Transfers {
    return cast(JSON.parse(json), r("Transfers"));
  }

  public static transfersToJson(value: Transfers): string {
    return JSON.stringify(uncast(value, r("Transfers")), null, 2);
  }

  public static toTransfersData(json: string): TransfersData {
    return cast(JSON.parse(json), r("TransfersData"));
  }

  public static transfersDataToJson(value: TransfersData): string {
    return JSON.stringify(uncast(value, r("TransfersData")), null, 2);
  }

  public static toContractExtension(json: string): ContractExtension {
    return cast(JSON.parse(json), r("ContractExtension"));
  }

  public static contractExtensionToJson(value: ContractExtension): string {
    return JSON.stringify(uncast(value, r("ContractExtension")), null, 2);
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

  public static toPlayers(json: string): Players {
    return cast(JSON.parse(json), r("Players"));
  }

  public static playersToJson(value: Players): string {
    return JSON.stringify(uncast(value, r("Players")), null, 2);
  }

  public static toFee(json: string): Fee {
    return cast(JSON.parse(json), r("Fee"));
  }

  public static feeToJson(value: Fee): string {
    return JSON.stringify(uncast(value, r("Fee")), null, 2);
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
  Team: o(
    [
      { json: "tabs", js: "tabs", typ: u(undefined, a("")) },
      {
        json: "allAvailableSeasons",
        js: "allAvailableSeasons",
        typ: u(undefined, a("any")),
      },
      { json: "details", js: "details", typ: u(undefined, r("Details")) },
      { json: "seostr", js: "seostr", typ: u(undefined, "") },
      { json: "QAData", js: "QAData", typ: u(undefined, a(r("QADatum"))) },
      { json: "table", js: "table", typ: u(undefined, a(r("OverviewTable"))) },
      { json: "transfers", js: "transfers", typ: u(undefined, r("Transfers")) },
      { json: "overview", js: "overview", typ: u(undefined, r("Overview")) },
      { json: "stats", js: "stats", typ: u(undefined, r("TeamStats")) },
      {
        json: "fixtures",
        js: "fixtures",
        typ: u(undefined, r("TeamFixtures")),
      },
      {
        json: "squad",
        js: "squad",
        typ: u(undefined, a(a(u(a(r("SquadClass")), "")))),
      },
      { json: "history", js: "history", typ: u(undefined, r("History")) },
    ],
    false,
  ),
  QADatum: o(
    [
      { json: "question", js: "question", typ: u(undefined, "") },
      { json: "answer", js: "answer", typ: u(undefined, "") },
    ],
    false,
  ),
  Details: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "latestSeason", js: "latestSeason", typ: u(undefined, "") },
      { json: "shortName", js: "shortName", typ: u(undefined, "") },
      { json: "country", js: "country", typ: u(undefined, "") },
      { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
      {
        json: "sportsTeamJSONLD",
        js: "sportsTeamJSONLD",
        typ: u(undefined, r("SportsTeamJSONLD")),
      },
      {
        json: "breadcrumbJSONLD",
        js: "breadcrumbJSONLD",
        typ: u(undefined, r("BreadcrumbJSONLD")),
      },
      {
        json: "canSyncCalendar",
        js: "canSyncCalendar",
        typ: u(undefined, true),
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
  SportsTeamJSONLD: o(
    [
      { json: "@context", js: "@context", typ: u(undefined, "") },
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "sport", js: "sport", typ: u(undefined, "") },
      { json: "gender", js: "gender", typ: u(undefined, "") },
      { json: "logo", js: "logo", typ: u(undefined, "") },
      { json: "url", js: "url", typ: u(undefined, "") },
      { json: "coach", js: "coach", typ: u(undefined, r("Coach")) },
      { json: "athlete", js: "athlete", typ: u(undefined, a(r("Coach"))) },
      { json: "location", js: "location", typ: u(undefined, r("Location")) },
      { json: "memberOf", js: "memberOf", typ: u(undefined, r("MemberOf")) },
    ],
    false,
  ),
  Coach: o(
    [
      { json: "@context", js: "@context", typ: u(undefined, "") },
      { json: "@type", js: "@type", typ: u(undefined, r("CoachType")) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "url", js: "url", typ: u(undefined, "") },
      {
        json: "nationality",
        js: "nationality",
        typ: u(undefined, u(r("Nationality"), null)),
      },
      { json: "affiliation", js: "affiliation", typ: u(undefined, null) },
      { json: "height", js: "height", typ: u(undefined, null) },
      { json: "weight", js: "weight", typ: u(undefined, null) },
    ],
    false,
  ),
  Nationality: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, r("NationalityType")) },
      { json: "name", js: "name", typ: u(undefined, "") },
    ],
    false,
  ),
  Location: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "address", js: "address", typ: u(undefined, r("Address")) },
      { json: "geo", js: "geo", typ: u(undefined, r("Geo")) },
    ],
    false,
  ),
  Address: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "addressCountry", js: "addressCountry", typ: u(undefined, "") },
      { json: "addressLocality", js: "addressLocality", typ: u(undefined, "") },
    ],
    false,
  ),
  Geo: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "latitude", js: "latitude", typ: u(undefined, "") },
      { json: "longitude", js: "longitude", typ: u(undefined, "") },
    ],
    false,
  ),
  MemberOf: o(
    [
      { json: "@type", js: "@type", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "url", js: "url", typ: u(undefined, "") },
    ],
    false,
  ),
  TeamFixtures: o(
    [
      {
        json: "allFixtures",
        js: "allFixtures",
        typ: u(undefined, r("AllFixtures")),
      },
      {
        json: "previousFixturesUrl",
        js: "previousFixturesUrl",
        typ: u(undefined, ""),
      },
      {
        json: "hasOngoingMatch",
        js: "hasOngoingMatch",
        typ: u(undefined, true),
      },
      {
        json: "fixtures",
        js: "fixtures",
        typ: u(undefined, r("FixturesFixtures")),
      },
    ],
    false,
  ),
  AllFixtures: o(
    [
      {
        json: "fixtures",
        js: "fixtures",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      { json: "nextMatch", js: "nextMatch", typ: u(undefined, r("NextMatch")) },
      { json: "lastMatch", js: "lastMatch", typ: u(undefined, r("LastMatch")) },
    ],
    false,
  ),
  OverviewFixture: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
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
      { json: "result", js: "result", typ: u(undefined, 0) },
      { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
      {
        json: "tournament",
        js: "tournament",
        typ: u(undefined, r("Tournament")),
      },
      {
        json: "status",
        js: "status",
        typ: u(undefined, r("OverviewFixtureStatus")),
      },
      { json: "monthYearKey", js: "monthYearKey", typ: u(undefined, "") },
      { json: "isPastMatch", js: "isPastMatch", typ: u(undefined, true) },
      {
        json: "lastPlayedMatch",
        js: "lastPlayedMatch",
        typ: u(undefined, true),
      },
    ],
    false,
  ),
  OpponentClass: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "score", js: "score", typ: u(undefined, 0) },
    ],
    false,
  ),
  OverviewFixtureStatus: o(
    [
      { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
      { json: "finished", js: "finished", typ: u(undefined, true) },
      { json: "started", js: "started", typ: u(undefined, true) },
      { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
      { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
      { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
      { json: "timezone", js: "timezone", typ: u(undefined, null) },
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
  Tournament: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
    ],
    false,
  ),
  LastMatch: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
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
      { json: "result", js: "result", typ: u(undefined, 0) },
      { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
      {
        json: "tournament",
        js: "tournament",
        typ: u(undefined, r("Tournament")),
      },
      {
        json: "status",
        js: "status",
        typ: u(undefined, r("OverviewFixtureStatus")),
      },
    ],
    false,
  ),
  NextMatch: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
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
      { json: "status", js: "status", typ: u(undefined, r("NextMatchStatus")) },
    ],
    false,
  ),
  NextMatchStatus: o(
    [
      { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
      { json: "timezone", js: "timezone", typ: u(undefined, null) },
      { json: "started", js: "started", typ: u(undefined, true) },
      { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
      { json: "finished", js: "finished", typ: u(undefined, true) },
    ],
    false,
  ),
  FixturesFixtures: o(
    [
      {
        json: "July 2023",
        js: "July 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "August 2023",
        js: "August 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "September 2023",
        js: "September 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "October 2023",
        js: "October 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "November 2023",
        js: "November 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "December 2023",
        js: "December 2023",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      {
        json: "January 2024",
        js: "January 2024",
        typ: u(undefined, a(r("The2024"))),
      },
      {
        json: "February 2024",
        js: "February 2024",
        typ: u(undefined, a(r("The2024"))),
      },
      {
        json: "March 2024",
        js: "March 2024",
        typ: u(undefined, a(r("The2024"))),
      },
      {
        json: "April 2024",
        js: "April 2024",
        typ: u(undefined, a(r("The2024"))),
      },
      { json: "May 2024", js: "May 2024", typ: u(undefined, a(r("The2024"))) },
    ],
    false,
  ),
  The2024: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
      { json: "monthYearKey", js: "monthYearKey", typ: u(undefined, "") },
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
      { json: "isPastMatch", js: "isPastMatch", typ: u(undefined, true) },
      {
        json: "lastPlayedMatch",
        js: "lastPlayedMatch",
        typ: u(undefined, true),
      },
      { json: "notStarted", js: "notStarted", typ: u(undefined, true) },
      {
        json: "tournament",
        js: "tournament",
        typ: u(undefined, r("Tournament")),
      },
      { json: "status", js: "status", typ: u(undefined, r("NextMatchStatus")) },
    ],
    false,
  ),
  History: o(
    [
      {
        json: "trophyList",
        js: "trophyList",
        typ: u(undefined, a(r("TrophyList"))),
      },
      {
        json: "historicalTableData",
        js: "historicalTableData",
        typ: u(undefined, r("HistoricalTableData")),
      },
      { json: "teamColor", js: "teamColor", typ: u(undefined, "") },
      {
        json: "teamColorMap",
        js: "teamColorMap",
        typ: u(undefined, r("TeamColorMap")),
      },
      { json: "tables", js: "tables", typ: u(undefined, r("Tables")) },
    ],
    false,
  ),
  HistoricalTableData: o(
    [
      {
        json: "divisions",
        js: "divisions",
        typ: u(undefined, a(r("Division"))),
      },
      { json: "ranks", js: "ranks", typ: u(undefined, a(r("Rank"))) },
      { json: "isValid", js: "isValid", typ: u(undefined, true) },
    ],
    false,
  ),
  Division: o(
    [
      { json: "divisionRank", js: "divisionRank", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "templateId", js: "templateId", typ: u(undefined, 0) },
    ],
    false,
  ),
  Rank: o(
    [
      { json: "stageId", js: "stageId", typ: u(undefined, 0) },
      { json: "tournamentName", js: "tournamentName", typ: u(undefined, "") },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
      { json: "templateId", js: "templateId", typ: u(undefined, 0) },
      { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
      { json: "position", js: "position", typ: u(undefined, 0) },
      { json: "numberOfTeams", js: "numberOfTeams", typ: u(undefined, 0) },
      { json: "stats", js: "stats", typ: u(undefined, r("RankStats")) },
      { json: "tableLink", js: "tableLink", typ: u(undefined, "") },
      { json: "isConsecutive", js: "isConsecutive", typ: u(undefined, true) },
    ],
    false,
  ),
  RankStats: o(
    [
      { json: "points", js: "points", typ: u(undefined, 0) },
      { json: "wins", js: "wins", typ: u(undefined, 0) },
      { json: "draws", js: "draws", typ: u(undefined, 0) },
      { json: "loss", js: "loss", typ: u(undefined, 0) },
    ],
    false,
  ),
  Tables: o(
    [
      { json: "current", js: "current", typ: u(undefined, a(r("Current"))) },
      { json: "historic", js: "historic", typ: u(undefined, a(r("Current"))) },
    ],
    false,
  ),
  Current: o(
    [{ json: "link", js: "link", typ: u(undefined, a(r("Link"))) }],
    false,
  ),
  Link: o(
    [
      { json: "_", js: "_", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, a("")) },
      { json: "ccode", js: "ccode", typ: u(undefined, a("")) },
      { json: "season", js: "season", typ: u(undefined, a("")) },
      { json: "stage_id", js: "stage_id", typ: u(undefined, a("")) },
      { json: "tournament_id", js: "tournament_id", typ: u(undefined, a("")) },
      { json: "template_id", js: "template_id", typ: u(undefined, a("")) },
      { json: "league_id", js: "league_id", typ: u(undefined, a("")) },
    ],
    false,
  ),
  TeamColorMap: o(
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
  TrophyList: o(
    [
      { json: "name", js: "name", typ: u(undefined, a("")) },
      {
        json: "tournamentTemplateId",
        js: "tournamentTemplateId",
        typ: u(undefined, a("")),
      },
      { json: "area", js: "area", typ: u(undefined, a("")) },
      { json: "ccode", js: "ccode", typ: u(undefined, a("")) },
      { json: "won", js: "won", typ: u(undefined, a("")) },
      { json: "runnerup", js: "runnerup", typ: u(undefined, a("")) },
      { json: "season_won", js: "season_won", typ: u(undefined, a("")) },
      {
        json: "season_runnerup",
        js: "season_runnerup",
        typ: u(undefined, a("")),
      },
    ],
    false,
  ),
  Overview: o(
    [
      { json: "season", js: "season", typ: u(undefined, "") },
      { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
      { json: "table", js: "table", typ: u(undefined, a(r("OverviewTable"))) },
      {
        json: "topPlayers",
        js: "topPlayers",
        typ: u(undefined, r("TopPlayers")),
      },
      { json: "venue", js: "venue", typ: u(undefined, r("Venue")) },
      {
        json: "overviewFixtures",
        js: "overviewFixtures",
        typ: u(undefined, a(r("OverviewFixture"))),
      },
      { json: "nextMatch", js: "nextMatch", typ: u(undefined, r("NextMatch")) },
      { json: "lastMatch", js: "lastMatch", typ: u(undefined, r("LastMatch")) },
      { json: "teamForm", js: "teamForm", typ: u(undefined, a(r("TeamForm"))) },
      {
        json: "hasOngoingMatch",
        js: "hasOngoingMatch",
        typ: u(undefined, true),
      },
      {
        json: "previousFixturesUrl",
        js: "previousFixturesUrl",
        typ: u(undefined, ""),
      },
      {
        json: "teamColors",
        js: "teamColors",
        typ: u(undefined, r("TeamColors")),
      },
    ],
    false,
  ),
  OverviewTable: o(
    [
      { json: "data", js: "data", typ: u(undefined, r("TableData")) },
      {
        json: "teamForm",
        js: "teamForm",
        typ: u(undefined, m(a(r("TeamForm")))),
      },
      {
        json: "nextOpponent",
        js: "nextOpponent",
        typ: u(undefined, u(m(a(u(r("NextOpponentClass"), ""))), null)),
      },
      {
        json: "tableHeader",
        js: "tableHeader",
        typ: u(undefined, r("TableHeader")),
      },
    ],
    false,
  ),
  TableData: o(
    [
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
      { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
      { json: "table", js: "table", typ: u(undefined, r("PurpleTable")) },
      {
        json: "tableFilterTypes",
        js: "tableFilterTypes",
        typ: u(undefined, a("")),
      },
      { json: "composite", js: "composite", typ: u(undefined, true) },
      { json: "tables", js: "tables", typ: u(undefined, a(r("FluffyTable"))) },
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
  PurpleTable: o(
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
      {
        json: "featuredInMatch",
        js: "featuredInMatch",
        typ: u(undefined, true),
      },
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
    ],
    false,
  ),
  FluffyTable: o(
    [
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
      { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "legend", js: "legend", typ: u(undefined, a(r("Legend"))) },
      { json: "table", js: "table", typ: u(undefined, r("TableTable")) },
      { json: "ongoing", js: "ongoing", typ: u(undefined, a("any")) },
    ],
    false,
  ),
  TableTable: o(
    [
      { json: "all", js: "all", typ: u(undefined, a(r("All"))) },
      { json: "home", js: "home", typ: u(undefined, a(r("All"))) },
      { json: "away", js: "away", typ: u(undefined, a(r("All"))) },
    ],
    false,
  ),
  NextOpponentClass: o(
    [
      { json: "id", js: "id", typ: u(undefined, "") },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "shortName", js: "shortName", typ: u(undefined, "") },
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
      { json: "date", js: "date", typ: u(undefined, u(r("DateClass"), null)) },
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
  DateClass: o(
    [{ json: "utcTime", js: "utcTime", typ: u(undefined, Date) }],
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
  TeamColors: o(
    [
      { json: "darkMode", js: "darkMode", typ: u(undefined, "") },
      { json: "lightMode", js: "lightMode", typ: u(undefined, "") },
      { json: "fontDarkMode", js: "fontDarkMode", typ: u(undefined, "") },
      { json: "fontLightMode", js: "fontLightMode", typ: u(undefined, "") },
    ],
    false,
  ),
  TopPlayers: o(
    [
      { json: "byRating", js: "byRating", typ: u(undefined, r("By")) },
      { json: "byGoals", js: "byGoals", typ: u(undefined, r("By")) },
      { json: "byAssists", js: "byAssists", typ: u(undefined, r("By")) },
      { json: "seeAllUrl", js: "seeAllUrl", typ: u(undefined, "") },
    ],
    false,
  ),
  By: o(
    [
      {
        json: "players",
        js: "players",
        typ: u(undefined, a(r("Participant"))),
      },
      { json: "seeAllLink", js: "seeAllLink", typ: u(undefined, "") },
    ],
    false,
  ),
  Participant: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "goals", js: "goals", typ: u(undefined, u(null, "")) },
      { json: "assists", js: "assists", typ: u(undefined, u(null, "")) },
      { json: "rating", js: "rating", typ: u(undefined, u(null, "")) },
      { json: "positionId", js: "positionId", typ: u(undefined, u(0, null)) },
      { json: "ccode", js: "ccode", typ: u(undefined, u(null, "")) },
      { json: "cname", js: "cname", typ: u(undefined, u(null, "")) },
      { json: "teamId", js: "teamId", typ: u(undefined, u(0, null)) },
      { json: "teamName", js: "teamName", typ: u(undefined, u("", null)) },
      { json: "showRole", js: "showRole", typ: u(undefined, u(true, null)) },
      {
        json: "showCountryFlag",
        js: "showCountryFlag",
        typ: u(undefined, u(true, null)),
      },
      { json: "showTeamFlag", js: "showTeamFlag", typ: u(undefined, true) },
      {
        json: "excludeFromRanking",
        js: "excludeFromRanking",
        typ: u(undefined, true),
      },
      { json: "rcards", js: "rcards", typ: u(undefined, "") },
      { json: "ycards", js: "ycards", typ: u(undefined, "") },
      {
        json: "teamColors",
        js: "teamColors",
        typ: u(undefined, r("TeamColors")),
      },
      { json: "injured", js: "injured", typ: u(undefined, true) },
      { json: "rank", js: "rank", typ: u(undefined, 0) },
      { json: "value", js: "value", typ: u(undefined, u(3.14, "")) },
    ],
    false,
  ),
  Venue: o(
    [
      { json: "widget", js: "widget", typ: u(undefined, r("Widget")) },
      { json: "statPairs", js: "statPairs", typ: u(undefined, a(a(u(0, "")))) },
    ],
    false,
  ),
  Widget: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "location", js: "location", typ: u(undefined, a("")) },
      { json: "city", js: "city", typ: u(undefined, "") },
    ],
    false,
  ),
  SquadClass: o(
    [
      { json: "id", js: "id", typ: u(undefined, 0) },
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "ccode", js: "ccode", typ: u(undefined, "") },
      { json: "cname", js: "cname", typ: u(undefined, "") },
      { json: "role", js: "role", typ: u(undefined, r("Role")) },
      { json: "isInjured", js: "isInjured", typ: u(undefined, true) },
    ],
    false,
  ),
  TeamStats: o(
    [
      { json: "teamId", js: "teamId", typ: u(undefined, "") },
      { json: "primaryLeagueId", js: "primaryLeagueId", typ: u(undefined, 0) },
      { json: "primarySeasonId", js: "primarySeasonId", typ: u(undefined, "") },
      { json: "players", js: "players", typ: u(undefined, a(r("Player"))) },
      { json: "teams", js: "teams", typ: u(undefined, a(r("TeamElement"))) },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
      {
        json: "tournamentSeasons",
        js: "tournamentSeasons",
        typ: u(undefined, a(r("TournamentSeason"))),
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
  TeamElement: o(
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
        typ: u(undefined, r("Participant")),
      },
      { json: "fetchAllUrl", js: "fetchAllUrl", typ: u(undefined, "") },
      {
        json: "topThree",
        js: "topThree",
        typ: u(undefined, a(r("Participant"))),
      },
      { json: "order", js: "order", typ: u(undefined, 0) },
      { json: "stat", js: "stat", typ: u(undefined, "") },
    ],
    false,
  ),
  TournamentSeason: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "season", js: "season", typ: u(undefined, "") },
      { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
      { json: "tournamentId", js: "tournamentId", typ: u(undefined, "") },
      { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, "") },
    ],
    false,
  ),
  Transfers: o(
    [
      { json: "type", js: "type", typ: u(undefined, "") },
      { json: "data", js: "data", typ: u(undefined, r("TransfersData")) },
    ],
    false,
  ),
  TransfersData: o(
    [
      {
        json: "Players in",
        js: "Players in",
        typ: u(undefined, a(r("Players"))),
      },
      {
        json: "Players out",
        js: "Players out",
        typ: u(undefined, a(r("Players"))),
      },
      {
        json: "Contract extension",
        js: "Contract extension",
        typ: u(undefined, a(r("ContractExtension"))),
      },
    ],
    false,
  ),
  ContractExtension: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "playerId", js: "playerId", typ: u(undefined, 0) },
      { json: "position", js: "position", typ: u(undefined, r("Position")) },
      { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
      {
        json: "transferText",
        js: "transferText",
        typ: u(undefined, a(u("", 0, null))),
      },
      { json: "fromClub", js: "fromClub", typ: u(undefined, "") },
      { json: "fromClubId", js: "fromClubId", typ: u(undefined, 0) },
      { json: "toClub", js: "toClub", typ: u(undefined, "") },
      { json: "toClubId", js: "toClubId", typ: u(undefined, 0) },
      { json: "fee", js: "fee", typ: u(undefined, null) },
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
      { json: "toDate", js: "toDate", typ: u(undefined, Date) },
      { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
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
  Players: o(
    [
      { json: "name", js: "name", typ: u(undefined, "") },
      { json: "playerId", js: "playerId", typ: u(undefined, 0) },
      {
        json: "position",
        js: "position",
        typ: u(undefined, u(r("Position"), null)),
      },
      { json: "transferDate", js: "transferDate", typ: u(undefined, Date) },
      {
        json: "transferText",
        js: "transferText",
        typ: u(undefined, a(u(0, ""))),
      },
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
      { json: "toDate", js: "toDate", typ: u(undefined, Date) },
      { json: "marketValue", js: "marketValue", typ: u(undefined, "") },
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
  CoachType: ["Person"],
  Long: ["Full-Time"],
  LongKey: ["finished"],
  Short: ["FT"],
  ShortKey: ["fulltime_short"],

  ResultString: ["D", "L", "W"],
  Role: ["attackers", "defenders", "goalkeepers", "midfielders"],
  LocalizationKey: ["contract", "on_loan"],
  Text: ["contract", "on loan"],
  FeeText: ["fee", "free transfer", "on loan"],
  LocalizedFeeText: ["on_loan", "transfer_fee", "transfer_type_free_transfer"],
};
