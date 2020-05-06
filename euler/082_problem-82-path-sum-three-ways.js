function pathSumThreeWays(arr) {
  // Good luck!
  const length = arr.length;
  // array for running values calculations
  const values = new Array(length);
  for (let i = 0; i < length; i++) {
    values[i] = arr[i][length - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    values[0] += arr[0][i];

    // min values from going down
    for (let j = 1; j < length; j++) {
      if (values[j - 1] + arr[j][i] > values[j] + arr[j][i]) {
        values[j] = values[j] + arr[j][i];
      } else {
        values[j] = values[j - 1] + arr[j][i];
      }
      
    }

    // min values from going up
    for (let j = length - 2; j >= 0; j--) {
      if (values[j] > values[j + 1] + arr[j][i]) {
        values[j] = values[j + 1] + arr[j][i]
      }
    }
  }

  //console.log(Math.min(...values));
  return Math.min(...values);
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumThreeWays(testMatrix);
