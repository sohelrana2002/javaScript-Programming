function largestNumber(arr) {
  let largeNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largeNum) {
      largeNum = arr[i];
    }
  }

  return largeNum;
}

const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter number of elements: "));
let arr = [];

for (let i = 0; i < size; i++) {
  arr.push(parseInt(prompt(`Enter number ${i + 1}: `)));
}

console.log("Largest number is: ", largestNumber(arr));
