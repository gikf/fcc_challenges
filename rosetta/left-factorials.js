function leftFactorial(n) {
  function factorial(k) {
    let fact = 1;
    for (let i = 1; i <= k; i++) {
      fact *= i;
    }
    return fact;
  }

  let left = 0;
  for (let i = 0; i < n; i++) {
    left += factorial(i);
  }
  return left;
}

