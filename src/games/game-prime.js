/* eslint-disable max-len */
import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameQuestionAnswer = () => {
  const startNumber = 1;
  const maxNumForRundomNumber = 100;
  const rundomNumber = generateRandom(startNumber, maxNumForRundomNumber);
  const question = `${rundomNumber}`;
  const answer = isPrime(rundomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainPrime;
