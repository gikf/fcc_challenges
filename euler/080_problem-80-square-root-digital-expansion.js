function sqrtDigitalExpansion() {
  // Counting sum of digits
  // num is BigInt
  // returns integer
  function digitsSum(num) {
    let sum = 0;
    while (num > 0n) {
      let digit = num % 10n;
      sum += parseInt(digit);
      num = num / 10n;
    }
    return sum;
  }

  // Computes power numB-th of numA
  // numA, numB - integers
  // returns BigInt
  function power(numA, numB) {
    let sum = 1n
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    // still BigInt
    return sum;
  }

  // Expanding square root, 
  // num, num_digits - integers
  // returns BigInt
  function squareRootExp(num, num_digits) {
    let a = 5n * BigInt(num);
    let b = 5n;
    const LIMIT = power(10, num_digits + 1);

    while (b < LIMIT) {
      if (a >= b) {
        a -= b;
        b += 10n;
      } else {
        a *= 100n;
        b = (b / 10n)*100n + 5n;
      }
    }
    return b / 100n;
  }
  
  let result = 0;
  let next_perfect_root = 1;
  const required_digits = 100;
  for (let i = 1; i <= 100; i++) {
    if (next_perfect_root**2 == i) {
      next_perfect_root++;
      continue;
    }
    result += digitsSum(squareRootExp(i, required_digits));
  }

  return result;
}

sqrtDigitalExpansion();
