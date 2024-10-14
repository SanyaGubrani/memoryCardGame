import { Character } from "@/types";

type Props = {
    list: Character[];
    numberOfCharacters: number;
};

const getRandomChars = ({ list, numberOfCharacters }: Props): Character[] => {
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

export default getRandomChars;
