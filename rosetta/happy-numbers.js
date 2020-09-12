function happy(number) {
  function sumSquared(num) {
    let sum = 0;
    while (num > 0) {
      sum += (num % 10)**2
      num = Math.floor(num / 10);
    }
    return sum;
  }

  const sequence = new Set();
  while (number != 1) {
    number = sumSquared(number);
    if (sequence.has(number)) {
      return false;
    }
    sequence.add(number);
  }
  return true;
}
