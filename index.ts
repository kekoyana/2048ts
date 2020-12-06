class Board{
  tiles: number[][];

  constructor() {
      this.tiles = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
      ];
  }
}

const board = new Board();
console.log(board);