function isPrime(num) {
  if (num <= 1) {
    console.log("This number is not prime!");
    return;
  }
  let checkPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      checkPrime = false;
      break;
    }
  }

  if (checkPrime) {
    console.log("This number is prime!");
  } else {
    console.log("This number is not prime!");
  }
}

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
isPrime(num);
