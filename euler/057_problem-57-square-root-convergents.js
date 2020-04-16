function squareRootConvergents() {
  function count_digits(num) {
    let counter = 0;
    while (num > 0) {
      counter++;
      num = num / 10n;
    }
    return counter;
  }

  // potentially faster digit counting
  function numDigits(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}


  // Use BigInt as integer won't handle all cases
  const limit = 1000;
  let numerator = 3n;
  let denominator = 2n;
  let more_digits_denom = 0;

  for (let i = 2; i <= limit; i++) {
    let cur_numerator = numerator + 2n*denominator;
    let cur_denominator = numerator + denominator;

    if (count_digits(cur_numerator) > count_digits(cur_denominator)) {
      more_digits_denom++;
    }
    numerator = cur_numerator;
    denominator = cur_denominator;
  }
  return more_digits_denom;
}

console.log(squareRootConvergents());