/* eslint-disable max-len */
import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'What is the result of the expression?';

const arithmetic = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const operators = ['+', '-', '*'];

const gameQuestionAnswer = () => {
  const startNumber = 0;
  const maxNumForRundomNumberOfoperator = 2;
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
