// Find second largest number in array using sorting method

function secondLargestNum(arr) {
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  return arr[1];
}

console.log("Second largest number: ", secondLargestNum([17, 5, 15, 3, 20]));
