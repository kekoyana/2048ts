import Board from '../src/board';

test('constructor', () => {
  // 乱数を固定する
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  let board = new Board();
  expect(board.tiles).toStrictEqual([[4,0,0,4],[4,0,0,0],[0,0,0,0],[0,0,0,0]])
});
