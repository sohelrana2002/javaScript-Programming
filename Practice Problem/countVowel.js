function countVowel(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

const prompt = require("prompt-sync")();
const str = String(prompt("Enter a string: "));

console.log("Total vowels is: ", countVowel(str));
