import newGame from '../index.js';
import generateRandom from '../genereteRandom.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const startNumber = 1;
  const maxNumForRundomNumber = 100;
  const question = generateRandom(startNumber, maxNumForRundomNumber);

  const isEven = (number) => (number % 2 === 0);
  const check = (number) => {
    const result = isEven(number) ? 'yes' : 'no';
    return result;
  };
  const answer = check(question);
  return [question, answer];
};

const brainEven = () => newGame(gameQuestion, gameQuestionAnswer);

export default brainEven;
