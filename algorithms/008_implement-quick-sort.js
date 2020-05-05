function quickSort(array) {
  // change code below this line
  let left;
  let right;
  if (array.length <= 1) {
    return array;
  } else {
    let pindex = array.length - 1;
    let pivot = array[pindex];
    let i = 0;
    
    // move pivot from right to correct place
    while (i != pindex) {
      if (array[i] > pivot) {
        [array[i], array[pindex - 1]] = [array[pindex - 1], array[i]];
        [array[pindex - 1], array[pindex]] = [array[pindex], array[pindex - 1]];
        pindex--;
      } else {
        i++;
      }
    }
    left = quickSort(array.slice(0, pindex));
    right = quickSort(array.slice(pindex + 1, array.length));
    return [...left, pivot, ...right];
  }
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
