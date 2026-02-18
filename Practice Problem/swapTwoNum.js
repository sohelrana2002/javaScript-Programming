// Swap two numbers without third variable

function swapTwoNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  return [a, b];
}

const result = swapTwoNumber(6, 10);

console.log("After swap", result[0], result[1]);
