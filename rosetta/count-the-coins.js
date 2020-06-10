function countCoins() {
  // Based on euler 31
  const target = 100 // 1 dollar - 100 cents
  const values = [1, 5, 10, 25];
  const combinations = new Array(target + 1).fill(0);
  combinations[0] = 1;

  for (let i = 0; i < values.length; i++) {
    for (let j = values[i]; j <= target; j++) {
      combinations[j] += combinations[j - values[i]];
    }
  }
  return combinations[combinations.length - 1];
}
