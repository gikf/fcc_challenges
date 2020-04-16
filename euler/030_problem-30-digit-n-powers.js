function digitnPowers(n) {
  //checking sum of digits powered to nth
  function sumDigitsPower(num, power) {
    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit ** power;
      num = Math.floor(num / 10);
    }

    return sum;
  }


  let min_sum = n * (1**n) + 1;
  let max_sum = n * (9**n);
  let sum_numbers = 0;

  for (let i = min_sum; i <= max_sum; i++) {
    if (i == sumDigitsPower(i, n)) {
      sum_numbers += i;
    }
  }

  return sum_numbers;
}

digitnPowers(4);
