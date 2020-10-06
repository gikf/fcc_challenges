function levenshtein(a, b) {
  // Wagner-Fisher algorithm
  const matrix = [];
  for (let i = 0; i <= a.length; i++) {
    matrix.push(new Array(b.length + 1).fill(0))
  }

  for (let i = 1; i <= a.length; i++) {
    matrix[i][0] = i
  }
  for (let j = 1; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      let cost = 0
      // Adjust index to start with first letter of words
      if (a[i - 1] == b[j - 1]) {
        cost = 0;
      } else {
        cost = 1;
      }

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      )
    }
  }
  return matrix[a.length][b.length]
}
