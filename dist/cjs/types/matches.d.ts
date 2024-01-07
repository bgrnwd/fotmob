export interface Matches {
    leagues?: League[];
    date?: string;
}
export interface League {
    isGroup?: boolean;
    groupName?: string;
    ccode?: string;
    id?: number;
    primaryId?: number;
    name?: string;
    matches?: Match[];
    parentLeagueId?: number;
    parentLeagueName?: string;
    internalRank?: number;
    liveRank?: number;
    simpleLeague?: boolean;
}
export interface Match {
    id?: number;
    leagueId?: number;
    time?: string;
    home?: Away;
    away?: Away;
    eliminatedTeamId?: null;
    statusId?: number;
    tournamentStage?: string;
    status?: Status;
    timeTS?: number;
}
export interface Away {
    id?: number;
    score?: number;
    name?: string;
    longName?: string;
}
export interface Status {
    utcTime?: Date;
    finished?: boolean;
    started?: boolean;
    cancelled?: boolean;
    scoreStr?: string;
    reason?: Reason;
}
export interface Reason {
    short?: Short;
    shortKey?: ShortKey;
    long?: Long;
    longKey?: LongKey;
}
export declare enum Long {
    Cancelled = "Cancelled",
    FullTime = "Full-Time",
    Postponed = "Postponed"
}
export declare enum LongKey {
    Cancelled = "cancelled",
    Finished = "finished",
    Postponed = "postponed"
}
export declare enum Short {
    Can = "Can",
    Ft = "FT",
    Pp = "PP"
}
export declare enum ShortKey {
    CancelledShort = "cancelled_short",
    FulltimeShort = "fulltime_short",
    PostponedShort = "postponed_short"
}
export declare class Convert {
    static toMatches(json: string): Matches;
    static matchesToJson(value: Matches): string;
    static toLeague(json: string): League;
    static leagueToJson(value: League): string;
    static toMatch(json: string): Match;
    static matchToJson(value: Match): string;
    static toAway(json: string): Away;
    static awayToJson(value: Away): string;
    static toStatus(json: string): Status;
    static statusToJson(value: Status): string;
    static toReason(json: string): Reason;
    static reasonToJson(value: Reason): string;
}
