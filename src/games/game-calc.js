/* eslint-disable max-len */
import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'What is the result of the expression?';

const arithmetic = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
  return result;
};

const operators = ['+', '-', '*'];

const gameQuestionAnswer = () => {
  const startNumber = 0;
  const maxNumForRundomNumberOfoperator = 3;
  const maxNumForRundomNumber = 100;
  const rundomNumberOfOperator = generateRandom(startNumber, maxNumForRundomNumberOfoperator);
  const rundomNumberFirst = generateRandom(startNumber, maxNumForRundomNumber);
  const rundomNumberSecond = generateRandom(startNumber, maxNumForRundomNumber);

  const question = `${rundomNumberFirst} ${operators[rundomNumberOfOperator]} ${rundomNumberSecond}`;
  const answer = String(arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator]));

  return [question, answer];
};

const brainCalc = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainCalc;
