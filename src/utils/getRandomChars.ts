import { Character } from "@/types";

export const getRandomChars = ( list: Character[], numberOfCharacters: number ): Character[] => {
    const chars: Character[] = [];
    while (chars.length < numberOfCharacters) {
        const randomIndex = Math.floor(Math.random() * list.length); 
        const randomChar = list[randomIndex]; 

        if (!chars.includes(randomChar)) {
            chars.push(randomChar);
        }
    }
    return chars;
};

