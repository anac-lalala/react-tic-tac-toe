import { useState } from "react";
const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export const Gameboard = () => {
  const [game, setGame] = useState(initialGameboard);

  function handleSelection(rowIndex, colIndex) {
    setGame((prev) => {
      const newGame = [...prev.map((innerPrev) => [...innerPrev])];
      newGame[rowIndex][colIndex] = "X";
      return newGame;
    });
  }
  return (
    <ol id="game-board">
      {game.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${rowIndex}-${colIndex}`}>
                <button onClick={() => handleSelection(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
