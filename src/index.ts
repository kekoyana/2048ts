import Board from './board';
import readline from 'readline';

readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/* eslint-disable @typescript-eslint/no-explicit-any*/
readline.question('What is your name? ', (answer: any) => {
  console.log(`Hello, ${answer}!`);
  readline.close();
});

const board = new Board();
console.log(board.to_s());