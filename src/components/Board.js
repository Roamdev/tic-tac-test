import React from 'react';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';

export default function Board({ xIsNext, squares, onPlay, playerNames }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? 'Winner: ' + (winner === 'X' ? playerNames.player1 : playerNames.player2)
    : 'Next player: ' + (xIsNext ? `${playerNames.player1} (X)` : `${playerNames.player2} (O)`);

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {[0, 1, 2].map(i => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map(i => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map(i => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}
