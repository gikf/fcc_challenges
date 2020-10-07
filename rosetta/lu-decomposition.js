function luDecomposition(A) {
  function getMatrix(rows, columns) {
    const matrix = [];
    for (let row = 0; row < rows; row++) {
      matrix.push(new Array(columns).fill(0))
    }
    return matrix;
  };

  function fillLU(L, U, A) {
    const [rows, columns] = [L.length, L[0].length];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let subSumI = 0;
        let subSumJ = 0;
        for (let k = 0; k <= i; k++) {
          subSumI += U[k][j] * L[i][k];
        }
        for (let k = 0; k <= j; k++) {
          subSumJ += U[k][j] * L[i][k];
        }
        if (j >= i) {
          U[i][j] = A[i][j] - subSumI;
        }
        const valL = (1 / U[j][j]) * (A[i][j] - subSumJ)
        L[i][j] = Number.isFinite(valL) ? valL : 0;
      }
    }
  }

  function fillP(P, A) {
    for (let i = 0; i < P.length; i++) {
      P[i][i] = 1;
    }

    for (let i = 0; i < P.length; i++) {
      let maxInRow = A[i][i];
      let maxColumn = i;
      for (let j = i; j < A[i].length; j++) {
        const curVal = A[j][i];
        if (curVal > maxInRow) {
          maxInRow = curVal;
          maxColumn = j;
        }
      }
      if (i != maxColumn) {
        [P[i], P[maxColumn]] = [P[maxColumn], P[i]];
      }
    }
  }

  function getNMatrices(rows, columns, N) {
    const matrices = [];
    for (let i = 0; i < N; i++) {
      matrices.push(getMatrix(rows, columns));
    }
    return matrices;
  }

  function multiply(A, B) {
    const result = getMatrix(A.length, A[0].length);
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[0].length; j++) {
        let value = 0;
        for (let k = 0; k < result[0].length; k++) {
          value += A[i][k] * B[k][j];
        }
        result[i][j] = value;
      }
    }
    return result;
  }
  
  const [rows, columns] = [A.length, A[0].length];
  const [L, U, P] = getNMatrices(rows, columns, 3);
  fillP(P, A);
  const AA = multiply(P, A);
  fillLU(L, U, AA);
  return [L, U, P];
}
