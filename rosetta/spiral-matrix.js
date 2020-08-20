function spiralArray(n) {
  const limit = n**2;
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = new Array(n).fill(null)
    result.push(arr);
  }

  let row = 0;
  let column = 0;
  const directionMap = [[0, 1],
                        [1, 0],
                        [0, -1],
                        [-1, 0]];
  let direction = 0;
  let boundary = n - 1;
  let nextChange = boundary;
  let count = 0;
  for (let i = 0; i < limit; i++) {
    result[row][column] = i;

    if (nextChange == i) {
      direction++;
      nextChange += boundary;
      count++;
    }

    if (count == 2) {
      count = 0;
      boundary--;
    }

    const [row_change, col_change] = directionMap[direction % 4];
    row += row_change;
    column += col_change;
  }

  console.log(result)
  return result;
}
