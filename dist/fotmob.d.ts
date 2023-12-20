import { type League } from './types/league';
import { type MatchDetails } from './types/match-details';
import { type Matches } from './types/matches';
import { type Player } from './types/player';
import { type Team } from "./types/team";
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
    safeTypeCastFetch<T>(url: string, fn: (data: string) => T): Promise<T>;
    getMatchesByDate(date: string): Promise<Matches | undefined>;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): Promise<League>;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): Promise<Team>;
    getPlayer(id: number): Promise<Player>;
    getMatchDetails(matchId: number): Promise<MatchDetails>;
}
export default Fotmob;
