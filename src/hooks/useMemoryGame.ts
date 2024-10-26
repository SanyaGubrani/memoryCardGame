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
    const [gameResult, setGameResult] = useState<{
        isWin: boolean;
        show: boolean;
    } | null>(null);
    const [isFirstPlay, setIsFirstPlay] = useState(true);

    useEffect(() => {
        resetGame();
    }, [allCharacters, gameLevel]);

    const resetGame = () => {
        const randomChars = getRandomChars(
            allCharacters,
            gameLevel.numberOfCards
        );
        setCharacters(randomChars.map((char) => ({ ...char, clicked: false })));
        setScore(0);
        setGameResult(null);
    };

    const handleCardClick = (clickedChar: Character) => {
        if (clickedChar.clicked) {
            setGameResult({ isWin: false, show: true });
            setIsFirstPlay(false);
        } else {
            const newScore = score + 1;
            setScore(newScore);
            
            if (isFirstPlay || newScore > bestScore) {
                setBestScore(newScore);
            }
            
            setCharacters((prevChars) =>
                prevChars.map((char) =>
                    char.id === clickedChar.id
                        ? { ...char, clicked: true }
                        : char
                )
            );

            setIsFlipped(true);
            setTimeout(() => {
                setIsFlipped(false);
                setCharacters(shuffleArray);
            }, 1000);

            if (newScore === gameLevel.numberOfCards) {
                setGameResult({ isWin: true, show: true });
                setIsFirstPlay(false);
            }
        }
    };

    const handleCloseResult = () => {
        setGameResult(null);
        resetGame();
    };

    return {
        score,
        bestScore,
        characters,
        isFlipped,
        handleCardClick,
        gameResult,
        handleCloseResult,
        resetGame,
    };
};