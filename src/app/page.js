'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const percentages = [5, 10, 15, 20, 25, 30, 35, 40, 50];
  const [currentNumber, setCurrentNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [finalBonus, setFinalBonus] = useState(null);
  const rollBonus = () => {
    setIsRolling(true);
    setFinalBonus(null);
    let totalRolls = 100;
    const rollSpeed = 50;

    const rollInterval = setInterval(() => {
      setCurrentNumber((prev) => (prev === 100 ? 1 : prev + 1));

      totalRolls--;

      if (totalRolls <= 0) {
        clearInterval(rollInterval);
        const randomIndex = Math.floor(Math.random() * percentages.length);
        setFinalBonus(percentages[randomIndex]);
        setIsRolling(false);
      }
    }, rollSpeed);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Sorteio de Bônus</h1>

      <div className="flex flex-col items-center">
        <div className="relative w-90 h-90 flex items-center justify-center border-4 border-gray-300 rounded-lg">
          {finalBonus !== null ? (
            <div className="text-9xl font-bold text-[#ff541e]">
              {finalBonus}%
            </div>
          ) : (
            <div className="text-9xl font-bold text-gray-800">
              {currentNumber}%
            </div>
          )}
        </div>

        <button
          onClick={rollBonus}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={isRolling}
        >
          Sortear Bônus
        </button>
      </div>
    </main>
  );
}
