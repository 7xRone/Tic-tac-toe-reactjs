import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  function reset() {
    setHistory([Array(9).fill(null)]);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          className="board"
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <button className="reset-btn" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}
export default Game;
