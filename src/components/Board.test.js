import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Board from './Board';

const playerNames = { player1: 'White', player2: 'Black' };

it('renders all nine squares', () => {
  render(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={() => {}} playerNames={playerNames} />);
  const squares = screen.getAllByRole('button');
  expect(squares).toHaveLength(9);
});

it('calls handleClick and updates state on square click', () => {
  const handlePlay = jest.fn();
  render(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={handlePlay} playerNames={playerNames} />);
  const squares = screen.getAllByRole('button');
  fireEvent.click(squares[0]);
  expect(handlePlay).toHaveBeenCalledTimes(1);
});

it('displays the correct player or winner status', () => {
  const { rerender } = render(<Board xIsNext={true} squares={Array(9).fill(null)} onPlay={() => {}} playerNames={playerNames} />);
  expect(screen.getByText('Next player: White (X)')).toBeInTheDocument();

  rerender(<Board xIsNext={false} squares={['X', 'X', 'X', null, null, null, null, null, null]} onPlay={() => {}} playerNames={playerNames} />);
  expect(screen.getByText('Winner: White')).toBeInTheDocument();
});
