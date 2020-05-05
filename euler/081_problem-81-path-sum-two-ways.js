function pathSumTwoWays(arr) {
  const arr_copy = [];
  for (let i = 0; i < arr.length; i++) {
    arr_copy.push([...arr[i]]);
  }

  let limit = arr_copy.length;
  // ->up, ->left
  for (let i = limit - 2; i >= 0; i--) {
    arr_copy[limit - 1][i] += arr_copy[limit - 1][i + 1];
    arr_copy[i][limit - 1] += arr_copy[i + 1][limit - 1];
  }

  // step-by-step, closer to [0][0]
  for (let i = limit - 2; i >= 0; i--) {
    for (let j = limit - 2; j >= 0; j--) {
      if (arr_copy[i][j + 1] < arr_copy[i + 1][j]) {
        arr_copy[i][j] += arr_copy[i][j + 1];
      } else {
        arr_copy[i][j] += arr_copy[i + 1][j];
      }
    }
  }
  //console.log(arr_copy);
  console.log(arr_copy[0][0]);
  return arr_copy[0][0];
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumTwoWays(testMatrix);
