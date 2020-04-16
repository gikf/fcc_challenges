function coinSums(n) {
  let values = [1, 2, 5, 10, 20, 50, 100, 200];
  let combinations = [0];
  combinations = new Array(n + 1).fill(0);
  combinations[0] = 1;

  for (let i = 0; i < values.length; i++) {
    for (let j = values[i]; j <= n; j++) {
      // dynamic
      combinations[j] += combinations[j - values[i]];
    }
  }
  return combinations[combinations.length - 1];
}

coinSums(50);