import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PlayerInputModal from './PlayerInputModal';

it('calls onSubmit with correct player names on form submit', () => {
  const handleSubmit = jest.fn();
  render(<PlayerInputModal onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/Player 1 Name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/Player 2 Name/i), { target: { value: 'Bob' } });
  fireEvent.click(screen.getByText(/Start Game/i));

  expect(handleSubmit).toHaveBeenCalledWith('Alice', 'Bob');
});

it('hides the modal after form submission', () => {
  render(<PlayerInputModal onSubmit={() => {}} />);

  fireEvent.change(screen.getByLabelText(/Player 1 Name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/Player 2 Name/i), { target: { value: 'Bob' } });
  fireEvent.click(screen.getByText(/Start Game/i));

  const modal = screen.getByRole('dialog');
  expect(modal).toHaveStyle('opacity: 0');
});
