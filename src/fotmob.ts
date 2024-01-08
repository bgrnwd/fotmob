"use strict";

import got from "got";
import { CastingError } from './type-cast-error';
import { Convert as ConvertLeague, type League } from './types/league';
import { Convert as ConvertMatchDetails, type MatchDetails } from './types/match-details';
import { Convert as ConvertMatches, type Matches } from './types/matches';
import { Convert as ConvertPlayer, type Player } from './types/player';
import { Convert as ConvertTeam, type Team } from "./types/team";

const baseUrl = "https://www.fotmob.com/api";

export default class Fotmob {
  matchesUrl: string;
  leaguesUrl: string;
  teamsUrl: string;
  playerUrl: string;
  matchDetailsUrl: string;
  searchUrl: string;
  map = new Map();

  constructor() {
    this.matchesUrl = baseUrl + "/matches?";
    this.leaguesUrl = baseUrl + "/leagues?";
    this.teamsUrl = baseUrl + "/teams?";
    this.playerUrl = baseUrl + "/playerData?";
    this.matchDetailsUrl = baseUrl + "/matchDetails?";
    this.searchUrl = baseUrl + "/searchapi/";
  }

  checkDate(date: any) {
    let re = /(20\d{2})(\d{2})(\d{2})/;
    return re.exec(date);
  }
  async safeTypeCastFetch<T>(url: string, fn: (data: string) => T): Promise<T> {
    const res = await got.get(url, { cache: this.map });
    const json = JSON.parse(res.body);
    if (json?.error) {
      throw new Error(json);
    }
    try {
      return fn(res.body) as T;
    }

    catch (err) {
      if (err instanceof CastingError) {
        return JSON.parse(res.body) satisfies T;
      } else {
        throw err;
      }
    }
  }

  async getMatchesByDate(date: string) {
    if (this.checkDate(date) != null) {
      let url = this.matchesUrl + `date=${date}`;
      return await this.safeTypeCastFetch<Matches>(url, ConvertMatches.toMatches);
    }
  }

  async getLeague(
    id: number,
    tab: string = "overview",
    type: string = "league",
    timeZone: string = "America/New_York",
  ) {
    let url =
      this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    return await this.safeTypeCastFetch<League>(url, ConvertLeague.toLeague);
  }

  async getTeam(
    id: number,
    tab: string = "overview",
    type: string = "team",
    timeZone: string = "America/New_York",
  ) {
    let url =
      this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    return await this.safeTypeCastFetch<Team>(url, ConvertTeam.toTeam);
  }

  async getPlayer(id: number) {
    let url = this.playerUrl + `id=${id}`;
    return await this.safeTypeCastFetch<Player>(url, ConvertPlayer.toPlayer);
  }

  async getMatchDetails(matchId: number) {
    let url = this.matchDetailsUrl + `matchId=${matchId}`;
    return await this.safeTypeCastFetch<MatchDetails>(url, ConvertMatchDetails.toMatchDetails);
  }
}