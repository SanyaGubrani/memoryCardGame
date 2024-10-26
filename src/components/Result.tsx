import { X, ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

interface ResultProps {
    isWin: boolean;
    onClose: () => void;
    onPlayAgain: () => void;
    gameLevel: string;
}

export default function Result({
    isWin = true,
    onClose,
    onPlayAgain,
}: ResultProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
            <div className="w-full max-w-md overflow-hidden bg-gradient-to-br from-red-900 to-yellow-900 text-yellow-100 shadow-lg shadow-yellow-100 rounded-xl p-3">
                <div className="relative pb-2">
                    <button
                        className="absolute right-2 top-2 text-yellow-100 hover:text-yellow-200"
                        onClick={onClose}
                    >
                        <X className="size-6" />
                        <span className="sr-only">Close</span>
                    </button>
                    <div className="text-center text-3xl font-bold pt-4 tracking-wider">
                        {isWin ? "You Won :)" : "You Lost :( "}
                    </div>
                </div>
                <div className="p-4">
                    <div className="mt-6 flex items-center justify-center space-x-5">
                        <Link to="/">
                            <button className="w-32 whitespace-nowrap font-medium tracking-wider bg-stone-800/50 text-yellow-100 hover:bg-rose-700 hover:text-yellow-100 px-3 py-3 rounded-lg flex items-center justify-center">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Menu
                            </button>
                        </Link>
                        <button
                            onClick={onPlayAgain}
                            className="w-36 whitespace-nowrap font-medium tracking-wider bg-yellow-800 text-yellow-100 hover:bg-yellow-700 hover:text-yellow-200 px-3 py-3 rounded-lg flex items-center justify-center"
                        >
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
