import Board from './board';
import { VoidExpression } from 'typescript';
const rls = require('readline-sync');

function game(){
  const input: string = wait_input();
  switch (input) {
    case 'q':
      board.move_left();
      break;
    case 'w':
      board.move_up();
      break;
    case 'e':
      board.move_down();
      break;
    case 'r':
      board.move_right();
      break;
  }
  print();
}

function wait_input(): string{
  const input = rls.question('').split('')[0]
  return input;
}

function print(): void {
  console.clear();
  console.log(board.to_s());
}

var board = new Board();
print();
while (true) { game() };
