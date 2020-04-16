function latticePaths(gridSize) {
  let gridList = []

  for (let i = 0; i <= gridSize; i++) {
    gridList.push(new Array)
    for (let j = 0; j <= gridSize; j++) {
      if (i == 0) {
        gridList[i][j] = 1;
      } else {
        if (j == 0) {
          gridList[i][j] = 1;
        } else {
          gridList[i][j] = gridList[i - 1][j] + gridList[i][j - 1];
        }
      }
    }
  }
  return gridList[gridSize][gridSize];
}

latticePaths(4);
