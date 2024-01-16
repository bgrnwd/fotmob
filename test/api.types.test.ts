import got from "got";
import Fotmob from "../src/fotmob";
import { Convert as ConvertLeague, type League } from "../src/types/league";
import { Convert as ConvertTeam, type Team } from "../src/types/team";
import { Convert as ConvertPlayer, type Player } from "../src/types/player";
import {
  Convert as ConvertMatchDetails,
  type MatchDetails,
} from "../src/types/match-details";
import {
  Convert as ConvertAllLeagues,
  type AllLeagues,
} from "../src/types/all-leagues";
import leagueJSON from "./data/league.json";
import matchDetailsJSON from "./data/matchDetails.json";
import teamJSON from "./data/team.json";
import playerJSON from "./data/player.json";
import allLeaguesJSON from "./data/allLeagues.json";
const fot = new Fotmob();
jest.mock("got");

describe("safeTypeCastFetch", () => {
  it("MatchDetails should throw on empty", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: "",
    } as any);

    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=3074502",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).rejects.toThrow();
  });
  it("MatchDetails should throw on error", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify({ error: "error" }),
    } as any);

    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=3074502",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).rejects.toThrow();
  });

  it("League should return League", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify(leagueJSON),
    } as any);
    await expect(
      fot.safeTypeCastFetch<League>(
        "https://www.fotmob.com/api/leagues?id=47",
        ConvertLeague.toLeague,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return MatchDetails", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify(matchDetailsJSON),
    } as any);
    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=4193696",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return Team", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify(teamJSON),
    } as any);
    await expect(
      fot.safeTypeCastFetch<Team>(
        "https://www.fotmob.com/api/leagues?id=47",
        ConvertTeam.toTeam,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return Player", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify(playerJSON),
    } as any);
    await expect(
      fot.safeTypeCastFetch<Player>(
        "https://www.fotmob.com/api/playerData?id=30893",
        ConvertPlayer.toPlayer,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return AllLeagues", async () => {
    const mock = jest.mocked(got);
    mock.get = jest.fn().mockReturnValue({
      body: JSON.stringify(allLeaguesJSON),
    } as any);
    await expect(
      fot.safeTypeCastFetch<AllLeagues>(
        "https://www.fotmob.com/api/tltable?leagueId=9907",
        ConvertAllLeagues.toAllLeagues,
      ),
    ).resolves.not.toThrow();
  });
});
