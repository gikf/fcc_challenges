function pathSumFourWays(input_arr) {
  // get neighbors that weren't checked or would have smaller path value from row, col cell
  function getGoodNeighbors(row, col) {
    const neighbors = [];
    // cell up
    if (isGoodNeighbor(row, col, row - 1, col)) {
      neighbors.push([row - 1, col]);
    }
    // cell down
    if (isGoodNeighbor(row, col, row + 1, col)) {
      neighbors.push([row + 1, col]);
    }
    // cell left
    if (isGoodNeighbor(row, col, row, col - 1)) {
      neighbors.push([row, col - 1]);
    }
    // cell right
    if (isGoodNeighbor(row, col, row, col + 1)) {
      neighbors.push([row, col + 1]);
    }

    return neighbors;
  }

  function isGoodNeighbor(cRow, cCol, nRow, nCol) {
    // nRow and nCol within matrix boundaries
    if (nRow < 0 || nRow >= SIZE || nCol < 0 || nCol >= SIZE) {
      return false;
    }
    // nRow and nCol cell wasn't checked yet
    if (arr[nRow][nCol] == 0) {
      return true;
    }
    // from the current cRow cCol going to nRow nCol would get smaller path
    if (isSmallerPath(cRow, cCol, nRow, nCol)) {
      return true;
    }
    return false;
  }

  // check current smallest value in nRow, nCol
  // against potential value from current path added to nRow, nCol
  function isSmallerPath(cRow, cCol, nRow, nCol) {
    return arr[cRow][cCol] + input_arr[nRow][nCol] < arr[nRow][nCol];
  }

  // array for results;
  const arr = [];
  const SIZE = input_arr.length;
  //console.log('size', SIZE);
  for (let i = 0; i < SIZE; i++) {
    arr.push(new Array(SIZE).fill(0));
  }

  // starting position
  let curRow = arr.length - 1;
  let curCol = arr.length - 1;

  // starting value
  arr[curRow][curCol] = input_arr[curRow][curCol];
  //console.log('start arr', arr)
  
  // bfs queue
  const queue = [];
  queue.push([curRow, curCol]);
  //console.log('queue', queue);

  // bfs or pseudo-bfs?
  while(queue.length > 0) {
    // take bottom cell from queue array
    [curRow, curCol] = queue.shift();

    // get goot neighbors and add them to queue
    const neighbors = getGoodNeighbors(curRow, curCol);
    queue.push(...neighbors)

    // set new values in arr for each neighbor
    for (let i = 0; i < neighbors.length; i++) {
      let [nRow, nCol] = neighbors[i];
      arr[nRow][nCol] = arr[curRow][curCol] + input_arr[nRow][nCol];
    }
  }
  // Good luck!
  console.log(arr[0][0])
  return arr[0][0];
}

// Only change code above this line

const testMatrix = [
  [131, 673, 234, 103, 18],
  [201, 96, 342, 965, 150],
  [630, 803, 746, 422, 111],
  [537, 699, 497, 121, 956],
  [805, 732, 524, 37, 331]
];

pathSumFourWays(testMatrix);
