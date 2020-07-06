function fibonacci(n) {
  const fibs = [0, 1];
  let fib = 0;
  for (let i = 2; i <= n; i++) {
    fib = fibs[i - 1] + fibs[i - 2];
    fibs.push(fib);
  }
  return fib;
}
