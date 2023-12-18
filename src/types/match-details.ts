// To parse this data:
//
//   import { Convert, MatchDetails } from "./file";
//
//   const matchDetails = Convert.toMatchDetails(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MatchDetails {
    general?: General;
    header?: Header;
    nav?: string[];
    ongoing?: boolean;
    hasPendingVAR?: boolean;
    content?: Content;
    seo?: SEO;
}

export interface Content {
    matchFacts?: MatchFacts;
    liveticker?: Liveticker;
    superlive?: Superlive;
    buzz?: null;
    stats?: ContentStats;
    shotmap?: ShotmapClass;
    lineup?: ContentLineup;
    playoff?: boolean;
    table?: Table;
    h2h?: H2H;
    momentum?: Momentum;
}

export interface H2H {
    summary?: number[];
    matches?: Match[];
}

export interface Match {
    time?: MatchDate;
    matchUrl?: string;
    league?: League;
    home?: MatchAway;
    status?: Status;
    finished?: boolean;
    away?: MatchAway;
}

export interface MatchAway {
    name?: NameElement;
    id?: string;
}

export enum NameElement {
    Liverpool = "Liverpool",
    ManchesterUnited = "Manchester United",
}

export interface League {
    name?: string;
    id?: string;
    pageUrl?: string;
}

export interface Status {
    utcTime?: Date;
    started?: boolean;
    cancelled?: boolean;
    finished?: boolean;
    scoreStr?: string;
    reason?: Reason;
    whoLostOnPenalties?: null;
    whoLostOnAggregated?: string;
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
}

export enum LongKey {
    Aborted = "aborted",
    Finished = "finished",
}

export enum Short {
    Ab = "Ab",
    Ft = "FT",
}

export enum ShortKey {
    AbortedShort = "aborted_short",
    FulltimeShort = "fulltime_short",
}

export interface MatchDate {
    utcTime?: Date;
}

export interface ContentLineup {
    lineup?: LineupElement[];
    bench?: PurpleBench;
    naPlayers?: NaPlayers;
    coaches?: Coaches;
    teamRatings?: TeamRatings;
    hasFantasy?: boolean;
    usingEnetpulseLineup?: boolean;
    usingOptaLineup?: boolean;
    simpleLineup?: boolean;
}

export interface PurpleBench {
    sides?: Side[];
    benchArr?: Array<BenchArrElement[]>;
}

export interface BenchArrElement {
    id?: string;
    positionId?: number;
    position?: Position;
    localizedPosition?: null;
    name?: NameClass;
    shirt?: number;
    usualPosition?: number;
    usingOptaId?: boolean;
    teamId?: string;
    imageUrl?: string;
    pageUrl?: string;
    isHomeTeam?: boolean;
    timeSubbedOn?: number | null;
    timeSubbedOff?: null;
    positionRow?: number;
    role?: Role;
    isCaptain?: boolean;
    events?: BenchArrEvents;
    rating?: BenchArrRating;
    fantasyScore?: FantasyScoreClass;
    minutesPlayed?: number;
    shotmap?: Shot[];
    stats?: BenchArrStat[];
    teamData?: TeamData;
    isGoalkeeper?: boolean;
    shortName?: string;
}

export interface BenchArrEvents {
    sub?: PurpleSub;
    yc?: number;
}

export interface PurpleSub {
    subbedIn?: number;
}

export interface FantasyScoreClass {
    num?: number | null;
    bgcolor?: BgcolorEnum;
}

export enum BgcolorEnum {
    F08022 = "#f08022",
    Purple = "purple",
    The1Ec853 = "#1ec853",
}

export interface NameClass {
    firstName?: string;
    lastName?: string;
    fullName?: string;
}

export enum Position {
    Substitute = "Substitute",
}

export interface BenchArrRating {
    num?: null | string;
    bgcolor?: Bgcolor;
    isTop?: IsTop;
}

export enum Bgcolor {
    F08022 = "#f08022",
    The0E87E0 = "#0e87e0",
    The1Ec853 = "#1ec853",
    The989898 = "#989898",
}

export interface IsTop {
    isTopRating?: boolean;
    isMatchFinished?: boolean;
}

export enum Role {
    Attacker = "Attacker",
    Defender = "Defender",
    Keeper = "Keeper",
    Midfielder = "Midfielder",
}

export interface Shot {
    id?: number;
    eventType?: EventType;
    teamId?: number;
    playerId?: number;
    playerName?: string;
    x?: number;
    y?: number;
    min?: number;
    minAdded?: number | null;
    isBlocked?: boolean;
    isOnTarget?: boolean;
    blockedX?: number | null;
    blockedY?: number | null;
    goalCrossedY?: number;
    goalCrossedZ?: number;
    expectedGoals?: number;
    expectedGoalsOnTarget?: number | null;
    shotType?: ShotType;
    situation?: Situation;
    period?: Period;
    isOwnGoal?: boolean;
    onGoalShot?: OnGoalShot;
    isSavedOffLine?: boolean;
    teamColor?: TeamColorEnum;
    firstName?: string;
    lastName?: string;
    fullName?: string;
}

export enum EventType {
    AttemptSaved = "AttemptSaved",
    Miss = "Miss",
}

export interface OnGoalShot {
    x?: number;
    y?: number;
    zoomRatio?: number;
}

export enum Period {
    FirstHalf = "FirstHalf",
    SecondHalf = "SecondHalf",
}

export enum ShotType {
    Header = "Header",
    LeftFoot = "LeftFoot",
    RightFoot = "RightFoot",
}

export enum Situation {
    FastBreak = "FastBreak",
    FromCorner = "FromCorner",
    RegularPlay = "RegularPlay",
    SetPiece = "SetPiece",
}

export enum TeamColorEnum {
    C70101 = "#C70101",
    D3171E = "#d3171e",
    The333333 = "#333333",
}

export interface BenchArrStat {
    title?: Title;
    key?: StatKey;
    stats?: PurpleStats;
}

export enum StatKey {
    Attack = "attack",
    Defense = "defense",
    Duels = "duels",
    TopStats = "top_stats",
}

export interface PurpleStats {
    "FotMob rating"?: Assists;
    "Minutes played"?: Assists;
    Goals?: Assists;
    Assists?: Assists;
    "Total shots"?: Assists;
    Shotmap?: Shotmap;
    "Accurate passes"?: AccurateCrosses;
    "Chances created"?: Assists;
    "Expected goals (xG)"?: AccurateCrosses;
    "Expected assists (xA)"?: AccurateCrosses;
    "xG + xA"?: AccurateCrosses;
    "Fantasy points"?: Assists;
    "Shot accuracy"?: AccurateCrosses;
    "Big chances missed"?: Assists;
    "Blocked shots"?: Assists;
    Touches?: Assists;
    "Touches in opposition box"?: Assists;
    "Passes into final third"?: Assists;
    "Accurate crosses"?: AccurateCrosses;
    Dispossessed?: Assists;
    "xG Non-penalty"?: AccurateCrosses;
    "Tackles won"?: AerialDuelsWon;
    "Defensive actions"?: Assists;
    "Ground duels won"?: AerialDuelsWon;
    "Aerial duels won"?: AerialDuelsWon;
    "Was fouled"?: Assists;
    "Fouls committed"?: Assists;
    "Accurate long balls"?: AccurateCrosses;
    Recoveries?: Assists;
    "Duels lost"?: Assists;
    "Duels won"?: Assists;
    "Expected goals on target (xGOT)"?: AccurateCrosses;
    "Dribbled past"?: Assists;
    Clearances?: Assists;
    "Successful dribbles"?: AccurateCrosses;
    "Headed clearance"?: Assists;
}

export interface AccurateCrosses {
    key?: AccurateCrossesKey;
    value?: string;
}

export enum AccurateCrossesKey {
    AccurateCrosses = "accurate_crosses",
    AccuratePasses = "accurate_passes",
    AerialsWon = "aerials_won",
    DribblesSucceeded = "dribbles_succeeded",
    ExpectedAssists = "expected_assists",
    ExpectedGoals = "expected_goals",
    ExpectedGoalsNonPenalty = "expected_goals_non_penalty",
    ExpectedGoalsOnTargetFaced = "expected_goals_on_target_faced",
    ExpectedGoalsOnTargetVariant = "expected_goals_on_target_variant",
    FantasyPoints = "fantasy_points",
    GoalsPrevented = "goals_prevented",
    GroundDuelsWon = "ground_duels_won",
    LongBallsAccurate = "long_balls_accurate",
    Saves = "saves",
    ShotAccuracy = "shot_accuracy",
    TacklesSucceeded = "tackles_succeeded",
    XgAndXa = "xg_and_xa",
}

export interface AerialDuelsWon {
    key?: AccurateCrossesKey;
    value?: number | string;
}

export interface Assists {
    key?: AssistsKey;
    value?: number;
}

export enum AssistsKey {
    Assists = "assists",
    BigChanceMissedTitle = "big_chance_missed_title",
    BlockedShots = "blocked_shots",
    ChancesCreated = "chances_created",
    Clearances = "clearances",
    Corners = "corners",
    DefensiveActions = "defensive_actions",
    Dispossessed = "dispossessed",
    DribbledPast = "dribbled_past",
    DuelLost = "duel_lost",
    DuelWon = "duel_won",
    FantasyPoints = "fantasy_points",
    Fouls = "fouls",
    Goals = "goals",
    GoalsConceded = "goals_conceded",
    HeadedClearance = "headed_clearance",
    Interceptions = "interceptions",
    KeeperDivingSave = "keeper_diving_save",
    KeeperHighClaim = "keeper_high_claim",
    KeeperSweeper = "keeper_sweeper",
    LastManTackle = "last_man_tackle",
    MinutesPlayed = "minutes_played",
    Offsides = "Offsides",
    PassesIntoFinalThird = "passes_into_final_third",
    PlayerThrows = "player_throws",
    Punches = "punches",
    RatingTitle = "rating_title",
    Recoveries = "recoveries",
    SavesInsideBox = "saves_inside_box",
    ShotBlocks = "shot_blocks",
    TotalShots = "total_shots",
    Touches = "touches",
    TouchesOppBox = "touches_opp_box",
    WasFouled = "was_fouled",
}

export interface Shotmap {
    key?: null;
    value?: boolean;
}

export enum Title {
    Attack = "Attack",
    Defense = "Defense",
    Duels = "Duels",
    TopStats = "Top stats",
}

export interface TeamData {
    home?: TeamDataAway;
    away?: TeamDataAway;
}

export interface TeamDataAway {
    id?: number;
    color?: TeamColorEnum;
}

export enum Side {
    Away = "away",
    Equal = "equal",
    Home = "home",
}

export interface Coaches {
    sides?: Side[];
    coachesArr?: Array<Coach[]>;
}

export interface Coach {
    id?: string;
    name?: NameClass;
    usualPosition?: number;
    imageUrl?: string;
    pageUrl?: string;
    isHomeTeam?: boolean;
    timeSubbedOn?: null;
    timeSubbedOff?: null;
    positionRow?: null;
    role?: string;
    isCaptain?: boolean;
    events?: CoachesArrEvents;
}

export interface CoachesArrEvents {
}

export interface LineupElement {
    teamId?: number;
    teamName?: NameElement;
    bench?: BenchArrElement[];
    coach?: Coach[];
    players?: Array<PlayerElement[]>;
    lineup?: string;
    nonAvailablePlayers?: Array<NaPlayersArr[]>;
    optaLineup?: OptaLineup;
}

export interface NaPlayersArr {
    id?: number;
    name?: NameClass;
    shortName?: ShortName;
    imageUrl?: string;
    pageUrl?: string;
    isHomeTeam?: boolean;
    timeSubbedOn?: null;
    timeSubbedOff?: null;
    positionRow?: null;
    isCaptain?: boolean;
    events?: CoachesArrEvents;
    naInfo?: NaInfo;
}

export interface NaInfo {
    id?: number;
    name?: string;
    naReason?: string;
    naReasonKey?: string;
    injury?: boolean;
    expectedReturn?: ExpectedReturn;
}

export interface ExpectedReturn {
    expectedReturnKey?: ExpectedReturnKey;
    expectedReturnDateParam?: ExpectedReturnDateParam | null;
    expectedReturnFallback?: ExpectedReturnFallback;
}

export enum ExpectedReturnDateParam {
    December2023 = "December 2023",
    February2024 = "February 2024",
    January2024 = "January 2024",
}

export enum ExpectedReturnFallback {
    AFewDays = "A few days",
    Doubtful = "Doubtful",
    EarlyJanuary2024 = "Early January 2024",
    LateDecember2023 = "Late December 2023",
    LateFebruary2024 = "Late February 2024",
    MidJanuary2024 = "Mid January 2024",
    OutForSeason = "Out for season",
    Unknown = "Unknown",
}

export enum ExpectedReturnKey {
    ExpectedReturnDateDoubtful = "expected_return_date_doubtful",
    ExpectedReturnDateEarly = "expected_return_date_early",
    ExpectedReturnDateFewDays = "expected_return_date_few_days",
    ExpectedReturnDateLate = "expected_return_date_late",
    ExpectedReturnDateMid = "expected_return_date_mid",
    ExpectedReturnDateOutForSeason = "expected_return_date_out_for_season",
    ExpectedReturnDateUnknown = "expected_return_date_unknown",
}

export enum ShortName {
    MACAllister = "Mac Allister",
    Thiago = "Thiago",
}

export interface OptaLineup {
    bench?: BenchArrElement[];
    coach?: Coach[];
    players?: Array<PlayerElement[]>;
    lineup?: string;
    nonAvailablePlayers?: Array<NaPlayersArr[]>;
}

export interface PlayerElement {
    id?: string;
    positionId?: number;
    position?: Role;
    positionStringShort?: string;
    localizedPosition?: PositionLabel;
    name?: NameClass;
    shirt?: number;
    usualPosition?: number;
    usingOptaId?: boolean;
    teamId?: string;
    imageUrl?: string;
    pageUrl?: string;
    isHomeTeam?: boolean;
    timeSubbedOn?: null;
    timeSubbedOff?: number | null;
    positionRow?: number;
    role?: Role;
    isCaptain?: boolean;
    events?: PlayerEvents;
    rating?: BenchArrRating;
    fantasyScore?: FantasyScore;
    minutesPlayed?: number;
    shotmap?: Shot[];
    stats?: PlayerStat[];
    teamData?: TeamData;
    isGoalkeeper?: boolean;
}

export interface PlayerEvents {
    sub?: FluffySub;
    yc?: number;
    ycrc?: number;
}

export interface FluffySub {
    subbedOut?: number;
}

export interface FantasyScore {
    num?: number | string;
    bgcolor?: BgcolorEnum;
}

export interface PositionLabel {
    label?: string;
    key?: string;
}

export interface PlayerStat {
    title?: Title;
    key?: StatKey;
    stats?: FluffyStats;
}

export interface FluffyStats {
    "FotMob rating"?: Assists;
    "Minutes played"?: Assists;
    Saves?: AccurateCrosses;
    "Goals conceded"?: Assists;
    "xGOT faced"?: AccurateCrosses;
    "Goals prevented"?: AccurateCrosses;
    "Accurate passes"?: AccurateCrosses;
    "Accurate long balls"?: AccurateCrosses;
    "Diving save"?: Assists;
    "Saves inside box"?: Assists;
    "Acted as sweeper"?: Assists;
    Punches?: Assists;
    Throws?: Assists;
    "High claim"?: Assists;
    Recoveries?: Assists;
    "Fantasy points"?: AerialDuelsWon;
    Touches?: Assists;
    Goals?: Assists;
    Assists?: Assists;
    "Total shots"?: Assists;
    Shotmap?: Shotmap;
    "Chances created"?: Assists;
    "Expected goals (xG)"?: AccurateCrosses;
    "Expected assists (xA)"?: AccurateCrosses;
    "xG + xA"?: AccurateCrosses;
    "Shot accuracy"?: AccurateCrosses;
    "Blocked shots"?: Assists;
    "Touches in opposition box"?: Assists;
    "Successful dribbles"?: AccurateCrosses;
    "Passes into final third"?: Assists;
    "Accurate crosses"?: AccurateCrosses;
    Corners?: Assists;
    Dispossessed?: Assists;
    "xG Non-penalty"?: AccurateCrosses;
    "Tackles won"?: AerialDuelsWon;
    "Last man tackle"?: Assists;
    Clearances?: Assists;
    Interceptions?: Assists;
    "Defensive actions"?: Assists;
    "Dribbled past"?: Assists;
    "Duels won"?: Assists;
    "Duels lost"?: Assists;
    "Ground duels won"?: AerialDuelsWon;
    "Aerial duels won"?: AerialDuelsWon;
    "Was fouled"?: Assists;
    "Fouls committed"?: Assists;
    "Expected goals on target (xGOT)"?: AccurateCrosses;
    "Headed clearance"?: Assists;
    Blocks?: Assists;
    Offsides?: Assists;
    "Big chances missed"?: Assists;
}

export interface NaPlayers {
    sides?: Side[];
    naPlayersArr?: Array<NaPlayersArr[]>;
}

export interface TeamRatings {
    home?: FantasyScoreClass;
    away?: FantasyScoreClass;
}

export interface Liveticker {
    langs?: string;
    teams?: NameElement[];
}

export interface MatchFacts {
    matchId?: number;
    highlights?: Highlights;
    playerOfTheMatch?: PlayerOfTheMatch;
    matchesInRound?: MatchesInRound[];
    events?: MatchFactsEvents;
    infoBox?: InfoBox;
    teamForm?: Array<TeamForm[]>;
    poll?: Poll;
    topPlayers?: TopPlayers;
    insights?: Insight[];
    topScorers?: TopScorers;
    momentum?: Momentum;
    countryCode?: string;
    QAData?: QADatum[];
}

export interface QADatum {
    question?: string;
    answer?: string;
}

export interface MatchFactsEvents {
    ongoing?: boolean;
    events?: Event[];
    eventTypes?: Array<null | string>;
    penaltyShootoutEvents?: null;
}

export interface Event {
    reactKey?: string;
    timeStr?: number | string;
    type?: EventTypeEnum;
    time?: number;
    overloadTime?: number | null;
    eventId?: number;
    player?: EventPlayer;
    profileUrl?: string;
    overloadTimeStr?: boolean | string;
    isHome?: boolean;
    nameStr?: string;
    card?: string;
    cardDescription?: null;
    minutesAddedStr?: string;
    minutesAddedKey?: string;
    minutesAddedInput?: number;
    halfStrShort?: string;
    halfStrKey?: string;
    injuredPlayerOut?: boolean;
    swap?: Swap[];
}

export interface EventPlayer {
    id?: number | null;
    name?: string;
    profileUrl?: string;
}

export interface Swap {
    name?: string;
    id?: string;
    profileUrl?: string;
}

export enum EventTypeEnum {
    AddedTime = "AddedTime",
    Card = "Card",
    Half = "Half",
    Substitution = "Substitution",
}

export interface Highlights {
    image?: string;
    url?: string;
    source?: string;
}

export interface InfoBox {
    "Match Date"?: MatchDate;
    Tournament?: Tournament;
    Stadium?: Stadium;
    Referee?: Referee;
    Attendance?: number;
}

export interface Referee {
    imgUrl?: string;
    text?: string;
    country?: string;
}

export interface Stadium {
    name?: string;
    city?: NameElement;
    country?: string;
    lat?: number;
    long?: number;
}

export interface Tournament {
    id?: number;
    parentLeagueId?: number;
    link?: string;
    leagueName?: string;
    roundName?: string;
    round?: string;
    selectedSeason?: string;
    isCurrentSeason?: boolean;
}

export interface Insight {
    type?: string;
    playerId?: number | null;
    teamId?: number;
    priority?: number;
    defaultText?: string;
    localizedTextId?: string;
    statValues?: StatValue[];
    text?: string;
    color?: TeamColorEnum;
}

export interface StatValue {
    value?: number;
    name?: null | string;
    type?: string;
}

export interface MatchesInRound {
    id?: string;
    home?: MatchesInRoundAway;
    away?: MatchesInRoundAway;
    matchDate?: string;
    status?: Status;
    roundId?: number;
    roundName?: string;
    homeScore?: number;
    awayScore?: number;
}

export interface MatchesInRoundAway {
    id?: string;
    name?: string;
    shortName?: string;
}

export interface Momentum {
    main?: Main;
    alternateModels?: any[];
}

export interface Main {
    data?: Datum[];
    debugTitle?: string;
}

export interface Datum {
    minute?: number;
    value?: number;
}

export interface PlayerOfTheMatch {
    id?: number;
    name?: NameClass;
    teamName?: NameElement;
    teamId?: number;
    rating?: PlayerOfTheMatchRating;
    minutesPlayed?: number;
    shotmap?: Shot[];
    pageUrl?: string;
    isHomeTeam?: boolean;
    stats?: PlayerOfTheMatchStat[];
    role?: Role;
    teamData?: TeamData;
}

export interface PlayerOfTheMatchRating {
    num?: string;
    isTop?: IsTop;
}

export interface PlayerOfTheMatchStat {
    title?: Title;
    key?: StatKey;
    stats?: TentacledStats;
}

export interface TentacledStats {
    "FotMob rating"?: Assists;
    "Minutes played"?: Assists;
    Goals?: Assists;
    Assists?: Assists;
    "Total shots"?: Assists;
    Shotmap?: Shotmap;
    "Accurate passes"?: AccurateCrosses;
    "Chances created"?: Assists;
    "Expected goals (xG)"?: AccurateCrosses;
    "Expected assists (xA)"?: AccurateCrosses;
    "xG + xA"?: AccurateCrosses;
    "Fantasy points"?: AccurateCrosses;
    "Shot accuracy"?: AccurateCrosses;
    "Blocked shots"?: Assists;
    Touches?: Assists;
    "Touches in opposition box"?: Assists;
    "Successful dribbles"?: AccurateCrosses;
    "Passes into final third"?: Assists;
    "Accurate crosses"?: AccurateCrosses;
    "Accurate long balls"?: AccurateCrosses;
    Corners?: Assists;
    Dispossessed?: Assists;
    "xG Non-penalty"?: AccurateCrosses;
    "Tackles won"?: AccurateCrosses;
    "Last man tackle"?: Assists;
    Clearances?: Assists;
    Interceptions?: Assists;
    "Defensive actions"?: Assists;
    Recoveries?: Assists;
    "Dribbled past"?: Assists;
    "Duels won"?: Assists;
    "Duels lost"?: Assists;
    "Ground duels won"?: AccurateCrosses;
    "Aerial duels won"?: AccurateCrosses;
    "Was fouled"?: Assists;
    "Fouls committed"?: Assists;
}

export interface Poll {
    oddspoll?: Oddspoll;
    voteResult?: VoteResult;
    renderToTop?: boolean;
}

export interface Oddspoll {
    PollName?: string;
    MatchId?: number;
    HomeTeamId?: number;
    AwayTeamId?: number;
    HomeTeam?: NameElement;
    AwayTeam?: string;
    Facts?: Fact[];
}

export interface Fact {
    OddsType?: string;
    DefaultLabel?: string;
    TextLabelId?: string;
    DefaultTemplate?: string;
    TextTemplateId?: string;
    StatValues?: string[];
    DefaultLabels?: string[];
    LabelTemplates?: string[];
    Icon?: string;
    defaultText?: string;
}

export interface VoteResult {
    PollName?: string;
    Votes?: Vote[];
}

export interface Vote {
    Name?: string;
    Votes?: number[];
}

export interface TeamForm {
    result?: number;
    resultString?: ResultString;
    imageUrl?: string;
    linkToMatch?: string;
    date?: MatchDate;
    teamPageUrl?: string;
    tooltipText?: TooltipText;
    score?: string;
    home?: TeamFormAway;
    away?: TeamFormAway;
}

export interface TeamFormAway {
    id?: string;
    name?: string;
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
    homeScore?: string;
    awayTeam?: string;
    awayTeamId?: number;
    awayScore?: string;
}

export interface TopPlayers {
    homeTopPlayers?: TopPlayer[];
    awayTopPlayers?: TopPlayer[];
}

export interface TopPlayer {
    playerId?: number;
    name?: NameClass;
    playerRatingRounded?: string;
    color?: BgcolorEnum;
    manOfTheMatch?: boolean;
    teamId?: string;
    positionLabel?: PositionLabel;
}

export interface TopScorers {
    section?: string;
    sectionId?: number;
    homePlayer?: Player;
    awayPlayer?: Player;
    statsOrder?: string[];
}

export interface Player {
    playerId?: number;
    position?: number;
    matchesWithRating?: number;
    lastName?: string;
    fullName?: string;
    stats?: AwayPlayerStats;
}

export interface AwayPlayerStats {
    goals?: number;
    goalAssist?: number;
    ontargetScoringAtt?: number;
    motm?: number;
    gamesPlayed?: number;
    minsPlayed?: number;
    minsPlayedGoal?: number;
    expectedGoals?: number;
    playerRating?: number;
}

export interface ShotmapClass {
    shots?: Shot[];
    Periods?: ShotmapPeriods;
}

export interface ShotmapPeriods {
    All?: Shot[];
    FirstHalf?: Shot[];
    SecondHalf?: Shot[];
}

export interface ContentStats {
    Periods?: StatsPeriods;
}

export interface StatsPeriods {
    All?: All;
    FirstHalf?: All;
    SecondHalf?: All;
}

export interface All {
    stats?: AllStat[];
    teamColors?: TeamColors;
}

export interface AllStat {
    title?: string;
    key?: string;
    stats?: StatStatClass[];
}

export interface StatStatClass {
    title?: string;
    key?: string;
    stats?: Array<number | null | string>;
    type?: StatType;
    highlighted?: Side;
}

export enum StatType {
    Graph = "graph",
    Text = "text",
    Title = "title",
}

export interface TeamColors {
    darkMode?: Mode;
    lightMode?: Mode;
    fontDarkMode?: Mode;
    fontLightMode?: Mode;
}

export interface Mode {
    home?: Home;
    away?: string;
}

export enum Home {
    D3171E = "#d3171e",
    RGBA25525525510 = "rgba(255, 255, 255, 1.0)",
}

export interface Superlive {
    superLiveUrl?: string;
    showSuperLive?: boolean;
}

export interface Table {
    url?: string;
    teams?: number[];
    tournamentNameForUrl?: string;
    parentLeagueId?: number;
    parentLeagueName?: string;
    isCurrentSeason?: boolean;
    parentLeagueSeason?: string;
    countryCode?: string;
}

export interface General {
    matchId?: string;
    matchName?: string;
    matchRound?: string;
    teamColors?: TeamColors;
    leagueId?: number;
    leagueName?: string;
    leagueRoundName?: string;
    parentLeagueId?: number;
    countryCode?: string;
    parentLeagueName?: string;
    parentLeagueSeason?: string;
    parentLeagueTopScorerLink?: string;
    parentLeagueTournamentId?: number;
    homeTeam?: GeneralAwayTeam;
    awayTeam?: GeneralAwayTeam;
    coverageLevel?: string;
    matchTimeUTC?: string;
    matchTimeUTCDate?: Date;
    started?: boolean;
    finished?: boolean;
}

export interface GeneralAwayTeam {
    name?: NameElement;
    id?: number;
}

export interface Header {
    teams?: Team[];
    status?: Status;
    events?: null;
}

export interface Team {
    name?: NameElement;
    id?: number;
    score?: number;
    imageUrl?: string;
    pageUrl?: string;
    fifaRank?: null;
}

export interface SEO {
    path?: string;
    eventJSONLD?: EventJSONLD;
    breadcrumbJSONLD?: BreadcrumbJSONLD[];
    faqJSONLD?: FAQJSONLD;
}

export interface BreadcrumbJSONLD {
    "@context"?: string;
    "@type"?: string;
    itemListElement?: ItemListElement[];
}

export interface ItemListElement {
    "@type"?: Type;
    position?: number;
    name?: string;
    item?: string;
}

export enum Type {
    ListItem = "ListItem",
}

export interface EventJSONLD {
    "@context"?: string;
    "@type"?: string;
    sport?: string;
    homeTeam?: EventJSONLDAwayTeam;
    awayTeam?: EventJSONLDAwayTeam;
    name?: string;
    description?: string;
    startDate?: Date;
    endDate?: Date;
    eventStatus?: string;
    eventAttendanceMode?: string;
    location?: Location;
    image?: string[];
    organizer?: Organizer;
    offers?: Offers;
    performer?: Organizer[];
}

export interface EventJSONLDAwayTeam {
    "@context"?: string;
    "@type"?: string;
    name?: NameElement;
    sport?: string;
    logo?: string;
    url?: string;
    location?: null;
    memberOf?: null;
}

export interface Location {
    "@type"?: string;
    url?: string;
}

export interface Offers {
    "@type"?: string;
    url?: string;
    availability?: string;
    price?: string;
    priceCurrency?: string;
    validFrom?: Date;
}

export interface Organizer {
    "@type"?: string;
    name?: string;
    url?: string;
    logo?: string;
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMatchDetails(json: string): MatchDetails {
        return cast(JSON.parse(json), r("MatchDetails"));
    }

    public static matchDetailsToJson(value: MatchDetails): string {
        return JSON.stringify(uncast(value, r("MatchDetails")), null, 2);
    }

    public static toContent(json: string): Content {
        return cast(JSON.parse(json), r("Content"));
    }

    public static contentToJson(value: Content): string {
        return JSON.stringify(uncast(value, r("Content")), null, 2);
    }

    public static toH2H(json: string): H2H {
        return cast(JSON.parse(json), r("H2H"));
    }

    public static h2HToJson(value: H2H): string {
        return JSON.stringify(uncast(value, r("H2H")), null, 2);
    }

    public static toMatch(json: string): Match {
        return cast(JSON.parse(json), r("Match"));
    }

    public static matchToJson(value: Match): string {
        return JSON.stringify(uncast(value, r("Match")), null, 2);
    }

    public static toMatchAway(json: string): MatchAway {
        return cast(JSON.parse(json), r("MatchAway"));
    }

    public static matchAwayToJson(value: MatchAway): string {
        return JSON.stringify(uncast(value, r("MatchAway")), null, 2);
    }

    public static toLeague(json: string): League {
        return cast(JSON.parse(json), r("League"));
    }

    public static leagueToJson(value: League): string {
        return JSON.stringify(uncast(value, r("League")), null, 2);
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

    public static toMatchDate(json: string): MatchDate {
        return cast(JSON.parse(json), r("MatchDate"));
    }

    public static matchDateToJson(value: MatchDate): string {
        return JSON.stringify(uncast(value, r("MatchDate")), null, 2);
    }

    public static toContentLineup(json: string): ContentLineup {
        return cast(JSON.parse(json), r("ContentLineup"));
    }

    public static contentLineupToJson(value: ContentLineup): string {
        return JSON.stringify(uncast(value, r("ContentLineup")), null, 2);
    }

    public static toPurpleBench(json: string): PurpleBench {
        return cast(JSON.parse(json), r("PurpleBench"));
    }

    public static purpleBenchToJson(value: PurpleBench): string {
        return JSON.stringify(uncast(value, r("PurpleBench")), null, 2);
    }

    public static toBenchArrElement(json: string): BenchArrElement {
        return cast(JSON.parse(json), r("BenchArrElement"));
    }

    public static benchArrElementToJson(value: BenchArrElement): string {
        return JSON.stringify(uncast(value, r("BenchArrElement")), null, 2);
    }

    public static toBenchArrEvents(json: string): BenchArrEvents {
        return cast(JSON.parse(json), r("BenchArrEvents"));
    }

    public static benchArrEventsToJson(value: BenchArrEvents): string {
        return JSON.stringify(uncast(value, r("BenchArrEvents")), null, 2);
    }

    public static toPurpleSub(json: string): PurpleSub {
        return cast(JSON.parse(json), r("PurpleSub"));
    }

    public static purpleSubToJson(value: PurpleSub): string {
        return JSON.stringify(uncast(value, r("PurpleSub")), null, 2);
    }

    public static toFantasyScoreClass(json: string): FantasyScoreClass {
        return cast(JSON.parse(json), r("FantasyScoreClass"));
    }

    public static fantasyScoreClassToJson(value: FantasyScoreClass): string {
        return JSON.stringify(uncast(value, r("FantasyScoreClass")), null, 2);
    }

    public static toNameClass(json: string): NameClass {
        return cast(JSON.parse(json), r("NameClass"));
    }

    public static nameClassToJson(value: NameClass): string {
        return JSON.stringify(uncast(value, r("NameClass")), null, 2);
    }

    public static toBenchArrRating(json: string): BenchArrRating {
        return cast(JSON.parse(json), r("BenchArrRating"));
    }

    public static benchArrRatingToJson(value: BenchArrRating): string {
        return JSON.stringify(uncast(value, r("BenchArrRating")), null, 2);
    }

    public static toIsTop(json: string): IsTop {
        return cast(JSON.parse(json), r("IsTop"));
    }

    public static isTopToJson(value: IsTop): string {
        return JSON.stringify(uncast(value, r("IsTop")), null, 2);
    }

    public static toShot(json: string): Shot {
        return cast(JSON.parse(json), r("Shot"));
    }

    public static shotToJson(value: Shot): string {
        return JSON.stringify(uncast(value, r("Shot")), null, 2);
    }

    public static toOnGoalShot(json: string): OnGoalShot {
        return cast(JSON.parse(json), r("OnGoalShot"));
    }

    public static onGoalShotToJson(value: OnGoalShot): string {
        return JSON.stringify(uncast(value, r("OnGoalShot")), null, 2);
    }

    public static toBenchArrStat(json: string): BenchArrStat {
        return cast(JSON.parse(json), r("BenchArrStat"));
    }

    public static benchArrStatToJson(value: BenchArrStat): string {
        return JSON.stringify(uncast(value, r("BenchArrStat")), null, 2);
    }

    public static toPurpleStats(json: string): PurpleStats {
        return cast(JSON.parse(json), r("PurpleStats"));
    }

    public static purpleStatsToJson(value: PurpleStats): string {
        return JSON.stringify(uncast(value, r("PurpleStats")), null, 2);
    }

    public static toAccurateCrosses(json: string): AccurateCrosses {
        return cast(JSON.parse(json), r("AccurateCrosses"));
    }

    public static accurateCrossesToJson(value: AccurateCrosses): string {
        return JSON.stringify(uncast(value, r("AccurateCrosses")), null, 2);
    }

    public static toAerialDuelsWon(json: string): AerialDuelsWon {
        return cast(JSON.parse(json), r("AerialDuelsWon"));
    }

    public static aerialDuelsWonToJson(value: AerialDuelsWon): string {
        return JSON.stringify(uncast(value, r("AerialDuelsWon")), null, 2);
    }

    public static toAssists(json: string): Assists {
        return cast(JSON.parse(json), r("Assists"));
    }

    public static assistsToJson(value: Assists): string {
        return JSON.stringify(uncast(value, r("Assists")), null, 2);
    }

    public static toShotmap(json: string): Shotmap {
        return cast(JSON.parse(json), r("Shotmap"));
    }

    public static shotmapToJson(value: Shotmap): string {
        return JSON.stringify(uncast(value, r("Shotmap")), null, 2);
    }

    public static toTeamData(json: string): TeamData {
        return cast(JSON.parse(json), r("TeamData"));
    }

    public static teamDataToJson(value: TeamData): string {
        return JSON.stringify(uncast(value, r("TeamData")), null, 2);
    }

    public static toTeamDataAway(json: string): TeamDataAway {
        return cast(JSON.parse(json), r("TeamDataAway"));
    }

    public static teamDataAwayToJson(value: TeamDataAway): string {
        return JSON.stringify(uncast(value, r("TeamDataAway")), null, 2);
    }

    public static toCoaches(json: string): Coaches {
        return cast(JSON.parse(json), r("Coaches"));
    }

    public static coachesToJson(value: Coaches): string {
        return JSON.stringify(uncast(value, r("Coaches")), null, 2);
    }

    public static toCoach(json: string): Coach {
        return cast(JSON.parse(json), r("Coach"));
    }

    public static coachToJson(value: Coach): string {
        return JSON.stringify(uncast(value, r("Coach")), null, 2);
    }

    public static toCoachesArrEvents(json: string): CoachesArrEvents {
        return cast(JSON.parse(json), r("CoachesArrEvents"));
    }

    public static coachesArrEventsToJson(value: CoachesArrEvents): string {
        return JSON.stringify(uncast(value, r("CoachesArrEvents")), null, 2);
    }

    public static toLineupElement(json: string): LineupElement {
        return cast(JSON.parse(json), r("LineupElement"));
    }

    public static lineupElementToJson(value: LineupElement): string {
        return JSON.stringify(uncast(value, r("LineupElement")), null, 2);
    }

    public static toNaPlayersArr(json: string): NaPlayersArr {
        return cast(JSON.parse(json), r("NaPlayersArr"));
    }

    public static naPlayersArrToJson(value: NaPlayersArr): string {
        return JSON.stringify(uncast(value, r("NaPlayersArr")), null, 2);
    }

    public static toNaInfo(json: string): NaInfo {
        return cast(JSON.parse(json), r("NaInfo"));
    }

    public static naInfoToJson(value: NaInfo): string {
        return JSON.stringify(uncast(value, r("NaInfo")), null, 2);
    }

    public static toExpectedReturn(json: string): ExpectedReturn {
        return cast(JSON.parse(json), r("ExpectedReturn"));
    }

    public static expectedReturnToJson(value: ExpectedReturn): string {
        return JSON.stringify(uncast(value, r("ExpectedReturn")), null, 2);
    }

    public static toOptaLineup(json: string): OptaLineup {
        return cast(JSON.parse(json), r("OptaLineup"));
    }

    public static optaLineupToJson(value: OptaLineup): string {
        return JSON.stringify(uncast(value, r("OptaLineup")), null, 2);
    }

    public static toPlayerElement(json: string): PlayerElement {
        return cast(JSON.parse(json), r("PlayerElement"));
    }

    public static playerElementToJson(value: PlayerElement): string {
        return JSON.stringify(uncast(value, r("PlayerElement")), null, 2);
    }

    public static toPlayerEvents(json: string): PlayerEvents {
        return cast(JSON.parse(json), r("PlayerEvents"));
    }

    public static playerEventsToJson(value: PlayerEvents): string {
        return JSON.stringify(uncast(value, r("PlayerEvents")), null, 2);
    }

    public static toFluffySub(json: string): FluffySub {
        return cast(JSON.parse(json), r("FluffySub"));
    }

    public static fluffySubToJson(value: FluffySub): string {
        return JSON.stringify(uncast(value, r("FluffySub")), null, 2);
    }

    public static toFantasyScore(json: string): FantasyScore {
        return cast(JSON.parse(json), r("FantasyScore"));
    }

    public static fantasyScoreToJson(value: FantasyScore): string {
        return JSON.stringify(uncast(value, r("FantasyScore")), null, 2);
    }

    public static toPositionLabel(json: string): PositionLabel {
        return cast(JSON.parse(json), r("PositionLabel"));
    }

    public static positionLabelToJson(value: PositionLabel): string {
        return JSON.stringify(uncast(value, r("PositionLabel")), null, 2);
    }

    public static toPlayerStat(json: string): PlayerStat {
        return cast(JSON.parse(json), r("PlayerStat"));
    }

    public static playerStatToJson(value: PlayerStat): string {
        return JSON.stringify(uncast(value, r("PlayerStat")), null, 2);
    }

    public static toFluffyStats(json: string): FluffyStats {
        return cast(JSON.parse(json), r("FluffyStats"));
    }

    public static fluffyStatsToJson(value: FluffyStats): string {
        return JSON.stringify(uncast(value, r("FluffyStats")), null, 2);
    }

    public static toNaPlayers(json: string): NaPlayers {
        return cast(JSON.parse(json), r("NaPlayers"));
    }

    public static naPlayersToJson(value: NaPlayers): string {
        return JSON.stringify(uncast(value, r("NaPlayers")), null, 2);
    }

    public static toTeamRatings(json: string): TeamRatings {
        return cast(JSON.parse(json), r("TeamRatings"));
    }

    public static teamRatingsToJson(value: TeamRatings): string {
        return JSON.stringify(uncast(value, r("TeamRatings")), null, 2);
    }

    public static toLiveticker(json: string): Liveticker {
        return cast(JSON.parse(json), r("Liveticker"));
    }

    public static livetickerToJson(value: Liveticker): string {
        return JSON.stringify(uncast(value, r("Liveticker")), null, 2);
    }

    public static toMatchFacts(json: string): MatchFacts {
        return cast(JSON.parse(json), r("MatchFacts"));
    }

    public static matchFactsToJson(value: MatchFacts): string {
        return JSON.stringify(uncast(value, r("MatchFacts")), null, 2);
    }

    public static toQADatum(json: string): QADatum {
        return cast(JSON.parse(json), r("QADatum"));
    }

    public static qADatumToJson(value: QADatum): string {
        return JSON.stringify(uncast(value, r("QADatum")), null, 2);
    }

    public static toMatchFactsEvents(json: string): MatchFactsEvents {
        return cast(JSON.parse(json), r("MatchFactsEvents"));
    }

    public static matchFactsEventsToJson(value: MatchFactsEvents): string {
        return JSON.stringify(uncast(value, r("MatchFactsEvents")), null, 2);
    }

    public static toEvent(json: string): Event {
        return cast(JSON.parse(json), r("Event"));
    }

    public static eventToJson(value: Event): string {
        return JSON.stringify(uncast(value, r("Event")), null, 2);
    }

    public static toEventPlayer(json: string): EventPlayer {
        return cast(JSON.parse(json), r("EventPlayer"));
    }

    public static eventPlayerToJson(value: EventPlayer): string {
        return JSON.stringify(uncast(value, r("EventPlayer")), null, 2);
    }

    public static toSwap(json: string): Swap {
        return cast(JSON.parse(json), r("Swap"));
    }

    public static swapToJson(value: Swap): string {
        return JSON.stringify(uncast(value, r("Swap")), null, 2);
    }

    public static toHighlights(json: string): Highlights {
        return cast(JSON.parse(json), r("Highlights"));
    }

    public static highlightsToJson(value: Highlights): string {
        return JSON.stringify(uncast(value, r("Highlights")), null, 2);
    }

    public static toInfoBox(json: string): InfoBox {
        return cast(JSON.parse(json), r("InfoBox"));
    }

    public static infoBoxToJson(value: InfoBox): string {
        return JSON.stringify(uncast(value, r("InfoBox")), null, 2);
    }

    public static toReferee(json: string): Referee {
        return cast(JSON.parse(json), r("Referee"));
    }

    public static refereeToJson(value: Referee): string {
        return JSON.stringify(uncast(value, r("Referee")), null, 2);
    }

    public static toStadium(json: string): Stadium {
        return cast(JSON.parse(json), r("Stadium"));
    }

    public static stadiumToJson(value: Stadium): string {
        return JSON.stringify(uncast(value, r("Stadium")), null, 2);
    }

    public static toTournament(json: string): Tournament {
        return cast(JSON.parse(json), r("Tournament"));
    }

    public static tournamentToJson(value: Tournament): string {
        return JSON.stringify(uncast(value, r("Tournament")), null, 2);
    }

    public static toInsight(json: string): Insight {
        return cast(JSON.parse(json), r("Insight"));
    }

    public static insightToJson(value: Insight): string {
        return JSON.stringify(uncast(value, r("Insight")), null, 2);
    }

    public static toStatValue(json: string): StatValue {
        return cast(JSON.parse(json), r("StatValue"));
    }

    public static statValueToJson(value: StatValue): string {
        return JSON.stringify(uncast(value, r("StatValue")), null, 2);
    }

    public static toMatchesInRound(json: string): MatchesInRound {
        return cast(JSON.parse(json), r("MatchesInRound"));
    }

    public static matchesInRoundToJson(value: MatchesInRound): string {
        return JSON.stringify(uncast(value, r("MatchesInRound")), null, 2);
    }

    public static toMatchesInRoundAway(json: string): MatchesInRoundAway {
        return cast(JSON.parse(json), r("MatchesInRoundAway"));
    }

    public static matchesInRoundAwayToJson(value: MatchesInRoundAway): string {
        return JSON.stringify(uncast(value, r("MatchesInRoundAway")), null, 2);
    }

    public static toMomentum(json: string): Momentum {
        return cast(JSON.parse(json), r("Momentum"));
    }

    public static momentumToJson(value: Momentum): string {
        return JSON.stringify(uncast(value, r("Momentum")), null, 2);
    }

    public static toMain(json: string): Main {
        return cast(JSON.parse(json), r("Main"));
    }

    public static mainToJson(value: Main): string {
        return JSON.stringify(uncast(value, r("Main")), null, 2);
    }

    public static toDatum(json: string): Datum {
        return cast(JSON.parse(json), r("Datum"));
    }

    public static datumToJson(value: Datum): string {
        return JSON.stringify(uncast(value, r("Datum")), null, 2);
    }

    public static toPlayerOfTheMatch(json: string): PlayerOfTheMatch {
        return cast(JSON.parse(json), r("PlayerOfTheMatch"));
    }

    public static playerOfTheMatchToJson(value: PlayerOfTheMatch): string {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatch")), null, 2);
    }

    public static toPlayerOfTheMatchRating(json: string): PlayerOfTheMatchRating {
        return cast(JSON.parse(json), r("PlayerOfTheMatchRating"));
    }

    public static playerOfTheMatchRatingToJson(value: PlayerOfTheMatchRating): string {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatchRating")), null, 2);
    }

    public static toPlayerOfTheMatchStat(json: string): PlayerOfTheMatchStat {
        return cast(JSON.parse(json), r("PlayerOfTheMatchStat"));
    }

    public static playerOfTheMatchStatToJson(value: PlayerOfTheMatchStat): string {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatchStat")), null, 2);
    }

    public static toTentacledStats(json: string): TentacledStats {
        return cast(JSON.parse(json), r("TentacledStats"));
    }

    public static tentacledStatsToJson(value: TentacledStats): string {
        return JSON.stringify(uncast(value, r("TentacledStats")), null, 2);
    }

    public static toPoll(json: string): Poll {
        return cast(JSON.parse(json), r("Poll"));
    }

    public static pollToJson(value: Poll): string {
        return JSON.stringify(uncast(value, r("Poll")), null, 2);
    }

    public static toOddspoll(json: string): Oddspoll {
        return cast(JSON.parse(json), r("Oddspoll"));
    }

    public static oddspollToJson(value: Oddspoll): string {
        return JSON.stringify(uncast(value, r("Oddspoll")), null, 2);
    }

    public static toFact(json: string): Fact {
        return cast(JSON.parse(json), r("Fact"));
    }

    public static factToJson(value: Fact): string {
        return JSON.stringify(uncast(value, r("Fact")), null, 2);
    }

    public static toVoteResult(json: string): VoteResult {
        return cast(JSON.parse(json), r("VoteResult"));
    }

    public static voteResultToJson(value: VoteResult): string {
        return JSON.stringify(uncast(value, r("VoteResult")), null, 2);
    }

    public static toVote(json: string): Vote {
        return cast(JSON.parse(json), r("Vote"));
    }

    public static voteToJson(value: Vote): string {
        return JSON.stringify(uncast(value, r("Vote")), null, 2);
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

    public static toTopPlayer(json: string): TopPlayer {
        return cast(JSON.parse(json), r("TopPlayer"));
    }

    public static topPlayerToJson(value: TopPlayer): string {
        return JSON.stringify(uncast(value, r("TopPlayer")), null, 2);
    }

    public static toTopScorers(json: string): TopScorers {
        return cast(JSON.parse(json), r("TopScorers"));
    }

    public static topScorersToJson(value: TopScorers): string {
        return JSON.stringify(uncast(value, r("TopScorers")), null, 2);
    }

    public static toPlayer(json: string): Player {
        return cast(JSON.parse(json), r("Player"));
    }

    public static playerToJson(value: Player): string {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }

    public static toAwayPlayerStats(json: string): AwayPlayerStats {
        return cast(JSON.parse(json), r("AwayPlayerStats"));
    }

    public static awayPlayerStatsToJson(value: AwayPlayerStats): string {
        return JSON.stringify(uncast(value, r("AwayPlayerStats")), null, 2);
    }

    public static toShotmapClass(json: string): ShotmapClass {
        return cast(JSON.parse(json), r("ShotmapClass"));
    }

    public static shotmapClassToJson(value: ShotmapClass): string {
        return JSON.stringify(uncast(value, r("ShotmapClass")), null, 2);
    }

    public static toShotmapPeriods(json: string): ShotmapPeriods {
        return cast(JSON.parse(json), r("ShotmapPeriods"));
    }

    public static shotmapPeriodsToJson(value: ShotmapPeriods): string {
        return JSON.stringify(uncast(value, r("ShotmapPeriods")), null, 2);
    }

    public static toContentStats(json: string): ContentStats {
        return cast(JSON.parse(json), r("ContentStats"));
    }

    public static contentStatsToJson(value: ContentStats): string {
        return JSON.stringify(uncast(value, r("ContentStats")), null, 2);
    }

    public static toStatsPeriods(json: string): StatsPeriods {
        return cast(JSON.parse(json), r("StatsPeriods"));
    }

    public static statsPeriodsToJson(value: StatsPeriods): string {
        return JSON.stringify(uncast(value, r("StatsPeriods")), null, 2);
    }

    public static toAll(json: string): All {
        return cast(JSON.parse(json), r("All"));
    }

    public static allToJson(value: All): string {
        return JSON.stringify(uncast(value, r("All")), null, 2);
    }

    public static toAllStat(json: string): AllStat {
        return cast(JSON.parse(json), r("AllStat"));
    }

    public static allStatToJson(value: AllStat): string {
        return JSON.stringify(uncast(value, r("AllStat")), null, 2);
    }

    public static toStatStatClass(json: string): StatStatClass {
        return cast(JSON.parse(json), r("StatStatClass"));
    }

    public static statStatClassToJson(value: StatStatClass): string {
        return JSON.stringify(uncast(value, r("StatStatClass")), null, 2);
    }

    public static toTeamColors(json: string): TeamColors {
        return cast(JSON.parse(json), r("TeamColors"));
    }

    public static teamColorsToJson(value: TeamColors): string {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
    }

    public static toMode(json: string): Mode {
        return cast(JSON.parse(json), r("Mode"));
    }

    public static modeToJson(value: Mode): string {
        return JSON.stringify(uncast(value, r("Mode")), null, 2);
    }

    public static toSuperlive(json: string): Superlive {
        return cast(JSON.parse(json), r("Superlive"));
    }

    public static superliveToJson(value: Superlive): string {
        return JSON.stringify(uncast(value, r("Superlive")), null, 2);
    }

    public static toTable(json: string): Table {
        return cast(JSON.parse(json), r("Table"));
    }

    public static tableToJson(value: Table): string {
        return JSON.stringify(uncast(value, r("Table")), null, 2);
    }

    public static toGeneral(json: string): General {
        return cast(JSON.parse(json), r("General"));
    }

    public static generalToJson(value: General): string {
        return JSON.stringify(uncast(value, r("General")), null, 2);
    }

    public static toGeneralAwayTeam(json: string): GeneralAwayTeam {
        return cast(JSON.parse(json), r("GeneralAwayTeam"));
    }

    public static generalAwayTeamToJson(value: GeneralAwayTeam): string {
        return JSON.stringify(uncast(value, r("GeneralAwayTeam")), null, 2);
    }

    public static toHeader(json: string): Header {
        return cast(JSON.parse(json), r("Header"));
    }

    public static headerToJson(value: Header): string {
        return JSON.stringify(uncast(value, r("Header")), null, 2);
    }

    public static toTeam(json: string): Team {
        return cast(JSON.parse(json), r("Team"));
    }

    public static teamToJson(value: Team): string {
        return JSON.stringify(uncast(value, r("Team")), null, 2);
    }

    public static toSEO(json: string): SEO {
        return cast(JSON.parse(json), r("SEO"));
    }

    public static sEOToJson(value: SEO): string {
        return JSON.stringify(uncast(value, r("SEO")), null, 2);
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

    public static toEventJSONLD(json: string): EventJSONLD {
        return cast(JSON.parse(json), r("EventJSONLD"));
    }

    public static eventJSONLDToJson(value: EventJSONLD): string {
        return JSON.stringify(uncast(value, r("EventJSONLD")), null, 2);
    }

    public static toEventJSONLDAwayTeam(json: string): EventJSONLDAwayTeam {
        return cast(JSON.parse(json), r("EventJSONLDAwayTeam"));
    }

    public static eventJSONLDAwayTeamToJson(value: EventJSONLDAwayTeam): string {
        return JSON.stringify(uncast(value, r("EventJSONLDAwayTeam")), null, 2);
    }

    public static toLocation(json: string): Location {
        return cast(JSON.parse(json), r("Location"));
    }

    public static locationToJson(value: Location): string {
        return JSON.stringify(uncast(value, r("Location")), null, 2);
    }

    public static toOffers(json: string): Offers {
        return cast(JSON.parse(json), r("Offers"));
    }

    public static offersToJson(value: Offers): string {
        return JSON.stringify(uncast(value, r("Offers")), null, 2);
    }

    public static toOrganizer(json: string): Organizer {
        return cast(JSON.parse(json), r("Organizer"));
    }

    public static organizerToJson(value: Organizer): string {
        return JSON.stringify(uncast(value, r("Organizer")), null, 2);
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
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
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
    "MatchDetails": o([
        { json: "general", js: "general", typ: u(undefined, r("General")) },
        { json: "header", js: "header", typ: u(undefined, r("Header")) },
        { json: "nav", js: "nav", typ: u(undefined, a("")) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, true) },
        { json: "hasPendingVAR", js: "hasPendingVAR", typ: u(undefined, true) },
        { json: "content", js: "content", typ: u(undefined, r("Content")) },
        { json: "seo", js: "seo", typ: u(undefined, r("SEO")) },
    ], false),
    "Content": o([
        { json: "matchFacts", js: "matchFacts", typ: u(undefined, r("MatchFacts")) },
        { json: "liveticker", js: "liveticker", typ: u(undefined, r("Liveticker")) },
        { json: "superlive", js: "superlive", typ: u(undefined, r("Superlive")) },
        { json: "buzz", js: "buzz", typ: u(undefined, null) },
        { json: "stats", js: "stats", typ: u(undefined, r("ContentStats")) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, r("ShotmapClass")) },
        { json: "lineup", js: "lineup", typ: u(undefined, r("ContentLineup")) },
        { json: "playoff", js: "playoff", typ: u(undefined, true) },
        { json: "table", js: "table", typ: u(undefined, r("Table")) },
        { json: "h2h", js: "h2h", typ: u(undefined, r("H2H")) },
        { json: "momentum", js: "momentum", typ: u(undefined, r("Momentum")) },
    ], false),
    "H2H": o([
        { json: "summary", js: "summary", typ: u(undefined, a(0)) },
        { json: "matches", js: "matches", typ: u(undefined, a(r("Match"))) },
    ], false),
    "Match": o([
        { json: "time", js: "time", typ: u(undefined, r("MatchDate")) },
        { json: "matchUrl", js: "matchUrl", typ: u(undefined, "") },
        { json: "league", js: "league", typ: u(undefined, r("League")) },
        { json: "home", js: "home", typ: u(undefined, r("MatchAway")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "away", js: "away", typ: u(undefined, r("MatchAway")) },
    ], false),
    "MatchAway": o([
        { json: "name", js: "name", typ: u(undefined, r("NameElement")) },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "League": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
    ], false),
    "Status": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
        { json: "whoLostOnPenalties", js: "whoLostOnPenalties", typ: u(undefined, null) },
        { json: "whoLostOnAggregated", js: "whoLostOnAggregated", typ: u(undefined, "") },
    ], false),
    "Reason": o([
        { json: "short", js: "short", typ: u(undefined, r("Short")) },
        { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
        { json: "long", js: "long", typ: u(undefined, r("Long")) },
        { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ], false),
    "MatchDate": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
    ], false),
    "ContentLineup": o([
        { json: "lineup", js: "lineup", typ: u(undefined, a(r("LineupElement"))) },
        { json: "bench", js: "bench", typ: u(undefined, r("PurpleBench")) },
        { json: "naPlayers", js: "naPlayers", typ: u(undefined, r("NaPlayers")) },
        { json: "coaches", js: "coaches", typ: u(undefined, r("Coaches")) },
        { json: "teamRatings", js: "teamRatings", typ: u(undefined, r("TeamRatings")) },
        { json: "hasFantasy", js: "hasFantasy", typ: u(undefined, true) },
        { json: "usingEnetpulseLineup", js: "usingEnetpulseLineup", typ: u(undefined, true) },
        { json: "usingOptaLineup", js: "usingOptaLineup", typ: u(undefined, true) },
        { json: "simpleLineup", js: "simpleLineup", typ: u(undefined, true) },
    ], false),
    "PurpleBench": o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        { json: "benchArr", js: "benchArr", typ: u(undefined, a(a(r("BenchArrElement")))) },
    ], false),
    "BenchArrElement": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "positionId", js: "positionId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, r("Position")) },
        { json: "localizedPosition", js: "localizedPosition", typ: u(undefined, null) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shirt", js: "shirt", typ: u(undefined, 0) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "usingOptaId", js: "usingOptaId", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, u(0, null)) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, 0) },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("BenchArrEvents")) },
        { json: "rating", js: "rating", typ: u(undefined, r("BenchArrRating")) },
        { json: "fantasyScore", js: "fantasyScore", typ: u(undefined, r("FantasyScoreClass")) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "stats", js: "stats", typ: u(undefined, a(r("BenchArrStat"))) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
        { json: "isGoalkeeper", js: "isGoalkeeper", typ: u(undefined, true) },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
    ], false),
    "BenchArrEvents": o([
        { json: "sub", js: "sub", typ: u(undefined, r("PurpleSub")) },
        { json: "yc", js: "yc", typ: u(undefined, 0) },
    ], false),
    "PurpleSub": o([
        { json: "subbedIn", js: "subbedIn", typ: u(undefined, 0) },
    ], false),
    "FantasyScoreClass": o([
        { json: "num", js: "num", typ: u(undefined, u(3.14, null)) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("BgcolorEnum")) },
    ], false),
    "NameClass": o([
        { json: "firstName", js: "firstName", typ: u(undefined, "") },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
    ], false),
    "BenchArrRating": o([
        { json: "num", js: "num", typ: u(undefined, u(null, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("Bgcolor")) },
        { json: "isTop", js: "isTop", typ: u(undefined, r("IsTop")) },
    ], false),
    "IsTop": o([
        { json: "isTopRating", js: "isTopRating", typ: u(undefined, true) },
        { json: "isMatchFinished", js: "isMatchFinished", typ: u(undefined, true) },
    ], false),
    "Shot": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "eventType", js: "eventType", typ: u(undefined, r("EventType")) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "playerName", js: "playerName", typ: u(undefined, "") },
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
        { json: "min", js: "min", typ: u(undefined, 0) },
        { json: "minAdded", js: "minAdded", typ: u(undefined, u(0, null)) },
        { json: "isBlocked", js: "isBlocked", typ: u(undefined, true) },
        { json: "isOnTarget", js: "isOnTarget", typ: u(undefined, true) },
        { json: "blockedX", js: "blockedX", typ: u(undefined, u(3.14, null)) },
        { json: "blockedY", js: "blockedY", typ: u(undefined, u(3.14, null)) },
        { json: "goalCrossedY", js: "goalCrossedY", typ: u(undefined, 3.14) },
        { json: "goalCrossedZ", js: "goalCrossedZ", typ: u(undefined, 3.14) },
        { json: "expectedGoals", js: "expectedGoals", typ: u(undefined, 3.14) },
        { json: "expectedGoalsOnTarget", js: "expectedGoalsOnTarget", typ: u(undefined, u(3.14, null)) },
        { json: "shotType", js: "shotType", typ: u(undefined, r("ShotType")) },
        { json: "situation", js: "situation", typ: u(undefined, r("Situation")) },
        { json: "period", js: "period", typ: u(undefined, r("Period")) },
        { json: "isOwnGoal", js: "isOwnGoal", typ: u(undefined, true) },
        { json: "onGoalShot", js: "onGoalShot", typ: u(undefined, r("OnGoalShot")) },
        { json: "isSavedOffLine", js: "isSavedOffLine", typ: u(undefined, true) },
        { json: "teamColor", js: "teamColor", typ: u(undefined, r("TeamColorEnum")) },
        { json: "firstName", js: "firstName", typ: u(undefined, "") },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
    ], false),
    "OnGoalShot": o([
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
        { json: "zoomRatio", js: "zoomRatio", typ: u(undefined, 3.14) },
    ], false),
    "BenchArrStat": o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("PurpleStats")) },
    ], false),
    "PurpleStats": o([
        { json: "FotMob rating", js: "FotMob rating", typ: u(undefined, r("Assists")) },
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, r("Assists")) },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, r("Assists")) },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Chances created", js: "Chances created", typ: u(undefined, r("Assists")) },
        { json: "Expected goals (xG)", js: "Expected goals (xG)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Expected assists (xA)", js: "Expected assists (xA)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "xG + xA", js: "xG + xA", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Fantasy points", js: "Fantasy points", typ: u(undefined, r("Assists")) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Big chances missed", js: "Big chances missed", typ: u(undefined, r("Assists")) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, r("Assists")) },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        { json: "Touches in opposition box", js: "Touches in opposition box", typ: u(undefined, r("Assists")) },
        { json: "Passes into final third", js: "Passes into final third", typ: u(undefined, r("Assists")) },
        { json: "Accurate crosses", js: "Accurate crosses", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, r("Assists")) },
        { json: "xG Non-penalty", js: "xG Non-penalty", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Tackles won", js: "Tackles won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Defensive actions", js: "Defensive actions", typ: u(undefined, r("Assists")) },
        { json: "Ground duels won", js: "Ground duels won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Aerial duels won", js: "Aerial duels won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        { json: "Fouls committed", js: "Fouls committed", typ: u(undefined, r("Assists")) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        { json: "Expected goals on target (xGOT)", js: "Expected goals on target (xGOT)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Dribbled past", js: "Dribbled past", typ: u(undefined, r("Assists")) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        { json: "Successful dribbles", js: "Successful dribbles", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Headed clearance", js: "Headed clearance", typ: u(undefined, r("Assists")) },
    ], false),
    "AccurateCrosses": o([
        { json: "key", js: "key", typ: u(undefined, r("AccurateCrossesKey")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    "AerialDuelsWon": o([
        { json: "key", js: "key", typ: u(undefined, r("AccurateCrossesKey")) },
        { json: "value", js: "value", typ: u(undefined, u(0, "")) },
    ], false),
    "Assists": o([
        { json: "key", js: "key", typ: u(undefined, r("AssistsKey")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    "Shotmap": o([
        { json: "key", js: "key", typ: u(undefined, null) },
        { json: "value", js: "value", typ: u(undefined, true) },
    ], false),
    "TeamData": o([
        { json: "home", js: "home", typ: u(undefined, r("TeamDataAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamDataAway")) },
    ], false),
    "TeamDataAway": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "color", js: "color", typ: u(undefined, r("TeamColorEnum")) },
    ], false),
    "Coaches": o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        { json: "coachesArr", js: "coachesArr", typ: u(undefined, a(a(r("Coach")))) },
    ], false),
    "Coach": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, null) },
        { json: "role", js: "role", typ: u(undefined, "") },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("CoachesArrEvents")) },
    ], false),
    "CoachesArrEvents": o([
    ], false),
    "LineupElement": o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("NameElement")) },
        { json: "bench", js: "bench", typ: u(undefined, a(r("BenchArrElement"))) },
        { json: "coach", js: "coach", typ: u(undefined, a(r("Coach"))) },
        { json: "players", js: "players", typ: u(undefined, a(a(r("PlayerElement")))) },
        { json: "lineup", js: "lineup", typ: u(undefined, "") },
        { json: "nonAvailablePlayers", js: "nonAvailablePlayers", typ: u(undefined, a(a(r("NaPlayersArr")))) },
        { json: "optaLineup", js: "optaLineup", typ: u(undefined, r("OptaLineup")) },
    ], false),
    "NaPlayersArr": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shortName", js: "shortName", typ: u(undefined, r("ShortName")) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, null) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("CoachesArrEvents")) },
        { json: "naInfo", js: "naInfo", typ: u(undefined, r("NaInfo")) },
    ], false),
    "NaInfo": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "naReason", js: "naReason", typ: u(undefined, "") },
        { json: "naReasonKey", js: "naReasonKey", typ: u(undefined, "") },
        { json: "injury", js: "injury", typ: u(undefined, true) },
        { json: "expectedReturn", js: "expectedReturn", typ: u(undefined, r("ExpectedReturn")) },
    ], false),
    "ExpectedReturn": o([
        { json: "expectedReturnKey", js: "expectedReturnKey", typ: u(undefined, r("ExpectedReturnKey")) },
        { json: "expectedReturnDateParam", js: "expectedReturnDateParam", typ: u(undefined, u(r("ExpectedReturnDateParam"), null)) },
        { json: "expectedReturnFallback", js: "expectedReturnFallback", typ: u(undefined, r("ExpectedReturnFallback")) },
    ], false),
    "OptaLineup": o([
        { json: "bench", js: "bench", typ: u(undefined, a(r("BenchArrElement"))) },
        { json: "coach", js: "coach", typ: u(undefined, a(r("Coach"))) },
        { json: "players", js: "players", typ: u(undefined, a(a(r("PlayerElement")))) },
        { json: "lineup", js: "lineup", typ: u(undefined, "") },
        { json: "nonAvailablePlayers", js: "nonAvailablePlayers", typ: u(undefined, a(a(r("NaPlayersArr")))) },
    ], false),
    "PlayerElement": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "positionId", js: "positionId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, r("Role")) },
        { json: "positionStringShort", js: "positionStringShort", typ: u(undefined, "") },
        { json: "localizedPosition", js: "localizedPosition", typ: u(undefined, r("PositionLabel")) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shirt", js: "shirt", typ: u(undefined, 0) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "usingOptaId", js: "usingOptaId", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, u(0, null)) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, 0) },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("PlayerEvents")) },
        { json: "rating", js: "rating", typ: u(undefined, r("BenchArrRating")) },
        { json: "fantasyScore", js: "fantasyScore", typ: u(undefined, r("FantasyScore")) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "stats", js: "stats", typ: u(undefined, a(r("PlayerStat"))) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
        { json: "isGoalkeeper", js: "isGoalkeeper", typ: u(undefined, true) },
    ], false),
    "PlayerEvents": o([
        { json: "sub", js: "sub", typ: u(undefined, r("FluffySub")) },
        { json: "yc", js: "yc", typ: u(undefined, 0) },
        { json: "ycrc", js: "ycrc", typ: u(undefined, 0) },
    ], false),
    "FluffySub": o([
        { json: "subbedOut", js: "subbedOut", typ: u(undefined, 0) },
    ], false),
    "FantasyScore": o([
        { json: "num", js: "num", typ: u(undefined, u(0, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("BgcolorEnum")) },
    ], false),
    "PositionLabel": o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "PlayerStat": o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("FluffyStats")) },
    ], false),
    "FluffyStats": o([
        { json: "FotMob rating", js: "FotMob rating", typ: u(undefined, r("Assists")) },
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, r("Assists")) },
        { json: "Saves", js: "Saves", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Goals conceded", js: "Goals conceded", typ: u(undefined, r("Assists")) },
        { json: "xGOT faced", js: "xGOT faced", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Goals prevented", js: "Goals prevented", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Diving save", js: "Diving save", typ: u(undefined, r("Assists")) },
        { json: "Saves inside box", js: "Saves inside box", typ: u(undefined, r("Assists")) },
        { json: "Acted as sweeper", js: "Acted as sweeper", typ: u(undefined, r("Assists")) },
        { json: "Punches", js: "Punches", typ: u(undefined, r("Assists")) },
        { json: "Throws", js: "Throws", typ: u(undefined, r("Assists")) },
        { json: "High claim", js: "High claim", typ: u(undefined, r("Assists")) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        { json: "Fantasy points", js: "Fantasy points", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, r("Assists")) },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        { json: "Chances created", js: "Chances created", typ: u(undefined, r("Assists")) },
        { json: "Expected goals (xG)", js: "Expected goals (xG)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Expected assists (xA)", js: "Expected assists (xA)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "xG + xA", js: "xG + xA", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, r("Assists")) },
        { json: "Touches in opposition box", js: "Touches in opposition box", typ: u(undefined, r("Assists")) },
        { json: "Successful dribbles", js: "Successful dribbles", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Passes into final third", js: "Passes into final third", typ: u(undefined, r("Assists")) },
        { json: "Accurate crosses", js: "Accurate crosses", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Corners", js: "Corners", typ: u(undefined, r("Assists")) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, r("Assists")) },
        { json: "xG Non-penalty", js: "xG Non-penalty", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Tackles won", js: "Tackles won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Last man tackle", js: "Last man tackle", typ: u(undefined, r("Assists")) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        { json: "Interceptions", js: "Interceptions", typ: u(undefined, r("Assists")) },
        { json: "Defensive actions", js: "Defensive actions", typ: u(undefined, r("Assists")) },
        { json: "Dribbled past", js: "Dribbled past", typ: u(undefined, r("Assists")) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        { json: "Ground duels won", js: "Ground duels won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Aerial duels won", js: "Aerial duels won", typ: u(undefined, r("AerialDuelsWon")) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        { json: "Fouls committed", js: "Fouls committed", typ: u(undefined, r("Assists")) },
        { json: "Expected goals on target (xGOT)", js: "Expected goals on target (xGOT)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Headed clearance", js: "Headed clearance", typ: u(undefined, r("Assists")) },
        { json: "Blocks", js: "Blocks", typ: u(undefined, r("Assists")) },
        { json: "Offsides", js: "Offsides", typ: u(undefined, r("Assists")) },
        { json: "Big chances missed", js: "Big chances missed", typ: u(undefined, r("Assists")) },
    ], false),
    "NaPlayers": o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        { json: "naPlayersArr", js: "naPlayersArr", typ: u(undefined, a(a(r("NaPlayersArr")))) },
    ], false),
    "TeamRatings": o([
        { json: "home", js: "home", typ: u(undefined, r("FantasyScoreClass")) },
        { json: "away", js: "away", typ: u(undefined, r("FantasyScoreClass")) },
    ], false),
    "Liveticker": o([
        { json: "langs", js: "langs", typ: u(undefined, "") },
        { json: "teams", js: "teams", typ: u(undefined, a(r("NameElement"))) },
    ], false),
    "MatchFacts": o([
        { json: "matchId", js: "matchId", typ: u(undefined, 0) },
        { json: "highlights", js: "highlights", typ: u(undefined, r("Highlights")) },
        { json: "playerOfTheMatch", js: "playerOfTheMatch", typ: u(undefined, r("PlayerOfTheMatch")) },
        { json: "matchesInRound", js: "matchesInRound", typ: u(undefined, a(r("MatchesInRound"))) },
        { json: "events", js: "events", typ: u(undefined, r("MatchFactsEvents")) },
        { json: "infoBox", js: "infoBox", typ: u(undefined, r("InfoBox")) },
        { json: "teamForm", js: "teamForm", typ: u(undefined, a(a(r("TeamForm")))) },
        { json: "poll", js: "poll", typ: u(undefined, r("Poll")) },
        { json: "topPlayers", js: "topPlayers", typ: u(undefined, r("TopPlayers")) },
        { json: "insights", js: "insights", typ: u(undefined, a(r("Insight"))) },
        { json: "topScorers", js: "topScorers", typ: u(undefined, r("TopScorers")) },
        { json: "momentum", js: "momentum", typ: u(undefined, r("Momentum")) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
        { json: "QAData", js: "QAData", typ: u(undefined, a(r("QADatum"))) },
    ], false),
    "QADatum": o([
        { json: "question", js: "question", typ: u(undefined, "") },
        { json: "answer", js: "answer", typ: u(undefined, "") },
    ], false),
    "MatchFactsEvents": o([
        { json: "ongoing", js: "ongoing", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, a(r("Event"))) },
        { json: "eventTypes", js: "eventTypes", typ: u(undefined, a(u(null, ""))) },
        { json: "penaltyShootoutEvents", js: "penaltyShootoutEvents", typ: u(undefined, null) },
    ], false),
    "Event": o([
        { json: "reactKey", js: "reactKey", typ: u(undefined, "") },
        { json: "timeStr", js: "timeStr", typ: u(undefined, u(0, "")) },
        { json: "type", js: "type", typ: u(undefined, r("EventTypeEnum")) },
        { json: "time", js: "time", typ: u(undefined, 0) },
        { json: "overloadTime", js: "overloadTime", typ: u(undefined, u(0, null)) },
        { json: "eventId", js: "eventId", typ: u(undefined, 0) },
        { json: "player", js: "player", typ: u(undefined, r("EventPlayer")) },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
        { json: "overloadTimeStr", js: "overloadTimeStr", typ: u(undefined, u(true, "")) },
        { json: "isHome", js: "isHome", typ: u(undefined, true) },
        { json: "nameStr", js: "nameStr", typ: u(undefined, "") },
        { json: "card", js: "card", typ: u(undefined, "") },
        { json: "cardDescription", js: "cardDescription", typ: u(undefined, null) },
        { json: "minutesAddedStr", js: "minutesAddedStr", typ: u(undefined, "") },
        { json: "minutesAddedKey", js: "minutesAddedKey", typ: u(undefined, "") },
        { json: "minutesAddedInput", js: "minutesAddedInput", typ: u(undefined, 0) },
        { json: "halfStrShort", js: "halfStrShort", typ: u(undefined, "") },
        { json: "halfStrKey", js: "halfStrKey", typ: u(undefined, "") },
        { json: "injuredPlayerOut", js: "injuredPlayerOut", typ: u(undefined, true) },
        { json: "swap", js: "swap", typ: u(undefined, a(r("Swap"))) },
    ], false),
    "EventPlayer": o([
        { json: "id", js: "id", typ: u(undefined, u(0, null)) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
    ], false),
    "Swap": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
    ], false),
    "Highlights": o([
        { json: "image", js: "image", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], false),
    "InfoBox": o([
        { json: "Match Date", js: "Match Date", typ: u(undefined, r("MatchDate")) },
        { json: "Tournament", js: "Tournament", typ: u(undefined, r("Tournament")) },
        { json: "Stadium", js: "Stadium", typ: u(undefined, r("Stadium")) },
        { json: "Referee", js: "Referee", typ: u(undefined, r("Referee")) },
        { json: "Attendance", js: "Attendance", typ: u(undefined, 0) },
    ], false),
    "Referee": o([
        { json: "imgUrl", js: "imgUrl", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
    ], false),
    "Stadium": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "city", js: "city", typ: u(undefined, r("NameElement")) },
        { json: "country", js: "country", typ: u(undefined, "") },
        { json: "lat", js: "lat", typ: u(undefined, 3.14) },
        { json: "long", js: "long", typ: u(undefined, 3.14) },
    ], false),
    "Tournament": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "link", js: "link", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "roundName", js: "roundName", typ: u(undefined, "") },
        { json: "round", js: "round", typ: u(undefined, "") },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        { json: "isCurrentSeason", js: "isCurrentSeason", typ: u(undefined, true) },
    ], false),
    "Insight": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "playerId", js: "playerId", typ: u(undefined, u(0, null)) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "priority", js: "priority", typ: u(undefined, 0) },
        { json: "defaultText", js: "defaultText", typ: u(undefined, "") },
        { json: "localizedTextId", js: "localizedTextId", typ: u(undefined, "") },
        { json: "statValues", js: "statValues", typ: u(undefined, a(r("StatValue"))) },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, r("TeamColorEnum")) },
    ], false),
    "StatValue": o([
        { json: "value", js: "value", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: u(undefined, u(null, "")) },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], false),
    "MatchesInRound": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("MatchesInRoundAway")) },
        { json: "away", js: "away", typ: u(undefined, r("MatchesInRoundAway")) },
        { json: "matchDate", js: "matchDate", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "roundId", js: "roundId", typ: u(undefined, 0) },
        { json: "roundName", js: "roundName", typ: u(undefined, "") },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
    ], false),
    "MatchesInRoundAway": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
    ], false),
    "Momentum": o([
        { json: "main", js: "main", typ: u(undefined, r("Main")) },
        { json: "alternateModels", js: "alternateModels", typ: u(undefined, a("any")) },
    ], false),
    "Main": o([
        { json: "data", js: "data", typ: u(undefined, a(r("Datum"))) },
        { json: "debugTitle", js: "debugTitle", typ: u(undefined, "") },
    ], false),
    "Datum": o([
        { json: "minute", js: "minute", typ: u(undefined, 3.14) },
        { json: "value", js: "value", typ: u(undefined, 0) },
    ], false),
    "PlayerOfTheMatch": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("NameElement")) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "rating", js: "rating", typ: u(undefined, r("PlayerOfTheMatchRating")) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "stats", js: "stats", typ: u(undefined, a(r("PlayerOfTheMatchStat"))) },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
    ], false),
    "PlayerOfTheMatchRating": o([
        { json: "num", js: "num", typ: u(undefined, "") },
        { json: "isTop", js: "isTop", typ: u(undefined, r("IsTop")) },
    ], false),
    "PlayerOfTheMatchStat": o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("TentacledStats")) },
    ], false),
    "TentacledStats": o([
        { json: "FotMob rating", js: "FotMob rating", typ: u(undefined, r("Assists")) },
        { json: "Minutes played", js: "Minutes played", typ: u(undefined, r("Assists")) },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        { json: "Total shots", js: "Total shots", typ: u(undefined, r("Assists")) },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        { json: "Accurate passes", js: "Accurate passes", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Chances created", js: "Chances created", typ: u(undefined, r("Assists")) },
        { json: "Expected goals (xG)", js: "Expected goals (xG)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Expected assists (xA)", js: "Expected assists (xA)", typ: u(undefined, r("AccurateCrosses")) },
        { json: "xG + xA", js: "xG + xA", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Fantasy points", js: "Fantasy points", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Shot accuracy", js: "Shot accuracy", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Blocked shots", js: "Blocked shots", typ: u(undefined, r("Assists")) },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        { json: "Touches in opposition box", js: "Touches in opposition box", typ: u(undefined, r("Assists")) },
        { json: "Successful dribbles", js: "Successful dribbles", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Passes into final third", js: "Passes into final third", typ: u(undefined, r("Assists")) },
        { json: "Accurate crosses", js: "Accurate crosses", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Accurate long balls", js: "Accurate long balls", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Corners", js: "Corners", typ: u(undefined, r("Assists")) },
        { json: "Dispossessed", js: "Dispossessed", typ: u(undefined, r("Assists")) },
        { json: "xG Non-penalty", js: "xG Non-penalty", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Tackles won", js: "Tackles won", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Last man tackle", js: "Last man tackle", typ: u(undefined, r("Assists")) },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        { json: "Interceptions", js: "Interceptions", typ: u(undefined, r("Assists")) },
        { json: "Defensive actions", js: "Defensive actions", typ: u(undefined, r("Assists")) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        { json: "Dribbled past", js: "Dribbled past", typ: u(undefined, r("Assists")) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        { json: "Ground duels won", js: "Ground duels won", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Aerial duels won", js: "Aerial duels won", typ: u(undefined, r("AccurateCrosses")) },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        { json: "Fouls committed", js: "Fouls committed", typ: u(undefined, r("Assists")) },
    ], false),
    "Poll": o([
        { json: "oddspoll", js: "oddspoll", typ: u(undefined, r("Oddspoll")) },
        { json: "voteResult", js: "voteResult", typ: u(undefined, r("VoteResult")) },
        { json: "renderToTop", js: "renderToTop", typ: u(undefined, true) },
    ], false),
    "Oddspoll": o([
        { json: "PollName", js: "PollName", typ: u(undefined, "") },
        { json: "MatchId", js: "MatchId", typ: u(undefined, 0) },
        { json: "HomeTeamId", js: "HomeTeamId", typ: u(undefined, 0) },
        { json: "AwayTeamId", js: "AwayTeamId", typ: u(undefined, 0) },
        { json: "HomeTeam", js: "HomeTeam", typ: u(undefined, r("NameElement")) },
        { json: "AwayTeam", js: "AwayTeam", typ: u(undefined, "") },
        { json: "Facts", js: "Facts", typ: u(undefined, a(r("Fact"))) },
    ], false),
    "Fact": o([
        { json: "OddsType", js: "OddsType", typ: u(undefined, "") },
        { json: "DefaultLabel", js: "DefaultLabel", typ: u(undefined, "") },
        { json: "TextLabelId", js: "TextLabelId", typ: u(undefined, "") },
        { json: "DefaultTemplate", js: "DefaultTemplate", typ: u(undefined, "") },
        { json: "TextTemplateId", js: "TextTemplateId", typ: u(undefined, "") },
        { json: "StatValues", js: "StatValues", typ: u(undefined, a("")) },
        { json: "DefaultLabels", js: "DefaultLabels", typ: u(undefined, a("")) },
        { json: "LabelTemplates", js: "LabelTemplates", typ: u(undefined, a("")) },
        { json: "Icon", js: "Icon", typ: u(undefined, "") },
        { json: "defaultText", js: "defaultText", typ: u(undefined, "") },
    ], false),
    "VoteResult": o([
        { json: "PollName", js: "PollName", typ: u(undefined, "") },
        { json: "Votes", js: "Votes", typ: u(undefined, a(r("Vote"))) },
    ], false),
    "Vote": o([
        { json: "Name", js: "Name", typ: u(undefined, "") },
        { json: "Votes", js: "Votes", typ: u(undefined, a(0)) },
    ], false),
    "TeamForm": o([
        { json: "result", js: "result", typ: u(undefined, 0) },
        { json: "resultString", js: "resultString", typ: u(undefined, r("ResultString")) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "linkToMatch", js: "linkToMatch", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, r("MatchDate")) },
        { json: "teamPageUrl", js: "teamPageUrl", typ: u(undefined, "") },
        { json: "tooltipText", js: "tooltipText", typ: u(undefined, r("TooltipText")) },
        { json: "score", js: "score", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("TeamFormAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamFormAway")) },
    ], false),
    "TeamFormAway": o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "isOurTeam", js: "isOurTeam", typ: u(undefined, true) },
    ], false),
    "TooltipText": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, "") },
        { json: "homeTeamId", js: "homeTeamId", typ: u(undefined, 0) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, "") },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, "") },
        { json: "awayTeamId", js: "awayTeamId", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, "") },
    ], false),
    "TopPlayers": o([
        { json: "homeTopPlayers", js: "homeTopPlayers", typ: u(undefined, a(r("TopPlayer"))) },
        { json: "awayTopPlayers", js: "awayTopPlayers", typ: u(undefined, a(r("TopPlayer"))) },
    ], false),
    "TopPlayer": o([
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "playerRatingRounded", js: "playerRatingRounded", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, r("BgcolorEnum")) },
        { json: "manOfTheMatch", js: "manOfTheMatch", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "positionLabel", js: "positionLabel", typ: u(undefined, r("PositionLabel")) },
    ], false),
    "TopScorers": o([
        { json: "section", js: "section", typ: u(undefined, "") },
        { json: "sectionId", js: "sectionId", typ: u(undefined, 0) },
        { json: "homePlayer", js: "homePlayer", typ: u(undefined, r("Player")) },
        { json: "awayPlayer", js: "awayPlayer", typ: u(undefined, r("Player")) },
        { json: "statsOrder", js: "statsOrder", typ: u(undefined, a("")) },
    ], false),
    "Player": o([
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "matchesWithRating", js: "matchesWithRating", typ: u(undefined, 0) },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, r("AwayPlayerStats")) },
    ], false),
    "AwayPlayerStats": o([
        { json: "goals", js: "goals", typ: u(undefined, 0) },
        { json: "goalAssist", js: "goalAssist", typ: u(undefined, 0) },
        { json: "ontargetScoringAtt", js: "ontargetScoringAtt", typ: u(undefined, 3.14) },
        { json: "motm", js: "motm", typ: u(undefined, 0) },
        { json: "gamesPlayed", js: "gamesPlayed", typ: u(undefined, 0) },
        { json: "minsPlayed", js: "minsPlayed", typ: u(undefined, 0) },
        { json: "minsPlayedGoal", js: "minsPlayedGoal", typ: u(undefined, 0) },
        { json: "expectedGoals", js: "expectedGoals", typ: u(undefined, 3.14) },
        { json: "playerRating", js: "playerRating", typ: u(undefined, 3.14) },
    ], false),
    "ShotmapClass": o([
        { json: "shots", js: "shots", typ: u(undefined, a(r("Shot"))) },
        { json: "Periods", js: "Periods", typ: u(undefined, r("ShotmapPeriods")) },
    ], false),
    "ShotmapPeriods": o([
        { json: "All", js: "All", typ: u(undefined, a(r("Shot"))) },
        { json: "FirstHalf", js: "FirstHalf", typ: u(undefined, a(r("Shot"))) },
        { json: "SecondHalf", js: "SecondHalf", typ: u(undefined, a(r("Shot"))) },
    ], false),
    "ContentStats": o([
        { json: "Periods", js: "Periods", typ: u(undefined, r("StatsPeriods")) },
    ], false),
    "StatsPeriods": o([
        { json: "All", js: "All", typ: u(undefined, r("All")) },
        { json: "FirstHalf", js: "FirstHalf", typ: u(undefined, r("All")) },
        { json: "SecondHalf", js: "SecondHalf", typ: u(undefined, r("All")) },
    ], false),
    "All": o([
        { json: "stats", js: "stats", typ: u(undefined, a(r("AllStat"))) },
        { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
    ], false),
    "AllStat": o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, a(r("StatStatClass"))) },
    ], false),
    "StatStatClass": o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, a(u(0, null, ""))) },
        { json: "type", js: "type", typ: u(undefined, r("StatType")) },
        { json: "highlighted", js: "highlighted", typ: u(undefined, r("Side")) },
    ], false),
    "TeamColors": o([
        { json: "darkMode", js: "darkMode", typ: u(undefined, r("Mode")) },
        { json: "lightMode", js: "lightMode", typ: u(undefined, r("Mode")) },
        { json: "fontDarkMode", js: "fontDarkMode", typ: u(undefined, r("Mode")) },
        { json: "fontLightMode", js: "fontLightMode", typ: u(undefined, r("Mode")) },
    ], false),
    "Mode": o([
        { json: "home", js: "home", typ: u(undefined, r("Home")) },
        { json: "away", js: "away", typ: u(undefined, "") },
    ], false),
    "Superlive": o([
        { json: "superLiveUrl", js: "superLiveUrl", typ: u(undefined, "") },
        { json: "showSuperLive", js: "showSuperLive", typ: u(undefined, true) },
    ], false),
    "Table": o([
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "teams", js: "teams", typ: u(undefined, a(0)) },
        { json: "tournamentNameForUrl", js: "tournamentNameForUrl", typ: u(undefined, "") },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "parentLeagueName", js: "parentLeagueName", typ: u(undefined, "") },
        { json: "isCurrentSeason", js: "isCurrentSeason", typ: u(undefined, true) },
        { json: "parentLeagueSeason", js: "parentLeagueSeason", typ: u(undefined, "") },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ], false),
    "General": o([
        { json: "matchId", js: "matchId", typ: u(undefined, "") },
        { json: "matchName", js: "matchName", typ: u(undefined, "") },
        { json: "matchRound", js: "matchRound", typ: u(undefined, "") },
        { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "leagueRoundName", js: "leagueRoundName", typ: u(undefined, "") },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
        { json: "parentLeagueName", js: "parentLeagueName", typ: u(undefined, "") },
        { json: "parentLeagueSeason", js: "parentLeagueSeason", typ: u(undefined, "") },
        { json: "parentLeagueTopScorerLink", js: "parentLeagueTopScorerLink", typ: u(undefined, "") },
        { json: "parentLeagueTournamentId", js: "parentLeagueTournamentId", typ: u(undefined, 0) },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, r("GeneralAwayTeam")) },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, r("GeneralAwayTeam")) },
        { json: "coverageLevel", js: "coverageLevel", typ: u(undefined, "") },
        { json: "matchTimeUTC", js: "matchTimeUTC", typ: u(undefined, "") },
        { json: "matchTimeUTCDate", js: "matchTimeUTCDate", typ: u(undefined, Date) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
    ], false),
    "GeneralAwayTeam": o([
        { json: "name", js: "name", typ: u(undefined, r("NameElement")) },
        { json: "id", js: "id", typ: u(undefined, 0) },
    ], false),
    "Header": o([
        { json: "teams", js: "teams", typ: u(undefined, a(r("Team"))) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "events", js: "events", typ: u(undefined, null) },
    ], false),
    "Team": o([
        { json: "name", js: "name", typ: u(undefined, r("NameElement")) },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "score", js: "score", typ: u(undefined, 0) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "fifaRank", js: "fifaRank", typ: u(undefined, null) },
    ], false),
    "SEO": o([
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "eventJSONLD", js: "eventJSONLD", typ: u(undefined, r("EventJSONLD")) },
        { json: "breadcrumbJSONLD", js: "breadcrumbJSONLD", typ: u(undefined, a(r("BreadcrumbJSONLD"))) },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
    ], false),
    "BreadcrumbJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "itemListElement", js: "itemListElement", typ: u(undefined, a(r("ItemListElement"))) },
    ], false),
    "ItemListElement": o([
        { json: "@type", js: "@type", typ: u(undefined, r("Type")) },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    "EventJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "sport", js: "sport", typ: u(undefined, "") },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, r("EventJSONLDAwayTeam")) },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, r("EventJSONLDAwayTeam")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, Date) },
        { json: "endDate", js: "endDate", typ: u(undefined, Date) },
        { json: "eventStatus", js: "eventStatus", typ: u(undefined, "") },
        { json: "eventAttendanceMode", js: "eventAttendanceMode", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, r("Location")) },
        { json: "image", js: "image", typ: u(undefined, a("")) },
        { json: "organizer", js: "organizer", typ: u(undefined, r("Organizer")) },
        { json: "offers", js: "offers", typ: u(undefined, r("Offers")) },
        { json: "performer", js: "performer", typ: u(undefined, a(r("Organizer"))) },
    ], false),
    "EventJSONLDAwayTeam": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, r("NameElement")) },
        { json: "sport", js: "sport", typ: u(undefined, "") },
        { json: "logo", js: "logo", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, null) },
        { json: "memberOf", js: "memberOf", typ: u(undefined, null) },
    ], false),
    "Location": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], false),
    "Offers": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "availability", js: "availability", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "priceCurrency", js: "priceCurrency", typ: u(undefined, "") },
        { json: "validFrom", js: "validFrom", typ: u(undefined, Date) },
    ], false),
    "Organizer": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "logo", js: "logo", typ: u(undefined, "") },
    ], false),
    "FAQJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "mainEntity", js: "mainEntity", typ: u(undefined, a(r("MainEntity"))) },
    ], false),
    "MainEntity": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "acceptedAnswer", js: "acceptedAnswer", typ: u(undefined, r("AcceptedAnswer")) },
    ], false),
    "AcceptedAnswer": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    "NameElement": [
        "Liverpool",
        "Manchester United",
    ],
    "Long": [
        "Abandoned",
        "Full-Time",
    ],
    "LongKey": [
        "aborted",
        "finished",
    ],
    "Short": [
        "Ab",
        "FT",
    ],
    "ShortKey": [
        "aborted_short",
        "fulltime_short",
    ],
    "BgcolorEnum": [
        "#f08022",
        "purple",
        "#1ec853",
    ],
    "Position": [
        "Substitute",
    ],
    "Bgcolor": [
        "#f08022",
        "#0e87e0",
        "#1ec853",
        "#989898",
    ],
    "Role": [
        "Attacker",
        "Defender",
        "Keeper",
        "Midfielder",
    ],
    "EventType": [
        "AttemptSaved",
        "Miss",
    ],
    "Period": [
        "FirstHalf",
        "SecondHalf",
    ],
    "ShotType": [
        "Header",
        "LeftFoot",
        "RightFoot",
    ],
    "Situation": [
        "FastBreak",
        "FromCorner",
        "RegularPlay",
        "SetPiece",
    ],
    "TeamColorEnum": [
        "#C70101",
        "#d3171e",
        "#333333",
    ],
    "StatKey": [
        "attack",
        "defense",
        "duels",
        "top_stats",
    ],
    "AccurateCrossesKey": [
        "accurate_crosses",
        "accurate_passes",
        "aerials_won",
        "dribbles_succeeded",
        "expected_assists",
        "expected_goals",
        "expected_goals_non_penalty",
        "expected_goals_on_target_faced",
        "expected_goals_on_target_variant",
        "fantasy_points",
        "goals_prevented",
        "ground_duels_won",
        "long_balls_accurate",
        "saves",
        "shot_accuracy",
        "tackles_succeeded",
        "xg_and_xa",
    ],
    "AssistsKey": [
        "assists",
        "big_chance_missed_title",
        "blocked_shots",
        "chances_created",
        "clearances",
        "corners",
        "defensive_actions",
        "dispossessed",
        "dribbled_past",
        "duel_lost",
        "duel_won",
        "fantasy_points",
        "fouls",
        "goals",
        "goals_conceded",
        "headed_clearance",
        "interceptions",
        "keeper_diving_save",
        "keeper_high_claim",
        "keeper_sweeper",
        "last_man_tackle",
        "minutes_played",
        "Offsides",
        "passes_into_final_third",
        "player_throws",
        "punches",
        "rating_title",
        "recoveries",
        "saves_inside_box",
        "shot_blocks",
        "total_shots",
        "touches",
        "touches_opp_box",
        "was_fouled",
    ],
    "Title": [
        "Attack",
        "Defense",
        "Duels",
        "Top stats",
    ],
    "Side": [
        "away",
        "equal",
        "home",
    ],
    "ExpectedReturnDateParam": [
        "December 2023",
        "February 2024",
        "January 2024",
    ],
    "ExpectedReturnFallback": [
        "A few days",
        "Doubtful",
        "Early January 2024",
        "Late December 2023",
        "Late February 2024",
        "Mid January 2024",
        "Out for season",
        "Unknown",
    ],
    "ExpectedReturnKey": [
        "expected_return_date_doubtful",
        "expected_return_date_early",
        "expected_return_date_few_days",
        "expected_return_date_late",
        "expected_return_date_mid",
        "expected_return_date_out_for_season",
        "expected_return_date_unknown",
    ],
    "ShortName": [
        "Mac Allister",
        "Thiago",
    ],
    "EventTypeEnum": [
        "AddedTime",
        "Card",
        "Half",
        "Substitution",
    ],
    "ResultString": [
        "D",
        "L",
        "W",
    ],
    "StatType": [
        "graph",
        "text",
        "title",
    ],
    "Home": [
        "#d3171e",
        "rgba(255, 255, 255, 1.0)",
    ],
    "Type": [
        "ListItem",
    ],
};
