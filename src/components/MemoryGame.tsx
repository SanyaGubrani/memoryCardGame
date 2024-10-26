import React from "react";
import { Link } from "react-router-dom";
import { Character, GameLevel } from "@/types";
import ScoreBoard from "@/components/ScoreBoard";
import Card from "@/components/Card";
import { useMemoryGame } from "@/hooks/useMemoryGame";
import GameHeading from "@/components/GameHeading";
import Result from "./Result";
import { motion } from "framer-motion";
import { Undo2Icon } from "lucide-react";

interface MemoryGameProps {
    characters: Character[];
    gameLevel: GameLevel;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const MemoryGame: React.FC<MemoryGameProps> = ({ characters, gameLevel }) => {
    const {
        score,
        bestScore,
        characters: gameCharacters,
        isFlipped,
        handleCardClick,
        gameResult,
        handleCloseResult,
        resetGame,
    } = useMemoryGame(characters, gameLevel);

    const handlePlayAgain = () => {
        resetGame();
    };

    const headingContent = (
        <div className="flex items-center justify-center gap-2">
            <Undo2Icon className="inline-block mr-2 cursor-pointer align-text-bottom size-12" />
            {`${gameLevel.name}`}
        </div>
    );

    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="md:w-full space-y-7 gap-5 md:flex items-center justify-between p-6">
                    <Link to="/">
                        <GameHeading
                            headingText={headingContent}
                            className="shadow-xl shadow-rose-400/50"
                        />
                    </Link>
                    <ScoreBoard score={score} bestScore={bestScore} />
                </div>
                <motion.div
                    className="flex items-center justify-center gap-7 p-16 flex-wrap"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {gameCharacters.map((char, index) => (
                        <Card
                            key={index}
                            character={char}
                            isFlipped={isFlipped}
                            onCardClick={() => handleCardClick(char)}
                        />
                    ))}
                    {gameResult && (
                        <Result
                            isWin={gameResult.isWin}
                            onClose={handleCloseResult}
                            gameLevel={gameLevel.name}
                            onPlayAgain={handlePlayAgain}
                        />
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MemoryGame;
