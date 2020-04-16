function selfPowers(power, lastDigits) {
  // get n last digits from number
  function get_last_digits(num, digits) {
    return num % 10**digits;
  }

  // computing power of number
  function get_digits_from_power(num, power, digits) {
    let power_digits = 1;
    for (let i = 1; i <= power; i++) {
        power_digits *= num;
        power_digits = get_last_digits(power_digits, digits);
    }
    return power_digits;
  }

  let pow_sum = 0;
  // number loop last
  for (let i = 1; i <= power; i++) {
    // adding power of the i, cut to lastDigits digits
    pow_sum += get_digits_from_power(i, i, lastDigits);
  }

  // final cut
  let ret_digits = get_last_digits(pow_sum, lastDigits);

  return ret_digits;
}

selfPowers(10, 3);
console.log(selfPowers(1000, 10));
