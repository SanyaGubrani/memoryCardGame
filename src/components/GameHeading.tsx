import { motion } from "framer-motion";

type Props = {
    headingText: string;
};

const GameHeading = ({ headingText }: Props) => {
    return (
        <div className="w-full flex justify-center pt-8 px-5">
            <motion.div
                className="relative md:w-1/3 py-5 px-6 bg-gradient-to-br from-red-900/80 to-yellow-900/80 rounded-lg shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black opacity-20"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                    }}
                ></motion.div>
                <motion.h1
                    className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest font-serif text-center text-yellow-100 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
                    animate={{
                        textShadow: [
                            "0 0 7px #FFA500",
                            "0 0 10px #FFA500",
                            "0 0 21px #FFA500",
                            "0 0 42px #FFA500",
                            "0 0 82px #FFA500",
                            "0 0 92px #FFA500",
                            "0 0 102px #FFA500",
                            "0 0 151px #FFA500",
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    }}
                >
                    {headingText}
                </motion.h1>
                {["top", "bottom"].map((edge) => (
                    <motion.div
                        key={edge}
                        className={`absolute ${edge}-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30`}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear",
                        }}
                    ></motion.div>
                ))}
                {["left", "right"].map((edge) => (
                    <motion.div
                        key={edge}
                        className={`absolute top-0 ${edge}-0 w-2 h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30`}
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear",
                        }}
                    ></motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default GameHeading;