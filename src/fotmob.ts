"use strict";

import { HTTPError } from 'got/dist/source';
import got from 'got';

const baseUrl = "https://www.fotmob.com";

class Fotmob {
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

  printError(error: unknown) {
    if (error instanceof HTTPError) {
      console.log(error.response.body);
    }
    else {
      console.log(error);
    }
  }

  getMatchesByDate(date: number) {
    if (this.checkDate(date) != null) {
      let url = this.matchesUrl + `date=${date}`;
      (async () => {
        try {
          const response = await got(url, { cache: this.map });
          console.log(response.isFromCache);
          return response.body;
        } catch (error) {
          this.printError(error);
        }
      })();
    }
  }

  getLeague(id: number, tab: string="overview", type: string="league", timeZone: string="America/New_York") {
    let url =
      this.leaguesUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        return response.body;
      } catch (error) {
        this.printError(error);
      }
    })();
  }

  getTeam(id: number, tab: string="overview", type: string="team", timeZone: string="America/New_York") {
    let url =
      this.teamsUrl + `id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        return response.body;
      } catch (error) {
        this.printError(error);
      }
    })();
  }

  getPlayer(id: number) {
    let url = this.playerUrl + `id=${id}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        return response.body;
      } catch (error) {
        this.printError(error);
      }
    })();
  }

  getMatchDetails(matchId: number) {
    let url = this.matchDetailsUrl + `matchId=${matchId}`;
    console.log(url);
    (async () => {
      try {
        const response = await got(url, { cache: this.map });
        console.log(response.isFromCache);
        return response.body;
      } catch (error) {
        this.printError(error);
      }
    })();
  }
}

module.exports = Fotmob;
