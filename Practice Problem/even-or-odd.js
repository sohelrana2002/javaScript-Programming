function checkEven(num) {
  if (num % 2 == 0) {
    return "Even number!";
  } else {
    return "Odd number!";
  }
}

const prompt = require("prompt-sync")();
const num = Number(prompt("Enter a number: "));

console.log(`${num} is ${checkEven(num)}`);
