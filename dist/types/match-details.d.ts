export interface MatchDetails {
    header: Header;
    nav: string[];
    ongoing: boolean;
    content: Content;
    seo: SEO;
}
export interface Content {
    matchFacts: MatchFacts;
    liveticker: Liveticker;
    stats: Stats;
    lineup: ContentLineup;
    table: Table;
    h2h: H2H;
}
export interface H2H {
    summary: number[];
    matches: Match[];
}
export interface Match {
    time: string;
    matchUrl: string;
    league: League;
    home: Away;
    status: Status;
    finished: boolean;
    away: Away;
}
export interface Away {
    name: TeamNameElement;
    id: string;
}
export declare enum TeamNameElement {
    ManchesterCity = "Manchester City",
    WolverhamptonWanderers = "Wolverhampton Wanderers"
}
export interface League {
    name: string;
    pageUrl: string;
}
export interface Status {
    started: boolean;
    cancelled: boolean;
    finished: boolean;
    startTimeStr?: string;
    startDateStr: string;
    scoreStr?: string;
    reason?: Reason;
    whoLostOnPenalties?: null;
}
export interface Reason {
    short: Short;
    long: Long;
}
export declare enum Long {
    FullTime = "Full-Time"
}
export declare enum Short {
    Ft = "FT"
}
export interface ContentLineup {
    lineup: LineupElement[];
    bench: Array<Bench[]>;
    coaches: Array<Coach[]>;
}
export interface Bench {
    id: string;
    usingOptaId: boolean;
    name: string;
    imageUrl: string;
    pageUrl: string;
    shirt: number;
    positionRow: number;
    role: Role;
    rating: BenchRating;
    stats: {
        [key: string]: BenchStat;
    };
    events?: BenchEvents;
}
export interface BenchEvents {
    sub: Sub;
}
export interface Sub {
    time: number;
    isOut: boolean;
}
export interface BenchRating {
    num: null | string;
    bgcolor: Bgcolor;
    isTop: boolean;
}
export declare enum Bgcolor {
    Ffa726 = "#ffa726",
    The0E87E0 = "#0e87e0",
    The6Ecb5B = "#6ecb5b",
    The989898 = "#989898"
}
export declare enum Role {
    Attacker = "Attacker",
    Defender = "Defender",
    Keeper = "Keeper",
    Midfielder = "Midfielder"
}
export interface BenchStat {
    "Minutes played"?: AerialsLost | number;
    "Goals conceded"?: number;
    Saves?: AerialsLost;
    "Diving save"?: AerialsLost;
    "Saves inside box"?: AerialsLost;
    "Acted as sweeper"?: AerialsLost;
    Punches?: number;
    Throws?: number;
    Goals?: number;
    Assists?: AerialsLost;
    "Total shots"?: number;
    "Accurate passes"?: AerialsLost | number;
    "Pass success"?: AerialsLost;
    "Chances created"?: AerialsLost;
    "Shot accuracy"?: ShotAccuracy;
    "Shot off target"?: AerialsLost;
    "Shot on target"?: AerialsLost;
    "Blocked shots"?: number;
    "Shots woodwork"?: AerialsLost;
    Passes?: AerialsLost | number;
    Crosses?: AerialsLost | number;
    "Long balls"?: AerialsLost | number;
    "Accurate long balls"?: AerialsLost;
    "Key passes"?: AerialsLost;
    Touches?: AerialsLost | number;
    "Duels won"?: number;
    "Duels lost"?: number;
    Clearances?: AerialsLost | number;
    "Dribbles attempted"?: AerialsLost | number;
    "Dribbles succeeded"?: AerialsLost | number;
    Dispossessed?: AerialsLost | number;
    "Was fouled"?: AerialsLost;
    Fouls?: AerialsLost | number;
    "Tackles attempted"?: AerialsLost | number;
    "Tackles succeeded"?: AerialsLost | number;
    "Aerials won"?: AerialsLost;
    "Aerials lost"?: AerialsLost | number;
    Interceptions?: AerialsLost | number;
    Recoveries?: AerialsLost | number;
}
export declare enum AerialsLost {
    Empty = "-",
    The100 = "100%",
    The50 = "50%",
    The79 = "79%"
}
export declare enum ShotAccuracy {
    The0 = "0%",
    The100 = "100%",
    The33 = "33%",
    The50 = "50%"
}
export interface Coach {
    id: string;
    name: string;
    imageUrl: string;
    pageUrl: string;
    positionRow: null;
    role: string;
}
export interface LineupElement {
    teamId: number;
    teamName: TeamNameElement;
    bench: Bench[];
    coach: Coach[];
    players: Array<Player[]>;
    lineup: string;
}
export interface Player {
    id: string;
    usingOptaId: boolean;
    name: string;
    imageUrl: string;
    pageUrl: string;
    shirt: number;
    positionRow: number;
    role: Role;
    rating: BenchRating;
    stats: {
        [key: string]: PlayerStat;
    };
    events?: PlayerEvents;
}
export interface PlayerEvents {
    sub?: Sub;
    as?: number;
    g?: number;
    yc?: number;
}
export interface PlayerStat {
    "Minutes played"?: number;
    "Goals conceded"?: number;
    Saves?: AerialsLost | number;
    "Diving save"?: AerialsLost | number;
    "Saves inside box"?: AerialsLost | number;
    "Acted as sweeper"?: AerialsLost;
    Punches?: number;
    Throws?: number;
    Goals?: number;
    Assists?: AerialsLost | number;
    "Total shots"?: number;
    "Accurate passes"?: number;
    "Pass success"?: string;
    "Chances created"?: AerialsLost | number;
    "Shot accuracy"?: ShotAccuracy;
    "Shot off target"?: AerialsLost | number;
    "Shot on target"?: AerialsLost | number;
    "Blocked shots"?: number;
    "Shots woodwork"?: AerialsLost;
    Passes?: number;
    Crosses?: AerialsLost | number;
    "Long balls"?: AerialsLost | number;
    "Accurate long balls"?: AerialsLost | number;
    "Key passes"?: AerialsLost | number;
    Touches?: number;
    "Duels won"?: number;
    "Duels lost"?: number;
    Clearances?: AerialsLost | number;
    "Dribbles attempted"?: AerialsLost | number;
    "Dribbles succeeded"?: AerialsLost | number;
    Dispossessed?: AerialsLost | number;
    "Was fouled"?: AerialsLost | number;
    Fouls?: AerialsLost | number;
    "Tackles attempted"?: AerialsLost | number;
    "Tackles succeeded"?: AerialsLost | number;
    "Aerials won"?: AerialsLost | number;
    "Aerials lost"?: AerialsLost | number;
    Interceptions?: AerialsLost | number;
    Recoveries?: AerialsLost | number;
}
export interface Liveticker {
    url: string;
    teams: TeamNameElement[];
    superLiveUrl: string;
    showSuperLive: boolean;
}
export interface MatchFacts {
    matchId: number;
    highlights: Highlights;
    playerOfTheMatch: PlayerOfTheMatch;
    events: MatchFactsEvents;
    infoBox: InfoBox;
    teamForm: Array<TeamForm[]>;
    odds: Odds;
}
export interface MatchFactsEvents {
    ongoing: boolean;
    events: Event[];
    penaltyShootoutEvents: null;
}
export interface Event {
    reactKey: string;
    timeStr: string;
    type: string;
    time: number;
    overloadTime: number | null;
    profileUrl?: string;
    overloadTimeStr?: boolean | string;
    isHome?: boolean;
    swap?: Swap[];
    ownGoal?: null;
    nameStr?: string;
    newScore?: number[];
    assistStr?: null | string;
    assistProfileUrl?: null | string;
    card?: string;
    minutesAddedStr?: string;
}
export interface Swap {
    name: string;
    profileUrl: string;
}
export interface Highlights {
    image: string;
    url: string;
    source: string;
}
export interface InfoBox {
    "Match Date": string;
    Attendance: null;
    Tournament: Tournament;
    Stadium: string;
    Referee: Referee;
}
export interface Referee {
    imgUrl: string;
    text: string;
}
export interface Tournament {
    id: number;
    link: string;
    text: string;
}
export interface Odds {
    show: boolean;
}
export interface PlayerOfTheMatch {
    id: number;
    name: string;
    teamName: TeamNameElement;
    teamId: number;
    rating: PlayerOfTheMatchRating;
    pageUrl: string;
    stats: {
        [key: string]: PlayerOfTheMatchStat;
    };
}
export interface PlayerOfTheMatchRating {
    num: string;
    isTop: boolean;
}
export interface PlayerOfTheMatchStat {
    "Minutes played"?: number;
    Goals?: number;
    Assists?: number;
    "Total shots"?: number;
    "Accurate passes"?: number;
    "Pass success"?: AerialsLost;
    "Chances created"?: number;
    "Shot accuracy"?: AerialsLost;
    "Shot off target"?: AerialsLost;
    "Shot on target"?: number;
    "Blocked shots"?: number;
    "Shots woodwork"?: AerialsLost;
    Passes?: number;
    Crosses?: number;
    "Long balls"?: number;
    "Accurate long balls"?: number;
    "Key passes"?: number;
    Touches?: number;
    "Duels won"?: number;
    "Duels lost"?: number;
    Clearances?: number;
    "Dribbles attempted"?: number;
    "Dribbles succeeded"?: number;
    Dispossessed?: AerialsLost;
    "Was fouled"?: number;
    Fouls?: number;
    "Tackles attempted"?: number;
    "Tackles succeeded"?: number;
    "Aerials won"?: AerialsLost;
    "Aerials lost"?: AerialsLost;
    Interceptions?: AerialsLost;
    Recoveries?: number;
}
export interface TeamForm {
    result: number;
    imageUrl: string;
    linkToMatch: string;
    teamPageUrl: string;
    tooltipText: string;
}
export interface Stats {
    stats: StatsStat[];
    teamColors: TeamColors;
}
export interface StatsStat {
    title: string;
    stats: StatStatClass[];
}
export interface StatStatClass {
    title: string;
    type: Type;
    stats: Array<number | string>;
    highlighted: Highlighted;
}
export declare enum Highlighted {
    Away = "away",
    Equal = "equal",
    Home = "home"
}
export declare enum Type {
    Graph = "graph",
    Text = "text"
}
export interface TeamColors {
    home: string;
    away: string;
}
export interface Table {
    url: string;
    teams: number[];
}
export interface Header {
    teams: TeamClass[];
    status: Status;
}
export interface TeamClass {
    name: TeamNameElement;
    score: number;
    imageUrl: string;
    pageUrl: string;
}
export interface SEO {
    path: string;
}
export declare class Convert {
    static toMatchDetails(json: string): MatchDetails;
    static matchDetailsToJson(value: MatchDetails): string;
}
