import calculateWinner from './calculateWinner';

describe('calculateWinner', () => {
  it('correctly identifies the winner for all winning combinations', () => {
    const winningCombinations = [
      ['X', 'X', 'X', null, null, null, null, null, null],
      [null, null, null, 'X', 'X', 'X', null, null, null],
      [null, null, null, null, null, null, 'X', 'X', 'X'],
      ['X', null, null, 'X', null, null, 'X', null, null],
      [null, 'X', null, null, 'X', null, null, 'X', null],
      [null, null, 'X', null, null, 'X', null, null, 'X'],
      ['X', null, null, null, 'X', null, null, null, 'X'],
      [null, null, 'X', null, 'X', null, 'X', null, null],
    ];

    winningCombinations.forEach((squares) => {
      expect(calculateWinner(squares)).toBe('X');
    });
  });

  it('returns null when there is no winner', () => {
    const noWinner = [
      [null, null, null, null, null, null, null, null, null],
      ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
    ];

    noWinner.forEach((squares) => {
      expect(calculateWinner(squares)).toBeNull();
    });
  });
}); 