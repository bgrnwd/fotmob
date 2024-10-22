import Fotmob from "../src/fotmob";
import {
  Convert as ConvertAllLeagues,
  type AllLeagues,
} from "../src/types/all-leagues";
import { Convert as ConvertLeague, type League } from "../src/types/league";
import {
  Convert as ConvertMatchDetails,
  type MatchDetails,
} from "../src/types/match-details";
import { Convert as ConvertPlayer, type Player } from "../src/types/player";
import { Convert as ConvertTeam, type Team } from "../src/types/team";
import allLeaguesJSON from "./data/allLeagues.json";
import leagueJSON from "./data/league.json";
import matchDetailsJSON from "./data/matchDetails.json";
import playerJSON from "./data/player.json";
import teamJSON from "./data/team.json";
const fot = new Fotmob();
let fetchMock: ReturnType<typeof jest.spyOn>;
const getMockedText = (data: string) => jest.fn(
  () => Promise.resolve({
    text: () => Promise.resolve(data),
    ok: true,
  }),
);
const getMockedJson = (data: Record<string, unknown>) => getMockedText(JSON.stringify(data));

beforeAll(() => {
  fetchMock = jest.spyOn(global, "fetch");
});
afterAll(() => {
  fetchMock.mockRestore();
})
describe("safeTypeCastFetch", () => {
  it("MatchDetails should throw on empty", async () => {
    fetchMock.mockImplementation(getMockedText(""));

    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=3074502",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).rejects.toThrow();
  });
  it("MatchDetails should throw on error", async () => {
    fetchMock.mockImplementation(getMockedJson({ error: "error" }));

    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=3074502",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).rejects.toThrow();
  });

  it("League should return League", async () => {
    fetchMock.mockImplementation(getMockedJson(leagueJSON));

    await expect(
      fot.safeTypeCastFetch<League>(
        "https://www.fotmob.com/api/leagues?id=47",
        ConvertLeague.toLeague,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return MatchDetails", async () => {
    fetchMock.mockImplementation(getMockedJson(matchDetailsJSON));
    await expect(
      fot.safeTypeCastFetch<MatchDetails>(
        "https://www.fotmob.com/api/matchDetails?matchId=4193696",
        ConvertMatchDetails.toMatchDetails,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return Team", async () => {
    fetchMock.mockImplementation(getMockedJson(teamJSON));
    await expect(
      fot.safeTypeCastFetch<Team>(
        "https://www.fotmob.com/api/leagues?id=47",
        ConvertTeam.toTeam,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return Player", async () => {
    fetchMock.mockImplementation(getMockedJson(playerJSON));
    await expect(
      fot.safeTypeCastFetch<Player>(
        "https://www.fotmob.com/api/playerData?id=30893",
        ConvertPlayer.toPlayer,
      ),
    ).resolves.not.toThrow();
  });
  it("League should return AllLeagues", async () => {
    fetchMock.mockImplementation(getMockedJson(allLeaguesJSON));
    await expect(
      fot.safeTypeCastFetch<AllLeagues>(
        "https://www.fotmob.com/api/tltable?leagueId=9907",
        ConvertAllLeagues.toAllLeagues,
      ),
    ).resolves.not.toThrow();
  });
  it("Should return JSON on casting error", async () => {
    const mock = jest.mocked(fetch);
    fetchMock.mockImplementation(getMockedJson(allLeaguesJSON));
    await expect(
      fot.safeTypeCastFetch<Team>(
        "https://www.fotmob.com/api/tltable?leagueId=9907",
        ConvertTeam.toTeam,
      ),
    ).resolves.not.toThrow();
    const res = await fot.safeTypeCastFetch<Team>(
      "https://www.fotmob.com/api/tltable?leagueId=9907",
      ConvertTeam.toTeam,
    )
    expect(res).toEqual(allLeaguesJSON)
    expect(typeof res).toBe("object")
  });
});
