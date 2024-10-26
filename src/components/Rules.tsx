"use client";

import { useState, useRef, useEffect } from "react";
import { CircleHelpIcon } from "lucide-react";

export default function SimplePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="py-2 px-4 flex items-center justify-center gap-2 bg-yellow-500/70 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
                <h1 className="text-lg md:text-xl tracking-wide font-semibold text-white">How to play</h1>
                <CircleHelpIcon className="size-7 md:size-10 text-rose-100" />
            </button>

            {isOpen && (
                <div
                    ref={popupRef}
                    className="popup absolute z-10 m-2 p-2 md:p-3 bg-white/90 border-4 border-rose-200 rounded-lg shadow-lg"
                >
                    <h2 className="text-base font-semibold text-red-600 mb-1">
                        Memory Check
                    </h2>
                    <p className="text-sm leading-tight md:leading-relaxed font-medium text-stone-800">
                        Make sure you don't click on a card TWICE.{" "}
                    </p>
                </div>
            )}
        </div>
    );
}
