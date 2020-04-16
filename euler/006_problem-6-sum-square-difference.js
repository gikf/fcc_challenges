function sumSquareDifference(n) {
  // Good luck!
  let sum_squares = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum_squares += i ** 2;
  }

  for (let i = 1; i <= n; i ++) {
    sum += i;
  }

  return sum ** 2 - sum_squares;
}

console.log(sumSquareDifference(100));


// 1 2 4 9 16 25 30 36 49 64 81 100