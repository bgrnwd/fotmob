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
export declare enum Country {
    Eng = "ENG",
    Int = "INT"
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
export declare enum CoachType {
    Person = "Person"
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
export declare enum Long {
    FullTime = "Full-Time"
}
export declare enum LongKey {
    Finished = "finished"
}
export declare enum Short {
    Ft = "FT"
}
export declare enum ShortKey {
    FulltimeShort = "fulltime_short"
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
    teamForm?: {
        [key: string]: TeamForm[];
    };
    nextOpponent?: {
        [key: string]: Array<NextOpponentClass | string>;
    } | null;
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
export declare enum ResultString {
    D = "D",
    L = "L",
    W = "W"
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
export declare enum Role {
    Attackers = "attackers",
    Defenders = "defenders",
    Goalkeepers = "goalkeepers",
    Midfielders = "midfielders"
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
export declare enum LocalizationKey {
    Contract = "contract",
    OnLoan = "on_loan"
}
export declare enum Text {
    Contract = "contract",
    OnLoan = "on loan"
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
export declare enum FeeText {
    Fee = "fee",
    FreeTransfer = "free transfer",
    OnLoan = "on loan"
}
export declare enum LocalizedFeeText {
    OnLoan = "on_loan",
    TransferFee = "transfer_fee",
    TransferTypeFreeTransfer = "transfer_type_free_transfer"
}
export declare class Convert {
    static toTeam(json: string): Team;
    static teamToJson(value: Team): string;
    static toQADatum(json: string): QADatum;
    static qADatumToJson(value: QADatum): string;
    static toDetails(json: string): Details;
    static detailsToJson(value: Details): string;
    static toBreadcrumbJSONLD(json: string): BreadcrumbJSONLD;
    static breadcrumbJSONLDToJson(value: BreadcrumbJSONLD): string;
    static toItemListElement(json: string): ItemListElement;
    static itemListElementToJson(value: ItemListElement): string;
    static toFAQJSONLD(json: string): FAQJSONLD;
    static fAQJSONLDToJson(value: FAQJSONLD): string;
    static toMainEntity(json: string): MainEntity;
    static mainEntityToJson(value: MainEntity): string;
    static toAcceptedAnswer(json: string): AcceptedAnswer;
    static acceptedAnswerToJson(value: AcceptedAnswer): string;
    static toSportsTeamJSONLD(json: string): SportsTeamJSONLD;
    static sportsTeamJSONLDToJson(value: SportsTeamJSONLD): string;
    static toCoach(json: string): Coach;
    static coachToJson(value: Coach): string;
    static toNationality(json: string): Nationality;
    static nationalityToJson(value: Nationality): string;
    static toLocation(json: string): Location;
    static locationToJson(value: Location): string;
    static toAddress(json: string): Address;
    static addressToJson(value: Address): string;
    static toGeo(json: string): Geo;
    static geoToJson(value: Geo): string;
    static toMemberOf(json: string): MemberOf;
    static memberOfToJson(value: MemberOf): string;
    static toTeamFixtures(json: string): TeamFixtures;
    static teamFixturesToJson(value: TeamFixtures): string;
    static toAllFixtures(json: string): AllFixtures;
    static allFixturesToJson(value: AllFixtures): string;
    static toOverviewFixture(json: string): OverviewFixture;
    static overviewFixtureToJson(value: OverviewFixture): string;
    static toOpponentClass(json: string): OpponentClass;
    static opponentClassToJson(value: OpponentClass): string;
    static toOverviewFixtureStatus(json: string): OverviewFixtureStatus;
    static overviewFixtureStatusToJson(value: OverviewFixtureStatus): string;
    static toReason(json: string): Reason;
    static reasonToJson(value: Reason): string;
    static toTournament(json: string): Tournament;
    static tournamentToJson(value: Tournament): string;
    static toLastMatch(json: string): LastMatch;
    static lastMatchToJson(value: LastMatch): string;
    static toNextMatch(json: string): NextMatch;
    static nextMatchToJson(value: NextMatch): string;
    static toNextMatchStatus(json: string): NextMatchStatus;
    static nextMatchStatusToJson(value: NextMatchStatus): string;
    static toFixturesFixtures(json: string): FixturesFixtures;
    static fixturesFixturesToJson(value: FixturesFixtures): string;
    static toThe2024(json: string): The2024;
    static the2024ToJson(value: The2024): string;
    static toHistory(json: string): History;
    static historyToJson(value: History): string;
    static toHistoricalTableData(json: string): HistoricalTableData;
    static historicalTableDataToJson(value: HistoricalTableData): string;
    static toDivision(json: string): Division;
    static divisionToJson(value: Division): string;
    static toRank(json: string): Rank;
    static rankToJson(value: Rank): string;
    static toRankStats(json: string): RankStats;
    static rankStatsToJson(value: RankStats): string;
    static toTables(json: string): Tables;
    static tablesToJson(value: Tables): string;
    static toCurrent(json: string): Current;
    static currentToJson(value: Current): string;
    static toLink(json: string): Link;
    static linkToJson(value: Link): string;
    static toTeamColorMap(json: string): TeamColorMap;
    static teamColorMapToJson(value: TeamColorMap): string;
    static toTrophyList(json: string): TrophyList;
    static trophyListToJson(value: TrophyList): string;
    static toOverview(json: string): Overview;
    static overviewToJson(value: Overview): string;
    static toOverviewTable(json: string): OverviewTable;
    static overviewTableToJson(value: OverviewTable): string;
    static toTableData(json: string): TableData;
    static tableDataToJson(value: TableData): string;
    static toLegend(json: string): Legend;
    static legendToJson(value: Legend): string;
    static toPurpleTable(json: string): PurpleTable;
    static purpleTableToJson(value: PurpleTable): string;
    static toAll(json: string): All;
    static allToJson(value: All): string;
    static toFluffyTable(json: string): FluffyTable;
    static fluffyTableToJson(value: FluffyTable): string;
    static toTableTable(json: string): TableTable;
    static tableTableToJson(value: TableTable): string;
    static toNextOpponentClass(json: string): NextOpponentClass;
    static nextOpponentClassToJson(value: NextOpponentClass): string;
    static toTableHeader(json: string): TableHeader;
    static tableHeaderToJson(value: TableHeader): string;
    static toTeamForm(json: string): TeamForm;
    static teamFormToJson(value: TeamForm): string;
    static toTeamFormAway(json: string): TeamFormAway;
    static teamFormAwayToJson(value: TeamFormAway): string;
    static toDateClass(json: string): DateClass;
    static dateClassToJson(value: DateClass): string;
    static toTooltipText(json: string): TooltipText;
    static tooltipTextToJson(value: TooltipText): string;
    static toTeamColors(json: string): TeamColors;
    static teamColorsToJson(value: TeamColors): string;
    static toTopPlayers(json: string): TopPlayers;
    static topPlayersToJson(value: TopPlayers): string;
    static toBy(json: string): By;
    static byToJson(value: By): string;
    static toParticipant(json: string): Participant;
    static participantToJson(value: Participant): string;
    static toVenue(json: string): Venue;
    static venueToJson(value: Venue): string;
    static toWidget(json: string): Widget;
    static widgetToJson(value: Widget): string;
    static toSquadClass(json: string): SquadClass;
    static squadClassToJson(value: SquadClass): string;
    static toTeamStats(json: string): TeamStats;
    static teamStatsToJson(value: TeamStats): string;
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
    static toTeamElement(json: string): TeamElement;
    static teamElementToJson(value: TeamElement): string;
    static toTournamentSeason(json: string): TournamentSeason;
    static tournamentSeasonToJson(value: TournamentSeason): string;
    static toTransfers(json: string): Transfers;
    static transfersToJson(value: Transfers): string;
    static toTransfersData(json: string): TransfersData;
    static transfersDataToJson(value: TransfersData): string;
    static toContractExtension(json: string): ContractExtension;
    static contractExtensionToJson(value: ContractExtension): string;
    static toPosition(json: string): Position;
    static positionToJson(value: Position): string;
    static toTransferType(json: string): TransferType;
    static transferTypeToJson(value: TransferType): string;
    static toPlayers(json: string): Players;
    static playersToJson(value: Players): string;
    static toFee(json: string): Fee;
    static feeToJson(value: Fee): string;
}
