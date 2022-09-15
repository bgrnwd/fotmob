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
const baseUrl = "https://www.fotmob.com/api";
class Fotmob {
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
    getMatchesByDate(date) {
        if (this.checkDate(date) != null) {
            let url = this.matchesUrl + `date=${date}`;
            (() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const response = yield (0, got_1.default)(url, { cache: this.map });
                    console.log(response.isFromCache);
                    return response.body;
                }
                catch (error) {
                    if (error instanceof got_1.default.HTTPError) {
                        console.log(error.response.body);
                    }
                    else {
                        console.log(error);
                    }
                }
            }))();
        }
    }
    getLeague(id, tab = "overview", type = "league", timeZone = "America/New_York") {
        let url = this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
        console.log(url);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, got_1.default)(url, { cache: this.map });
                console.log(response.isFromCache);
                return response.body;
            }
            catch (error) {
                if (error instanceof got_1.default.HTTPError) {
                    console.log(error.response.body);
                }
                else {
                    console.log(error);
                }
            }
        }))();
    }
    getTeam(id, tab = "overview", type = "team", timeZone = "America/New_York") {
        let url = this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
        console.log(url);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, got_1.default)(url, { cache: this.map });
                console.log(response.isFromCache);
                return response.body;
            }
            catch (error) {
                if (error instanceof got_1.default.HTTPError) {
                    console.log(error.response.body);
                }
                else {
                    console.log(error);
                }
            }
        }))();
    }
    getPlayer(id) {
        let url = this.playerUrl + `id=${id}`;
        console.log(url);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, got_1.default)(url, { cache: this.map });
                console.log(response.isFromCache);
                return response.body;
            }
            catch (error) {
                if (error instanceof got_1.default.HTTPError) {
                    console.log(error.response.body);
                }
                else {
                    console.log(error);
                }
            }
        }))();
    }
    getMatchDetails(matchId) {
        let url = this.matchDetailsUrl + `matchId=${matchId}`;
        console.log(url);
        (() => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield (0, got_1.default)(url, { cache: this.map });
                console.log(response.isFromCache);
                return response.body;
            }
            catch (error) {
                if (error instanceof got_1.default.HTTPError) {
                    console.log(error.response.body);
                }
                else {
                    console.log(error);
                }
            }
        }))();
    }
}
module.exports = Fotmob;
