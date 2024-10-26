import Tilt from "react-parallax-tilt";
import backCardImage from "@/assets/characters/backCardImage.jpg";
import { Character } from "@/types";
import { motion } from "framer-motion";
import cardbg from '@/assets/cardbg.jpeg'

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

interface CardProps {
    character: Character;
    isFlipped: boolean;
    onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ character, isFlipped, onCardClick }) => {
    return (
        <motion.div
            onClick={onCardClick}
            className="flex items-center justify-between"
            variants={childVariant}
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
                    className={`relative flex items-center justify-center w-64 h-[21rem] p-2 rounded-lg
                        transition-transform duration-1000 border-4 border-stone-800 shadow-lg shadow-stone-800
                       preserve-3d ${
                           isFlipped ? "rotate-y-180" : ""
                       }`}
                    style={{ 
                        backgroundImage: `url(${cardbg})`
                    }}
                >
                    {/* Front of the Card */}
                    <div className="absolute flex items-center justify-center backface-hidden">
                        <img
                            src={character.src}
                            alt={`Character ${character.id}`}
                            className="w-56 h-[19rem] rounded-lg border-4 border-orange-300"
                        />
                    </div>

                    {/* Back of the Card */}
                    <div
                        className="absolute bg-stone-700 backface-hidden rotate-y-180 flex
                     justify-center items-center"
                    >
                        <img
                            src={backCardImage}
                            className="w-56 h-[19rem]"
                            alt="Card Back"
                        />
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default Card;
