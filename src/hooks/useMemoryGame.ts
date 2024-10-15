import { useState, useEffect } from "react";
import { Character, GameLevel } from "@/types";
import { getRandomChars } from "@/utils/getRandomChars";
import { shuffleArray } from "@/utils/shuffleArray";

export const useMemoryGame = (
    allCharacters: Character[],
    gameLevel: GameLevel
) => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        resetGame();
    }, [allCharacters, gameLevel]);

    const resetGame = () => {
        const randomChars = getRandomChars(
            allCharacters,
            gameLevel.numberOfCards
        );
        setCharacters(randomChars.map((char) => ({ ...char, clicked: false }))); //card click set to false inititally or on reset
        setScore(0);
    };

    const handleCardClick = (clickedChar: Character) => {
        if (clickedChar.clicked) {
            alert("you lost");
            setBestScore((prevBestScore) => Math.max(prevBestScore, score));
            resetGame();
        } else {
            const newScore = score + 1;
            setScore(newScore);
            setCharacters((prevChars) =>
                prevChars.map((char) =>
                    char.id === clickedChar.id
                        ? { ...char, clicked: true } //set cards state to clicked
                        : char
                )
            );

            setIsFlipped(true);
            setTimeout(() => {
                setIsFlipped(false);
                setCharacters(shuffleArray);
            }, 1000);

            if (newScore === gameLevel.numberOfCards) {
                alert("you win");
                setBestScore((prevBestScore) =>
                    Math.max(prevBestScore, newScore)
                );
                resetGame();
            }
        }
    };

    return {
        score,
        bestScore,
        characters,
        isFlipped,
        handleCardClick,
    };
};
