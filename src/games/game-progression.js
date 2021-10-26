/* eslint-disable max-len */
import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'What number is missing in the progression?';

const minCount = 1;
const minLength = 5;
const maxCount = 10;

const getArithmeticProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const createProgressionWidthHiddenElement = (progression, element) => {
  const newArr = progression.slice(0);
  const newElement = element;
  newArr[newElement] = '..';
  return newArr.join(' ');
};

const gameQuestionAnswer = () => {
  const firstNumber = generateRandom(minCount, maxCount);
  const randomStep = generateRandom(minCount, maxCount);
  const lengthForProgerssion = generateRandom(minLength, maxCount);
  const rundomHiddenNumber = generateRandom(minCount, lengthForProgerssion);

  const progression = getArithmeticProgression(firstNumber, lengthForProgerssion, randomStep);

  const question = createProgressionWidthHiddenElement(progression, rundomHiddenNumber);

  const getHiddenElement = firstNumber + (randomStep * rundomHiddenNumber);

  const answer = String(getHiddenElement);
  return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
