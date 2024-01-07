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
    name?: TeamNameEnum;
    shortName?: string;
    id?: string;
}
export declare enum TeamNameEnum {
    AFCBournemouth = "AFC Bournemouth",
    Arsenal = "Arsenal",
    AstonVilla = "Aston Villa",
    Bournemouth = "Bournemouth",
    Brentford = "Brentford",
    BrightonAndHoveAlbion = "Brighton and Hove Albion",
    BrightonHoveAlbion = "Brighton & Hove Albion",
    Burnley = "Burnley",
    Chelsea = "Chelsea",
    CrystalPalace = "Crystal Palace",
    Everton = "Everton",
    Fulham = "Fulham",
    Liverpool = "Liverpool",
    LutonTown = "Luton Town",
    ManchesterCity = "Manchester City",
    ManchesterUnited = "Manchester United",
    NewcastleUnited = "Newcastle United",
    NottinghamForest = "Nottingham Forest",
    SheffieldUnited = "Sheffield United",
    TottenhamHotspur = "Tottenham Hotspur",
    WestHamUnited = "West Ham United",
    WolverhamptonWanderers = "Wolverhampton Wanderers"
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
export declare enum Long {
    Abandoned = "Abandoned",
    FullTime = "Full-Time",
    Postponed = "Postponed"
}
export declare enum LongKey {
    Aborted = "aborted",
    Finished = "finished",
    Postponed = "postponed"
}
export declare enum Short {
    Ab = "Ab",
    Ft = "FT",
    Pp = "PP"
}
export declare enum ShortKey {
    AbortedShort = "aborted_short",
    FulltimeShort = "fulltime_short",
    PostponedShort = "postponed_short"
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
    name?: ShortNameEnum;
    score?: number;
}
export declare enum ShortNameEnum {
    Arsenal = "Arsenal",
    AstonVilla = "Aston Villa",
    Bournemouth = "Bournemouth",
    Brentford = "Brentford",
    Brighton = "Brighton",
    Burnley = "Burnley",
    Chelsea = "Chelsea",
    CrystalPalace = "Crystal Palace",
    Everton = "Everton",
    Fulham = "Fulham",
    Liverpool = "Liverpool",
    Luton = "Luton",
    ManCity = "Man City",
    ManUnited = "Man United",
    Newcastle = "Newcastle",
    NottmForest = "Nottm Forest",
    SheffUtd = "Sheff Utd",
    Tottenham = "Tottenham",
    WestHam = "West Ham",
    Wolves = "Wolves"
}
export interface Tournament {
}
export interface TableElement {
    data?: Data;
    teamForm?: {
        [key: string]: TeamForm[];
    };
    nextOpponent?: {
        [key: string]: Array<NextOpponentClass | string>;
    };
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
    color?: Color;
    indices?: number[];
}
export declare enum Color {
    Ff4646 = "#FF4646",
    The0046A7 = "#0046A7",
    The2Ad572 = "#2AD572"
}
export interface DataTable {
    all?: All[];
    home?: All[];
    away?: All[];
    form?: All[];
}
export interface All {
    name?: TeamNameEnum;
    shortName?: ShortNameEnum;
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
    qualColor?: Color | null;
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
export declare enum ResultString {
    D = "D",
    L = "L",
    W = "W"
}
export interface TooltipText {
    utcTime?: Date;
    homeTeam?: TeamNameEnum;
    homeTeamId?: number;
    homeScore?: number;
    awayTeam?: TeamNameEnum;
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
    teamName?: TeamNameEnum;
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
    teamName?: TeamNameEnum | null;
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
export declare enum FontMode {
    RGBA25525525510 = "rgba(255, 255, 255, 1.0)",
    RGBA29292910 = "rgba(29, 29, 29, 1.0)"
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
export declare class Convert {
    static toLeague(json: string): League;
    static leagueToJson(value: League): string;
    static toDetails(json: string): Details;
    static detailsToJson(value: Details): string;
    static toBreadcrumbJSONLD(json: string): BreadcrumbJSONLD;
    static breadcrumbJSONLDToJson(value: BreadcrumbJSONLD): string;
    static toItemListElement(json: string): ItemListElement;
    static itemListElementToJson(value: ItemListElement): string;
    static toMatches(json: string): Matches;
    static matchesToJson(value: Matches): string;
    static toAllMatch(json: string): AllMatch;
    static allMatchToJson(value: AllMatch): string;
    static toNextOpponentClass(json: string): NextOpponentClass;
    static nextOpponentClassToJson(value: NextOpponentClass): string;
    static toStatus(json: string): Status;
    static statusToJson(value: Status): string;
    static toReason(json: string): Reason;
    static reasonToJson(value: Reason): string;
    static toFirstUnplayedMatch(json: string): FirstUnplayedMatch;
    static firstUnplayedMatchToJson(value: FirstUnplayedMatch): string;
    static toOverview(json: string): Overview;
    static overviewToJson(value: Overview): string;
    static toLeagueOverviewMatch(json: string): LeagueOverviewMatch;
    static leagueOverviewMatchToJson(value: LeagueOverviewMatch): string;
    static toOpponentClass(json: string): OpponentClass;
    static opponentClassToJson(value: OpponentClass): string;
    static toTournament(json: string): Tournament;
    static tournamentToJson(value: Tournament): string;
    static toTableElement(json: string): TableElement;
    static tableElementToJson(value: TableElement): string;
    static toData(json: string): Data;
    static dataToJson(value: Data): string;
    static toLegend(json: string): Legend;
    static legendToJson(value: Legend): string;
    static toDataTable(json: string): DataTable;
    static dataTableToJson(value: DataTable): string;
    static toAll(json: string): All;
    static allToJson(value: All): string;
    static toTableHeader(json: string): TableHeader;
    static tableHeaderToJson(value: TableHeader): string;
    static toTeamForm(json: string): TeamForm;
    static teamFormToJson(value: TeamForm): string;
    static toTeamFormAway(json: string): TeamFormAway;
    static teamFormAwayToJson(value: TeamFormAway): string;
    static toTooltipText(json: string): TooltipText;
    static tooltipTextToJson(value: TooltipText): string;
    static toTopPlayers(json: string): TopPlayers;
    static topPlayersToJson(value: TopPlayers): string;
    static toBy(json: string): By;
    static byToJson(value: By): string;
    static toStats(json: string): Stats;
    static statsToJson(value: Stats): string;
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
    static toParticipant(json: string): Participant;
    static participantToJson(value: Participant): string;
    static toTeamColors(json: string): TeamColors;
    static teamColorsToJson(value: TeamColors): string;
    static toSeasonStatLink(json: string): SeasonStatLink;
    static seasonStatLinkToJson(value: SeasonStatLink): string;
    static toTrophy(json: string): Trophy;
    static trophyToJson(value: Trophy): string;
    static toLoser(json: string): Loser;
    static loserToJson(value: Loser): string;
    static toTransfers(json: string): Transfers;
    static transfersToJson(value: Transfers): string;
    static toDatum(json: string): Datum;
    static datumToJson(value: Datum): string;
    static toFee(json: string): Fee;
    static feeToJson(value: Fee): string;
    static toPosition(json: string): Position;
    static positionToJson(value: Position): string;
    static toTransferType(json: string): TransferType;
    static transferTypeToJson(value: TransferType): string;
}
