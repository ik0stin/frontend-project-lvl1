import readlineSync from 'readline-sync';

const roundsCount = 3;

const newGame = (gameQuestion, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer !== answer) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${name}!`);
};

export default newGame;
