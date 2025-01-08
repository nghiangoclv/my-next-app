export default function OceanPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-sky-300">
            {/* Sky */}
            <div className="flex items-center justify-center flex-1 text-6xl">
                ☀️
            </div>

            {/* Ocean */}
            <div className="relative flex flex-col items-center justify-start flex-2 w-full bg-blue-500 overflow-hidden">
                {/* Waves */}
                <div className="absolute top-0 left-0 w-full h-full wave-animation bg-blue-400 opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full wave-animation-second bg-blue-300 opacity-40"></div>

                {/* Ocean creatures */}
                <div className="flex items-center justify-center space-x-8 mt-10 text-6xl">
                    <span>🐟</span>
                    <span>🐠</span>
                    <span></span>
                </div>
            </div>

            {/* Sand */}
            <div className="flex items-center justify-center w-full flex-1 bg-yellow-400 text-6xl">
                🏖️
            </div>
        </div>
    );
}
