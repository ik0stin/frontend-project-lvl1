/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const gameQuestionAnswer = () => {
  const randomLength = (min, max) => {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };

  const maxNumForFirstNumber = 20;
  let firstNumber = Math.floor(Math.random() * maxNumForFirstNumber);
  const startNumber = firstNumber;
  const startNumberForLength = 1;
  const endNumberForLength = 9;
  const randomStep = randomLength(startNumberForLength, endNumberForLength);
  const rundomHiddenNumber = Math.floor(Math.random() * randomStep);

  const getArithmeticProgression = () => {
    let result = [];
    const startNumberForHiddenNumber = 5;
    const endNumberForHiddenNumber = 10;
    const hiddenElement = '...';
    result.push(String(firstNumber));

    for (let i = 0; i <= randomLength(startNumberForHiddenNumber, endNumberForHiddenNumber); i += 1) {
      let numberOfProgression = firstNumber + randomStep;
      firstNumber = numberOfProgression;
      if (i === rundomHiddenNumber) {
        numberOfProgression = hiddenElement;
      }
      result.push(String(numberOfProgression));
    }

    result = result.join(' ');
    return result;
  };

  const getHiddenElement = () => {
    const openHiddenElement = startNumber + randomStep * (rundomHiddenNumber + 1);
    return openHiddenElement;
  };

  const question = `${getArithmeticProgression(firstNumber, randomLength, randomStep)}`;

  const answer = String(getHiddenElement());
  return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;
