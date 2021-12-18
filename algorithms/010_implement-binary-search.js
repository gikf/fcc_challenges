function binarySearch(searchList, value) {
  const path = [];

  let start = 0;
  let stop = searchList.length - 1;

  while (start <= stop) {
    const middle = Math.floor((start + stop) / 2);
    const number = searchList[middle];
    path.push(number);

    if (number === value) {
      return path
    } else if (number < value) {
      start = middle + 1;
    } else {
      stop = middle - 1;
    }
  }

  return 'Value Not Found';
}
