const testImage = [
  '                                                          ',
  ' #################                   #############        ',
  ' ##################               ################        ',
  ' ###################            ##################        ',
  ' ########     #######          ###################        ',
  '   ######     #######         #######       ######        ',
  '   ######     #######        #######                      ',
  '   #################         #######                      ',
  '   ################          #######                      ',
  '   #################         #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######        #######                      ',
  '   ######     #######         #######       ######        ',
  ' ########     #######          ###################        ',
  ' ########     ####### ######    ################## ###### ',
  ' ########     ####### ######      ################ ###### ',
  ' ########     ####### ######         ############# ###### ',
  '                                                          '];

function thinImage(image) {
  function p(num, row, column) {
    const ps = {
      1: [row, column],
      2: [row - 1, column],
      3: [row - 1, column + 1],
      4: [row, column + 1],
      5: [row + 1, column + 1],
      6: [row + 1, column],
      7: [row + 1, column - 1],
      8: [row, column - 1],
      9: [row - 1, column -1],
    }
    return ps[num];
  }
  function blackNeighbours(row, column) {
    const neighboursArray = [
      p(2, row, column),
      p(3, row, column),
      p(4, row, column),
      p(5, row, column),
      p(6, row, column),
      p(7, row, column),
      p(8, row, column),
      p(9, row, column),
    ];
    return neighboursArray.filter((cell) => image[cell[0]][cell[1]] == BLACK).length;
  };

  function requiredNeighbours(num) {
    return num >= 2 && num <= 6;
  };

  function countTransitions(row, column) {
    const transitionSequence = [
      p(2, row, column),
      p(3, row, column),
      p(4, row, column),
      p(5, row, column),
      p(6, row, column),
      p(7, row, column),
      p(8, row, column),
      p(9, row, column),
      p(2, row, column)
    ];

    let lastColor = null;
    let transitionsWB = 0;
    for (let i = 0; i < transitionSequence.length; i++) {
      const [curRow, curColumn] = transitionSequence[i];
      const curColor = image[curRow][curColumn];
      if (lastColor == WHITE && curColor == BLACK) {
        transitionsWB++;
      }
      lastColor = curColor;
    }
    return transitionsWB;
  }

  function whiteCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
      const [row, column] = arr[i];
      if (image[row][column] == WHITE) {
        return true;
      }
    }
    return false;
  };

  function whiteStepOneCheck1(row, column) {
    const arrToCheck = [
      p(2, row, column),
      p(4, row, column),
      p(6, row, column)
    ];
    return whiteCheck(arrToCheck);
  };

  function whiteStepOneCheck2(row, column) {
    const arrToCheck = [
      p(4, row, column),
      p(6, row, column),
      p(8, row, column)
    ];
    return whiteCheck(arrToCheck);
  };

  function whiteStepTwoCheck1(row, column) {
    const arrToCheck = [
      p(2, row, column),
      p(4, row, column),
      p(8, row, column)
    ];
    return whiteCheck(arrToCheck);
  };

  function whiteStepTwoCheck2(row, column) {
    const arrToCheck = [
      p(2, row, column),
      p(6, row, column),
      p(8, row, column)
    ];
    return whiteCheck(arrToCheck);
  }

  function changeToWhite(arr) {
    for (let i = 0; i < arr.length; i++) {
      const [row, column] = arr[i];
      image[row][column] = WHITE;
    }
  };

  function step(whiteCheck1, whiteCheck2) {
    const cellsToChange = []
    for (let row = 1; row < image.length - 1; row++) {
      for (let column = 1; column < image[row].length - 1; column++) {
        if (image[row][column] != BLACK) {
          continue;
        }
        if (!requiredNeighbours(blackNeighbours(row, column))) {
          continue;
        }
        if (countTransitions(row, column) != 1) {
          continue;
        }
        if (!whiteCheck1(row, column)) {
          continue;
        }
        if (!whiteCheck2(row, column)) {
          continue;
        }
        cellsToChange.push([row, column]);
      }
    }
    if (cellsToChange.length > 0) {
      changeToWhite(cellsToChange);
      return true;
    }
    return false;
  }

  function stepOne() {
    return step(whiteStepOneCheck1, whiteStepOneCheck2);
  }

  function stepTwo() {
    return step(whiteStepTwoCheck1, whiteStepTwoCheck2);
  }
  

  const BLACK = '#';
  const WHITE = ' ';
  let isChanged = true;
  image = image.map(row => row.split(''));

  while (isChanged) {
    isChanged = false;
    if (stepOne()) {
      isChanged = true;
    }
    if (stepTwo()) {
      isChanged = true;
    }
  }
  return image.map(row => row.join(''))
}
