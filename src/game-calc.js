/* eslint-disable max-len */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

export default () => {
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

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

  const brainCalc = () => {
    for (let i = 0; i < 3; i += 1) {
      const operators = ['+', '-', '*'];
      const rundomNumberOfOperator = Math.floor(Math.random() * 3);
      const rundomNumberFirst = Math.floor(Math.random() * 100);
      const rundomNumberSecond = Math.floor(Math.random() * 100);
      
      console.log(`Quesion: ${rundomNumberFirst} ${operators[rundomNumberOfOperator]} ${rundomNumberSecond}`);
      const yourAnswer = readlineSync.question('Your answer: ');
      if (arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator]) === Number(yourAnswer)) {
        console.log('Correct');
      } else {
        return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was '${arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator])}'.`);
      }
    }
    return console.log(`Congratulations, ${name}`);
  };
  brainCalc();
};

// import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// const name = readlineSync.question('May I have your name? ');

// export default () => {
//   console.log(`Hello, ${name}!`);
//   console.log('What is the result of the expression?');

//   const arithmetic = (num1, num2, operator) => {
//     let result = 0;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       default:
//         break;
//     }
//     return result;
//   };

//   const brainCalc = () => {
//     for (let i = 0; i < 3; i += 1) {
//       const operators = ['+', '-', '*'];
//       const rundomNumberOfOperator = Math.floor(Math.random() * 3);
//       const rundomNumberFirst = Math.floor(Math.random() * 100);
//       const rundomNumberSecond = Math.floor(Math.random() * 100);
//       console.log(`Quesion: ${rundomNumberFirst} ${operators[rundomNumberOfOperator]} ${rundomNumberSecond}`);
//       const yourAnswer = readlineSync.question('Your answer: ');
//       if (arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator]) === Number(yourAnswer)) {
//         console.log('Correct');
//       } else {
//         return console.log(`${yourAnswer} is wrong answer ;(. Correct answer was '${arithmetic(rundomNumberFirst, rundomNumberSecond, operators[rundomNumberOfOperator])}'.`);
//       }
//     }
//     return console.log(`Congratulations, ${name}`);
//   };
//   brainCalc();
// };
