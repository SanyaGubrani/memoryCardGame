export interface Character {
    id: () => string;
    src: string;
    clicked: boolean;
}

export interface GameLevel {
    name: string;
    numberOfCards: number;
    path: string;
}

