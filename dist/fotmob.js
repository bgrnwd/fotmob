'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var got_1 = require("got");
var baseUrl = 'https://www.fotmob.com/api';
var Fotmob = /** @class */ (function () {
    function Fotmob() {
        this.map = new Map();
        this.matchesUrl = baseUrl + '/matches?';
        this.leaguesUrl = baseUrl + '/leagues?';
        this.teamsUrl = baseUrl + '/teams?';
        this.playerUrl = baseUrl + '/playerData?';
        this.matchDetailsUrl = baseUrl + '/matchDetails?';
        this.searchUrl = baseUrl + '/searchapi/';
    }
    Fotmob.prototype.checkDate = function (date) {
        var re = /(20\d{2})(\d{2})(\d{2})/;
        return re.exec(date);
    };
    Fotmob.prototype.getMatchesByDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.checkDate(date) != null)) return [3 /*break*/, 5];
                        url = this.matchesUrl + "date=".concat(date);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, { cache: this.map })];
                    case 2:
                        response = _a.sent();
                        console.log(response.isFromCache);
                        return [2 /*return*/, response.body];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof got_1.default.HTTPError) {
                            console.log(error_1.response.body);
                        }
                        else {
                            console.log(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.log('incorrtect date');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Fotmob.prototype.getLeague = function (id, tab, type, timeZone) {
        if (tab === void 0) { tab = 'overview'; }
        if (type === void 0) { type = 'league'; }
        if (timeZone === void 0) { timeZone = 'America/New_York'; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.leaguesUrl + "id=".concat(id, "&tab=").concat(tab, "&type=").concat(type, "&timeZone=").concat(timeZone);
                        console.log(url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, { cache: this.map })];
                    case 2:
                        response = _a.sent();
                        console.log(response.isFromCache);
                        return [2 /*return*/, response.body];
                    case 3:
                        error_2 = _a.sent();
                        if (error_2 instanceof got_1.default.HTTPError) {
                            console.log(error_2.response.body);
                        }
                        else {
                            console.log(error_2);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Fotmob.prototype.getTeam = function (id, tab, type, timeZone) {
        if (tab === void 0) { tab = 'overview'; }
        if (type === void 0) { type = 'team'; }
        if (timeZone === void 0) { timeZone = 'America/New_York'; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.teamsUrl + "id=".concat(id, "&tab=").concat(tab, "&type=").concat(type, "&timeZone=").concat(timeZone);
                        console.log(url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, { cache: this.map })];
                    case 2:
                        response = _a.sent();
                        console.log(response.isFromCache);
                        return [2 /*return*/, response.body];
                    case 3:
                        error_3 = _a.sent();
                        if (error_3 instanceof got_1.default.HTTPError) {
                            console.log(error_3.response.body);
                        }
                        else {
                            console.log(error_3);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Fotmob.prototype.getPlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.playerUrl + "id=".concat(id);
                        console.log(url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, { cache: this.map })];
                    case 2:
                        response = _a.sent();
                        console.log(response.isFromCache);
                        return [2 /*return*/, response.body];
                    case 3:
                        error_4 = _a.sent();
                        if (error_4 instanceof got_1.default.HTTPError) {
                            console.log(error_4.response.body);
                        }
                        else {
                            console.log(error_4);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Fotmob.prototype.getMatchDetails = function (matchId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.matchDetailsUrl + "matchId=".concat(matchId);
                        console.log(url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, got_1.default)(url, { cache: this.map })];
                    case 2:
                        response = _a.sent();
                        console.log(response.isFromCache);
                        return [2 /*return*/, response.body];
                    case 3:
                        error_5 = _a.sent();
                        if (error_5 instanceof got_1.default.HTTPError) {
                            console.log(error_5.response.body);
                        }
                        else {
                            console.log(error_5);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Fotmob;
}());
module.exports = Fotmob;
