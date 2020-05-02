function selectionSort(array) {
  // change code below this line
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = array[i];
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (smallest > array[j]) {
        smallestIndex = j;
        smallest = array[j];
      }
    }
    if (smallestIndex != i) {
      [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
    }
  }
  return array;
  // change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
