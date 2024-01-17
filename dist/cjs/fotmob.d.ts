import { type League } from "./types/league";
import { type MatchDetails } from "./types/match-details";
import { type Matches } from "./types/matches";
import { type Player } from "./types/player";
import { type Team } from "./types/team";
import { type Transfers } from "./types/transfers";
import { type AllLeagues } from "./types/all-leagues";
import { WorldNews } from './types/world-news';
import { TeamSeasonStats } from './types/team-season-stats';
export default class Fotmob {
    matchesUrl: string;
    leaguesUrl: string;
    allLeaguesUrl: string;
    teamsUrl: string;
    playerUrl: string;
    teamsSeasonStatsUrl: string;
    matchDetailsUrl: string;
    searchUrl: string;
    transfersUrl: string;
    worldNewsUrl: string;
    map: Map<any, any>;
    constructor();
    checkDate(date: string): RegExpExecArray | null;
    safeTypeCastFetch<T>(url: string, fn: (data: string) => T): Promise<T>;
    getMatchesByDate(date: string): Promise<Matches | undefined>;
    getLeague(id: number, tab?: string, type?: string, timeZone?: string): Promise<League>;
    getAllLeagues(): Promise<AllLeagues>;
    getTeam(id: number, tab?: string, type?: string, timeZone?: string): Promise<Team>;
    getTeamSeasonStats(teamId: number, seasonId: number): Promise<TeamSeasonStats>;
    getPlayer(id: number): Promise<Player>;
    getMatchDetails(matchId: number): Promise<MatchDetails>;
    getWorldNews({ page, lang }?: {
        page?: number | undefined;
        lang?: string | undefined;
    }): Promise<WorldNews>;
    getTransfers({ page, lang }?: {
        page?: number | undefined;
        lang?: string | undefined;
    }): Promise<Transfers>;
    request<T>(path: string, params: Record<string, string>): Promise<T>;
}
