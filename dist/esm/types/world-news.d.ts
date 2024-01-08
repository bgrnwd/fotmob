export interface WorldNews {
    imageUrl?: string;
    title?: string;
    gmtTime?: Date;
    sourceStr?: SourceStr;
    lead?: string;
    sourceIconUrl?: string;
    page?: Page;
}
export interface Page {
    url?: string;
}
export type SourceStr = "FotMob";
export declare class Convert {
    static toWorldNews(json: string): WorldNews;
    static worldNewsToJson(value: WorldNews): string;
    static toPage(json: string): Page;
    static pageToJson(value: Page): string;
}
