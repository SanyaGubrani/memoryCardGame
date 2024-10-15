import React from "react";

interface ScoreBoardProps {
    score: number;
    bestScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, bestScore }) => {
    return (
        <div
            className="flex flex-col items-center justify-center p-10 text-2xl font-semibold
     text-rose-200 gap-5 tracking-wider border-4 border-rose-950/50 border-opacity-75"
        >
            <div>
                Score:{" "}
                <span className="text-rose-400 tracking-wide font-bold">
                    {score}
                </span>
            </div>
            <div>
                Best Score:{" "}
                <span className="text-rose-400 tracking-wide font-bold">
                    {bestScore}
                </span>
            </div>
        </div>
    );
};

export default ScoreBoard;
