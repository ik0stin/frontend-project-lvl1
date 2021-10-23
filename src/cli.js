import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const sayYournName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${sayYournName}!`);
};

export default startGame;
