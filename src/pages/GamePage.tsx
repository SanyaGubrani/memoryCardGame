import React from "react";
import { useParams, Navigate } from "react-router-dom";
import MemoryGame from "../components/MemoryGame";
import { GAME_LEVELS } from "../constants";
import characters from "../characters";

const GamePage: React.FC = () => {
    const { level } = useParams<{ level: string }>();

    if (!level) {
        return <Navigate to="/" replace />;
    }

    const gameLevel = GAME_LEVELS.find((lev) => lev.path === level);

    if (!gameLevel) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <h1>{gameLevel.name} Level</h1>
            <MemoryGame gameLevel={gameLevel} characters={characters} />
        </div>
    );
};

export default GamePage;
