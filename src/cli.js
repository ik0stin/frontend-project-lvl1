import readlineSync from 'readline-sync';

const startGame = () => {
  const sayYournName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${sayYournName}!`);
};

export default startGame;
