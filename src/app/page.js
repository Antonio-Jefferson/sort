'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const percentages = [5, 10, 15, 20, 25, 30, 35, 40, 50]; // Porcentagens possíveis
  const [currentNumber, setCurrentNumber] = useState(1); // Número atual durante a rolagem
  const [isRolling, setIsRolling] = useState(false); // Controla o estado de rolagem
  const [finalBonus, setFinalBonus] = useState(null); // Armazena o resultado final do sorteio

  const rollBonus = () => {
    setIsRolling(true);
    setFinalBonus(null); // Reseta o bônus final

    // Sorteia um dos números da lista de porcentagens
    const chosenPercentage = percentages[Math.floor(Math.random() * percentages.length)];
    console.log("Número sorteado:", chosenPercentage); // Para fins de depuração

    // Inicia a rolagem
    const rollSpeed = 50; // Velocidade da rolagem em milissegundos
    let currentRoll = 1;

    const rollInterval = setInterval(() => {
      setCurrentNumber(currentRoll); // Atualiza o número atual

      // Se o número atual for igual ao número sorteado, para a rolagem
      if (currentRoll === chosenPercentage) {
        clearInterval(rollInterval);
        setFinalBonus(chosenPercentage); // Define o número sorteado
        setIsRolling(false); // Para a animação
      } else {
        currentRoll++; // Incrementa o número atual
      }
    }, rollSpeed); // Controla a velocidade da rolagem
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl font-bold mb-8">Sorteio de Bônus</h1>

      <div className="flex flex-col items-center">
        {/* Exibir o número durante a rolagem ou o resultado final */}
        <div className="relative w-40 h-40 flex items-center justify-center border-4 border-gray-300 rounded-lg">
          {finalBonus !== null ? (
            <div className="text-6xl font-bold text-green-600">
              {finalBonus}%
            </div>
          ) : (
            <div className="text-6xl font-bold text-gray-800">
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
