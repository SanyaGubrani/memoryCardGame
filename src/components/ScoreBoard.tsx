import React from "react";
import { motion } from "framer-motion";

interface ScoreBoardProps {
    score: number;
    bestScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, bestScore }) => {
    return (
        <motion.div
            className="w-full max-w-xs bg-gradient-to-r from-red-900/80 to-yellow-900/80 rounded-lg shadow-xl shadow-rose-400/50 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex justify-between items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-1">
                        Score
                    </h2>
                    <motion.span
                        key={score}
                        className="text-3xl font-bold text-white block"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                        }}
                    >
                        {score}
                    </motion.span>
                </div>

                <div className="h-14 w-px bg-yellow-500/60 mx-2" />

                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-yellow-300 mb-1">
                        Best Score
                    </h2>
                    <motion.span
                        key={bestScore}
                        className="text-3xl font-bold text-white block"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                        }}
                    >
                        {bestScore}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
};

export default ScoreBoard;
