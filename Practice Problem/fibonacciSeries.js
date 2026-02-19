// Print Fibonacci series up to N

function fibonacciSeries(n) {
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }
}

console.log(fibonacciSeries(10));
