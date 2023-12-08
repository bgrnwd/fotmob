export interface League {
    tabs: string[];
    details: Details;
    tab: string;
    action: Action;
    seostr: string;
    datasets: Datasets;
    stats: Stats;
}
export interface Action {
    type: string;
    data: Data;
}
export interface Data {
    path: string;
    tab: string;
}
export interface Datasets {
    news: boolean;
    fixtures: boolean;
    tableData: boolean;
    topPlayers: boolean;
}
export interface Details {
    id: number;
    type: string;
    name: string;
    country: string;
}
export interface Stats {
    tabs: string[];
    players: Player[];
    teams: Team[];
    trophies: Trophy[];
}
export interface Player {
    header: string;
    participant: PlayerParticipant;
    fetchAllUrl: string;
}
export interface PlayerParticipant {
    id: number;
    name: string;
    goals: null;
    assists: null;
    rating: null;
    positionId: null;
    ccode: null;
    cname: null;
    teamId: number;
    teamName: string;
    showRole: null;
    showCountryFlag: null;
    showTeamFlag: boolean;
    value: number | string;
}
export interface Team {
    header: string;
    participant: TeamParticipant;
    fetchAllUrl: string;
}
export interface TeamParticipant {
    id: number;
    name: string;
    goals: null;
    assists: null;
    rating: null;
    positionId: null;
    ccode: null;
    cname: null;
    teamId: number;
    teamName: null;
    showRole: null;
    showCountryFlag: null;
    showTeamFlag: boolean;
    value: number;
}
export interface Trophy {
    seasonName: string;
    winner: Loser;
    loser: Loser;
}
export interface Loser {
    id: number;
    seasonName: string;
    name: string;
    winner: boolean;
}
export declare class Convert {
    static toLeague(json: string): League;
    static leagueToJson(value: League): string;
}
