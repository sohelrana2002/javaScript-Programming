// Convert uppercase letter to lowercase letter manually

function toLowercaseManual(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 65 && code <= 96) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }

  return result;
}

const prompt = require("prompt-sync")();
const str = String(prompt("Enter a string: "));

console.log(toLowercaseManual(str));
