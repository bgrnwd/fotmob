export interface LTC {
    events:                Event[];
    areThereAnyHighlights: boolean;
    isAutoCommentary:      boolean;
}

export interface Event {
    teamEvent:          TeamEvent;
    includeInHighLight: boolean;
    key:                string;
    type:               string;
    isSubstitution:     boolean;
    text:               string;
    time:               Time | null;
    clockIconType?:     ClockIconType;
    onlyText:           boolean;
    players:            Player[];
    title?:             Title;
    eventId?:           number;
}

export enum ClockIconType {
    Empty = "Empty",
    Fulltime = "Fulltime",
    Halftime = "Halftime",
}

export interface Player {
    id:         number;
    name:       string;
    teamId:     number;
    teamName:   string;
    profileUrl: string;
}

export enum TeamEvent {
    Away = "away",
    Home = "home",
}

export interface Time {
    main:  string;
    added: null | string;
}

export interface Title {
    key:   string;
    value: string;
}
