/* eslint-disable max-len */
import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const gameQuestionAnswer = () => {
  const startNumber = 1;
  const maxNumForRundomNumber = 100;
  const rundomNumberFirst = generateRandom(startNumber, maxNumForRundomNumber);
  const rundomNumberSecond = generateRandom(startNumber, maxNumForRundomNumber);
  const question = `${rundomNumberFirst} ${rundomNumberSecond}`;

  const answer = String(greatestCommonDivisor(rundomNumberFirst, rundomNumberSecond));
  return [question, answer];
};

const brainGcd = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainGcd;
