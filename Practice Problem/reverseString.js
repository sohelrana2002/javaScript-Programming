// Reverse a string manually

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

const prompt = require("prompt-sync")();
const str = String(prompt("Enter a string: "));

console.log(reverseString(str));
