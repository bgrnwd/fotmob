
import { TypeEqual, expectType } from "ts-expect";
import Fotmob from '../src/fotmob';
import { CastingError } from '../src/type-cast-error';
import { Convert as ConvertLeague, type League } from '../src/types/league';
import { Convert as ConvertMatchDetails, type MatchDetails } from '../src/types/match-details';
import { Convert as ConvertMatches, type Matches } from '../src/types/matches';
import { Convert as ConvertPlayer, type Player } from '../src/types/player';
import { Convert as ConvertTeam, type Team } from "../src/types/team";

let fot = new Fotmob();

describe('safeTypeCastFetch', () => {
    describe('Matches', () => {
        it('should return Matches', async () => {
            const matches = await fot.safeTypeCastFetch<Matches>("https://www.fotmob.com/api/matches?date=20201020", ConvertMatches.toMatches);
            expect(() => ConvertMatches.matchesToJson(matches as Matches)).not.toThrow();
            expect(ConvertMatches.matchesToJson(matches as Matches)).toBeDefined();
        });
    });
    describe('MatchDetails', () => {
        it('should return MatchDetails', async () => {
            const matchDetails = await fot.safeTypeCastFetch<MatchDetails>("https://www.fotmob.com/api/matchDetails?matchId=4193696", ConvertMatchDetails.toMatchDetails);
            expect(() => ConvertMatchDetails.matchDetailsToJson(matchDetails as MatchDetails)).not.toThrow();
            expect(ConvertMatchDetails.matchDetailsToJson(matchDetails as MatchDetails)).toBeDefined();

        });
        it('should throw', async () => {
            await expect(
                fot.safeTypeCastFetch<MatchDetails>("https://www.fotmob.com/api/matchDetails?matchId=3074502",
                    ConvertMatchDetails.toMatchDetails)).rejects.toThrow()
        });
    });
    describe('League', () => {
        it('should return League', async () => {
            const league = await fot.safeTypeCastFetch<League>("https://www.fotmob.com/api/leagues?id=47", ConvertLeague.toLeague);
            expect(ConvertLeague.leagueToJson(league as League)).toBeDefined();
        });
        it('should return null if not found', async () => {
            const league = await fot.safeTypeCastFetch<League>("https://www.fotmob.com/api/leagues?tab=overview&type=league&timeZone=America/New_York&id=4", ConvertLeague.toLeague);
            expect(league).toBeNull();
            expect(() => ConvertLeague.leagueToJson(league as League)).toThrow();
        });
    });
    describe('Player', () => {
        it('should return Player', async () => {
            const player = await fot.safeTypeCastFetch<Player>("https://www.fotmob.com/api/playerData?id=30893", ConvertPlayer.toPlayer);
            expect(() => ConvertPlayer.playerToJson(player as Player)).not.toThrow();
            expect(ConvertPlayer.playerToJson(player as Player)).toBeDefined();
        });
        it('should throw', async () => {
            await expect(
                fot.safeTypeCastFetch<Player>("https://www.fotmob.com/api/playerData?playerId=3074502", ConvertPlayer.toPlayer)).rejects.toThrow()
        });
    });
    describe('Team', () => {
        it('should return Team', async () => {
            const team = await fot.safeTypeCastFetch<Team>("https://www.fotmob.com/api/teams?id=8650", ConvertTeam.toTeam);
            expect(() => ConvertTeam.teamToJson(team as Team)).not.toThrow();
            expect(ConvertTeam.teamToJson(team as Team)).toBeDefined();
        });
        it('should return null if not found', async () => {
            const team = await fot.safeTypeCastFetch<Team>("https://www.fotmob.com/api/teams?id=865022", ConvertTeam.toTeam);
            expect(team).toBeNull()
        });
    })

})