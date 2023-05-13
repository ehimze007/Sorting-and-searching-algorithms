function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentValue;
    }
  }
  return arr;
}

let arr = [5, 3, 7, 6, 0, 1, 8];
console.log(insertionSort(arr)); // [0, 1, 3, 5, 6, 7, 8]
