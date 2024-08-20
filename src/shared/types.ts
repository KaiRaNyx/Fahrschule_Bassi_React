export enum SelectedPage {
    Home = "home",
    Fahrschule = "fahrschule",
    VKU = "vku",
    Theorie = "theorie",
    Preise = "preise",
    UeberMich = "übermich",
    MeineAutos = "meineautos",
    Kontakt = "kontakt",
    Strassenverkehrsamt = "strassenverkehrsamt"
}

export interface KeypointType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface MeineAutosType {
    name: string;
    ps?: string;
    description: string;
    image: string;
}