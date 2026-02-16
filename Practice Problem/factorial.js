// Find factorial of a number

function factorial(num) {
  if (num < 0) return "Factorial not defined!";

  if (num == 0 || num == 1) return num;

  return num * factorial(num - 1);
}

const prompt = require("prompt-sync")();
const num = Number(prompt("Enter factorial num: "));

console.log(`Factorial of ${num} is: ${factorial(num)}`);
