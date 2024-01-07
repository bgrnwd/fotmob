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
import got from "got";
import { CastingError } from './type-cast-error';
import { Convert as ConvertLeague } from './types/league';
import { Convert as ConvertMatchDetails } from './types/match-details';
import { Convert as ConvertMatches } from './types/matches';
import { Convert as ConvertPlayer } from './types/player';
import { Convert as ConvertTeam } from "./types/team";
const baseUrl = "https://www.fotmob.com/api";
export default class Fotmob {
    constructor() {
        this.map = new Map();
        this.matchesUrl = baseUrl + "/matches?";
        this.leaguesUrl = baseUrl + "/leagues?";
        this.teamsUrl = baseUrl + "/teams?";
        this.playerUrl = baseUrl + "/playerData?";
        this.matchDetailsUrl = baseUrl + "/matchDetails?";
        this.searchUrl = baseUrl + "/searchapi/";
    }
    checkDate(date) {
        let re = /(20\d{2})(\d{2})(\d{2})/;
        return re.exec(date);
    }
    safeTypeCastFetch(url, fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield got.get(url, { cache: this.map });
            const json = JSON.parse(res.body);
            if (json === null || json === void 0 ? void 0 : json.error) {
                throw new Error(json);
            }
            try {
                return fn(res.body);
            }
            catch (err) {
                if (err instanceof CastingError) {
                    return JSON.parse(res.body);
                }
                else {
                    throw err;
                }
            }
        });
    }
    getMatchesByDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.checkDate(date) != null) {
                let url = this.matchesUrl + `date=${date}`;
                return yield this.safeTypeCastFetch(url, ConvertMatches.toMatches);
            }
        });
    }
    getLeague(id, tab = "overview", type = "league", timeZone = "America/New_York") {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
            return yield this.safeTypeCastFetch(url, ConvertLeague.toLeague);
        });
    }
    getTeam(id, tab = "overview", type = "team", timeZone = "America/New_York") {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
            return yield this.safeTypeCastFetch(url, ConvertTeam.toTeam);
        });
    }
    getPlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.playerUrl + `id=${id}`;
            return yield this.safeTypeCastFetch(url, ConvertPlayer.toPlayer);
        });
    }
    getMatchDetails(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.matchDetailsUrl + `matchId=${matchId}`;
            return yield this.safeTypeCastFetch(url, ConvertMatchDetails.toMatchDetails);
        });
    }
}
