function powerfulDigitSum() {
  // 
  function sum_pow_digits(numA, numB) {
    let sum = 0;
    let num = poww(numA, numB);
    while (num > 0n) {
      let digit = num % 10n;
      sum += parseInt(digit);
      num = num / 10n;
    }
    return sum;
  }

  // BigInt(numA ** numB) gives different (wrong?) result
  function poww(numA, numB) {
    let sum = 1n
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    // still BigInt
    return sum;
  }

  //
  const a_max = 99;
  const b_max = 99;
  let sum_digit_max = 0;
  for (let a = a_max; a > 80; a--) {
    for (let b = b_max; b > 80; b--) {
      let cur_digit_sum = sum_pow_digits(a, b);
      if (cur_digit_sum > sum_digit_max) {
        sum_digit_max = cur_digit_sum;
      }
    }
  }
  return sum_digit_max;
}

console.log(powerfulDigitSum());
