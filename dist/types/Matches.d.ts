export interface Matches {
    leagues: League[];
    userSettings: null;
    date: string;
}
export interface League {
    ccode: string;
    id: number;
    primaryId: number;
    name: string;
    matches: Match[];
    internalRank: number;
    liveRank: number;
    simpleLeague: boolean;
    parentLeagueId?: number;
    isGroup?: boolean;
    groupName?: string;
    parentLeagueName?: string;
}
export interface Match {
    id: number;
    leagueId: number;
    time: string;
    home: Away;
    away: Away;
    statusId: number;
    tournamentStage: string;
    status: Status;
    timeTS: number;
    tv: null;
}
export interface Away {
    id: number;
    score: number;
    name: string;
}
export interface Status {
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    scoreStr: string;
    startDateStr: StartDateStr;
    reason: Reason;
}
export interface Reason {
    short: Short;
    long: Long;
}
export declare enum Long {
    FullTime = "Full-Time"
}
export declare enum Short {
    Ft = "FT"
}
export declare enum StartDateStr {
    Sep202020 = "Sep 20, 2020"
}
export declare class Convert {
    static toMatches(json: string): Matches;
    static matchesToJson(value: Matches): string;
}
