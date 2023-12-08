export interface Player {
    id: number;
    name: string;
    origin: Origin;
    playerProps: PlayerPlayerProp[];
    lastLeague: LastLeague;
    recentMatches: RecentMatches;
    careerStatistics: CareerStatistic[];
    careerHistory: CareerHistory;
    relatedNews: any[];
    meta: Meta;
}
export interface CareerHistory {
    fullCareer: boolean;
    careerData: CareerData;
}
export interface CareerData {
    showFootnote: boolean;
    careerItems: CareerItems;
}
export interface CareerItems {
    senior: NationalTeam[];
    youth: NationalTeam[];
    "national team": NationalTeam[];
}
export interface NationalTeam {
    participantId: number;
    teamId: number;
    team: string;
    transferType: null | string;
    startDate: string;
    endDate: string;
    role: null;
    appearances: string;
    goals: string;
    hasUncertainData: boolean;
}
export interface CareerStatistic {
    id: number;
    name: string;
    totalMatches: number;
    totalSubIn: number;
    totalGoals: number;
    totalAssists: number;
    totalYC: number;
    totalRC: number;
    seasons: Season[];
}
export interface Season {
    name: string;
    matches: number;
    subIn: number;
    goals: number;
    assists: number;
    yc: number;
    rc: number;
    stats: Stat[];
}
export interface Stat {
    startTS: number;
    tournamentName: string;
    statsArr: Array<Array<number | string>>;
}
export interface LastLeague {
    leagueName: string;
    leagueId: number;
    playerProps: LastLeaguePlayerProp[];
}
export interface LastLeaguePlayerProp {
    value: string;
    title: string;
    ratingProps?: PlayerPropRatingProps;
}
export interface PlayerPropRatingProps {
    num: number;
    bgcolor: Bgcolor;
}
export declare enum Bgcolor {
    Ffa726 = "#ffa726",
    The6Ecb5B = "#6ecb5b",
    The989898 = "#989898"
}
export interface Meta {
    seopath: string;
    pageurl: string;
}
export interface Origin {
    teamId: number;
    teamName: string;
    teamColor: string;
    positionDesc: PositionDesc;
}
export interface PositionDesc {
    positions: Position[];
    primaryPosition: string;
    nonPrimaryPositions: string;
}
export interface Position {
    strPos: string;
    strPosShort: string;
    occurances: number;
    position: string;
    isMainPosition: boolean;
    pitchPositionData: PitchPositionData;
}
export interface PitchPositionData {
    top: number;
    right: number;
    textColor: string;
    backgroundColor: string;
}
export interface PlayerPlayerProp {
    value: number | string;
    title: string;
    icon?: Icon;
}
export interface Icon {
    type: string;
    id: string;
}
export interface RecentMatches {
    tabs: string[];
    "Premier League": EuropaLeagueFinalStage[];
    "UEFA Nations League A Grp. 3": UEFANationsLeagueAGrp3[];
    "Europa League Final Stage": EuropaLeagueFinalStage[];
    "Super League": SuperLeague[];
}
export interface EuropaLeagueFinalStage {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: EuropaLeagueFinalStageRatingProps;
}
export interface EuropaLeagueFinalStageRatingProps {
    num: number | string;
    bgcolor: Bgcolor;
}
export interface Versus {
    matchId: number;
    opponentName: string;
    opponentId: number;
    homeTeamScore: number;
    awayTeamScore: number;
    highLightHomeTeam: boolean;
}
export interface SuperLeague {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: SuperLeagueRatingProps;
}
export interface SuperLeagueRatingProps {
    num: string;
    bgcolor: Bgcolor;
}
export interface UEFANationsLeagueAGrp3 {
    htName: string;
    atName: string;
    date: string;
    versus: Versus;
    minutesPlayed: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    ratingProps: PlayerPropRatingProps;
}
export declare class Convert {
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
}
