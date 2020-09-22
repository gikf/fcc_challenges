function cramersRule(matrix, freeTerms) {
  function det(arr) {
    if (arr.length == 2) {
      return arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0];
    }
    let dets = 0;
    for (let i = 0; i < arr.length; i++) {
      const sign = i % 2 == 0 ? 1 : -1;
      const smallerArr = [];
      for (let j = 1; j < arr.length; j++) {
        const row = arr[j].slice(0, i).concat(arr[j].slice(i + 1));
        smallerArr.push(row);
      }
      dets += sign * arr[0][i] * det(smallerArr);
    }
    return dets;
  }

  function swapValues(matrix, terms, column) {
    const newMatrix = [];
    for (let row = 0; row < matrix.length; row++) {
      const newRow = [...matrix[row]]
      newRow[column] = terms[row];
      newMatrix.push(newRow);
    }
    return newMatrix;
  }

  const detM = det(matrix);
  const values = [];
  for (let column = 0; column < matrix.length; column++) {
    const newMatrix = swapValues(matrix, freeTerms, column);
    const curDet = det(newMatrix);
    values.push(curDet / detM);
  }

  return values;
}
