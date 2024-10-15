import React from "react";
import { Character, GameLevel } from "@/types";
import ScoreBoard from "@/components/ScoreBoard";
import Card from "@/components/Card";
import { useMemoryGame } from "@/hooks/useMemoryGame";

interface MemoryGameProps {
    characters: Character[];
    gameLevel: GameLevel;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ characters, gameLevel }) => {
    const {
        score,
        bestScore,
        characters: gameCharacters,
        isFlipped,
        handleCardClick,
    } = useMemoryGame(characters, gameLevel);

    return (
        <div>
            <ScoreBoard score={score} bestScore={bestScore}/>
            <div className="flex items-center justify-center gap-5 p-16 flex-wrap">
                {gameCharacters.map((char, index) => (
                    <Card 
                    key={index}
                    character={char}
                    isFlipped={isFlipped}
                    onCardClick={() => handleCardClick(char)}
                    />
                ))}
            </div>
        </div>
    )
};

export default MemoryGame;
