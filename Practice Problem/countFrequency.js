// Count frequency of each character in string

function countFrequency(str) {
  const freqObj = {};

  for (let char of str) {
    if (freqObj[char]) {
      freqObj[char]++;
    } else {
      freqObj[char] = 1;
    }
  }

  for (let key in freqObj) {
    console.log(key, freqObj[key]);
  }
}

const prompt = require("prompt-sync")();
const str = prompt("Enter your name: ");

countFrequency(str);
