export interface Transfers {
    transfers: Transfer[];
    hits: number;
}
export interface Transfer {
    name: string;
    playerId: number;
    position: Position | null;
    transferDate: Date;
    transferText: (null | string)[];
    fromClub: string;
    fromClubId: number;
    toClub: string;
    toClubId: number;
    fee: Fee | null;
    transferType: TransferType;
    contractExtension: boolean;
    onLoan: boolean;
    fromDate: Date;
    toDate?: Date;
    marketValue?: string;
}
export interface Fee {
    feeText: string;
    localizedFeeText: string;
    value?: string;
}
export interface Position {
    label: string;
    key: string;
}
export interface TransferType {
    text: string;
    localizationKey: string;
}
export declare class Convert {
    static toTransfers(json: string): Transfers;
    static transfersToJson(value: Transfers): string;
}
