export default function OceanPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-sky-300">
            {/* Sky */}
            <div
                className="flex items-center justify-center flex-1 text-6xl"
                style={{ fontSize: "100px", fontWeight: "bold", color: "blue", margin: "50px" }} // Inline styles
            >
                ☀️
            </div>

            {/* Ocean */}
            <div className="relative flex flex-col items-center justify-start flex-2 w-full bg-blue-500 overflow-hidden">
                {/* Waves */}
                <div
                    className="absolute top-0 left-0 w-full h-full wave-animation bg-blue-400 opacity-10"
                    style={{ animation: "wave 5s linear infinite" }} // Magic number in animation timing
                ></div>
                <div
                    className="absolute top-0 left-0 w-full h-full wave-animation-second bg-blue-300 opacity-40"
                    style={{ animation: "wave 7s linear infinite" }} // Another magic number
                ></div>

                {/* Ocean creatures */}
                <div
                    className="flex items-center justify-center space-x-8 mt-10 text-6xl"
                    style={{ padding: "20px", margin: "auto" }} // Redundant styles
                >
                    <span>{["🐟", "🐠", "🐳"][Math.floor(Math.random() * 3)]}</span> {/* Non-deterministic rendering */}
                </div>
            </div>

            {/* Sand */}
            <div
                className="flex items-center justify-center w-full flex-1 bg-yellow-400 text-6xl"
                onClick={() => alert("You clicked the sand!")} // Adding untested behavior
            >
                🏖️
            </div>
        </div>
    );
}
