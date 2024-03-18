"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.Type = exports.StatType = exports.ResultString = exports.EventTypeEnum = exports.Side = exports.Title = exports.AssistsKey = exports.AccurateCrossesKey = exports.StatKey = exports.Situation = exports.ShotType = exports.Period = exports.EventType = exports.Role = exports.Position = exports.ShortKey = exports.Short = exports.LongKey = exports.Long = void 0;
const type_cast_error_1 = require("../type-cast-error");
var Long;
(function (Long) {
    Long["Abandoned"] = "Abandoned";
    Long["FullTime"] = "Full-Time";
})(Long || (exports.Long = Long = {}));
var LongKey;
(function (LongKey) {
    LongKey["Aborted"] = "aborted";
    LongKey["Finished"] = "finished";
})(LongKey || (exports.LongKey = LongKey = {}));
var Short;
(function (Short) {
    Short["Ab"] = "Ab";
    Short["Ft"] = "FT";
})(Short || (exports.Short = Short = {}));
var ShortKey;
(function (ShortKey) {
    ShortKey["AbortedShort"] = "aborted_short";
    ShortKey["FulltimeShort"] = "fulltime_short";
})(ShortKey || (exports.ShortKey = ShortKey = {}));
var Position;
(function (Position) {
    Position["Substitute"] = "Substitute";
})(Position || (exports.Position = Position = {}));
var Role;
(function (Role) {
    Role["Attacker"] = "Attacker";
    Role["Defender"] = "Defender";
    Role["Keeper"] = "Keeper";
    Role["Midfielder"] = "Midfielder";
})(Role || (exports.Role = Role = {}));
var EventType;
(function (EventType) {
    EventType["AttemptSaved"] = "AttemptSaved";
    EventType["Miss"] = "Miss";
})(EventType || (exports.EventType = EventType = {}));
var Period;
(function (Period) {
    Period["FirstHalf"] = "FirstHalf";
    Period["SecondHalf"] = "SecondHalf";
})(Period || (exports.Period = Period = {}));
var ShotType;
(function (ShotType) {
    ShotType["Header"] = "Header";
    ShotType["LeftFoot"] = "LeftFoot";
    ShotType["RightFoot"] = "RightFoot";
})(ShotType || (exports.ShotType = ShotType = {}));
var Situation;
(function (Situation) {
    Situation["FastBreak"] = "FastBreak";
    Situation["FromCorner"] = "FromCorner";
    Situation["RegularPlay"] = "RegularPlay";
    Situation["SetPiece"] = "SetPiece";
})(Situation || (exports.Situation = Situation = {}));
var StatKey;
(function (StatKey) {
    StatKey["Attack"] = "attack";
    StatKey["Defense"] = "defense";
    StatKey["Duels"] = "duels";
    StatKey["TopStats"] = "top_stats";
})(StatKey || (exports.StatKey = StatKey = {}));
var AccurateCrossesKey;
(function (AccurateCrossesKey) {
    AccurateCrossesKey["AccurateCrosses"] = "accurate_crosses";
    AccurateCrossesKey["AccuratePasses"] = "accurate_passes";
    AccurateCrossesKey["AerialsWon"] = "aerials_won";
    AccurateCrossesKey["DribblesSucceeded"] = "dribbles_succeeded";
    AccurateCrossesKey["ExpectedAssists"] = "expected_assists";
    AccurateCrossesKey["ExpectedGoals"] = "expected_goals";
    AccurateCrossesKey["ExpectedGoalsNonPenalty"] = "expected_goals_non_penalty";
    AccurateCrossesKey["ExpectedGoalsOnTargetFaced"] = "expected_goals_on_target_faced";
    AccurateCrossesKey["ExpectedGoalsOnTargetVariant"] = "expected_goals_on_target_variant";
    AccurateCrossesKey["FantasyPoints"] = "fantasy_points";
    AccurateCrossesKey["GoalsPrevented"] = "goals_prevented";
    AccurateCrossesKey["GroundDuelsWon"] = "ground_duels_won";
    AccurateCrossesKey["LongBallsAccurate"] = "long_balls_accurate";
    AccurateCrossesKey["Saves"] = "saves";
    AccurateCrossesKey["ShotAccuracy"] = "shot_accuracy";
    AccurateCrossesKey["TacklesSucceeded"] = "tackles_succeeded";
    AccurateCrossesKey["XgAndXa"] = "xg_and_xa";
})(AccurateCrossesKey || (exports.AccurateCrossesKey = AccurateCrossesKey = {}));
var AssistsKey;
(function (AssistsKey) {
    AssistsKey["Assists"] = "assists";
    AssistsKey["BigChanceMissedTitle"] = "big_chance_missed_title";
    AssistsKey["BlockedShots"] = "blocked_shots";
    AssistsKey["ChancesCreated"] = "chances_created";
    AssistsKey["Clearances"] = "clearances";
    AssistsKey["Corners"] = "corners";
    AssistsKey["DefensiveActions"] = "defensive_actions";
    AssistsKey["Dispossessed"] = "dispossessed";
    AssistsKey["DribbledPast"] = "dribbled_past";
    AssistsKey["DuelLost"] = "duel_lost";
    AssistsKey["DuelWon"] = "duel_won";
    AssistsKey["FantasyPoints"] = "fantasy_points";
    AssistsKey["Fouls"] = "fouls";
    AssistsKey["Goals"] = "goals";
    AssistsKey["GoalsConceded"] = "goals_conceded";
    AssistsKey["HeadedClearance"] = "headed_clearance";
    AssistsKey["Interceptions"] = "interceptions";
    AssistsKey["KeeperDivingSave"] = "keeper_diving_save";
    AssistsKey["KeeperHighClaim"] = "keeper_high_claim";
    AssistsKey["KeeperSweeper"] = "keeper_sweeper";
    AssistsKey["LastManTackle"] = "last_man_tackle";
    AssistsKey["MinutesPlayed"] = "minutes_played";
    AssistsKey["Offsides"] = "Offsides";
    AssistsKey["PassesIntoFinalThird"] = "passes_into_final_third";
    AssistsKey["PlayerThrows"] = "player_throws";
    AssistsKey["Punches"] = "punches";
    AssistsKey["RatingTitle"] = "rating_title";
    AssistsKey["Recoveries"] = "recoveries";
    AssistsKey["SavesInsideBox"] = "saves_inside_box";
    AssistsKey["ShotBlocks"] = "shot_blocks";
    AssistsKey["TotalShots"] = "total_shots";
    AssistsKey["Touches"] = "touches";
    AssistsKey["TouchesOppBox"] = "touches_opp_box";
    AssistsKey["WasFouled"] = "was_fouled";
})(AssistsKey || (exports.AssistsKey = AssistsKey = {}));
var Title;
(function (Title) {
    Title["Attack"] = "Attack";
    Title["Defense"] = "Defense";
    Title["Duels"] = "Duels";
    Title["TopStats"] = "Top stats";
})(Title || (exports.Title = Title = {}));
var Side;
(function (Side) {
    Side["Away"] = "away";
    Side["Equal"] = "equal";
    Side["Home"] = "home";
})(Side || (exports.Side = Side = {}));
var EventTypeEnum;
(function (EventTypeEnum) {
    EventTypeEnum["AddedTime"] = "AddedTime";
    EventTypeEnum["Card"] = "Card";
    EventTypeEnum["Half"] = "Half";
    EventTypeEnum["Substitution"] = "Substitution";
})(EventTypeEnum || (exports.EventTypeEnum = EventTypeEnum = {}));
var ResultString;
(function (ResultString) {
    ResultString["D"] = "D";
    ResultString["L"] = "L";
    ResultString["W"] = "W";
})(ResultString || (exports.ResultString = ResultString = {}));
var StatType;
(function (StatType) {
    StatType["Graph"] = "graph";
    StatType["Text"] = "text";
    StatType["Title"] = "title";
})(StatType || (exports.StatType = StatType = {}));
var Type;
(function (Type) {
    Type["ListItem"] = "ListItem";
})(Type || (exports.Type = Type = {}));
class Convert {
    static toMatchDetails(json) {
        return cast(JSON.parse(json), r("MatchDetails"));
    }
    static matchDetailsToJson(value) {
        return JSON.stringify(uncast(value, r("MatchDetails")), null, 2);
    }
    static toContent(json) {
        return cast(JSON.parse(json), r("Content"));
    }
    static contentToJson(value) {
        return JSON.stringify(uncast(value, r("Content")), null, 2);
    }
    static toH2H(json) {
        return cast(JSON.parse(json), r("H2H"));
    }
    static h2HToJson(value) {
        return JSON.stringify(uncast(value, r("H2H")), null, 2);
    }
    static toMatch(json) {
        return cast(JSON.parse(json), r("Match"));
    }
    static matchToJson(value) {
        return JSON.stringify(uncast(value, r("Match")), null, 2);
    }
    static toMatchAway(json) {
        return cast(JSON.parse(json), r("MatchAway"));
    }
    static matchAwayToJson(value) {
        return JSON.stringify(uncast(value, r("MatchAway")), null, 2);
    }
    static toLeague(json) {
        return cast(JSON.parse(json), r("League"));
    }
    static leagueToJson(value) {
        return JSON.stringify(uncast(value, r("League")), null, 2);
    }
    static toStatus(json) {
        return cast(JSON.parse(json), r("Status"));
    }
    static statusToJson(value) {
        return JSON.stringify(uncast(value, r("Status")), null, 2);
    }
    static toReason(json) {
        return cast(JSON.parse(json), r("Reason"));
    }
    static reasonToJson(value) {
        return JSON.stringify(uncast(value, r("Reason")), null, 2);
    }
    static toMatchDate(json) {
        return cast(JSON.parse(json), r("MatchDate"));
    }
    static matchDateToJson(value) {
        return JSON.stringify(uncast(value, r("MatchDate")), null, 2);
    }
    static toContentLineup(json) {
        return cast(JSON.parse(json), r("ContentLineup"));
    }
    static contentLineupToJson(value) {
        return JSON.stringify(uncast(value, r("ContentLineup")), null, 2);
    }
    static toPurpleBench(json) {
        return cast(JSON.parse(json), r("PurpleBench"));
    }
    static purpleBenchToJson(value) {
        return JSON.stringify(uncast(value, r("PurpleBench")), null, 2);
    }
    static toBenchArrElement(json) {
        return cast(JSON.parse(json), r("BenchArrElement"));
    }
    static benchArrElementToJson(value) {
        return JSON.stringify(uncast(value, r("BenchArrElement")), null, 2);
    }
    static toBenchArrEvents(json) {
        return cast(JSON.parse(json), r("BenchArrEvents"));
    }
    static benchArrEventsToJson(value) {
        return JSON.stringify(uncast(value, r("BenchArrEvents")), null, 2);
    }
    static toPurpleSub(json) {
        return cast(JSON.parse(json), r("PurpleSub"));
    }
    static purpleSubToJson(value) {
        return JSON.stringify(uncast(value, r("PurpleSub")), null, 2);
    }
    static toFantasyScoreClass(json) {
        return cast(JSON.parse(json), r("FantasyScoreClass"));
    }
    static fantasyScoreClassToJson(value) {
        return JSON.stringify(uncast(value, r("FantasyScoreClass")), null, 2);
    }
    static toNameClass(json) {
        return cast(JSON.parse(json), r("NameClass"));
    }
    static nameClassToJson(value) {
        return JSON.stringify(uncast(value, r("NameClass")), null, 2);
    }
    static toBenchArrRating(json) {
        return cast(JSON.parse(json), r("BenchArrRating"));
    }
    static benchArrRatingToJson(value) {
        return JSON.stringify(uncast(value, r("BenchArrRating")), null, 2);
    }
    static toIsTop(json) {
        return cast(JSON.parse(json), r("IsTop"));
    }
    static isTopToJson(value) {
        return JSON.stringify(uncast(value, r("IsTop")), null, 2);
    }
    static toShot(json) {
        return cast(JSON.parse(json), r("Shot"));
    }
    static shotToJson(value) {
        return JSON.stringify(uncast(value, r("Shot")), null, 2);
    }
    static toOnGoalShot(json) {
        return cast(JSON.parse(json), r("OnGoalShot"));
    }
    static onGoalShotToJson(value) {
        return JSON.stringify(uncast(value, r("OnGoalShot")), null, 2);
    }
    static toBenchArrStat(json) {
        return cast(JSON.parse(json), r("BenchArrStat"));
    }
    static benchArrStatToJson(value) {
        return JSON.stringify(uncast(value, r("BenchArrStat")), null, 2);
    }
    static toPurpleStats(json) {
        return cast(JSON.parse(json), r("PurpleStats"));
    }
    static purpleStatsToJson(value) {
        return JSON.stringify(uncast(value, r("PurpleStats")), null, 2);
    }
    static toAccurateCrosses(json) {
        return cast(JSON.parse(json), r("AccurateCrosses"));
    }
    static accurateCrossesToJson(value) {
        return JSON.stringify(uncast(value, r("AccurateCrosses")), null, 2);
    }
    static toAerialDuelsWon(json) {
        return cast(JSON.parse(json), r("AerialDuelsWon"));
    }
    static aerialDuelsWonToJson(value) {
        return JSON.stringify(uncast(value, r("AerialDuelsWon")), null, 2);
    }
    static toAssists(json) {
        return cast(JSON.parse(json), r("Assists"));
    }
    static assistsToJson(value) {
        return JSON.stringify(uncast(value, r("Assists")), null, 2);
    }
    static toShotmap(json) {
        return cast(JSON.parse(json), r("Shotmap"));
    }
    static shotmapToJson(value) {
        return JSON.stringify(uncast(value, r("Shotmap")), null, 2);
    }
    static toTeamData(json) {
        return cast(JSON.parse(json), r("TeamData"));
    }
    static teamDataToJson(value) {
        return JSON.stringify(uncast(value, r("TeamData")), null, 2);
    }
    static toTeamDataAway(json) {
        return cast(JSON.parse(json), r("TeamDataAway"));
    }
    static teamDataAwayToJson(value) {
        return JSON.stringify(uncast(value, r("TeamDataAway")), null, 2);
    }
    static toCoaches(json) {
        return cast(JSON.parse(json), r("Coaches"));
    }
    static coachesToJson(value) {
        return JSON.stringify(uncast(value, r("Coaches")), null, 2);
    }
    static toCoach(json) {
        return cast(JSON.parse(json), r("Coach"));
    }
    static coachToJson(value) {
        return JSON.stringify(uncast(value, r("Coach")), null, 2);
    }
    static toCoachesArrEvents(json) {
        return cast(JSON.parse(json), r("CoachesArrEvents"));
    }
    static coachesArrEventsToJson(value) {
        return JSON.stringify(uncast(value, r("CoachesArrEvents")), null, 2);
    }
    static toLineupElement(json) {
        return cast(JSON.parse(json), r("LineupElement"));
    }
    static lineupElementToJson(value) {
        return JSON.stringify(uncast(value, r("LineupElement")), null, 2);
    }
    static toNaPlayersArr(json) {
        return cast(JSON.parse(json), r("NaPlayersArr"));
    }
    static naPlayersArrToJson(value) {
        return JSON.stringify(uncast(value, r("NaPlayersArr")), null, 2);
    }
    static toNaInfo(json) {
        return cast(JSON.parse(json), r("NaInfo"));
    }
    static naInfoToJson(value) {
        return JSON.stringify(uncast(value, r("NaInfo")), null, 2);
    }
    static toExpectedReturn(json) {
        return cast(JSON.parse(json), r("ExpectedReturn"));
    }
    static expectedReturnToJson(value) {
        return JSON.stringify(uncast(value, r("ExpectedReturn")), null, 2);
    }
    static toOptaLineup(json) {
        return cast(JSON.parse(json), r("OptaLineup"));
    }
    static optaLineupToJson(value) {
        return JSON.stringify(uncast(value, r("OptaLineup")), null, 2);
    }
    static toPlayerElement(json) {
        return cast(JSON.parse(json), r("PlayerElement"));
    }
    static playerElementToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerElement")), null, 2);
    }
    static toPlayerEvents(json) {
        return cast(JSON.parse(json), r("PlayerEvents"));
    }
    static playerEventsToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerEvents")), null, 2);
    }
    static toFluffySub(json) {
        return cast(JSON.parse(json), r("FluffySub"));
    }
    static fluffySubToJson(value) {
        return JSON.stringify(uncast(value, r("FluffySub")), null, 2);
    }
    static toFantasyScore(json) {
        return cast(JSON.parse(json), r("FantasyScore"));
    }
    static fantasyScoreToJson(value) {
        return JSON.stringify(uncast(value, r("FantasyScore")), null, 2);
    }
    static toPositionLabel(json) {
        return cast(JSON.parse(json), r("PositionLabel"));
    }
    static positionLabelToJson(value) {
        return JSON.stringify(uncast(value, r("PositionLabel")), null, 2);
    }
    static toPlayerStat(json) {
        return cast(JSON.parse(json), r("PlayerStat"));
    }
    static playerStatToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerStat")), null, 2);
    }
    static toFluffyStats(json) {
        return cast(JSON.parse(json), r("FluffyStats"));
    }
    static fluffyStatsToJson(value) {
        return JSON.stringify(uncast(value, r("FluffyStats")), null, 2);
    }
    static toNaPlayers(json) {
        return cast(JSON.parse(json), r("NaPlayers"));
    }
    static naPlayersToJson(value) {
        return JSON.stringify(uncast(value, r("NaPlayers")), null, 2);
    }
    static toTeamRatings(json) {
        return cast(JSON.parse(json), r("TeamRatings"));
    }
    static teamRatingsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamRatings")), null, 2);
    }
    static toLiveticker(json) {
        return cast(JSON.parse(json), r("Liveticker"));
    }
    static livetickerToJson(value) {
        return JSON.stringify(uncast(value, r("Liveticker")), null, 2);
    }
    static toMatchFacts(json) {
        return cast(JSON.parse(json), r("MatchFacts"));
    }
    static matchFactsToJson(value) {
        return JSON.stringify(uncast(value, r("MatchFacts")), null, 2);
    }
    static toQADatum(json) {
        return cast(JSON.parse(json), r("QADatum"));
    }
    static qADatumToJson(value) {
        return JSON.stringify(uncast(value, r("QADatum")), null, 2);
    }
    static toMatchFactsEvents(json) {
        return cast(JSON.parse(json), r("MatchFactsEvents"));
    }
    static matchFactsEventsToJson(value) {
        return JSON.stringify(uncast(value, r("MatchFactsEvents")), null, 2);
    }
    static toEvent(json) {
        return cast(JSON.parse(json), r("Event"));
    }
    static eventToJson(value) {
        return JSON.stringify(uncast(value, r("Event")), null, 2);
    }
    static toEventPlayer(json) {
        return cast(JSON.parse(json), r("EventPlayer"));
    }
    static eventPlayerToJson(value) {
        return JSON.stringify(uncast(value, r("EventPlayer")), null, 2);
    }
    static toSwap(json) {
        return cast(JSON.parse(json), r("Swap"));
    }
    static swapToJson(value) {
        return JSON.stringify(uncast(value, r("Swap")), null, 2);
    }
    static toHighlights(json) {
        return cast(JSON.parse(json), r("Highlights"));
    }
    static highlightsToJson(value) {
        return JSON.stringify(uncast(value, r("Highlights")), null, 2);
    }
    static toInfoBox(json) {
        return cast(JSON.parse(json), r("InfoBox"));
    }
    static infoBoxToJson(value) {
        return JSON.stringify(uncast(value, r("InfoBox")), null, 2);
    }
    static toReferee(json) {
        return cast(JSON.parse(json), r("Referee"));
    }
    static refereeToJson(value) {
        return JSON.stringify(uncast(value, r("Referee")), null, 2);
    }
    static toStadium(json) {
        return cast(JSON.parse(json), r("Stadium"));
    }
    static stadiumToJson(value) {
        return JSON.stringify(uncast(value, r("Stadium")), null, 2);
    }
    static toTournament(json) {
        return cast(JSON.parse(json), r("Tournament"));
    }
    static tournamentToJson(value) {
        return JSON.stringify(uncast(value, r("Tournament")), null, 2);
    }
    static toInsight(json) {
        return cast(JSON.parse(json), r("Insight"));
    }
    static insightToJson(value) {
        return JSON.stringify(uncast(value, r("Insight")), null, 2);
    }
    static toStatValue(json) {
        return cast(JSON.parse(json), r("StatValue"));
    }
    static statValueToJson(value) {
        return JSON.stringify(uncast(value, r("StatValue")), null, 2);
    }
    static toMatchesInRound(json) {
        return cast(JSON.parse(json), r("MatchesInRound"));
    }
    static matchesInRoundToJson(value) {
        return JSON.stringify(uncast(value, r("MatchesInRound")), null, 2);
    }
    static toMatchesInRoundAway(json) {
        return cast(JSON.parse(json), r("MatchesInRoundAway"));
    }
    static matchesInRoundAwayToJson(value) {
        return JSON.stringify(uncast(value, r("MatchesInRoundAway")), null, 2);
    }
    static toMomentum(json) {
        return cast(JSON.parse(json), r("Momentum"));
    }
    static momentumToJson(value) {
        return JSON.stringify(uncast(value, r("Momentum")), null, 2);
    }
    static toMain(json) {
        return cast(JSON.parse(json), r("Main"));
    }
    static mainToJson(value) {
        return JSON.stringify(uncast(value, r("Main")), null, 2);
    }
    static toDatum(json) {
        return cast(JSON.parse(json), r("Datum"));
    }
    static datumToJson(value) {
        return JSON.stringify(uncast(value, r("Datum")), null, 2);
    }
    static toPlayerOfTheMatch(json) {
        return cast(JSON.parse(json), r("PlayerOfTheMatch"));
    }
    static playerOfTheMatchToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatch")), null, 2);
    }
    static toPlayerOfTheMatchRating(json) {
        return cast(JSON.parse(json), r("PlayerOfTheMatchRating"));
    }
    static playerOfTheMatchRatingToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatchRating")), null, 2);
    }
    static toPlayerOfTheMatchStat(json) {
        return cast(JSON.parse(json), r("PlayerOfTheMatchStat"));
    }
    static playerOfTheMatchStatToJson(value) {
        return JSON.stringify(uncast(value, r("PlayerOfTheMatchStat")), null, 2);
    }
    static toTentacledStats(json) {
        return cast(JSON.parse(json), r("TentacledStats"));
    }
    static tentacledStatsToJson(value) {
        return JSON.stringify(uncast(value, r("TentacledStats")), null, 2);
    }
    static toPoll(json) {
        return cast(JSON.parse(json), r("Poll"));
    }
    static pollToJson(value) {
        return JSON.stringify(uncast(value, r("Poll")), null, 2);
    }
    static toOddspoll(json) {
        return cast(JSON.parse(json), r("Oddspoll"));
    }
    static oddspollToJson(value) {
        return JSON.stringify(uncast(value, r("Oddspoll")), null, 2);
    }
    static toFact(json) {
        return cast(JSON.parse(json), r("Fact"));
    }
    static factToJson(value) {
        return JSON.stringify(uncast(value, r("Fact")), null, 2);
    }
    static toVoteResult(json) {
        return cast(JSON.parse(json), r("VoteResult"));
    }
    static voteResultToJson(value) {
        return JSON.stringify(uncast(value, r("VoteResult")), null, 2);
    }
    static toVote(json) {
        return cast(JSON.parse(json), r("Vote"));
    }
    static voteToJson(value) {
        return JSON.stringify(uncast(value, r("Vote")), null, 2);
    }
    static toTeamForm(json) {
        return cast(JSON.parse(json), r("TeamForm"));
    }
    static teamFormToJson(value) {
        return JSON.stringify(uncast(value, r("TeamForm")), null, 2);
    }
    static toTeamFormAway(json) {
        return cast(JSON.parse(json), r("TeamFormAway"));
    }
    static teamFormAwayToJson(value) {
        return JSON.stringify(uncast(value, r("TeamFormAway")), null, 2);
    }
    static toTooltipText(json) {
        return cast(JSON.parse(json), r("TooltipText"));
    }
    static tooltipTextToJson(value) {
        return JSON.stringify(uncast(value, r("TooltipText")), null, 2);
    }
    static toTopPlayers(json) {
        return cast(JSON.parse(json), r("TopPlayers"));
    }
    static topPlayersToJson(value) {
        return JSON.stringify(uncast(value, r("TopPlayers")), null, 2);
    }
    static toTopPlayer(json) {
        return cast(JSON.parse(json), r("TopPlayer"));
    }
    static topPlayerToJson(value) {
        return JSON.stringify(uncast(value, r("TopPlayer")), null, 2);
    }
    static toTopScorers(json) {
        return cast(JSON.parse(json), r("TopScorers"));
    }
    static topScorersToJson(value) {
        return JSON.stringify(uncast(value, r("TopScorers")), null, 2);
    }
    static toPlayer(json) {
        return cast(JSON.parse(json), r("Player"));
    }
    static playerToJson(value) {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }
    static toAwayPlayerStats(json) {
        return cast(JSON.parse(json), r("AwayPlayerStats"));
    }
    static awayPlayerStatsToJson(value) {
        return JSON.stringify(uncast(value, r("AwayPlayerStats")), null, 2);
    }
    static toShotmapClass(json) {
        return cast(JSON.parse(json), r("ShotmapClass"));
    }
    static shotmapClassToJson(value) {
        return JSON.stringify(uncast(value, r("ShotmapClass")), null, 2);
    }
    static toShotmapPeriods(json) {
        return cast(JSON.parse(json), r("ShotmapPeriods"));
    }
    static shotmapPeriodsToJson(value) {
        return JSON.stringify(uncast(value, r("ShotmapPeriods")), null, 2);
    }
    static toContentStats(json) {
        return cast(JSON.parse(json), r("ContentStats"));
    }
    static contentStatsToJson(value) {
        return JSON.stringify(uncast(value, r("ContentStats")), null, 2);
    }
    static toStatsPeriods(json) {
        return cast(JSON.parse(json), r("StatsPeriods"));
    }
    static statsPeriodsToJson(value) {
        return JSON.stringify(uncast(value, r("StatsPeriods")), null, 2);
    }
    static toAll(json) {
        return cast(JSON.parse(json), r("All"));
    }
    static allToJson(value) {
        return JSON.stringify(uncast(value, r("All")), null, 2);
    }
    static toAllStat(json) {
        return cast(JSON.parse(json), r("AllStat"));
    }
    static allStatToJson(value) {
        return JSON.stringify(uncast(value, r("AllStat")), null, 2);
    }
    static toStatStatClass(json) {
        return cast(JSON.parse(json), r("StatStatClass"));
    }
    static statStatClassToJson(value) {
        return JSON.stringify(uncast(value, r("StatStatClass")), null, 2);
    }
    static toTeamColors(json) {
        return cast(JSON.parse(json), r("TeamColors"));
    }
    static teamColorsToJson(value) {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
    }
    static toMode(json) {
        return cast(JSON.parse(json), r("Mode"));
    }
    static modeToJson(value) {
        return JSON.stringify(uncast(value, r("Mode")), null, 2);
    }
    static toSuperlive(json) {
        return cast(JSON.parse(json), r("Superlive"));
    }
    static superliveToJson(value) {
        return JSON.stringify(uncast(value, r("Superlive")), null, 2);
    }
    static toTable(json) {
        return cast(JSON.parse(json), r("Table"));
    }
    static tableToJson(value) {
        return JSON.stringify(uncast(value, r("Table")), null, 2);
    }
    static toGeneral(json) {
        return cast(JSON.parse(json), r("General"));
    }
    static generalToJson(value) {
        return JSON.stringify(uncast(value, r("General")), null, 2);
    }
    static toGeneralAwayTeam(json) {
        return cast(JSON.parse(json), r("GeneralAwayTeam"));
    }
    static generalAwayTeamToJson(value) {
        return JSON.stringify(uncast(value, r("GeneralAwayTeam")), null, 2);
    }
    static toHeader(json) {
        return cast(JSON.parse(json), r("Header"));
    }
    static headerToJson(value) {
        return JSON.stringify(uncast(value, r("Header")), null, 2);
    }
    static toTeam(json) {
        return cast(JSON.parse(json), r("Team"));
    }
    static teamToJson(value) {
        return JSON.stringify(uncast(value, r("Team")), null, 2);
    }
    static toSEO(json) {
        return cast(JSON.parse(json), r("SEO"));
    }
    static sEOToJson(value) {
        return JSON.stringify(uncast(value, r("SEO")), null, 2);
    }
    static toBreadcrumbJSONLD(json) {
        return cast(JSON.parse(json), r("BreadcrumbJSONLD"));
    }
    static breadcrumbJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("BreadcrumbJSONLD")), null, 2);
    }
    static toItemListElement(json) {
        return cast(JSON.parse(json), r("ItemListElement"));
    }
    static itemListElementToJson(value) {
        return JSON.stringify(uncast(value, r("ItemListElement")), null, 2);
    }
    static toEventJSONLD(json) {
        return cast(JSON.parse(json), r("EventJSONLD"));
    }
    static eventJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("EventJSONLD")), null, 2);
    }
    static toEventJSONLDAwayTeam(json) {
        return cast(JSON.parse(json), r("EventJSONLDAwayTeam"));
    }
    static eventJSONLDAwayTeamToJson(value) {
        return JSON.stringify(uncast(value, r("EventJSONLDAwayTeam")), null, 2);
    }
    static toLocation(json) {
        return cast(JSON.parse(json), r("Location"));
    }
    static locationToJson(value) {
        return JSON.stringify(uncast(value, r("Location")), null, 2);
    }
    static toOffers(json) {
        return cast(JSON.parse(json), r("Offers"));
    }
    static offersToJson(value) {
        return JSON.stringify(uncast(value, r("Offers")), null, 2);
    }
    static toOrganizer(json) {
        return cast(JSON.parse(json), r("Organizer"));
    }
    static organizerToJson(value) {
        return JSON.stringify(uncast(value, r("Organizer")), null, 2);
    }
    static toFAQJSONLD(json) {
        return cast(JSON.parse(json), r("FAQJSONLD"));
    }
    static fAQJSONLDToJson(value) {
        return JSON.stringify(uncast(value, r("FAQJSONLD")), null, 2);
    }
    static toMainEntity(json) {
        return cast(JSON.parse(json), r("MainEntity"));
    }
    static mainEntityToJson(value) {
        return JSON.stringify(uncast(value, r("MainEntity")), null, 2);
    }
    static toAcceptedAnswer(json) {
        return cast(JSON.parse(json), r("AcceptedAnswer"));
    }
    static acceptedAnswerToJson(value) {
        return JSON.stringify(uncast(value, r("AcceptedAnswer")), null, 2);
    }
}
exports.Convert = Convert;
function invalidValue(typ, val, key, parent = "") {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : "";
    const keyText = key ? ` for key "${key}"` : "";
    throw new type_cast_error_1.CastingError(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}
function prettyTypeName(typ) {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        }
        else {
            return `one of [${typ
                .map((a) => {
                return prettyTypeName(a);
            })
                .join(", ")}]`;
        }
    }
    else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    }
    else {
        return typeof typ;
    }
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => (map[p.json] = { key: p.js, typ: p.typ }));
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => (map[p.js] = { key: p.json, typ: p.typ }));
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = "", parent = "") {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    function transformUnion(typs, val) {
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases.map((a) => {
            return l(a);
        }), val, key, parent);
    }
    function transformArray(typ, val) {
        if (!Array.isArray(val))
            return invalidValue(l("array"), val, key, parent);
        return val.map((el) => transform(el, typ, getProps));
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach((key) => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key)
                ? val[key]
                : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach((key) => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = val[key];
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false)
        return invalidValue(typ, val, key, parent);
    let ref = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers")
            ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")
                ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")
                    ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function l(typ) {
    return { literal: typ };
}
function a(typ) {
    return { arrayItems: typ };
}
function u(...typs) {
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props, additional };
}
function m(additional) {
    return { props: [], additional };
}
function r(name) {
    return { ref: name };
}
const typeMap = {
    MatchDetails: o([
        { json: "general", js: "general", typ: u(undefined, r("General")) },
        { json: "header", js: "header", typ: u(undefined, r("Header")) },
        { json: "nav", js: "nav", typ: u(undefined, a("")) },
        { json: "ongoing", js: "ongoing", typ: u(undefined, true) },
        { json: "hasPendingVAR", js: "hasPendingVAR", typ: u(undefined, true) },
        { json: "content", js: "content", typ: u(undefined, r("Content")) },
        { json: "seo", js: "seo", typ: u(undefined, r("SEO")) },
    ], false),
    Content: o([
        {
            json: "matchFacts",
            js: "matchFacts",
            typ: u(undefined, r("MatchFacts")),
        },
        {
            json: "liveticker",
            js: "liveticker",
            typ: u(undefined, r("Liveticker")),
        },
        { json: "superlive", js: "superlive", typ: u(undefined, r("Superlive")) },
        { json: "buzz", js: "buzz", typ: u(undefined, null) },
        { json: "stats", js: "stats", typ: u(undefined, r("ContentStats")) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, r("ShotmapClass")) },
        { json: "lineup", js: "lineup", typ: u(undefined, r("ContentLineup")) },
        { json: "playoff", js: "playoff", typ: u(undefined, true) },
        { json: "table", js: "table", typ: u(undefined, r("Table")) },
        { json: "h2h", js: "h2h", typ: u(undefined, r("H2H")) },
        { json: "momentum", js: "momentum", typ: u(undefined, r("Momentum")) },
    ], false),
    H2H: o([
        { json: "summary", js: "summary", typ: u(undefined, a(0)) },
        { json: "matches", js: "matches", typ: u(undefined, a(r("Match"))) },
    ], false),
    Match: o([
        { json: "time", js: "time", typ: u(undefined, r("MatchDate")) },
        { json: "matchUrl", js: "matchUrl", typ: u(undefined, "") },
        { json: "league", js: "league", typ: u(undefined, r("League")) },
        { json: "home", js: "home", typ: u(undefined, r("MatchAway")) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "away", js: "away", typ: u(undefined, r("MatchAway")) },
    ], false),
    MatchAway: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    League: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
    ], false),
    Status: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "cancelled", js: "cancelled", typ: u(undefined, true) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
        { json: "scoreStr", js: "scoreStr", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, r("Reason")) },
        {
            json: "whoLostOnPenalties",
            js: "whoLostOnPenalties",
            typ: u(undefined, null),
        },
        {
            json: "whoLostOnAggregated",
            js: "whoLostOnAggregated",
            typ: u(undefined, ""),
        },
    ], false),
    Reason: o([
        { json: "short", js: "short", typ: u(undefined, r("Short")) },
        { json: "shortKey", js: "shortKey", typ: u(undefined, r("ShortKey")) },
        { json: "long", js: "long", typ: u(undefined, r("Long")) },
        { json: "longKey", js: "longKey", typ: u(undefined, r("LongKey")) },
    ], false),
    MatchDate: o([{ json: "utcTime", js: "utcTime", typ: u(undefined, Date) }], false),
    ContentLineup: o([
        {
            json: "lineup",
            js: "lineup",
            typ: u(undefined, a(r("LineupElement"))),
        },
        { json: "bench", js: "bench", typ: u(undefined, r("PurpleBench")) },
        { json: "naPlayers", js: "naPlayers", typ: u(undefined, r("NaPlayers")) },
        { json: "coaches", js: "coaches", typ: u(undefined, r("Coaches")) },
        {
            json: "teamRatings",
            js: "teamRatings",
            typ: u(undefined, r("TeamRatings")),
        },
        { json: "hasFantasy", js: "hasFantasy", typ: u(undefined, true) },
        {
            json: "usingEnetpulseLineup",
            js: "usingEnetpulseLineup",
            typ: u(undefined, true),
        },
        {
            json: "usingOptaLineup",
            js: "usingOptaLineup",
            typ: u(undefined, true),
        },
        { json: "simpleLineup", js: "simpleLineup", typ: u(undefined, true) },
    ], false),
    PurpleBench: o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        {
            json: "benchArr",
            js: "benchArr",
            typ: u(undefined, a(a(r("BenchArrElement")))),
        },
    ], false),
    BenchArrElement: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "positionId", js: "positionId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, r("Position")) },
        {
            json: "localizedPosition",
            js: "localizedPosition",
            typ: u(undefined, null),
        },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shirt", js: "shirt", typ: u(undefined, 0) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "usingOptaId", js: "usingOptaId", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        {
            json: "timeSubbedOn",
            js: "timeSubbedOn",
            typ: u(undefined, u(0, null)),
        },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, 0) },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("BenchArrEvents")) },
        { json: "rating", js: "rating", typ: u(undefined, r("BenchArrRating")) },
        {
            json: "fantasyScore",
            js: "fantasyScore",
            typ: u(undefined, r("FantasyScoreClass")),
        },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "stats", js: "stats", typ: u(undefined, a(r("BenchArrStat"))) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
        { json: "isGoalkeeper", js: "isGoalkeeper", typ: u(undefined, true) },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
    ], false),
    BenchArrEvents: o([
        { json: "sub", js: "sub", typ: u(undefined, r("PurpleSub")) },
        { json: "yc", js: "yc", typ: u(undefined, 0) },
    ], false),
    PurpleSub: o([{ json: "subbedIn", js: "subbedIn", typ: u(undefined, 0) }], false),
    FantasyScoreClass: o([
        { json: "num", js: "num", typ: u(undefined, u(3.14, null)) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, "") },
    ], false),
    NameClass: o([
        { json: "firstName", js: "firstName", typ: u(undefined, "") },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
    ], false),
    BenchArrRating: o([
        { json: "num", js: "num", typ: u(undefined, u(null, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, "") },
        { json: "isTop", js: "isTop", typ: u(undefined, r("IsTop")) },
    ], false),
    IsTop: o([
        { json: "isTopRating", js: "isTopRating", typ: u(undefined, true) },
        {
            json: "isMatchFinished",
            js: "isMatchFinished",
            typ: u(undefined, true),
        },
    ], false),
    Shot: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "eventType", js: "eventType", typ: u(undefined, r("EventType")) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "playerName", js: "playerName", typ: u(undefined, "") },
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
        { json: "min", js: "min", typ: u(undefined, 0) },
        { json: "minAdded", js: "minAdded", typ: u(undefined, u(0, null)) },
        { json: "isBlocked", js: "isBlocked", typ: u(undefined, true) },
        { json: "isOnTarget", js: "isOnTarget", typ: u(undefined, true) },
        { json: "blockedX", js: "blockedX", typ: u(undefined, u(3.14, null)) },
        { json: "blockedY", js: "blockedY", typ: u(undefined, u(3.14, null)) },
        { json: "goalCrossedY", js: "goalCrossedY", typ: u(undefined, 3.14) },
        { json: "goalCrossedZ", js: "goalCrossedZ", typ: u(undefined, 3.14) },
        { json: "expectedGoals", js: "expectedGoals", typ: u(undefined, 3.14) },
        {
            json: "expectedGoalsOnTarget",
            js: "expectedGoalsOnTarget",
            typ: u(undefined, u(3.14, null)),
        },
        { json: "shotType", js: "shotType", typ: u(undefined, r("ShotType")) },
        { json: "situation", js: "situation", typ: u(undefined, r("Situation")) },
        { json: "period", js: "period", typ: u(undefined, r("Period")) },
        { json: "isOwnGoal", js: "isOwnGoal", typ: u(undefined, true) },
        {
            json: "onGoalShot",
            js: "onGoalShot",
            typ: u(undefined, r("OnGoalShot")),
        },
        { json: "isSavedOffLine", js: "isSavedOffLine", typ: u(undefined, true) },
        { json: "teamColor", js: "teamColor", typ: u(undefined, "") },
        { json: "firstName", js: "firstName", typ: u(undefined, "") },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
    ], false),
    OnGoalShot: o([
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 3.14) },
        { json: "zoomRatio", js: "zoomRatio", typ: u(undefined, 3.14) },
    ], false),
    BenchArrStat: o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("PurpleStats")) },
    ], false),
    PurpleStats: o([
        {
            json: "FotMob rating",
            js: "FotMob rating",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Minutes played",
            js: "Minutes played",
            typ: u(undefined, r("Assists")),
        },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        {
            json: "Total shots",
            js: "Total shots",
            typ: u(undefined, r("Assists")),
        },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        {
            json: "Accurate passes",
            js: "Accurate passes",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Chances created",
            js: "Chances created",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Expected goals (xG)",
            js: "Expected goals (xG)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Expected assists (xA)",
            js: "Expected assists (xA)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "xG + xA",
            js: "xG + xA",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Fantasy points",
            js: "Fantasy points",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Shot accuracy",
            js: "Shot accuracy",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Big chances missed",
            js: "Big chances missed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Blocked shots",
            js: "Blocked shots",
            typ: u(undefined, r("Assists")),
        },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        {
            json: "Touches in opposition box",
            js: "Touches in opposition box",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Passes into final third",
            js: "Passes into final third",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Accurate crosses",
            js: "Accurate crosses",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Dispossessed",
            js: "Dispossessed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "xG Non-penalty",
            js: "xG Non-penalty",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Tackles won",
            js: "Tackles won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        {
            json: "Defensive actions",
            js: "Defensive actions",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Ground duels won",
            js: "Ground duels won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        {
            json: "Aerial duels won",
            js: "Aerial duels won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        {
            json: "Fouls committed",
            js: "Fouls committed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Accurate long balls",
            js: "Accurate long balls",
            typ: u(undefined, r("AccurateCrosses")),
        },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        {
            json: "Expected goals on target (xGOT)",
            js: "Expected goals on target (xGOT)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Dribbled past",
            js: "Dribbled past",
            typ: u(undefined, r("Assists")),
        },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        {
            json: "Successful dribbles",
            js: "Successful dribbles",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Headed clearance",
            js: "Headed clearance",
            typ: u(undefined, r("Assists")),
        },
    ], false),
    AccurateCrosses: o([
        { json: "key", js: "key", typ: u(undefined, r("AccurateCrossesKey")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    AerialDuelsWon: o([
        { json: "key", js: "key", typ: u(undefined, r("AccurateCrossesKey")) },
        { json: "value", js: "value", typ: u(undefined, u(0, "")) },
    ], false),
    Assists: o([
        { json: "key", js: "key", typ: u(undefined, r("AssistsKey")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    Shotmap: o([
        { json: "key", js: "key", typ: u(undefined, null) },
        { json: "value", js: "value", typ: u(undefined, true) },
    ], false),
    TeamData: o([
        { json: "home", js: "home", typ: u(undefined, r("TeamDataAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamDataAway")) },
    ], false),
    TeamDataAway: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "color", js: "color", typ: u(undefined, "") },
    ], false),
    Coaches: o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        {
            json: "coachesArr",
            js: "coachesArr",
            typ: u(undefined, a(a(r("Coach")))),
        },
    ], false),
    Coach: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, null) },
        { json: "role", js: "role", typ: u(undefined, "") },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        {
            json: "events",
            js: "events",
            typ: u(undefined, r("CoachesArrEvents")),
        },
    ], false),
    CoachesArrEvents: o([], false),
    LineupElement: o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        {
            json: "bench",
            js: "bench",
            typ: u(undefined, a(r("BenchArrElement"))),
        },
        { json: "coach", js: "coach", typ: u(undefined, a(r("Coach"))) },
        {
            json: "players",
            js: "players",
            typ: u(undefined, a(a(r("PlayerElement")))),
        },
        { json: "lineup", js: "lineup", typ: u(undefined, "") },
        {
            json: "nonAvailablePlayers",
            js: "nonAvailablePlayers",
            typ: u(undefined, a(a(r("NaPlayersArr")))),
        },
        {
            json: "optaLineup",
            js: "optaLineup",
            typ: u(undefined, r("OptaLineup")),
        },
    ], false),
    NaPlayersArr: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        { json: "timeSubbedOff", js: "timeSubbedOff", typ: u(undefined, null) },
        { json: "positionRow", js: "positionRow", typ: u(undefined, null) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        {
            json: "events",
            js: "events",
            typ: u(undefined, r("CoachesArrEvents")),
        },
        { json: "naInfo", js: "naInfo", typ: u(undefined, r("NaInfo")) },
    ], false),
    NaInfo: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "naReason", js: "naReason", typ: u(undefined, "") },
        { json: "naReasonKey", js: "naReasonKey", typ: u(undefined, "") },
        { json: "injury", js: "injury", typ: u(undefined, true) },
        {
            json: "expectedReturn",
            js: "expectedReturn",
            typ: u(undefined, r("ExpectedReturn")),
        },
    ], false),
    ExpectedReturn: o([
        {
            json: "expectedReturnKey",
            js: "expectedReturnKey",
            typ: u(undefined, ""),
        },
        {
            json: "expectedReturnDateParam",
            js: "expectedReturnDateParam",
            typ: u(undefined, u("", null)),
        },
        {
            json: "expectedReturnFallback",
            js: "expectedReturnFallback",
            typ: u(undefined, ""),
        },
    ], false),
    OptaLineup: o([
        {
            json: "bench",
            js: "bench",
            typ: u(undefined, a(r("BenchArrElement"))),
        },
        { json: "coach", js: "coach", typ: u(undefined, a(r("Coach"))) },
        {
            json: "players",
            js: "players",
            typ: u(undefined, a(a(r("PlayerElement")))),
        },
        { json: "lineup", js: "lineup", typ: u(undefined, "") },
        {
            json: "nonAvailablePlayers",
            js: "nonAvailablePlayers",
            typ: u(undefined, a(a(r("NaPlayersArr")))),
        },
    ], false),
    PlayerElement: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "positionId", js: "positionId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, r("Role")) },
        {
            json: "positionStringShort",
            js: "positionStringShort",
            typ: u(undefined, ""),
        },
        {
            json: "localizedPosition",
            js: "localizedPosition",
            typ: u(undefined, r("PositionLabel")),
        },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "shirt", js: "shirt", typ: u(undefined, 0) },
        { json: "usualPosition", js: "usualPosition", typ: u(undefined, 0) },
        { json: "usingOptaId", js: "usingOptaId", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "timeSubbedOn", js: "timeSubbedOn", typ: u(undefined, null) },
        {
            json: "timeSubbedOff",
            js: "timeSubbedOff",
            typ: u(undefined, u(0, null)),
        },
        { json: "positionRow", js: "positionRow", typ: u(undefined, 0) },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, r("PlayerEvents")) },
        { json: "rating", js: "rating", typ: u(undefined, r("BenchArrRating")) },
        {
            json: "fantasyScore",
            js: "fantasyScore",
            typ: u(undefined, r("FantasyScore")),
        },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "stats", js: "stats", typ: u(undefined, a(r("PlayerStat"))) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
        { json: "isGoalkeeper", js: "isGoalkeeper", typ: u(undefined, true) },
    ], false),
    PlayerEvents: o([
        { json: "sub", js: "sub", typ: u(undefined, r("FluffySub")) },
        { json: "yc", js: "yc", typ: u(undefined, 0) },
        { json: "ycrc", js: "ycrc", typ: u(undefined, 0) },
    ], false),
    FluffySub: o([{ json: "subbedOut", js: "subbedOut", typ: u(undefined, 0) }], false),
    FantasyScore: o([
        { json: "num", js: "num", typ: u(undefined, u(0, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, "") },
    ], false),
    PositionLabel: o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    PlayerStat: o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("FluffyStats")) },
    ], false),
    FluffyStats: o([
        {
            json: "FotMob rating",
            js: "FotMob rating",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Minutes played",
            js: "Minutes played",
            typ: u(undefined, r("Assists")),
        },
        { json: "Saves", js: "Saves", typ: u(undefined, r("AccurateCrosses")) },
        {
            json: "Goals conceded",
            js: "Goals conceded",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "xGOT faced",
            js: "xGOT faced",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Goals prevented",
            js: "Goals prevented",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Accurate passes",
            js: "Accurate passes",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Accurate long balls",
            js: "Accurate long balls",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Diving save",
            js: "Diving save",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Saves inside box",
            js: "Saves inside box",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Acted as sweeper",
            js: "Acted as sweeper",
            typ: u(undefined, r("Assists")),
        },
        { json: "Punches", js: "Punches", typ: u(undefined, r("Assists")) },
        { json: "Throws", js: "Throws", typ: u(undefined, r("Assists")) },
        { json: "High claim", js: "High claim", typ: u(undefined, r("Assists")) },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        {
            json: "Fantasy points",
            js: "Fantasy points",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        {
            json: "Total shots",
            js: "Total shots",
            typ: u(undefined, r("Assists")),
        },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        {
            json: "Chances created",
            js: "Chances created",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Expected goals (xG)",
            js: "Expected goals (xG)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Expected assists (xA)",
            js: "Expected assists (xA)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "xG + xA",
            js: "xG + xA",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Shot accuracy",
            js: "Shot accuracy",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Blocked shots",
            js: "Blocked shots",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Touches in opposition box",
            js: "Touches in opposition box",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Successful dribbles",
            js: "Successful dribbles",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Passes into final third",
            js: "Passes into final third",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Accurate crosses",
            js: "Accurate crosses",
            typ: u(undefined, r("AccurateCrosses")),
        },
        { json: "Corners", js: "Corners", typ: u(undefined, r("Assists")) },
        {
            json: "Dispossessed",
            js: "Dispossessed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "xG Non-penalty",
            js: "xG Non-penalty",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Tackles won",
            js: "Tackles won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        {
            json: "Last man tackle",
            js: "Last man tackle",
            typ: u(undefined, r("Assists")),
        },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        {
            json: "Interceptions",
            js: "Interceptions",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Defensive actions",
            js: "Defensive actions",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Dribbled past",
            js: "Dribbled past",
            typ: u(undefined, r("Assists")),
        },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        {
            json: "Ground duels won",
            js: "Ground duels won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        {
            json: "Aerial duels won",
            js: "Aerial duels won",
            typ: u(undefined, r("AerialDuelsWon")),
        },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        {
            json: "Fouls committed",
            js: "Fouls committed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Expected goals on target (xGOT)",
            js: "Expected goals on target (xGOT)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Headed clearance",
            js: "Headed clearance",
            typ: u(undefined, r("Assists")),
        },
        { json: "Blocks", js: "Blocks", typ: u(undefined, r("Assists")) },
        { json: "Offsides", js: "Offsides", typ: u(undefined, r("Assists")) },
        {
            json: "Big chances missed",
            js: "Big chances missed",
            typ: u(undefined, r("Assists")),
        },
    ], false),
    NaPlayers: o([
        { json: "sides", js: "sides", typ: u(undefined, a(r("Side"))) },
        {
            json: "naPlayersArr",
            js: "naPlayersArr",
            typ: u(undefined, a(a(r("NaPlayersArr")))),
        },
    ], false),
    TeamRatings: o([
        { json: "home", js: "home", typ: u(undefined, r("FantasyScoreClass")) },
        { json: "away", js: "away", typ: u(undefined, r("FantasyScoreClass")) },
    ], false),
    Liveticker: o([
        { json: "langs", js: "langs", typ: u(undefined, "") },
        { json: "teams", js: "teams", typ: u(undefined, a("")) },
    ], false),
    MatchFacts: o([
        { json: "matchId", js: "matchId", typ: u(undefined, 0) },
        {
            json: "highlights",
            js: "highlights",
            typ: u(undefined, r("Highlights")),
        },
        {
            json: "playerOfTheMatch",
            js: "playerOfTheMatch",
            typ: u(undefined, r("PlayerOfTheMatch")),
        },
        {
            json: "matchesInRound",
            js: "matchesInRound",
            typ: u(undefined, a(r("MatchesInRound"))),
        },
        {
            json: "events",
            js: "events",
            typ: u(undefined, r("MatchFactsEvents")),
        },
        { json: "infoBox", js: "infoBox", typ: u(undefined, r("InfoBox")) },
        {
            json: "teamForm",
            js: "teamForm",
            typ: u(undefined, a(a(r("TeamForm")))),
        },
        { json: "poll", js: "poll", typ: u(undefined, r("Poll")) },
        {
            json: "topPlayers",
            js: "topPlayers",
            typ: u(undefined, r("TopPlayers")),
        },
        { json: "insights", js: "insights", typ: u(undefined, a(r("Insight"))) },
        {
            json: "topScorers",
            js: "topScorers",
            typ: u(undefined, r("TopScorers")),
        },
        { json: "momentum", js: "momentum", typ: u(undefined, r("Momentum")) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
        { json: "QAData", js: "QAData", typ: u(undefined, a(r("QADatum"))) },
    ], false),
    QADatum: o([
        { json: "question", js: "question", typ: u(undefined, "") },
        { json: "answer", js: "answer", typ: u(undefined, "") },
    ], false),
    MatchFactsEvents: o([
        { json: "ongoing", js: "ongoing", typ: u(undefined, true) },
        { json: "events", js: "events", typ: u(undefined, a(r("Event"))) },
        {
            json: "eventTypes",
            js: "eventTypes",
            typ: u(undefined, a(u(null, ""))),
        },
        {
            json: "penaltyShootoutEvents",
            js: "penaltyShootoutEvents",
            typ: u(undefined, null),
        },
    ], false),
    Event: o([
        { json: "reactKey", js: "reactKey", typ: u(undefined, "") },
        { json: "timeStr", js: "timeStr", typ: u(undefined, u(0, "")) },
        { json: "type", js: "type", typ: u(undefined, r("EventTypeEnum")) },
        { json: "time", js: "time", typ: u(undefined, 0) },
        {
            json: "overloadTime",
            js: "overloadTime",
            typ: u(undefined, u(0, null)),
        },
        { json: "eventId", js: "eventId", typ: u(undefined, 0) },
        { json: "player", js: "player", typ: u(undefined, r("EventPlayer")) },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
        {
            json: "overloadTimeStr",
            js: "overloadTimeStr",
            typ: u(undefined, u(true, "")),
        },
        { json: "isHome", js: "isHome", typ: u(undefined, true) },
        { json: "nameStr", js: "nameStr", typ: u(undefined, "") },
        { json: "card", js: "card", typ: u(undefined, "") },
        {
            json: "cardDescription",
            js: "cardDescription",
            typ: u(undefined, null),
        },
        { json: "minutesAddedStr", js: "minutesAddedStr", typ: u(undefined, "") },
        { json: "minutesAddedKey", js: "minutesAddedKey", typ: u(undefined, "") },
        {
            json: "minutesAddedInput",
            js: "minutesAddedInput",
            typ: u(undefined, 0),
        },
        { json: "halfStrShort", js: "halfStrShort", typ: u(undefined, "") },
        { json: "halfStrKey", js: "halfStrKey", typ: u(undefined, "") },
        {
            json: "injuredPlayerOut",
            js: "injuredPlayerOut",
            typ: u(undefined, true),
        },
        { json: "swap", js: "swap", typ: u(undefined, a(r("Swap"))) },
    ], false),
    EventPlayer: o([
        { json: "id", js: "id", typ: u(undefined, u(0, null)) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
    ], false),
    Swap: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "profileUrl", js: "profileUrl", typ: u(undefined, "") },
    ], false),
    Highlights: o([
        { json: "image", js: "image", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "source", js: "source", typ: u(undefined, "") },
    ], false),
    InfoBox: o([
        {
            json: "Match Date",
            js: "Match Date",
            typ: u(undefined, r("MatchDate")),
        },
        {
            json: "Tournament",
            js: "Tournament",
            typ: u(undefined, r("Tournament")),
        },
        { json: "Stadium", js: "Stadium", typ: u(undefined, r("Stadium")) },
        { json: "Referee", js: "Referee", typ: u(undefined, r("Referee")) },
        { json: "Attendance", js: "Attendance", typ: u(undefined, 0) },
    ], false),
    Referee: o([
        { json: "imgUrl", js: "imgUrl", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
    ], false),
    Stadium: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "city", js: "city", typ: u(undefined, "") },
        { json: "country", js: "country", typ: u(undefined, "") },
        { json: "lat", js: "lat", typ: u(undefined, 3.14) },
        { json: "long", js: "long", typ: u(undefined, 3.14) },
    ], false),
    Tournament: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "link", js: "link", typ: u(undefined, "") },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "roundName", js: "roundName", typ: u(undefined, "") },
        { json: "round", js: "round", typ: u(undefined, "") },
        { json: "selectedSeason", js: "selectedSeason", typ: u(undefined, "") },
        {
            json: "isCurrentSeason",
            js: "isCurrentSeason",
            typ: u(undefined, true),
        },
    ], false),
    Insight: o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "playerId", js: "playerId", typ: u(undefined, u(0, null)) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "priority", js: "priority", typ: u(undefined, 0) },
        { json: "defaultText", js: "defaultText", typ: u(undefined, "") },
        { json: "localizedTextId", js: "localizedTextId", typ: u(undefined, "") },
        {
            json: "statValues",
            js: "statValues",
            typ: u(undefined, a(r("StatValue"))),
        },
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "color", js: "color", typ: u(undefined, "") },
    ], false),
    StatValue: o([
        { json: "value", js: "value", typ: u(undefined, 3.14) },
        { json: "name", js: "name", typ: u(undefined, u(null, "")) },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], false),
    MatchesInRound: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("MatchesInRoundAway")) },
        { json: "away", js: "away", typ: u(undefined, r("MatchesInRoundAway")) },
        { json: "matchDate", js: "matchDate", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "roundId", js: "roundId", typ: u(undefined, 0) },
        { json: "roundName", js: "roundName", typ: u(undefined, "") },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
    ], false),
    MatchesInRoundAway: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "shortName", js: "shortName", typ: u(undefined, "") },
    ], false),
    Momentum: o([
        { json: "main", js: "main", typ: u(undefined, r("Main")) },
        {
            json: "alternateModels",
            js: "alternateModels",
            typ: u(undefined, a("any")),
        },
    ], false),
    Main: o([
        { json: "data", js: "data", typ: u(undefined, a(r("Datum"))) },
        { json: "debugTitle", js: "debugTitle", typ: u(undefined, "") },
    ], false),
    Datum: o([
        { json: "minute", js: "minute", typ: u(undefined, 3.14) },
        { json: "value", js: "value", typ: u(undefined, 0) },
    ], false),
    PlayerOfTheMatch: o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        { json: "teamName", js: "teamName", typ: u(undefined, "") },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        {
            json: "rating",
            js: "rating",
            typ: u(undefined, r("PlayerOfTheMatchRating")),
        },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "shotmap", js: "shotmap", typ: u(undefined, a(r("Shot"))) },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        {
            json: "stats",
            js: "stats",
            typ: u(undefined, a(r("PlayerOfTheMatchStat"))),
        },
        { json: "role", js: "role", typ: u(undefined, r("Role")) },
        { json: "teamData", js: "teamData", typ: u(undefined, r("TeamData")) },
    ], false),
    PlayerOfTheMatchRating: o([
        { json: "num", js: "num", typ: u(undefined, "") },
        { json: "isTop", js: "isTop", typ: u(undefined, r("IsTop")) },
    ], false),
    PlayerOfTheMatchStat: o([
        { json: "title", js: "title", typ: u(undefined, r("Title")) },
        { json: "key", js: "key", typ: u(undefined, r("StatKey")) },
        { json: "stats", js: "stats", typ: u(undefined, r("TentacledStats")) },
    ], false),
    TentacledStats: o([
        {
            json: "FotMob rating",
            js: "FotMob rating",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Minutes played",
            js: "Minutes played",
            typ: u(undefined, r("Assists")),
        },
        { json: "Goals", js: "Goals", typ: u(undefined, r("Assists")) },
        { json: "Assists", js: "Assists", typ: u(undefined, r("Assists")) },
        {
            json: "Total shots",
            js: "Total shots",
            typ: u(undefined, r("Assists")),
        },
        { json: "Shotmap", js: "Shotmap", typ: u(undefined, r("Shotmap")) },
        {
            json: "Accurate passes",
            js: "Accurate passes",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Chances created",
            js: "Chances created",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Expected goals (xG)",
            js: "Expected goals (xG)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Expected assists (xA)",
            js: "Expected assists (xA)",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "xG + xA",
            js: "xG + xA",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Fantasy points",
            js: "Fantasy points",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Shot accuracy",
            js: "Shot accuracy",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Blocked shots",
            js: "Blocked shots",
            typ: u(undefined, r("Assists")),
        },
        { json: "Touches", js: "Touches", typ: u(undefined, r("Assists")) },
        {
            json: "Touches in opposition box",
            js: "Touches in opposition box",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Successful dribbles",
            js: "Successful dribbles",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Passes into final third",
            js: "Passes into final third",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Accurate crosses",
            js: "Accurate crosses",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Accurate long balls",
            js: "Accurate long balls",
            typ: u(undefined, r("AccurateCrosses")),
        },
        { json: "Corners", js: "Corners", typ: u(undefined, r("Assists")) },
        {
            json: "Dispossessed",
            js: "Dispossessed",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "xG Non-penalty",
            js: "xG Non-penalty",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Tackles won",
            js: "Tackles won",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Last man tackle",
            js: "Last man tackle",
            typ: u(undefined, r("Assists")),
        },
        { json: "Clearances", js: "Clearances", typ: u(undefined, r("Assists")) },
        {
            json: "Interceptions",
            js: "Interceptions",
            typ: u(undefined, r("Assists")),
        },
        {
            json: "Defensive actions",
            js: "Defensive actions",
            typ: u(undefined, r("Assists")),
        },
        { json: "Recoveries", js: "Recoveries", typ: u(undefined, r("Assists")) },
        {
            json: "Dribbled past",
            js: "Dribbled past",
            typ: u(undefined, r("Assists")),
        },
        { json: "Duels won", js: "Duels won", typ: u(undefined, r("Assists")) },
        { json: "Duels lost", js: "Duels lost", typ: u(undefined, r("Assists")) },
        {
            json: "Ground duels won",
            js: "Ground duels won",
            typ: u(undefined, r("AccurateCrosses")),
        },
        {
            json: "Aerial duels won",
            js: "Aerial duels won",
            typ: u(undefined, r("AccurateCrosses")),
        },
        { json: "Was fouled", js: "Was fouled", typ: u(undefined, r("Assists")) },
        {
            json: "Fouls committed",
            js: "Fouls committed",
            typ: u(undefined, r("Assists")),
        },
    ], false),
    Poll: o([
        { json: "oddspoll", js: "oddspoll", typ: u(undefined, r("Oddspoll")) },
        {
            json: "voteResult",
            js: "voteResult",
            typ: u(undefined, r("VoteResult")),
        },
        { json: "renderToTop", js: "renderToTop", typ: u(undefined, true) },
    ], false),
    Oddspoll: o([
        { json: "PollName", js: "PollName", typ: u(undefined, "") },
        { json: "MatchId", js: "MatchId", typ: u(undefined, 0) },
        { json: "HomeTeamId", js: "HomeTeamId", typ: u(undefined, 0) },
        { json: "AwayTeamId", js: "AwayTeamId", typ: u(undefined, 0) },
        { json: "HomeTeam", js: "HomeTeam", typ: u(undefined, "") },
        { json: "AwayTeam", js: "AwayTeam", typ: u(undefined, "") },
        { json: "Facts", js: "Facts", typ: u(undefined, a(r("Fact"))) },
    ], false),
    Fact: o([
        { json: "OddsType", js: "OddsType", typ: u(undefined, "") },
        { json: "DefaultLabel", js: "DefaultLabel", typ: u(undefined, "") },
        { json: "TextLabelId", js: "TextLabelId", typ: u(undefined, "") },
        { json: "DefaultTemplate", js: "DefaultTemplate", typ: u(undefined, "") },
        { json: "TextTemplateId", js: "TextTemplateId", typ: u(undefined, "") },
        { json: "StatValues", js: "StatValues", typ: u(undefined, a("")) },
        { json: "DefaultLabels", js: "DefaultLabels", typ: u(undefined, a("")) },
        {
            json: "LabelTemplates",
            js: "LabelTemplates",
            typ: u(undefined, a("")),
        },
        { json: "Icon", js: "Icon", typ: u(undefined, "") },
        { json: "defaultText", js: "defaultText", typ: u(undefined, "") },
    ], false),
    VoteResult: o([
        { json: "PollName", js: "PollName", typ: u(undefined, "") },
        { json: "Votes", js: "Votes", typ: u(undefined, a(r("Vote"))) },
    ], false),
    Vote: o([
        { json: "Name", js: "Name", typ: u(undefined, "") },
        { json: "Votes", js: "Votes", typ: u(undefined, a(0)) },
    ], false),
    TeamForm: o([
        { json: "result", js: "result", typ: u(undefined, 0) },
        {
            json: "resultString",
            js: "resultString",
            typ: u(undefined, r("ResultString")),
        },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "linkToMatch", js: "linkToMatch", typ: u(undefined, "") },
        { json: "date", js: "date", typ: u(undefined, r("MatchDate")) },
        { json: "teamPageUrl", js: "teamPageUrl", typ: u(undefined, "") },
        {
            json: "tooltipText",
            js: "tooltipText",
            typ: u(undefined, r("TooltipText")),
        },
        { json: "score", js: "score", typ: u(undefined, "") },
        { json: "home", js: "home", typ: u(undefined, r("TeamFormAway")) },
        { json: "away", js: "away", typ: u(undefined, r("TeamFormAway")) },
    ], false),
    TeamFormAway: o([
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "isOurTeam", js: "isOurTeam", typ: u(undefined, true) },
    ], false),
    TooltipText: o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "homeTeam", js: "homeTeam", typ: u(undefined, "") },
        { json: "homeTeamId", js: "homeTeamId", typ: u(undefined, 0) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, "") },
        { json: "awayTeam", js: "awayTeam", typ: u(undefined, "") },
        { json: "awayTeamId", js: "awayTeamId", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, "") },
    ], false),
    TopPlayers: o([
        {
            json: "homeTopPlayers",
            js: "homeTopPlayers",
            typ: u(undefined, a(r("TopPlayer"))),
        },
        {
            json: "awayTopPlayers",
            js: "awayTopPlayers",
            typ: u(undefined, a(r("TopPlayer"))),
        },
    ], false),
    TopPlayer: o([
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, r("NameClass")) },
        {
            json: "playerRatingRounded",
            js: "playerRatingRounded",
            typ: u(undefined, ""),
        },
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "manOfTheMatch", js: "manOfTheMatch", typ: u(undefined, true) },
        { json: "teamId", js: "teamId", typ: u(undefined, "") },
        {
            json: "positionLabel",
            js: "positionLabel",
            typ: u(undefined, r("PositionLabel")),
        },
    ], false),
    TopScorers: o([
        { json: "section", js: "section", typ: u(undefined, "") },
        { json: "sectionId", js: "sectionId", typ: u(undefined, 0) },
        { json: "homePlayer", js: "homePlayer", typ: u(undefined, r("Player")) },
        { json: "awayPlayer", js: "awayPlayer", typ: u(undefined, r("Player")) },
        { json: "statsOrder", js: "statsOrder", typ: u(undefined, a("")) },
    ], false),
    Player: o([
        { json: "playerId", js: "playerId", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, 0) },
        {
            json: "matchesWithRating",
            js: "matchesWithRating",
            typ: u(undefined, 0),
        },
        { json: "lastName", js: "lastName", typ: u(undefined, "") },
        { json: "fullName", js: "fullName", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, r("AwayPlayerStats")) },
    ], false),
    AwayPlayerStats: o([
        { json: "goals", js: "goals", typ: u(undefined, 0) },
        { json: "goalAssist", js: "goalAssist", typ: u(undefined, 0) },
        {
            json: "ontargetScoringAtt",
            js: "ontargetScoringAtt",
            typ: u(undefined, 3.14),
        },
        { json: "motm", js: "motm", typ: u(undefined, 0) },
        { json: "gamesPlayed", js: "gamesPlayed", typ: u(undefined, 0) },
        { json: "minsPlayed", js: "minsPlayed", typ: u(undefined, 0) },
        { json: "minsPlayedGoal", js: "minsPlayedGoal", typ: u(undefined, 0) },
        { json: "expectedGoals", js: "expectedGoals", typ: u(undefined, 3.14) },
        { json: "playerRating", js: "playerRating", typ: u(undefined, 3.14) },
    ], false),
    ShotmapClass: o([
        { json: "shots", js: "shots", typ: u(undefined, a(r("Shot"))) },
        {
            json: "Periods",
            js: "Periods",
            typ: u(undefined, r("ShotmapPeriods")),
        },
    ], false),
    ShotmapPeriods: o([
        { json: "All", js: "All", typ: u(undefined, a(r("Shot"))) },
        { json: "FirstHalf", js: "FirstHalf", typ: u(undefined, a(r("Shot"))) },
        { json: "SecondHalf", js: "SecondHalf", typ: u(undefined, a(r("Shot"))) },
    ], false),
    ContentStats: o([{ json: "Periods", js: "Periods", typ: u(undefined, r("StatsPeriods")) }], false),
    StatsPeriods: o([
        { json: "All", js: "All", typ: u(undefined, r("All")) },
        { json: "FirstHalf", js: "FirstHalf", typ: u(undefined, r("All")) },
        { json: "SecondHalf", js: "SecondHalf", typ: u(undefined, r("All")) },
    ], false),
    All: o([
        { json: "stats", js: "stats", typ: u(undefined, a(r("AllStat"))) },
        {
            json: "teamColors",
            js: "teamColors",
            typ: u(undefined, r("TeamColors")),
        },
    ], false),
    AllStat: o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, a(r("StatStatClass"))) },
    ], false),
    StatStatClass: o([
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "stats", js: "stats", typ: u(undefined, a(u(0, null, ""))) },
        { json: "type", js: "type", typ: u(undefined, r("StatType")) },
        { json: "highlighted", js: "highlighted", typ: u(undefined, r("Side")) },
    ], false),
    TeamColors: o([
        { json: "darkMode", js: "darkMode", typ: u(undefined, r("Mode")) },
        { json: "lightMode", js: "lightMode", typ: u(undefined, r("Mode")) },
        {
            json: "fontDarkMode",
            js: "fontDarkMode",
            typ: u(undefined, r("Mode")),
        },
        {
            json: "fontLightMode",
            js: "fontLightMode",
            typ: u(undefined, r("Mode")),
        },
    ], false),
    Mode: o([
        { json: "home", js: "home", typ: u(undefined, "") },
        { json: "away", js: "away", typ: u(undefined, "") },
    ], false),
    Superlive: o([
        { json: "superLiveUrl", js: "superLiveUrl", typ: u(undefined, "") },
        { json: "showSuperLive", js: "showSuperLive", typ: u(undefined, true) },
    ], false),
    Table: o([
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "teams", js: "teams", typ: u(undefined, a(0)) },
        {
            json: "tournamentNameForUrl",
            js: "tournamentNameForUrl",
            typ: u(undefined, ""),
        },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        {
            json: "parentLeagueName",
            js: "parentLeagueName",
            typ: u(undefined, ""),
        },
        {
            json: "isCurrentSeason",
            js: "isCurrentSeason",
            typ: u(undefined, true),
        },
        {
            json: "parentLeagueSeason",
            js: "parentLeagueSeason",
            typ: u(undefined, ""),
        },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ], false),
    General: o([
        { json: "matchId", js: "matchId", typ: u(undefined, "") },
        { json: "matchName", js: "matchName", typ: u(undefined, "") },
        { json: "matchRound", js: "matchRound", typ: u(undefined, "") },
        {
            json: "teamColors",
            js: "teamColors",
            typ: u(undefined, r("TeamColors")),
        },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "leagueRoundName", js: "leagueRoundName", typ: u(undefined, "") },
        { json: "parentLeagueId", js: "parentLeagueId", typ: u(undefined, 0) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
        {
            json: "parentLeagueName",
            js: "parentLeagueName",
            typ: u(undefined, ""),
        },
        {
            json: "parentLeagueSeason",
            js: "parentLeagueSeason",
            typ: u(undefined, ""),
        },
        {
            json: "parentLeagueTopScorerLink",
            js: "parentLeagueTopScorerLink",
            typ: u(undefined, ""),
        },
        {
            json: "parentLeagueTournamentId",
            js: "parentLeagueTournamentId",
            typ: u(undefined, 0),
        },
        {
            json: "homeTeam",
            js: "homeTeam",
            typ: u(undefined, r("GeneralAwayTeam")),
        },
        {
            json: "awayTeam",
            js: "awayTeam",
            typ: u(undefined, r("GeneralAwayTeam")),
        },
        { json: "coverageLevel", js: "coverageLevel", typ: u(undefined, "") },
        { json: "matchTimeUTC", js: "matchTimeUTC", typ: u(undefined, "") },
        {
            json: "matchTimeUTCDate",
            js: "matchTimeUTCDate",
            typ: u(undefined, Date),
        },
        { json: "started", js: "started", typ: u(undefined, true) },
        { json: "finished", js: "finished", typ: u(undefined, true) },
    ], false),
    GeneralAwayTeam: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
    ], false),
    Header: o([
        { json: "teams", js: "teams", typ: u(undefined, a(r("Team"))) },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
        { json: "events", js: "events", typ: u(undefined, null) },
    ], false),
    Team: o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "score", js: "score", typ: u(undefined, 0) },
        { json: "imageUrl", js: "imageUrl", typ: u(undefined, "") },
        { json: "pageUrl", js: "pageUrl", typ: u(undefined, "") },
        { json: "fifaRank", js: "fifaRank", typ: u(undefined, null) },
    ], false),
    SEO: o([
        { json: "path", js: "path", typ: u(undefined, "") },
        {
            json: "eventJSONLD",
            js: "eventJSONLD",
            typ: u(undefined, r("EventJSONLD")),
        },
        {
            json: "breadcrumbJSONLD",
            js: "breadcrumbJSONLD",
            typ: u(undefined, a(r("BreadcrumbJSONLD"))),
        },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
    ], false),
    BreadcrumbJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        {
            json: "itemListElement",
            js: "itemListElement",
            typ: u(undefined, a(r("ItemListElement"))),
        },
    ], false),
    ItemListElement: o([
        { json: "@type", js: "@type", typ: u(undefined, r("Type")) },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    EventJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "sport", js: "sport", typ: u(undefined, "") },
        {
            json: "homeTeam",
            js: "homeTeam",
            typ: u(undefined, r("EventJSONLDAwayTeam")),
        },
        {
            json: "awayTeam",
            js: "awayTeam",
            typ: u(undefined, r("EventJSONLDAwayTeam")),
        },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "startDate", js: "startDate", typ: u(undefined, Date) },
        { json: "endDate", js: "endDate", typ: u(undefined, Date) },
        { json: "eventStatus", js: "eventStatus", typ: u(undefined, "") },
        {
            json: "eventAttendanceMode",
            js: "eventAttendanceMode",
            typ: u(undefined, ""),
        },
        { json: "location", js: "location", typ: u(undefined, r("Location")) },
        { json: "image", js: "image", typ: u(undefined, a("")) },
        { json: "organizer", js: "organizer", typ: u(undefined, r("Organizer")) },
        { json: "offers", js: "offers", typ: u(undefined, r("Offers")) },
        {
            json: "performer",
            js: "performer",
            typ: u(undefined, a(r("Organizer"))),
        },
    ], false),
    EventJSONLDAwayTeam: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "sport", js: "sport", typ: u(undefined, "") },
        { json: "logo", js: "logo", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, null) },
        { json: "memberOf", js: "memberOf", typ: u(undefined, null) },
    ], false),
    Location: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], false),
    Offers: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "availability", js: "availability", typ: u(undefined, "") },
        { json: "price", js: "price", typ: u(undefined, "") },
        { json: "priceCurrency", js: "priceCurrency", typ: u(undefined, "") },
        { json: "validFrom", js: "validFrom", typ: u(undefined, Date) },
    ], false),
    Organizer: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "logo", js: "logo", typ: u(undefined, "") },
    ], false),
    FAQJSONLD: o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        {
            json: "mainEntity",
            js: "mainEntity",
            typ: u(undefined, a(r("MainEntity"))),
        },
    ], false),
    MainEntity: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        {
            json: "acceptedAnswer",
            js: "acceptedAnswer",
            typ: u(undefined, r("AcceptedAnswer")),
        },
    ], false),
    AcceptedAnswer: o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    Long: ["Abandoned", "Full-Time"],
    LongKey: ["aborted", "finished"],
    Short: ["Ab", "FT"],
    ShortKey: ["aborted_short", "fulltime_short"],
    Position: ["Substitute"],
    Role: ["Attacker", "Defender", "Keeper", "Midfielder"],
    EventType: ["AttemptSaved", "Miss"],
    Period: ["FirstHalf", "SecondHalf"],
    ShotType: ["Header", "LeftFoot", "RightFoot"],
    Situation: ["FastBreak", "FromCorner", "RegularPlay", "SetPiece"],
    StatKey: ["attack", "defense", "duels", "top_stats"],
    AccurateCrossesKey: [
        "accurate_crosses",
        "accurate_passes",
        "aerials_won",
        "dribbles_succeeded",
        "expected_assists",
        "expected_goals",
        "expected_goals_non_penalty",
        "expected_goals_on_target_faced",
        "expected_goals_on_target_variant",
        "fantasy_points",
        "goals_prevented",
        "ground_duels_won",
        "long_balls_accurate",
        "saves",
        "shot_accuracy",
        "tackles_succeeded",
        "xg_and_xa",
    ],
    AssistsKey: [
        "assists",
        "big_chance_missed_title",
        "blocked_shots",
        "chances_created",
        "clearances",
        "corners",
        "defensive_actions",
        "dispossessed",
        "dribbled_past",
        "duel_lost",
        "duel_won",
        "fantasy_points",
        "fouls",
        "goals",
        "goals_conceded",
        "headed_clearance",
        "interceptions",
        "keeper_diving_save",
        "keeper_high_claim",
        "keeper_sweeper",
        "last_man_tackle",
        "minutes_played",
        "Offsides",
        "passes_into_final_third",
        "player_throws",
        "punches",
        "rating_title",
        "recoveries",
        "saves_inside_box",
        "shot_blocks",
        "total_shots",
        "touches",
        "touches_opp_box",
        "was_fouled",
    ],
    Title: ["Attack", "Defense", "Duels", "Top stats"],
    Side: ["away", "equal", "home"],
    ShortName: ["Mac Allister", "Thiago"],
    EventTypeEnum: ["AddedTime", "Card", "Half", "Substitution"],
    ResultString: ["D", "L", "W"],
    StatType: ["graph", "text", "title"],
    Type: ["ListItem"],
};
