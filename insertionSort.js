//Take a random array - [5,3,9,7,6,8]
//Sort each element from least to highest

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array.length; j++) {
      if (array[0] < array[j]) {
        array[i - 1] = array[j];
      }
    }
  }
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let arr = [5, 3, 7, 6, 0, 1, 8];
console.log(insertionSort(arr)); // [0, 1, 3, 5, 6, 7, 8]
