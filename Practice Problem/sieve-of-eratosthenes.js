function Sieve(num) {
  let isPrime = new Array(num + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime[i]) {
      console.log(i);
    }
  }
}

const prompt = require("prompt-sync")();

const defineNum = Number(prompt("Enter a number: "));
Sieve(defineNum);
