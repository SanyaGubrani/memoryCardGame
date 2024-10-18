import React from "react";
import { Link } from "react-router-dom";
import { Character, GameLevel } from "@/types";
import ScoreBoard from "@/components/ScoreBoard";
import Card from "@/components/Card";
import { useMemoryGame } from "@/hooks/useMemoryGame";
import GameHeading from "@/components/GameHeading";


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
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full space-y-5 gap-5 md:flex items-center justify-between p-6">
                    <Link to="/">
                        <GameHeading
                            headingText=
                            {`${gameLevel.name} Mode`}
                            className="shadow-xl shadow-rose-400/50"
                        />
                    </Link>
                    <ScoreBoard score={score} bestScore={bestScore} />
                </div>
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
        </div>
    );
};

export default MemoryGame;
