function pancakeSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maximum = arr[0];
    let flipStartIndex = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (maximum < arr[j]) {
        maximum = arr[j];
        flipStartIndex = j;
      }
    }
    const flipEndIndex = arr.length - i;
    arr = arr.slice(0, flipStartIndex)
             .concat(arr.slice(flipStartIndex, flipEndIndex).reverse())
             .concat(arr.slice(flipEndIndex));
  }
  
  return arr;
}

