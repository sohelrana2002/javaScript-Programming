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

removeDuplicate([5, 10, 15, 5, 10]);
