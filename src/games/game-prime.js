/* eslint-disable max-len */
import newGame from '../index.js';

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

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameQuestionAnswer = () => {
  const rundomNumber = Math.floor(Math.random() * 100);
  const question = `${rundomNumber}`;
  const answer = isPrime(rundomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const brainPrime = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainPrime;
