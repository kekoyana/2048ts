import Board from '../src/board';

test('constructor', () => {
  let board = new Board();
  expect(board.tiles).toBe([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
});
