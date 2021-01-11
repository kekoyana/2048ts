import Board from './board';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your name? ', (answer: any) => {
  console.log(`Hello, ${answer}!`);
  readline.close();
});

const board = new Board();
console.log(board.to_s());