/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const gameQuestionAnswer = () => {
  const randomLength = (min, max) => {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };

  const maxNumForFirstNumber = 20;
  const firstNumber = Math.floor(Math.random() * maxNumForFirstNumber);
  const startNumber = firstNumber;

  const startNumberForLength = 1;
  const endNumberForLength = 10;
  const randomStep = randomLength(startNumberForLength, endNumberForLength);

  const rundomHiddenNumber = Math.floor(Math.random() * randomStep);
  const startNumberForHiddenNumber = 5;
  const endNumberForHiddenNumber = 10;
  const hiddenElement = '..';
  const lengthForHiddenElement = randomLength(startNumberForHiddenNumber, endNumberForHiddenNumber);

  const getArithmeticProgression = (start, length, step) => {
    let result = [];
    let startOfProgression = start;
    result.push(startOfProgression);

    for (let i = 0; i <= length; i += 1) {
      let numberOfProgression = startOfProgression + step;
      startOfProgression = numberOfProgression;
      if (i === rundomHiddenNumber) {
        numberOfProgression = hiddenElement;
      }
      result.push(String(numberOfProgression));
    }
    result = result.join(' ');
    return result;
  };

  const getHiddenElement = () => {
    const hiddenMemberIndex = rundomHiddenNumber + 1;
    const openHiddenElement = startNumber + randomStep * hiddenMemberIndex;
    return openHiddenElement;
  };

  const question = `${getArithmeticProgression(firstNumber, lengthForHiddenElement, randomStep)}`;

  const answer = String(getHiddenElement());
  return [question, answer];
};

const brainProgression = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainProgression;



// const getArithmeticProgression = (start, step, length) => {
  //   let result = [];
  //   const startNumberForHiddenNumber = 5;
  //   const endNumberForHiddenNumber = 10;
  //   const hiddenElement = '..';
  //   result.push(String(firstNumber));

  //   for (let i = 0; i <= randomLength(startNumberForHiddenNumber, endNumberForHiddenNumber); i += 1) {
  //     let numberOfProgression = firstNumber + randomStep;
  //     firstNumber = numberOfProgression;
  //     if (i === rundomHiddenNumber) {
  //       numberOfProgression = hiddenElement;
  //     }
  //     result.push(String(numberOfProgression));
  //   }

  //   result = result.join(' ');
  //   return result;
  // };
