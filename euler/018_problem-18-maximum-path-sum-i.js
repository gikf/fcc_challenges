function maximumPathSumI(triangle) {
  // deeper copy of triangle, to not mutate nested arrays
  let arr = []
  for (let i = 0; i < triangle.length; i++) {
    arr.push([...triangle[i]]);
  }

  // going from the back and adding largest from the two
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i][j] > arr[i][j + 1]) {
        arr[i - 1][j] += arr[i][j];
      } else {
        arr[i - 1][j] += arr[i][j + 1];
      }
    }
  }

  return arr[0][0];
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

console.log(maximumPathSumI(testTriangle));
