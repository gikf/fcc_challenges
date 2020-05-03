function insertionSort(array) {
  // change code below this line
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0 && j < array.length - 1; j--) {
      let curIndex = i;
      while (curIndex > 0 && array[curIndex] < array[curIndex - 1]) {
        [array[curIndex], array[curIndex - 1]] = [array[curIndex - 1], array[curIndex]];
        curIndex--;
      }
    }
  }
  return array;
  // change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
