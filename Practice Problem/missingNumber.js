// Find missing number in array (1 to n)

function findMisisngNum(arr, num) {
  const expectedSum = (num * (num + 1)) / 2;

  const actualSum = arr.reduce((sum, n) => sum + n, 0);

  return expectedSum - actualSum;
}

const arr = [1, 2, 5, 4];

console.log(findMisisngNum(arr, 5));
