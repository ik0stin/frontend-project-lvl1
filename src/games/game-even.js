/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const rundomNumber = Math.floor(Math.random() * 100);
  const question = `${rundomNumber}`;
  const answer = [];

  return [question, answer];
};

    // console.log(`Quesion: ${rundomNumber}`);
    // const yourAnswer = readlineSync.question('Your answer: ');

    // if (rundomNumber % 2 === 0 && yourAnswer === 'yes') {
    //   console.log('Correct');
    // } else if (rundomNumber % 2 !== 0 && yourAnswer === 'no') {
    //   console.log('Correct');
    // } else if (rundomNumber % 2 === 0 && yourAnswer === 'no') {
    //   return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
    // } else {
    //   return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    // }


const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainEven;

// import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// const name = readlineSync.question('May I have your name? ');

// export default () => {
//   console.log(`Hello, ${name}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');

//   const brainEven = () => {
//     for (let i = 0; i < 3; i += 1) {
//       const rundomNumber = Math.floor(Math.random() * 100);

//       console.log(`Quesion: ${rundomNumber}`);
//       const yourAnswer = readlineSync.question('Your answer: ');

//       if (rundomNumber % 2 === 0 && yourAnswer === 'yes') {
//         console.log('Correct');
//       } else if (rundomNumber % 2 !== 0 && yourAnswer === 'no') {
//         console.log('Correct');
//       } else if (rundomNumber % 2 === 0 && yourAnswer === 'no') {
//         return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
//       } else {
//         return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
//       }
//     }
//     return console.log(`Congratulations, ${name}`);
//   };
//   brainEven();
// };
