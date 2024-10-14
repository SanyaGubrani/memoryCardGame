import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GamePage from "@/pages/GamePage";
import { GAME_LEVELS } from "@/constants";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {GAME_LEVELS.map((level) => (
                    <Route
                        key={level.name}
                        path={level.path}
                        element={<GamePage />}
                    />
                ))}
            </Routes>
        </Router>
    );
};

export default App;
