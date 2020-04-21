function maximumPathSumII(triangle) {
  // proper copy of the triangle
  const tr_copy = [];
  for (let i = 0; i < triangle.length; i++) {
    tr_copy.push(triangle[i].slice());
  }

  // going from the back and adding the bigger from the two options
  for (let i = tr_copy.length - 2; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      let bigger_option = 0;
      if (tr_copy[i+1][j+1] > tr_copy[i+1][j]) {
        bigger_option = tr_copy[i+1][j+1];
      } else {
        bigger_option = tr_copy[i+1][j];
      }
      tr_copy[i][j] += bigger_option;
    }
  }
  return tr_copy[0][0];
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumII(testTriangle);
