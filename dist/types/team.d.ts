export interface Team {
    tabs: string[];
    details: Details;
    tab: string;
    action: Action;
    seostr: string;
    datasets: Datasets;
    squad: Array<Array<SquadClass[] | SquadEnum>>;
}
export interface Action {
    type: string;
    data: Data;
}
export interface Data {
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
export interface SquadClass {
    id: number;
    name: string;
    ccode: string;
    cname: string;
    role?: SquadEnum;
}
export declare enum SquadEnum {
    Attackers = "attackers",
    Coach = "coach",
    Defenders = "defenders",
    Goalkeepers = "goalkeepers",
    Midfielders = "midfielders"
}
export declare class Convert {
    static toTeam(json: string): Team;
    static teamToJson(value: Team): string;
}
