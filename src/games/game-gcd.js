/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const gameQuestionAnswer = () => {
  const rundomNumberFirst = Math.floor(Math.random() * 100);
  const rundomNumberSecond = Math.floor(Math.random() * 100);
  const question = `${rundomNumberFirst} ${rundomNumberSecond}`;

  const answer = String(greatestCommonDivisor(rundomNumberFirst, rundomNumberSecond));
  return [question, answer];
};

const brainGcd = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainGcd;
