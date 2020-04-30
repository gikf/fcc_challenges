function countingSummations() {
  // based on solution for problem 31
  const LIMIT = 100;
  const combinations = new Array(LIMIT + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i < LIMIT; i++) {
    for (let j = i; j < LIMIT + 1; j++) {
      combinations[j] += combinations[j - i];
    }
  }
  return combinations[combinations.length - 1];
}

countingSummations();
