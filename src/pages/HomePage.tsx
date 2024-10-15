import React from "react";
import { Link } from "react-router-dom";
import GameHeading from "../components/GameHeading";
import { GAME_LEVELS } from "../constants";

const HomePage: React.FC = () => {
    const buttonStyles = `text-xl md:text-3xl text-center bg-gradient-to-r
                        from-stone-900/70 to-red-900/70 text-rose-100 font-sans font-bold
                        whitespace-nowrap w-32 md:w-56 tracking-widest px-6 py-4 md:py-6 m-3
                        md:m-8 rounded-full shadow-xl shadow-rose-400/70 hover:shadow-xl 
                        hover:shadow-rose-500/70 hover:from-red-900/70 hover:to-stone-950/70
                        hover:scale-95 transition-all duration-300`;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <GameHeading headingText="Memory Game" />
            <div className="flex flex-wrap justify-center">
                {GAME_LEVELS.map((level) => (
                    <Link
                        key={level.path}
                        to={level.path}
                        className={buttonStyles}
                    >
                        {level.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;