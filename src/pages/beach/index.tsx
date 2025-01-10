export default function BeachPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-300">
      <header className="w-full bg-sky-500 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">
          Welcome to the Beach!
        </h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow space-y-6">
        <p className="text-lg text-gray-800">
          Feel the warmth of the sun and the gentle breeze of the ocean 🌊🌊
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Explore
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Relax
          </button>
        </div>
      </main>
      <footer className="w-full bg-sky-500 text-white py-4 text-center">
        © 2025 Beach Lovers. All rights reserved.
      </footer>
    </div>
  );
}