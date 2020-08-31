function shellSort(arr) {
  let gap = Math.floor(arr.length / 3) + 1;

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let toSort = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > toSort) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = toSort;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

