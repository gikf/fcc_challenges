function gaussianElimination(A, b) {
  function swapRows(row1, row2, matrix) {
    [matrix[row1], matrix[row2]] = [matrix[row2], matrix[row1]];
  }

  for (let i = 0; i < b.length; i++){
    A[i].push(b[i]);
  }

  let row = 0;
  let column = 0;

  const rows = A.length;
  const columns = A[0].length;

  // Elimination
  while (row < rows && column < columns) {
    let max = 0;
    let max_row = 0

    for (let i = row; i < rows; i++) {
      const curVal = Math.abs(A[i][column])
      if (max < curVal) {
        max = curVal;
        max_row = i;
      }
    }

    if (A[max_row][column] == 0) {
      column++;
    } else {
      swapRows(row, max_row, A);
      for (let i = row + 1; i < rows; i++) {
        const param = A[i][column] / A[row][column];
        A[i][column] = 0;

        for (let j = column + 1; j < columns; j++) {
          A[i][j] = A[i][j] - A[row][j] * param;
        }
      }
      row++;
      column++;
    }
  }

  // back substitution
  let ans = [];
  for (let i = rows - 1; i >= 0; i--) {
    ans = [A[i][rows] / A[i][i], ...ans];
    for (let j = i - 1; j >= 0; j--) {
      A[j][rows] = A[j][rows] - A[j][i] * ans[0];
    }
  }
  return ans;
}
