export interface Player {
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
}
export interface BirthDate {
    utcTime?: Date;
    timezone?: string;
}
export interface CareerHistory {
    showFootnote?: boolean;
    careerItems?: CareerItems;
    fullCareer?: boolean;
}
export interface CareerItems {
    senior?: NationalTeam;
    "national team"?: NationalTeam;
}
export interface NationalTeam {
    teamEntries?: TeamEntry[];
    seasonEntries?: SeasonEntry[];
}
export interface SeasonEntry {
    seasonName?: string;
    appearances?: string;
    goals?: string;
    assists?: string;
    rating?: Rating;
    tournamentStats?: TournamentStat[];
    teamId?: number;
    team?: TeamName;
    teamGender?: TeamGender;
    transferType?: TransferType | null;
}
export interface Rating {
    num?: string;
    bgcolor?: Bgcolor | null;
}
export declare enum Bgcolor {
    F08022 = "#f08022",
    The0E87E0 = "#0e87e0",
    The1Ec853 = "#1ec853",
    The989898 = "#989898"
}
export declare enum TeamName {
    AlNassrFC = "Al Nassr FC",
    Juventus = "Juventus",
    ManchesterUnited = "Manchester United",
    Portugal = "Portugal",
    RealMadrid = "Real Madrid",
    RiyadhSeasonTeamXI = "Riyadh Season Team XI",
    SportingCP = "Sporting CP"
}
export declare enum TeamGender {
    Male = "male"
}
export interface TournamentStat {
    tournamentId?: number;
    leagueName?: string;
    isFriendly?: boolean;
    seasonName?: string;
    goals?: string;
    assists?: string;
    appearances?: string;
    rating?: Rating;
    leagueId?: number;
    seasonRating?: number;
}
export interface TransferType {
    text?: string;
    localizationKey?: string;
}
export interface TeamEntry {
    participantId?: number;
    teamId?: number;
    team?: TeamName;
    teamGender?: TeamGender;
    transferType?: TransferType | null;
    startDate?: Date;
    endDate?: Date | null;
    active?: boolean;
    role?: null;
    appearances?: null | string;
    goals?: null | string;
    assists?: null | string;
    hasUncertainData?: boolean;
}
export interface MainLeague {
    leagueName?: string;
    leagueId?: number;
    playerProps?: PlayerProp[];
}
export interface PlayerProp {
    value?: string;
    title?: string;
    key?: string;
    ratingProps?: Rating;
}
export interface Meta {
    seopath?: string;
    pageurl?: string;
    faqJSONLD?: FAQJSONLD;
    personJSONLD?: PersonJSONLD;
    breadcrumbJSONLD?: BreadcrumbJSONLD;
}
export interface BreadcrumbJSONLD {
    "@context"?: string;
    "@type"?: string;
    itemListElement?: ItemListElement[];
}
export interface ItemListElement {
    "@type"?: string;
    position?: number;
    name?: string;
    item?: string;
}
export interface FAQJSONLD {
    "@context"?: string;
    "@type"?: string;
    mainEntity?: MainEntity[];
}
export interface MainEntity {
    "@type"?: string;
    name?: string;
    acceptedAnswer?: AcceptedAnswer;
}
export interface AcceptedAnswer {
    "@type"?: string;
    text?: string;
}
export interface PersonJSONLD {
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
}
export interface Affiliation {
    "@type"?: string;
    name?: TeamName;
}
export interface Eight {
    "@type"?: string;
    unitText?: string;
    value?: string;
}
export interface PlayerInformation {
    value?: Value;
    title?: string;
    translationKey?: string;
    icon?: Icon;
    countryCode?: string;
}
export interface Icon {
    type?: string;
    id?: string;
}
export interface Value {
    key?: null | string;
    fallback?: number | string;
}
export interface PositionDescription {
    positions?: Position[];
    primaryPosition?: PrimaryPosition;
    nonPrimaryPositions?: PrimaryPosition[];
}
export interface PrimaryPosition {
    label?: string;
    key?: string;
}
export interface Position {
    strPos?: PrimaryPosition;
    strPosShort?: PrimaryPosition;
    occurences?: number;
    position?: string;
    isMainPosition?: boolean;
    pitchPositionData?: PitchPositionData | null;
}
export interface PitchPositionData {
    right?: number;
    top?: number;
    ratio?: number;
}
export interface PrimaryTeam {
    teamId?: number;
    teamName?: TeamName;
    onLoan?: boolean;
    teamColors?: TeamColors;
}
export interface TeamColors {
    color?: string;
    colorAlternate?: string;
    colorAway?: string;
    colorAwayAlternate?: string;
}
export interface RecentMatch {
    teamId?: number;
    teamName?: RecentMatchTeamName;
    opponentTeamId?: number;
    opponentTeamName?: string;
    isHomeTeam?: boolean;
    id?: number;
    matchDate?: MatchDate;
    matchPageUrl?: string;
    leagueId?: number;
    leagueName?: LeagueName;
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
}
export declare enum LeagueName {
    AFCChampionsLeagueGrpE = "AFC Champions League Grp. E",
    ArabClubChampionsCupFinalStage = "Arab Club Champions Cup Final Stage",
    ArabClubChampionsCupGrpC = "Arab Club Champions Cup Grp. C",
    ClubFriendlies = "Club Friendlies",
    EUROQualificationGrpJ = "EURO Qualification Grp. J",
    SaudiProfessionalLeague = "Saudi Professional League"
}
export interface MatchDate {
    utcTime?: Date;
}
export interface RatingProps {
    num?: number | string;
    bgcolor?: Bgcolor;
}
export declare enum RecentMatchTeamName {
    AlNassrFC = "Al Nassr FC",
    Portugal = "Portugal",
    RiyadhAllStar = "Riyadh All-Star"
}
export interface StatSeason {
    seasonName?: string;
    tournaments?: StatSeasonTournament[];
}
export interface StatSeasonTournament {
    name?: string;
    tournamentId?: number;
    entryId?: string;
}
export interface Traits {
    key?: string;
    title?: string;
    items?: Item[];
}
export interface Item {
    key?: string;
    title?: string;
    value?: number;
}
export interface Trophies {
    playerTrophies?: PlayerTrophy[];
    coachTrophies?: any[];
}
export interface PlayerTrophy {
    ccode?: string;
    teamId?: number;
    teamName?: TeamName;
    tournaments?: PlayerTrophyTournament[];
}
export interface PlayerTrophyTournament {
    ccode?: string;
    leagueId?: number;
    leagueName?: string;
    seasonsWon?: string[];
    seasonsRunnerUp?: string[];
}
export declare class Convert {
    static toPlayer(json: string): Player;
    static playerToJson(value: Player): string;
    static toBirthDate(json: string): BirthDate;
    static birthDateToJson(value: BirthDate): string;
    static toCareerHistory(json: string): CareerHistory;
    static careerHistoryToJson(value: CareerHistory): string;
    static toCareerItems(json: string): CareerItems;
    static careerItemsToJson(value: CareerItems): string;
    static toNationalTeam(json: string): NationalTeam;
    static nationalTeamToJson(value: NationalTeam): string;
    static toSeasonEntry(json: string): SeasonEntry;
    static seasonEntryToJson(value: SeasonEntry): string;
    static toRating(json: string): Rating;
    static ratingToJson(value: Rating): string;
    static toTournamentStat(json: string): TournamentStat;
    static tournamentStatToJson(value: TournamentStat): string;
    static toTransferType(json: string): TransferType;
    static transferTypeToJson(value: TransferType): string;
    static toTeamEntry(json: string): TeamEntry;
    static teamEntryToJson(value: TeamEntry): string;
    static toMainLeague(json: string): MainLeague;
    static mainLeagueToJson(value: MainLeague): string;
    static toPlayerProp(json: string): PlayerProp;
    static playerPropToJson(value: PlayerProp): string;
    static toMeta(json: string): Meta;
    static metaToJson(value: Meta): string;
    static toBreadcrumbJSONLD(json: string): BreadcrumbJSONLD;
    static breadcrumbJSONLDToJson(value: BreadcrumbJSONLD): string;
    static toItemListElement(json: string): ItemListElement;
    static itemListElementToJson(value: ItemListElement): string;
    static toFAQJSONLD(json: string): FAQJSONLD;
    static fAQJSONLDToJson(value: FAQJSONLD): string;
    static toMainEntity(json: string): MainEntity;
    static mainEntityToJson(value: MainEntity): string;
    static toAcceptedAnswer(json: string): AcceptedAnswer;
    static acceptedAnswerToJson(value: AcceptedAnswer): string;
    static toPersonJSONLD(json: string): PersonJSONLD;
    static personJSONLDToJson(value: PersonJSONLD): string;
    static toAffiliation(json: string): Affiliation;
    static affiliationToJson(value: Affiliation): string;
    static toEight(json: string): Eight;
    static eightToJson(value: Eight): string;
    static toPlayerInformation(json: string): PlayerInformation;
    static playerInformationToJson(value: PlayerInformation): string;
    static toIcon(json: string): Icon;
    static iconToJson(value: Icon): string;
    static toValue(json: string): Value;
    static valueToJson(value: Value): string;
    static toPositionDescription(json: string): PositionDescription;
    static positionDescriptionToJson(value: PositionDescription): string;
    static toPrimaryPosition(json: string): PrimaryPosition;
    static primaryPositionToJson(value: PrimaryPosition): string;
    static toPosition(json: string): Position;
    static positionToJson(value: Position): string;
    static toPitchPositionData(json: string): PitchPositionData;
    static pitchPositionDataToJson(value: PitchPositionData): string;
    static toPrimaryTeam(json: string): PrimaryTeam;
    static primaryTeamToJson(value: PrimaryTeam): string;
    static toTeamColors(json: string): TeamColors;
    static teamColorsToJson(value: TeamColors): string;
    static toRecentMatch(json: string): RecentMatch;
    static recentMatchToJson(value: RecentMatch): string;
    static toMatchDate(json: string): MatchDate;
    static matchDateToJson(value: MatchDate): string;
    static toRatingProps(json: string): RatingProps;
    static ratingPropsToJson(value: RatingProps): string;
    static toStatSeason(json: string): StatSeason;
    static statSeasonToJson(value: StatSeason): string;
    static toStatSeasonTournament(json: string): StatSeasonTournament;
    static statSeasonTournamentToJson(value: StatSeasonTournament): string;
    static toTraits(json: string): Traits;
    static traitsToJson(value: Traits): string;
    static toItem(json: string): Item;
    static itemToJson(value: Item): string;
    static toTrophies(json: string): Trophies;
    static trophiesToJson(value: Trophies): string;
    static toPlayerTrophy(json: string): PlayerTrophy;
    static playerTrophyToJson(value: PlayerTrophy): string;
    static toPlayerTrophyTournament(json: string): PlayerTrophyTournament;
    static playerTrophyTournamentToJson(value: PlayerTrophyTournament): string;
}
