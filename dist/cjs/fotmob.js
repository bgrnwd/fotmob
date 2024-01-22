"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const type_cast_error_1 = require("./type-cast-error");
const league_1 = require("./types/league");
const match_details_1 = require("./types/match-details");
const matches_1 = require("./types/matches");
const player_1 = require("./types/player");
const team_1 = require("./types/team");
const transfers_1 = require("./types/transfers");
const all_leagues_1 = require("./types/all-leagues");
const world_news_1 = require("./types/world-news");
const team_season_stats_1 = require("./types/team-season-stats");
const baseUrl = "https://www.fotmob.com/api/";
class Fotmob {
    constructor() {
        this.map = new Map();
        this.matchesUrl = `${baseUrl}matches?`;
        this.leaguesUrl = `${baseUrl}leagues?`;
        this.allLeaguesUrl = `${baseUrl}allLeagues?`;
        this.teamsUrl = `${baseUrl}teams?`;
        this.teamsSeasonStatsUrl = `${baseUrl}/teamseasonstats?`;
        this.playerUrl = `${baseUrl}playerData?`;
        this.matchDetailsUrl = `${baseUrl}matchDetails?`;
        this.searchUrl = `${baseUrl}searchapi/`;
        this.transfersUrl = `${baseUrl}transfers?`;
        this.worldNewsUrl = `${baseUrl}worldnews?`;
    }
    checkDate(date) {
        const re = /(20\d{2})(\d{2})(\d{2})/;
        return re.exec(date);
    }
    safeTypeCastFetch(url, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield got_1.default.get(url, { cache: this.map });
            const json = JSON.parse(res.body);
            if (json === null || json === void 0 ? void 0 : json.error) {
                throw new Error(json);
            }
            try {
                return fn(res.body);
            }
            catch (err) {
                if (err instanceof type_cast_error_1.CastingError) {
                    return JSON.parse(res.body);
                }
                throw err;
            }
        });
    }
    getMatchesByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.checkDate(date) != null) {
                const url = this.matchesUrl + `date=${date}`;
                return yield this.safeTypeCastFetch(url, matches_1.Convert.toMatches);
            }
        });
    }
    getLeague(id, tab = "overview", type = "league", timeZone = "America/New_York") {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
            return yield this.safeTypeCastFetch(url, league_1.Convert.toLeague);
        });
    }
    getAllLeagues() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.allLeaguesUrl;
            return yield this.safeTypeCastFetch(url, all_leagues_1.Convert.toAllLeagues);
        });
    }
    getTeam(id, tab = "overview", type = "team", timeZone = "America/New_York") {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
            return yield this.safeTypeCastFetch(url, team_1.Convert.toTeam);
        });
    }
    getTeamSeasonStats(teamId, seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.teamsSeasonStatsUrl + `teamId=${teamId}&tournamentId=${seasonId}`;
            return yield this.safeTypeCastFetch(url, team_season_stats_1.Convert.toTeamSeasonStats);
        });
    }
    getPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.playerUrl + `id=${id}`;
            return yield this.safeTypeCastFetch(url, player_1.Convert.toPlayer);
        });
    }
    getMatchDetails(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.matchDetailsUrl + `matchId=${matchId}`;
            return yield this.safeTypeCastFetch(url, match_details_1.Convert.toMatchDetails);
        });
    }
    getWorldNews({ page = 1, lang = "en" } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.worldNewsUrl + `page=${page}&lang=${lang}`;
            return yield this.safeTypeCastFetch(url, world_news_1.Convert.toWorldNews);
        });
    }
    getTransfers({ page = 1, lang = "en" } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.transfersUrl + `page=${page}&lang=${lang}`;
            return yield this.safeTypeCastFetch(url, transfers_1.Convert.toTransfers);
        });
    }
    request(path, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${baseUrl + path}?${new URLSearchParams(params)}`;
            return yield this.safeTypeCastFetch(url, (data) => JSON.parse(data));
        });
    }
}
exports.default = Fotmob;
