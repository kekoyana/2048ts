export default class Board{
  tiles: number[][];

  constructor() {
      this.tiles = [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
      ];
      this.add_right_tile()
  }

  public add_right_tile(): boolean {
    let tile_num: number = Math.random() < 0.5 ? 2 : 4;
    let shuffle = [0, 1, 2, 3].sort(() => { return Math.random() - 0.5 })
    for (let i of shuffle) {
      if(this.tiles[i][3] == 0) {
        this.tiles[i][3] = tile_num;
        return true;
      }
    }
    return false;
  }
}