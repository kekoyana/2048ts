export default class Board{
  tiles: number[][];

  constructor() {
    this.tiles = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    for(let i = 0; i < 2; i++) {
      this.add_right_tile();
    }
    this.move_left();
  }

  public to_s(): string {
    //for (let tile_line of this.titles) {
    return this.tiles.map(tile_line => {
      return tile_line.join(' | ');
    }
    ).join('\n');
  }

  public move_left(): void{
    const tmp_tiles = this.tiles.join(',');
    this.tiles = this.tile_move(this.tiles);
    if(this.tiles.join(',') == tmp_tiles) return;
    this.add_right_tile();
  }

  private add_right_tile(): boolean {
    const tile_num: number = Math.random() < 0.5 ? 2 : 4;
    const shuffle = [0, 1, 2, 3].sort(() => { return Math.random() - 0.5; });
    for (const i of shuffle) {
      if(this.tiles[i][3] == 0) {
        this.tiles[i][3] = tile_num;
        return true;
      }
    }
    return false;
  }

  private tile_move(board_tiles: number[][]): number[][] {
    return board_tiles.map(tiles => {
      let tmp_tiles = tiles.filter(i => i != 0);
      tmp_tiles = this.tile_lines_sum(tmp_tiles);
      tmp_tiles = tmp_tiles.filter(i => i != 0);
      while(tmp_tiles.length < 4){
        tmp_tiles.push(0);
      }
      return tmp_tiles;
    });
  }

  private tile_lines_sum(tile_lines: number[]): number[] {
    for(let i=0;i<3;i++){
      if(tile_lines[i] == undefined || tile_lines[i] == 0) continue;
      if(tile_lines[i] == tile_lines[i + 1]){
        tile_lines[i] *= 2;
        tile_lines[i + 1] = 0;
      }
    }
    return tile_lines;
  }
}