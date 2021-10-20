/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameQuestionAnswer = () => {
  const maxNumForRundomNumber = 100;
  const rundomNumber = Math.floor(Math.random() * maxNumForRundomNumber);
  const question = rundomNumber;
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainEven;
