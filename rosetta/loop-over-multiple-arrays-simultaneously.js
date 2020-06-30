function loopSimult(A) {
  const result = new Array(A[0].length).fill('');
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      result[j] += A[i][j];
    }
  }
  return result;
}
