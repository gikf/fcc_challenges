function sum(a, b) {
  let summed = 0;
  for (let i = a; i <= b; i++) {
    summed += 1 / i**2;
  }
  return summed;
}
