import { type Team } from "./types/team";
import { type League } from './types/league';
import { type MatchDetails } from './types/match-details';
import { type Matches } from './types/matches';
import { type Player } from './types/player';
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
    safeTypeCastFetch<T>(url: string, fn: (data: string) => T): Promise<Record<string, unknown> | T>;
    getMatchesByDate(date: string): Promise<Record<string, unknown> | Matches | undefined>;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): Promise<Record<string, unknown> | League>;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): Promise<Record<string, unknown> | Team>;
    getPlayer(id: number): Promise<Record<string, unknown> | Player>;
    getMatchDetails(matchId: number): Promise<Record<string, unknown> | MatchDetails>;
}
export default Fotmob;
