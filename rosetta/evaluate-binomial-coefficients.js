function binom(n, k) {
  function factorial(f) {
    let fact = 1;
    for (let i = 1; i <= f; i++) {
      fact *= i;
    }
    return fact;
  }

  return (factorial(n) / (factorial(n - k) * factorial(k)));
}
