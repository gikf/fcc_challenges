function knightTour(w, h) {
  function allowedMoves(board, row, column, visited) {
    const allowed = [];
    for (let i = 0; i < moves.length; i++) {
      const [rowC, colC] = moves[i];
      const rowN = row + rowC;
      const colN = column + colC;
      if (rowN < 0 || rowN >= board.length || colN < 0 || colN >= board[0].length) {
        continue
      }
      if (visited[rowN][colN]) {
        continue;
      }
      allowed.push([rowN, colN]);
    }
    return allowed;
  }

  function copyBoard(board) {
    const copied = [];
    for (let i = 0; i < board.length; i++) {
      copied.push([...board[i]])
    }
    return copied;
  }

  function createBoards(rows, columns) {
    const board = [];
    const visited = [];
    for (let i = 0; i < rows; i++) {
      board.push(new Array(columns).fill(-1));
      visited.push(new Array(columns).fill(false))
    }

    fillAllowedCounts(board, visited);

    return [board, visited];
  }

  function fillAllowedCounts(board, visited) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (!visited[i][j]) {
          const possibleMoves = allowedMoves(board, i, j, visited)
          board[i][j] = possibleMoves.length;
        }
      }
    }
  }

  function markVisited(board, visited, row, column) {
    visited[row][column] = true;
    board[row][column] = -1;
    fillAllowedCounts(board, visited);
  }

  function getNumMoves(board, row, column) {
    return board[row][column];
  }

  function areAllVisited(visited) {
    return visited.filter((row) => row.filter((column) => column == false).length != 0).length == 0;
  }

  function getFewestMovesMove(board, possibleMoves) {
    let fewestMovesMove = []
    let fewestMovesCount = Infinity;
    let zeroMove = [];
    for (let i = 0; i < possibleMoves.length; i++) {
      const [moveRow, moveCol] = possibleMoves[i];
      const numMoves = board[moveRow][moveCol];
      if (numMoves == -1) {
        continue;
      }
      if (numMoves == 0) {
        zeroMove.push(possibleMoves[i]);
      }
      if (numMoves < fewestMovesCount) {
        fewestMovesMove = [possibleMoves[i]];
        fewestMovesCount = numMoves;
      } else if (numMoves == fewestMovesCount) {
        fewestMovesMove.push(possibleMoves[i]);
      }
    }
    if (fewestMovesMove.length > 0) {
      return fewestMovesMove;
    }
    return zeroMove;
  }

  function solve(board, visited, lastRow, lastColumn, isSolved) {
    if (isSolved[0]) {
      return 0;
    }
    const nextMoves = allowedMoves(board, lastRow, lastColumn, visited);
    if (nextMoves.length == 0) {
      if (areAllVisited(visited)) {
        isSolved[0] = true;
        return 1;
      }
      return 0;
    }

    const bestMoves = getFewestMovesMove(board, nextMoves);
    let solves = 0;
    for (let i = 0; i < bestMoves.length; i++) {
      const [moveRow, moveCol] = bestMoves[i];
      const newBoard = copyBoard(board);
      const newVisited = copyBoard(visited);
      markVisited(newBoard, newVisited, moveRow, moveCol);
      solves += solve(newBoard, newVisited, moveRow, moveCol, isSolved);
    }
    return solves;
  }

  function solveStart(board, visited, startRow, startColumn) {
    const newBoard = copyBoard(board);
    const newVisited = copyBoard(visited);
    markVisited(newBoard, newVisited, startRow, startColumn)
    const isSolved = [false];
    return solve(newBoard, newVisited, startRow, startColumn, isSolved)
  }

  const moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2]
  ];
    
  const [baseBoard, baseVisited] = createBoards(w, h);
  let solvedCount = 0;
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      let solves = solveStart(baseBoard, baseVisited, i, j)
      solvedCount += solves
    }
  }
  return solvedCount;
}
