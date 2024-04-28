import React from "react";
import Square from "./Square";

function Board({ xIsNext, squares, onPlay }) {
  function handleSquareClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "O";
    } else {
      nextSquares[i] = "X";
    }
    onPlay(nextSquares);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return "Draw";
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner === "Draw" ? "Draw" : "Winner: " + winner;
  } else {
    status = "Next player: " + (!xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} OnSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} OnSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} OnSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} OnSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} OnSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} OnSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} OnSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}
export default Board;
