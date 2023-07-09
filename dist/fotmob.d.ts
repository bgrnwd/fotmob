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
    getMatchesByDate(date: string): Promise<string | undefined>;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): Promise<string | undefined>;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): Promise<string | undefined>;
    getPlayer(id: number): Promise<string | undefined>;
    getMatchDetails(matchId: number): Promise<string | undefined>;
}
export default Fotmob;
