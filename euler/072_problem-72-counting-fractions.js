function countingFractions() {
  // Good luck!
  const LIMIT = 1000000;
  const phi = [];
  let sum = 0;

  for (let i = 0; i <= LIMIT; i++) {
    phi.push(i);
  }

  for (let i = 2; i <= LIMIT; i++) {
    if (phi[i] === i) {
      for (let j = i; j <= LIMIT; j += i) {
        phi[j] = phi[j] / i * (i - 1);
      }
    }
    sum += phi[i];
  }

  console.log(sum);
  return sum;
}

countingFractions();
