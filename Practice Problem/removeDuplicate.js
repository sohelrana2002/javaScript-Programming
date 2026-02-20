// Remove duplicates from array

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  console.log(arr);
}

const prompt = require("prompt-sync")();
const size = parseInt(prompt("Enter number of elements: "));
let arr = [];

for (let i = 0; i < size; i++) {
  arr.push(parseInt(prompt(`Enter ${i + 1} element: `)));
}

removeDuplicate(arr);
