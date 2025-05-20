import { useEffect, useRef } from "react";

function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-400 via-sky-300 to-purple-400 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-gradient bg-[length:400%_400%]">
        </div>
    );
}


export default BackgroundGradient;
