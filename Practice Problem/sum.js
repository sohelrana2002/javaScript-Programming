function sum(a, b) {
  return a + b;
}
const prompt = require("prompt-sync")();

const a = Number(prompt("Enter 1st num: "));
const b = Number(prompt("Enter 2nd num: "));

console.log("Sum: ", sum(a, b));
