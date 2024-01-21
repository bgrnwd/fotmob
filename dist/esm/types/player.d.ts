export type Player = {
    id?: number;
    name?: string;
    birthDate?: BirthDate;
    isCoach?: boolean;
    isCaptain?: boolean;
    primaryTeam?: PrimaryTeam;
    positionDescription?: PositionDescription;
    injuryInformation?: null;
    playerInformation?: PlayerInformation[];
    mainLeague?: MainLeague;
    trophies?: Trophies;
    recentMatches?: RecentMatch[];
    careerHistory?: CareerHistory;
    traits?: Traits;
    meta?: Meta;
    coachStats?: null;
    statSeasons?: StatSeason[];
};
export type BirthDate = {
    utcTime?: Date;
    timezone?: string;
};
export type CareerHistory = {
    showFootnote?: boolean;
    careerItems?: CareerItems;
    fullCareer?: boolean;
};
export type CareerItems = {
    senior?: NationalTeam;
    youth?: Youth;
    "national team"?: NationalTeam;
};
export type NationalTeam = {
    teamEntries?: TeamEntry[];
    seasonEntries?: NationalTeamSeasonEntry[];
};
export type NationalTeamSeasonEntry = {
    seasonName?: string;
    appearances?: string;
    goals?: string;
    assists?: string;
    rating?: Rating;
    tournamentStats?: PurpleTournamentStat[];
    teamId?: number;
    team?: string;
    teamGender?: string;
    transferType?: null;
};
export type Rating = {
    num?: string;
    bgcolor?: string | null;
};
export type PurpleTournamentStat = {
    leagueId?: number;
    tournamentId?: number;
    leagueName?: string;
    seasonRating?: number;
    isFriendly?: boolean;
    seasonName?: string;
    goals?: string;
    assists?: string;
    appearances?: string;
    rating?: Rating;
};
export type TeamEntry = {
    participantId?: number;
    teamId?: number;
    team?: string;
    teamGender?: string;
    transferType?: null;
    startDate?: Date;
    endDate?: Date | null;
    active?: boolean;
    role?: null;
    appearances?: string;
    goals?: string;
    assists?: string;
    hasUncertainData?: boolean;
};
export type Youth = {
    teamEntries?: TeamEntry[];
    seasonEntries?: YouthSeasonEntry[];
};
export type YouthSeasonEntry = {
    seasonName?: string;
    appearances?: string;
    goals?: string;
    assists?: string;
    rating?: Rating;
    tournamentStats?: FluffyTournamentStat[];
    teamId?: number;
    team?: string;
    teamGender?: string;
    transferType?: null;
};
export type FluffyTournamentStat = {
    tournamentId?: number;
    leagueName?: string;
    isFriendly?: boolean;
    seasonName?: string;
    goals?: string;
    assists?: string;
    appearances?: string;
    rating?: Rating;
};
export type MainLeague = {
    topStats?: TopStats;
    leagueId?: number;
    leagueName?: string;
};
export type TopStats = {
    id?: string;
    type?: string;
    display?: string;
    items?: TopStatsItem[];
};
export type TopStatsItem = {
    title?: string;
    localizedTitleId?: string;
    statValue?: string;
    per90?: number;
    percentileRank?: number;
    percentileRankPer90?: number;
    statFormat?: string;
};
export type Meta = {
    seopath?: string;
    pageurl?: string;
    faqJSONLD?: FAQJSONLD;
    personJSONLD?: PersonJSONLD;
    breadcrumbJSONLD?: BreadcrumbJSONLD;
};
export type BreadcrumbJSONLD = {
    "@context"?: string;
    "@type"?: string;
    itemListElement?: ItemListElement[];
};
export type ItemListElement = {
    "@type"?: string;
    position?: number;
    name?: string;
    item?: string;
};
export type FAQJSONLD = {
    "@context"?: string;
    "@type"?: string;
    mainEntity?: MainEntity[];
};
export type MainEntity = {
    "@type"?: string;
    name?: string;
    acceptedAnswer?: AcceptedAnswer;
};
export type AcceptedAnswer = {
    "@type"?: string;
    text?: string;
};
export type PersonJSONLD = {
    "@context"?: string;
    "@type"?: string;
    name?: string;
    birthDate?: Date;
    url?: string;
    nationality?: Affiliation;
    affiliation?: Affiliation;
    gender?: string;
    height?: Eight;
    weight?: Eight;
};
export type Affiliation = {
    "@type"?: string;
    name?: string;
};
export type Eight = {
    "@type"?: string;
    unitText?: string;
    value?: string;
};
export type PlayerInformation = {
    value?: Value;
    title?: string;
    translationKey?: string;
    icon?: Icon;
    countryCode?: string;
};
export type Icon = {
    type?: string;
    id?: string;
};
export type Value = {
    key?: null | string;
    fallback?: Fallback;
};
export type Fallback = number | string;
export type PositionDescription = {
    positions?: Position[];
    primaryPosition?: PrimaryPosition;
    nonPrimaryPositions?: PrimaryPosition[];
};
export type PrimaryPosition = {
    label?: string;
    key?: string;
};
export type Position = {
    strPos?: PrimaryPosition;
    strPosShort?: PrimaryPosition;
    occurences?: number;
    position?: string;
    isMainPosition?: boolean;
    pitchPositionData?: PitchPositionData | null;
};
export type PitchPositionData = {
    right?: number;
    top?: number;
    ratio?: number;
};
export type PrimaryTeam = {
    teamId?: number;
    teamName?: string;
    onLoan?: boolean;
    teamColors?: TeamColors;
};
export type TeamColors = {
    color?: string;
    colorAlternate?: string;
    colorAway?: string;
    colorAwayAlternate?: string;
};
export type RecentMatch = {
    teamId?: number;
    teamName?: string;
    opponentTeamId?: number;
    opponentTeamName?: string;
    isHomeTeam?: boolean;
    id?: number;
    matchDate?: MatchDate;
    matchPageUrl?: string;
    leagueId?: number;
    leagueName?: string;
    stage?: null | string;
    homeScore?: number;
    awayScore?: number;
    minutesPlayed?: number;
    goals?: number;
    assists?: number;
    yellowCards?: number;
    redCards?: number;
    ratingProps?: RatingProps;
    playerOfTheMatch?: boolean;
    onBench?: boolean;
};
export type MatchDate = {
    utcTime?: Date;
};
export type RatingProps = {
    num?: Fallback;
    bgcolor?: string;
};
export type StatSeason = {
    seasonName?: string;
    tournaments?: StatSeasonTournament[];
};
export type StatSeasonTournament = {
    name?: string;
    tournamentId?: number;
    entryId?: string;
};
export type Traits = {
    key?: string;
    title?: string;
    items?: TraitsItem[];
};
export type TraitsItem = {
    key?: string;
    title?: string;
    value?: number;
};
export type Trophies = {
    playerTrophies?: PlayerTrophy[];
    coachTrophies?: any[];
};
export type PlayerTrophy = {
    ccode?: string;
    teamId?: number;
    teamName?: string;
    tournaments?: PlayerTrophyTournament[];
};
export type PlayerTrophyTournament = {
    ccode?: string;
    leagueId?: number;
    leagueName?: string;
    seasonsWon?: string[];
    seasonsRunnerUp?: string[];
};
export declare class Convert {
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
}
