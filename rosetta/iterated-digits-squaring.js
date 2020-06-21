function iteratedSquare(n) {
  function sumSquareDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += (num % 10)**2;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  while (n != 1 && n != 89) {
    n = sumSquareDigits(n);
  }
  return n;
}
