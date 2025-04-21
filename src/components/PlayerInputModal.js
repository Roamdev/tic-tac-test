import React, { useState } from 'react';

export default function PlayerInputModal({ onSubmit }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(player1, player2);
    document.querySelector('.modal').style.opacity = '0';
  };

  return (
    <div className="modal modal-visible">
      <form onSubmit={handleSubmit} className="modal-form">
        <h2>Enter Player Names</h2>
        <label>
          <span>Player 1 Name: </span>
          <input type="text" value={player1} onChange={(e) => setPlayer1(e.target.value)} required />
        </label>
        <label>
          <span>Player 2 Name: </span>
          <input type="text" value={player2} onChange={(e) => setPlayer2(e.target.value)} required />
        </label>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}
