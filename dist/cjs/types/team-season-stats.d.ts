export interface TeamSeasonStats {
    players?: Player[];
    teams?: Team[];
    tournamentSeasons?: TournamentSeason[];
    currentTournament?: string;
    tournamentStats?: TournamentStats;
    tournamentId?: string;
}
export interface Player {
    header?: string;
    participant?: PlayerParticipant;
    fetchAllUrl?: string;
    topThree?: PlayerParticipant[];
    order?: number;
    name?: string;
    localizedTitleId?: string;
}
export interface PlayerParticipant {
    id?: number;
    name?: string;
    rank?: number;
    goals?: null;
    assists?: null;
    rating?: null;
    positionId?: null;
    ccode?: null;
    cname?: null;
    teamId?: number;
    teamName?: TeamName;
    showRole?: null;
    showCountryFlag?: null;
    showTeamFlag?: boolean;
    excludeFromRanking?: boolean;
    value?: number | string;
    teamColors?: TeamColors;
}
export interface TeamColors {
    darkMode?: string;
    lightMode?: string;
    fontDarkMode?: FontMode;
    fontLightMode?: FontMode;
}
export type FontMode = "rgba(255, 255, 255, 1.0)" | "rgba(29, 29, 29, 1.0)";
export type TeamName = "Everton";
export interface Team {
    header?: string;
    localizedTitleId?: string;
    participant?: TeamParticipant;
    fetchAllUrl?: string;
    topThree?: TeamParticipant[];
    order?: number;
    stat?: string;
}
export interface TeamParticipant {
    id?: number;
    name?: string;
    rank?: number;
    goals?: null;
    assists?: null;
    rating?: null;
    positionId?: null;
    ccode?: null;
    cname?: null;
    teamId?: number;
    teamName?: null;
    showRole?: null;
    showCountryFlag?: null;
    showTeamFlag?: boolean;
    excludeFromRanking?: boolean;
    value?: number;
    teamColors?: TeamColors;
}
export interface TournamentSeason {
    name?: string;
    season?: string;
    leagueName?: LeagueName;
    tournamentId?: string;
    parentLeagueId?: string;
}
export type LeagueName = "Premier League" | "Europa League" | "FA Cup" | "EFL Cup";
export interface TournamentStats {
    Table?: Table;
    Goals?: Goals;
    Rating?: number;
    AverageStageRating?: number;
    TeamId?: number;
    StageId?: number;
    RelegationInfo?: RelegationInfo;
    CleanSheets?: number;
    YellowCards?: number;
    RedCards?: number;
    TeamName?: TeamName;
    GoalsAgainst?: Goals;
    TopStatRanking?: TopStatRanking[];
    TopStats?: TopStat[];
    StatCardSections?: StatCardSection[];
}
export interface Goals {
    Total?: number;
    OpenPlayGoals?: number;
    PenaltyGoals?: number;
    FreeKickGoals?: number;
    AccruedOwnGoals?: number;
    FastBreakGoals?: number;
    SetPiece?: number;
    ExpectedGoals?: number;
    ExpectedGoalsConceded?: number;
}
export interface RelegationInfo {
    Promotion?: number;
    Relegation?: number;
    ChampionsLeague?: string;
    UefaCup?: string;
    StageId?: number;
    Rules?: Rule[];
}
export interface Rule {
    Id?: number;
    Description?: string;
    Color?: string;
    LeagacyId?: string;
    Value?: string;
    Name?: string;
    TranslationKey?: string;
    SortOrder?: number;
}
export interface StatCardSection {
    Title?: string;
    LocalizedTitleId?: string;
    LocalizedCategoryId?: LocalizedCategoryID;
    Stats?: string[];
}
export type LocalizedCategoryID = "top_stats" | "attack" | "defense" | "discipline" | "goalkeeping";
export interface Table {
    Lines?: Line[];
    SubTables?: any[];
    WinningPositions?: number;
    TopPositions?: number;
    QualifyingPositions?: number;
    RelegationPositions?: number;
    LeagueName?: string;
    SeasonId?: number;
    LeagueId?: number;
    IsComposite?: boolean;
    CountryCode?: CountryCode;
    HasXgTable?: boolean;
}
export type CountryCode = "ENG" | "MLI" | "SCO" | "UKR" | "NED" | "POR" | "SEN" | "BEL";
export interface Line {
    TeamId?: number;
    TeamName?: string;
    Position?: number;
    Won?: number;
    Drawn?: number;
    Lost?: number;
    Scored?: number;
    Conceeded?: number;
    Points?: number;
    Conference?: string;
    PointsHome?: number;
    WonHome?: number;
    DrawnHome?: number;
    LostHome?: number;
    ScoredHome?: number;
    ConceededHome?: number;
    PointsDeduction?: number;
}
export interface TopStatRanking {
    StatName?: string;
    Title?: string;
    LocalizedTitleId?: string;
    StatList?: StatList[];
    StatFormat?: StatFormat;
    StatDecimals?: number;
    SubstatDecimals?: number;
    Order?: number;
    Category?: Category;
    LocalizedCategoryId?: LocalizedCategoryID;
    Subtitle?: string;
    LocalizedSubtitleId?: string;
    SubstatFormat?: StatFormat;
}
export type Category = "Top Stat" | "Attacking" | "Defending" | "Discipline" | "Goalkeeping";
export type StatFormat = "fraction" | "percent" | "number";
export interface StatList {
    ParticipantName?: string;
    ParticiantId?: number;
    TeamId?: number;
    TeamColor?: string;
    StatValue?: number;
    SubStatValue?: number;
    MinutesPlayed?: number;
    MatchesPlayed?: number;
    StatValueCount?: number;
    Rank?: number;
    ParticipantCountryCode?: CountryCode;
    TeamName?: TeamName;
}
export interface TopStat {
    StatName?: string;
    Title?: string;
    Subtitle?: string;
    LocalizedTitleId?: string;
    LocalizedSubtitleId?: string;
    StatList?: StatList[];
    StatFormat?: StatFormat;
    SubstatFormat?: StatFormat;
    StatDecimals?: number;
    SubstatDecimals?: number;
    StatLocation?: string;
    Order?: number;
    Category?: Category;
    LocalizedCategoryId?: LocalizedCategoryID;
}
export declare class Convert {
    static toTeamSeasonStats(json: string): TeamSeasonStats;
    static teamSeasonStatsToJson(value: TeamSeasonStats): string;
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
    static toPlayerParticipant(json: string): PlayerParticipant;
    static playerParticipantToJson(value: PlayerParticipant): string;
    static toTeamColors(json: string): TeamColors;
    static teamColorsToJson(value: TeamColors): string;
    static toTeam(json: string): Team;
    static teamToJson(value: Team): string;
    static toTeamParticipant(json: string): TeamParticipant;
    static teamParticipantToJson(value: TeamParticipant): string;
    static toTournamentSeason(json: string): TournamentSeason;
    static tournamentSeasonToJson(value: TournamentSeason): string;
    static toTournamentStats(json: string): TournamentStats;
    static tournamentStatsToJson(value: TournamentStats): string;
    static toGoals(json: string): Goals;
    static goalsToJson(value: Goals): string;
    static toRelegationInfo(json: string): RelegationInfo;
    static relegationInfoToJson(value: RelegationInfo): string;
    static toRule(json: string): Rule;
    static ruleToJson(value: Rule): string;
    static toStatCardSection(json: string): StatCardSection;
    static statCardSectionToJson(value: StatCardSection): string;
    static toTable(json: string): Table;
    static tableToJson(value: Table): string;
    static toLine(json: string): Line;
    static lineToJson(value: Line): string;
    static toTopStatRanking(json: string): TopStatRanking;
    static topStatRankingToJson(value: TopStatRanking): string;
    static toStatList(json: string): StatList;
    static statListToJson(value: StatList): string;
    static toTopStat(json: string): TopStat;
    static topStatToJson(value: TopStat): string;
}
