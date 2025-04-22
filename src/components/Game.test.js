import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Game from './Game';

it('declares the first player as the winner', () => {
  render(<Game />);

  // Enter player names
  fireEvent.change(screen.getByLabelText(/Player 1 Name/i), { target: { value: 'White' } });
  fireEvent.change(screen.getByLabelText(/Player 2 Name/i), { target: { value: 'Black' } });
  fireEvent.click(screen.getByText(/Start Game/i));

  const squares = screen.getAllByRole('button');

  // Simulate a winning move for the first player
  fireEvent.click(squares[0]); // X
  fireEvent.click(squares[3]); // O
  fireEvent.click(squares[1]); // X
  fireEvent.click(squares[4]); // O
  fireEvent.click(squares[2]); // X - winning move

  expect(screen.getByText('Winner: White')).toBeInTheDocument();
});

it('declares the second player as the winner', () => {
  render(<Game />);

  // Enter player names
  fireEvent.change(screen.getByLabelText(/Player 1 Name/i), { target: { value: 'White' } });
  fireEvent.change(screen.getByLabelText(/Player 2 Name/i), { target: { value: 'Black' } });
  fireEvent.click(screen.getByText(/Start Game/i));

  const squares = screen.getAllByRole('button');

  // Simulate a winning move for the second player
  fireEvent.click(squares[0]); // X
  fireEvent.click(squares[3]); // O
  fireEvent.click(squares[1]); // X
  fireEvent.click(squares[4]); // O
  fireEvent.click(squares[6]); // X
  fireEvent.click(squares[5]); // O - winning move

  expect(screen.getByText('Winner: Black')).toBeInTheDocument();
});
