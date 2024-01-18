export interface AllLeagues {
    favourite: null;
    popular: League[];
    international: International[];
    countries: Country[];
    userSettings: null;
}
export interface Country {
    ccode: string;
    name: string;
    leagues: League[];
    localizedName: string;
}
export interface League {
    id: number;
    name: string;
    localizedName: string;
    pageUrl: string;
}
export interface International {
    ccode: string;
    name: string;
    leagues: League[];
    localizedName: string;
}
export type SourceStr = "FotMob";
export declare class Convert {
    static toAllLeagues(json: string): AllLeagues;
    static AllLeaguesToJson(value: AllLeagues): string;
}
