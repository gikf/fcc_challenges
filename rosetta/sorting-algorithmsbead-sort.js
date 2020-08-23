function beadSort(arr) {
  let transposedList = new Array(Math.max(...arr)).fill(0);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      transposedList[j]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const curSum = transposedList.filter((value) => value > 0).length;
    transposedList = transposedList.map((value) => value - 1);
    arr[arr.length - 1 - i] = curSum;
  }
  return arr;
}

beadSort([25, 32, 12, 7, 20])