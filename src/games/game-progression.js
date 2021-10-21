/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const randomLength = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const maxCount = 10;

const getArithmeticProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const gameQuestionAnswer = () => {
  const firstNumber = Math.floor(Math.random() * maxCount);
  const randomStep = randomLength(1, maxCount);
  const rundomHiddenNumber = randomLength(1, randomStep - 1);
  const lengthForProgerssion = randomLength(5, maxCount);

  const progression = getArithmeticProgression(firstNumber, lengthForProgerssion, randomStep);
  progression[rundomHiddenNumber] = '..';

  const getHiddenElement = firstNumber + randomStep * rundomHiddenNumber;

  const question = progression.join(' ');
  const answer = String(getHiddenElement);
  return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
