function ZigZagMatrix(n) {
  // Good luck!
  let number = 0;
  let curRow = 0;
  let direction = 0;

  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }

  while (number < n**2) {
    matrix[curRow].push(number);

    // Length of current row is larger by 2 than row below
    // or row is full:
    // go down
    if (curRow < n - 1 && matrix[curRow].length > 1 + matrix[curRow + 1].length || matrix[curRow].length == n) {
      direction = 1;
    }

    // Row index larger than 1, current row is the same length
    // as row above, and row isn't full:
    // go down
    if (curRow > 0 && matrix[curRow].length == matrix[curRow - direction].length && matrix[curRow].length != n) {
      direction = -1;
    }

    // Last row reached
    if (curRow == n - 1 && direction == 1) {
      direction = 0;
    }

    curRow += direction;

    // Going out of bounds
    if (curRow < 0) {
      curRow = 0;
      direction = 1;
    }

    number++;
  }
  return matrix;
}

console.log(ZigZagMatrix(5))
