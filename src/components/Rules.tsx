import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function Rules() {
    const [isOpen, setIsOpen] = useState(false);
    const popoutRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (popoutRef.current && !popoutRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="inline-block">
            <button
                className="text-2xl font-medium bg-gradient-to-r from-red-500/60 to-yellow-500/60 text-rose-100 border-none hover:from-red-800 hover:to-yellow-700 px-5 py-2 rounded-2xl shadow-lg shadow-rose-700 flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <HelpCircle className="size-6 mr-2" />
                How to Play
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={popoutRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 p-5 w-72 bg-gradient-to-br from-red-600/50 to-yellow-600/60 rounded-lg shadow-lg"
                    >
                        <h3 className="text-xl text-start font-semibold text-white">
                            Do not click on a card twice
                        </h3>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}