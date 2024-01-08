import { type League } from './types/league';
import { type MatchDetails } from './types/match-details';
import { type Matches } from './types/matches';
import { type Player } from './types/player';
import { type Team } from "./types/team";
import { WorldNews } from './types/world-news';
export default class Fotmob {
    matchesUrl: string;
    leaguesUrl: string;
    teamsUrl: string;
    playerUrl: string;
    matchDetailsUrl: string;
    searchUrl: string;
    worldNewsUrl: string;
    map: Map<any, any>;
    constructor();
    checkDate(date: string): RegExpExecArray | null;
    safeTypeCastFetch<T>(url: string, fn: (data: string) => T): Promise<T>;
    getMatchesByDate(date: string): Promise<Matches | undefined>;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): Promise<League>;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): Promise<Team>;
    getPlayer(id: number): Promise<Player>;
    getMatchDetails(matchId: number): Promise<MatchDetails>;
    getWorldNews({ page, lang }?: {
        page?: number | undefined;
        lang?: string | undefined;
    }): Promise<WorldNews>;
    request<T>(path: string, params: Record<string, string>): Promise<T>;
}
