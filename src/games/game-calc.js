/* eslint-disable max-len */
import newGame from '../index.js';

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
      break;
  }
  return result;
};

const gameQuestion = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const gameQuestionAnswer = () => {
  const maxNumForRundomNumberOfoperator = 3;
  const maxNumForRundomNumber = 100;
  const rundomNumberOfOperator = Math.floor(Math.random() * maxNumForRundomNumberOfoperator);
  const rundomNumberFirst = Math.floor(Math.random() * maxNumForRundomNumber);
  const rundomNumberSecond = Math.floor(Math.random() * maxNumForRundomNumber);

  const question = `${rundomNumberFirst} ${operators[rundomNumberOfOperator]} ${rundomNumberSecond}`;
  const answer = String(arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator]));

  return [question, answer];
};

const brainCalc = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainCalc;
