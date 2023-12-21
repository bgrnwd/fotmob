// To parse this data:
//
//   import { Convert, Player } from "./file";
//
//   const player = Convert.toPlayer(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

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

export enum Bgcolor {
    F08022 = "#f08022",
    The0E87E0 = "#0e87e0",
    The1Ec853 = "#1ec853",
    The989898 = "#989898",
}

export enum TeamName {
    AlNassrFC = "Al Nassr FC",
    Juventus = "Juventus",
    ManchesterUnited = "Manchester United",
    Portugal = "Portugal",
    RealMadrid = "Real Madrid",
    RiyadhSeasonTeamXI = "Riyadh Season Team XI",
    SportingCP = "Sporting CP",
}

export enum TeamGender {
    Male = "male",
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

export enum LeagueName {
    AFCChampionsLeagueGrpE = "AFC Champions League Grp. E",
    ArabClubChampionsCupFinalStage = "Arab Club Champions Cup Final Stage",
    ArabClubChampionsCupGrpC = "Arab Club Champions Cup Grp. C",
    ClubFriendlies = "Club Friendlies",
    EUROQualificationGrpJ = "EURO Qualification Grp. J",
    SaudiProfessionalLeague = "Saudi Professional League",
}

export interface MatchDate {
    utcTime?: Date;
}

export interface RatingProps {
    num?: number | string;
    bgcolor?: Bgcolor;
}

export enum RecentMatchTeamName {
    AlNassrFC = "Al Nassr FC",
    Portugal = "Portugal",
    RiyadhAllStar = "Riyadh All-Star",
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

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlayer(json: string): Player {
        return cast(JSON.parse(json), r("Player"));
    }

    public static playerToJson(value: Player): string {
        return JSON.stringify(uncast(value, r("Player")), null, 2);
    }

    public static toBirthDate(json: string): BirthDate {
        return cast(JSON.parse(json), r("BirthDate"));
    }

    public static birthDateToJson(value: BirthDate): string {
        return JSON.stringify(uncast(value, r("BirthDate")), null, 2);
    }

    public static toCareerHistory(json: string): CareerHistory {
        return cast(JSON.parse(json), r("CareerHistory"));
    }

    public static careerHistoryToJson(value: CareerHistory): string {
        return JSON.stringify(uncast(value, r("CareerHistory")), null, 2);
    }

    public static toCareerItems(json: string): CareerItems {
        return cast(JSON.parse(json), r("CareerItems"));
    }

    public static careerItemsToJson(value: CareerItems): string {
        return JSON.stringify(uncast(value, r("CareerItems")), null, 2);
    }

    public static toNationalTeam(json: string): NationalTeam {
        return cast(JSON.parse(json), r("NationalTeam"));
    }

    public static nationalTeamToJson(value: NationalTeam): string {
        return JSON.stringify(uncast(value, r("NationalTeam")), null, 2);
    }

    public static toSeasonEntry(json: string): SeasonEntry {
        return cast(JSON.parse(json), r("SeasonEntry"));
    }

    public static seasonEntryToJson(value: SeasonEntry): string {
        return JSON.stringify(uncast(value, r("SeasonEntry")), null, 2);
    }

    public static toRating(json: string): Rating {
        return cast(JSON.parse(json), r("Rating"));
    }

    public static ratingToJson(value: Rating): string {
        return JSON.stringify(uncast(value, r("Rating")), null, 2);
    }

    public static toTournamentStat(json: string): TournamentStat {
        return cast(JSON.parse(json), r("TournamentStat"));
    }

    public static tournamentStatToJson(value: TournamentStat): string {
        return JSON.stringify(uncast(value, r("TournamentStat")), null, 2);
    }

    public static toTransferType(json: string): TransferType {
        return cast(JSON.parse(json), r("TransferType"));
    }

    public static transferTypeToJson(value: TransferType): string {
        return JSON.stringify(uncast(value, r("TransferType")), null, 2);
    }

    public static toTeamEntry(json: string): TeamEntry {
        return cast(JSON.parse(json), r("TeamEntry"));
    }

    public static teamEntryToJson(value: TeamEntry): string {
        return JSON.stringify(uncast(value, r("TeamEntry")), null, 2);
    }

    public static toMainLeague(json: string): MainLeague {
        return cast(JSON.parse(json), r("MainLeague"));
    }

    public static mainLeagueToJson(value: MainLeague): string {
        return JSON.stringify(uncast(value, r("MainLeague")), null, 2);
    }

    public static toPlayerProp(json: string): PlayerProp {
        return cast(JSON.parse(json), r("PlayerProp"));
    }

    public static playerPropToJson(value: PlayerProp): string {
        return JSON.stringify(uncast(value, r("PlayerProp")), null, 2);
    }

    public static toMeta(json: string): Meta {
        return cast(JSON.parse(json), r("Meta"));
    }

    public static metaToJson(value: Meta): string {
        return JSON.stringify(uncast(value, r("Meta")), null, 2);
    }

    public static toBreadcrumbJSONLD(json: string): BreadcrumbJSONLD {
        return cast(JSON.parse(json), r("BreadcrumbJSONLD"));
    }

    public static breadcrumbJSONLDToJson(value: BreadcrumbJSONLD): string {
        return JSON.stringify(uncast(value, r("BreadcrumbJSONLD")), null, 2);
    }

    public static toItemListElement(json: string): ItemListElement {
        return cast(JSON.parse(json), r("ItemListElement"));
    }

    public static itemListElementToJson(value: ItemListElement): string {
        return JSON.stringify(uncast(value, r("ItemListElement")), null, 2);
    }

    public static toFAQJSONLD(json: string): FAQJSONLD {
        return cast(JSON.parse(json), r("FAQJSONLD"));
    }

    public static fAQJSONLDToJson(value: FAQJSONLD): string {
        return JSON.stringify(uncast(value, r("FAQJSONLD")), null, 2);
    }

    public static toMainEntity(json: string): MainEntity {
        return cast(JSON.parse(json), r("MainEntity"));
    }

    public static mainEntityToJson(value: MainEntity): string {
        return JSON.stringify(uncast(value, r("MainEntity")), null, 2);
    }

    public static toAcceptedAnswer(json: string): AcceptedAnswer {
        return cast(JSON.parse(json), r("AcceptedAnswer"));
    }

    public static acceptedAnswerToJson(value: AcceptedAnswer): string {
        return JSON.stringify(uncast(value, r("AcceptedAnswer")), null, 2);
    }

    public static toPersonJSONLD(json: string): PersonJSONLD {
        return cast(JSON.parse(json), r("PersonJSONLD"));
    }

    public static personJSONLDToJson(value: PersonJSONLD): string {
        return JSON.stringify(uncast(value, r("PersonJSONLD")), null, 2);
    }

    public static toAffiliation(json: string): Affiliation {
        return cast(JSON.parse(json), r("Affiliation"));
    }

    public static affiliationToJson(value: Affiliation): string {
        return JSON.stringify(uncast(value, r("Affiliation")), null, 2);
    }

    public static toEight(json: string): Eight {
        return cast(JSON.parse(json), r("Eight"));
    }

    public static eightToJson(value: Eight): string {
        return JSON.stringify(uncast(value, r("Eight")), null, 2);
    }

    public static toPlayerInformation(json: string): PlayerInformation {
        return cast(JSON.parse(json), r("PlayerInformation"));
    }

    public static playerInformationToJson(value: PlayerInformation): string {
        return JSON.stringify(uncast(value, r("PlayerInformation")), null, 2);
    }

    public static toIcon(json: string): Icon {
        return cast(JSON.parse(json), r("Icon"));
    }

    public static iconToJson(value: Icon): string {
        return JSON.stringify(uncast(value, r("Icon")), null, 2);
    }

    public static toValue(json: string): Value {
        return cast(JSON.parse(json), r("Value"));
    }

    public static valueToJson(value: Value): string {
        return JSON.stringify(uncast(value, r("Value")), null, 2);
    }

    public static toPositionDescription(json: string): PositionDescription {
        return cast(JSON.parse(json), r("PositionDescription"));
    }

    public static positionDescriptionToJson(value: PositionDescription): string {
        return JSON.stringify(uncast(value, r("PositionDescription")), null, 2);
    }

    public static toPrimaryPosition(json: string): PrimaryPosition {
        return cast(JSON.parse(json), r("PrimaryPosition"));
    }

    public static primaryPositionToJson(value: PrimaryPosition): string {
        return JSON.stringify(uncast(value, r("PrimaryPosition")), null, 2);
    }

    public static toPosition(json: string): Position {
        return cast(JSON.parse(json), r("Position"));
    }

    public static positionToJson(value: Position): string {
        return JSON.stringify(uncast(value, r("Position")), null, 2);
    }

    public static toPitchPositionData(json: string): PitchPositionData {
        return cast(JSON.parse(json), r("PitchPositionData"));
    }

    public static pitchPositionDataToJson(value: PitchPositionData): string {
        return JSON.stringify(uncast(value, r("PitchPositionData")), null, 2);
    }

    public static toPrimaryTeam(json: string): PrimaryTeam {
        return cast(JSON.parse(json), r("PrimaryTeam"));
    }

    public static primaryTeamToJson(value: PrimaryTeam): string {
        return JSON.stringify(uncast(value, r("PrimaryTeam")), null, 2);
    }

    public static toTeamColors(json: string): TeamColors {
        return cast(JSON.parse(json), r("TeamColors"));
    }

    public static teamColorsToJson(value: TeamColors): string {
        return JSON.stringify(uncast(value, r("TeamColors")), null, 2);
    }

    public static toRecentMatch(json: string): RecentMatch {
        return cast(JSON.parse(json), r("RecentMatch"));
    }

    public static recentMatchToJson(value: RecentMatch): string {
        return JSON.stringify(uncast(value, r("RecentMatch")), null, 2);
    }

    public static toMatchDate(json: string): MatchDate {
        return cast(JSON.parse(json), r("MatchDate"));
    }

    public static matchDateToJson(value: MatchDate): string {
        return JSON.stringify(uncast(value, r("MatchDate")), null, 2);
    }

    public static toRatingProps(json: string): RatingProps {
        return cast(JSON.parse(json), r("RatingProps"));
    }

    public static ratingPropsToJson(value: RatingProps): string {
        return JSON.stringify(uncast(value, r("RatingProps")), null, 2);
    }

    public static toStatSeason(json: string): StatSeason {
        return cast(JSON.parse(json), r("StatSeason"));
    }

    public static statSeasonToJson(value: StatSeason): string {
        return JSON.stringify(uncast(value, r("StatSeason")), null, 2);
    }

    public static toStatSeasonTournament(json: string): StatSeasonTournament {
        return cast(JSON.parse(json), r("StatSeasonTournament"));
    }

    public static statSeasonTournamentToJson(value: StatSeasonTournament): string {
        return JSON.stringify(uncast(value, r("StatSeasonTournament")), null, 2);
    }

    public static toTraits(json: string): Traits {
        return cast(JSON.parse(json), r("Traits"));
    }

    public static traitsToJson(value: Traits): string {
        return JSON.stringify(uncast(value, r("Traits")), null, 2);
    }

    public static toItem(json: string): Item {
        return cast(JSON.parse(json), r("Item"));
    }

    public static itemToJson(value: Item): string {
        return JSON.stringify(uncast(value, r("Item")), null, 2);
    }

    public static toTrophies(json: string): Trophies {
        return cast(JSON.parse(json), r("Trophies"));
    }

    public static trophiesToJson(value: Trophies): string {
        return JSON.stringify(uncast(value, r("Trophies")), null, 2);
    }

    public static toPlayerTrophy(json: string): PlayerTrophy {
        return cast(JSON.parse(json), r("PlayerTrophy"));
    }

    public static playerTrophyToJson(value: PlayerTrophy): string {
        return JSON.stringify(uncast(value, r("PlayerTrophy")), null, 2);
    }

    public static toPlayerTrophyTournament(json: string): PlayerTrophyTournament {
        return cast(JSON.parse(json), r("PlayerTrophyTournament"));
    }

    public static playerTrophyTournamentToJson(value: PlayerTrophyTournament): string {
        return JSON.stringify(uncast(value, r("PlayerTrophyTournament")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = val[key];
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Player": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, r("BirthDate")) },
        { json: "isCoach", js: "isCoach", typ: u(undefined, true) },
        { json: "isCaptain", js: "isCaptain", typ: u(undefined, true) },
        { json: "primaryTeam", js: "primaryTeam", typ: u(undefined, r("PrimaryTeam")) },
        { json: "positionDescription", js: "positionDescription", typ: u(undefined, r("PositionDescription")) },
        { json: "injuryInformation", js: "injuryInformation", typ: u(undefined, null) },
        { json: "playerInformation", js: "playerInformation", typ: u(undefined, a(r("PlayerInformation"))) },
        { json: "mainLeague", js: "mainLeague", typ: u(undefined, r("MainLeague")) },
        { json: "trophies", js: "trophies", typ: u(undefined, r("Trophies")) },
        { json: "recentMatches", js: "recentMatches", typ: u(undefined, a(r("RecentMatch"))) },
        { json: "careerHistory", js: "careerHistory", typ: u(undefined, r("CareerHistory")) },
        { json: "traits", js: "traits", typ: u(undefined, r("Traits")) },
        { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
        { json: "coachStats", js: "coachStats", typ: u(undefined, null) },
        { json: "statSeasons", js: "statSeasons", typ: u(undefined, a(r("StatSeason"))) },
    ], false),
    "BirthDate": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
        { json: "timezone", js: "timezone", typ: u(undefined, "") },
    ], false),
    "CareerHistory": o([
        { json: "showFootnote", js: "showFootnote", typ: u(undefined, true) },
        { json: "careerItems", js: "careerItems", typ: u(undefined, r("CareerItems")) },
        { json: "fullCareer", js: "fullCareer", typ: u(undefined, true) },
    ], false),
    "CareerItems": o([
        { json: "senior", js: "senior", typ: u(undefined, r("NationalTeam")) },
        { json: "national team", js: "national team", typ: u(undefined, r("NationalTeam")) },
    ], false),
    "NationalTeam": o([
        { json: "teamEntries", js: "teamEntries", typ: u(undefined, a(r("TeamEntry"))) },
        { json: "seasonEntries", js: "seasonEntries", typ: u(undefined, a(r("SeasonEntry"))) },
    ], false),
    "SeasonEntry": o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        { json: "tournamentStats", js: "tournamentStats", typ: u(undefined, a(r("TournamentStat"))) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, r("TeamName")) },
        { json: "teamGender", js: "teamGender", typ: u(undefined, r("TeamGender")) },
        { json: "transferType", js: "transferType", typ: u(undefined, u(r("TransferType"), null)) },
    ], false),
    "Rating": o([
        { json: "num", js: "num", typ: u(undefined, "") },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, u(r("Bgcolor"), null)) },
    ], false),
    "TournamentStat": o([
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "isFriendly", js: "isFriendly", typ: u(undefined, true) },
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "goals", js: "goals", typ: u(undefined, "") },
        { json: "assists", js: "assists", typ: u(undefined, "") },
        { json: "appearances", js: "appearances", typ: u(undefined, "") },
        { json: "rating", js: "rating", typ: u(undefined, r("Rating")) },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "seasonRating", js: "seasonRating", typ: u(undefined, 3.14) },
    ], false),
    "TransferType": o([
        { json: "text", js: "text", typ: u(undefined, "") },
        { json: "localizationKey", js: "localizationKey", typ: u(undefined, "") },
    ], false),
    "TeamEntry": o([
        { json: "participantId", js: "participantId", typ: u(undefined, 0) },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "team", js: "team", typ: u(undefined, r("TeamName")) },
        { json: "teamGender", js: "teamGender", typ: u(undefined, r("TeamGender")) },
        { json: "transferType", js: "transferType", typ: u(undefined, u(r("TransferType"), null)) },
        { json: "startDate", js: "startDate", typ: u(undefined, Date) },
        { json: "endDate", js: "endDate", typ: u(undefined, u(Date, null)) },
        { json: "active", js: "active", typ: u(undefined, true) },
        { json: "role", js: "role", typ: u(undefined, null) },
        { json: "appearances", js: "appearances", typ: u(undefined, u(null, "")) },
        { json: "goals", js: "goals", typ: u(undefined, u(null, "")) },
        { json: "assists", js: "assists", typ: u(undefined, u(null, "")) },
        { json: "hasUncertainData", js: "hasUncertainData", typ: u(undefined, true) },
    ], false),
    "MainLeague": o([
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "playerProps", js: "playerProps", typ: u(undefined, a(r("PlayerProp"))) },
    ], false),
    "PlayerProp": o([
        { json: "value", js: "value", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "ratingProps", js: "ratingProps", typ: u(undefined, r("Rating")) },
    ], false),
    "Meta": o([
        { json: "seopath", js: "seopath", typ: u(undefined, "") },
        { json: "pageurl", js: "pageurl", typ: u(undefined, "") },
        { json: "faqJSONLD", js: "faqJSONLD", typ: u(undefined, r("FAQJSONLD")) },
        { json: "personJSONLD", js: "personJSONLD", typ: u(undefined, r("PersonJSONLD")) },
        { json: "breadcrumbJSONLD", js: "breadcrumbJSONLD", typ: u(undefined, r("BreadcrumbJSONLD")) },
    ], false),
    "BreadcrumbJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "itemListElement", js: "itemListElement", typ: u(undefined, a(r("ItemListElement"))) },
    ], false),
    "ItemListElement": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "position", js: "position", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    "FAQJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "mainEntity", js: "mainEntity", typ: u(undefined, a(r("MainEntity"))) },
    ], false),
    "MainEntity": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "acceptedAnswer", js: "acceptedAnswer", typ: u(undefined, r("AcceptedAnswer")) },
    ], false),
    "AcceptedAnswer": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "text", js: "text", typ: u(undefined, "") },
    ], false),
    "PersonJSONLD": o([
        { json: "@context", js: "@context", typ: u(undefined, "") },
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "birthDate", js: "birthDate", typ: u(undefined, Date) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "nationality", js: "nationality", typ: u(undefined, r("Affiliation")) },
        { json: "affiliation", js: "affiliation", typ: u(undefined, r("Affiliation")) },
        { json: "gender", js: "gender", typ: u(undefined, "") },
        { json: "height", js: "height", typ: u(undefined, r("Eight")) },
        { json: "weight", js: "weight", typ: u(undefined, r("Eight")) },
    ], false),
    "Affiliation": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, r("TeamName")) },
    ], false),
    "Eight": o([
        { json: "@type", js: "@type", typ: u(undefined, "") },
        { json: "unitText", js: "unitText", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], false),
    "PlayerInformation": o([
        { json: "value", js: "value", typ: u(undefined, r("Value")) },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "translationKey", js: "translationKey", typ: u(undefined, "") },
        { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
        { json: "countryCode", js: "countryCode", typ: u(undefined, "") },
    ], false),
    "Icon": o([
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "Value": o([
        { json: "key", js: "key", typ: u(undefined, u(null, "")) },
        { json: "fallback", js: "fallback", typ: u(undefined, u(0, "")) },
    ], false),
    "PositionDescription": o([
        { json: "positions", js: "positions", typ: u(undefined, a(r("Position"))) },
        { json: "primaryPosition", js: "primaryPosition", typ: u(undefined, r("PrimaryPosition")) },
        { json: "nonPrimaryPositions", js: "nonPrimaryPositions", typ: u(undefined, a(r("PrimaryPosition"))) },
    ], false),
    "PrimaryPosition": o([
        { json: "label", js: "label", typ: u(undefined, "") },
        { json: "key", js: "key", typ: u(undefined, "") },
    ], false),
    "Position": o([
        { json: "strPos", js: "strPos", typ: u(undefined, r("PrimaryPosition")) },
        { json: "strPosShort", js: "strPosShort", typ: u(undefined, r("PrimaryPosition")) },
        { json: "occurences", js: "occurences", typ: u(undefined, 0) },
        { json: "position", js: "position", typ: u(undefined, "") },
        { json: "isMainPosition", js: "isMainPosition", typ: u(undefined, true) },
        { json: "pitchPositionData", js: "pitchPositionData", typ: u(undefined, u(r("PitchPositionData"), null)) },
    ], false),
    "PitchPositionData": o([
        { json: "right", js: "right", typ: u(undefined, 3.14) },
        { json: "top", js: "top", typ: u(undefined, 3.14) },
        { json: "ratio", js: "ratio", typ: u(undefined, 3.14) },
    ], false),
    "PrimaryTeam": o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("TeamName")) },
        { json: "onLoan", js: "onLoan", typ: u(undefined, true) },
        { json: "teamColors", js: "teamColors", typ: u(undefined, r("TeamColors")) },
    ], false),
    "TeamColors": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "colorAlternate", js: "colorAlternate", typ: u(undefined, "") },
        { json: "colorAway", js: "colorAway", typ: u(undefined, "") },
        { json: "colorAwayAlternate", js: "colorAwayAlternate", typ: u(undefined, "") },
    ], false),
    "RecentMatch": o([
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("RecentMatchTeamName")) },
        { json: "opponentTeamId", js: "opponentTeamId", typ: u(undefined, 0) },
        { json: "opponentTeamName", js: "opponentTeamName", typ: u(undefined, "") },
        { json: "isHomeTeam", js: "isHomeTeam", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "matchDate", js: "matchDate", typ: u(undefined, r("MatchDate")) },
        { json: "matchPageUrl", js: "matchPageUrl", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, r("LeagueName")) },
        { json: "stage", js: "stage", typ: u(undefined, u(null, "")) },
        { json: "homeScore", js: "homeScore", typ: u(undefined, 0) },
        { json: "awayScore", js: "awayScore", typ: u(undefined, 0) },
        { json: "minutesPlayed", js: "minutesPlayed", typ: u(undefined, 0) },
        { json: "goals", js: "goals", typ: u(undefined, 0) },
        { json: "assists", js: "assists", typ: u(undefined, 0) },
        { json: "yellowCards", js: "yellowCards", typ: u(undefined, 0) },
        { json: "redCards", js: "redCards", typ: u(undefined, 0) },
        { json: "ratingProps", js: "ratingProps", typ: u(undefined, r("RatingProps")) },
        { json: "playerOfTheMatch", js: "playerOfTheMatch", typ: u(undefined, true) },
        { json: "onBench", js: "onBench", typ: u(undefined, true) },
    ], false),
    "MatchDate": o([
        { json: "utcTime", js: "utcTime", typ: u(undefined, Date) },
    ], false),
    "RatingProps": o([
        { json: "num", js: "num", typ: u(undefined, u(0, "")) },
        { json: "bgcolor", js: "bgcolor", typ: u(undefined, r("Bgcolor")) },
    ], false),
    "StatSeason": o([
        { json: "seasonName", js: "seasonName", typ: u(undefined, "") },
        { json: "tournaments", js: "tournaments", typ: u(undefined, a(r("StatSeasonTournament"))) },
    ], false),
    "StatSeasonTournament": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "tournamentId", js: "tournamentId", typ: u(undefined, 0) },
        { json: "entryId", js: "entryId", typ: u(undefined, "") },
    ], false),
    "Traits": o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "items", js: "items", typ: u(undefined, a(r("Item"))) },
    ], false),
    "Item": o([
        { json: "key", js: "key", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], false),
    "Trophies": o([
        { json: "playerTrophies", js: "playerTrophies", typ: u(undefined, a(r("PlayerTrophy"))) },
        { json: "coachTrophies", js: "coachTrophies", typ: u(undefined, a("any")) },
    ], false),
    "PlayerTrophy": o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "teamId", js: "teamId", typ: u(undefined, 0) },
        { json: "teamName", js: "teamName", typ: u(undefined, r("TeamName")) },
        { json: "tournaments", js: "tournaments", typ: u(undefined, a(r("PlayerTrophyTournament"))) },
    ], false),
    "PlayerTrophyTournament": o([
        { json: "ccode", js: "ccode", typ: u(undefined, "") },
        { json: "leagueId", js: "leagueId", typ: u(undefined, 0) },
        { json: "leagueName", js: "leagueName", typ: u(undefined, "") },
        { json: "seasonsWon", js: "seasonsWon", typ: u(undefined, a("")) },
        { json: "seasonsRunnerUp", js: "seasonsRunnerUp", typ: u(undefined, a("")) },
    ], false),
    "Bgcolor": [
        "#f08022",
        "#0e87e0",
        "#1ec853",
        "#989898",
    ],
    "TeamName": [
        "Al Nassr FC",
        "Juventus",
        "Manchester United",
        "Portugal",
        "Real Madrid",
        "Riyadh Season Team XI",
        "Sporting CP",
    ],
    "TeamGender": [
        "male",
    ],
    "LeagueName": [
        "AFC Champions League Grp. E",
        "Arab Club Champions Cup Final Stage",
        "Arab Club Champions Cup Grp. C",
        "Club Friendlies",
        "EURO Qualification Grp. J",
        "Saudi Professional League",
    ],
    "RecentMatchTeamName": [
        "Al Nassr FC",
        "Portugal",
        "Riyadh All-Star",
    ],
};
