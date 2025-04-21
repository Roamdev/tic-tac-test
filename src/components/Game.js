import React, { useState } from 'react';
import Board from './Board';
import PlayerInputModal from './PlayerInputModal';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playerNames, setPlayerNames] = useState({ player1: 'Player 1', player2: 'Player 2' });
  const [showModal, setShowModal] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setShowModal(true);
  }

  function handlePlayerNames(player1, player2) {
    setPlayerNames({ player1, player2 });
    setShowModal(false);
  }

  const moves = history.map((squares, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      {showModal && <PlayerInputModal onSubmit={handlePlayerNames} />}
      <div className="game-container">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} playerNames={playerNames} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
      <button className="reset-button" onClick={() => handleReset()}>Reset Game</button>
    </div>
  );
} 