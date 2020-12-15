import { platform } from "os";

const mob = require("fotmob");
const matchData = require("./data/matchesByDate.json")
const leagueData = require("./data/league.json")
const teamData = require("./data/team.json")
const playerData = require("./data/player.json")
const matchDetailData = require("./data/matchDetails.json")

let fot = new mob();

jest.mock('fotmob')

fot.getMatchesByDate.mockResolvedValue(matchData);
fot.getLeague.mockResolvedValue(leagueData);
fot.getTeam.mockResolvedValue(teamData);
fot.getPlayer.mockResolvedValue(playerData);
fot.getMatchDetails.mockResolvedValue(matchDetailData);


describe("getMatchesByDate", () => {
    it('should load match data', async () => {
        const data = await fot.getMatchesByDate("20201020");
        expect(data).toBeDefined();
    })
})

describe("getLeague", () => {
    it('should load league data', async () => {
        const data = await fot.getLeague(47, "overview", "league","America/New_York");
        expect(data).toBeDefined();
    })
})

describe("getTeam", () => {
    it('should load team data', async () => {
        const data = await fot.getTeam(6017, "overview", "team","America/New_York");
        expect(data).toBeDefined();
    })
})

describe("getPlayer", () => {
    it('should load player data', async () => {
        const data = await fot.getPlayer(688295);
        expect(data).toBeDefined();
    })
})

describe("getMatchDetails", () => {
    it('should load match detail data', async () => {
        const data = await fot.getMatchDetails(3363666);
        expect(data).toBeDefined();
    })
})