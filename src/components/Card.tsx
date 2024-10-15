import { ReactNode, useState } from "react";
import Tilt from "react-parallax-tilt";
import backCardImage from "../assets/characters/backCardImage.jpg";
import { Character } from "../types";

interface CardProps {
    character: Character;
    isFlipped: boolean;
    onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ character, isFlipped, onCardClick }) => {
    return (
        <div
            onClick={onCardClick}
            className="flex items-center justify-between"
        >
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.8}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="20px"
                tiltMaxAngleX={10}
                tiltMaxAngleY={20}
                className="cursor-pointer"
            >
                <div
                    className={`relative flex items-center justify-center w-64 h-80 p-2 rounded-lg
                       bg-orange-950 shadow-xl shadow-rose-700/50 transition-transform duration-1000 
                       preserve-3d bg-opacity-60 ${
                           isFlipped ? "rotate-y-180" : ""
                       }`}
                >
                    {/* Front of the Card */}
                    <div className="absolute flex items-center justify-center backface-hidden">
                        <img
                            src={character.src}
                            alt={`Character ${character.id}`}
                            className="w-56 h-72 rounded-lg text-white text-center"
                        />
                    </div>

                    {/* Back of the Card */}
                    <div
                        className="absolute bg-stone-700 backface-hidden rotate-y-180 flex
                     justify-center items-center"
                    >
                        <img src={backCardImage} className="w-56 h-72" alt="Card Back"/>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default Card;
