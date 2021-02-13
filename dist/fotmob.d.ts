declare const got: any;
declare const baseUrl = "https://www.fotmob.com";
declare class Fotmob {
    matchesUrl: string;
    leaguesUrl: string;
    teamsUrl: string;
    playerUrl: string;
    matchDetailsUrl: string;
    searchUrl: string;
    map: Map<any, any>;
    constructor();
    checkDate(date: any): RegExpExecArray | null;
    getMatchesByDate(date: number): void;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): void;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): void;
    getPlayer(id: number): void;
    getMatchDetails(matchId: number): void;
}
