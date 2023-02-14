import Board from './board';
import readline from 'readline';
import { VoidExpression } from 'typescript';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function game(){
  const input: string = wait_input();
  switch (input) {
    case 'q':
      board.move_left();
  }
  print();
}

function wait_input(): string{
  rl.question('?', (answer: string) => {
    rl.close();
    return answer.split('')[0];
  });
  return '';
}

function print(): void {
  process.stdout.write("\e[H\e[2J");
//  process.stdout.write(board.to_s);
}

let board = new Board();
print();
game();
