function primeDigitReplacements() {
  // sieve primes
  function get_sieve_primes(max, primes_map) {
    for (let i = 2; i < max; i++) {
      if (primes_map[i]) {
        let j = i * i;
        for (j; j < max; j += i) {
          primes_map[j] = false;
        }
      }
    }
    return primes_map;
  }

  // is prime
  function is_prime(num, primes_map) {
    return primes_map[num];
  }

  function is_eight_family(prime, replace_digit, primes_map) {
    let count = 0;
    let digits = '0123456789';
    prime = prime.toString();

    for (let i = 0; i < digits.length; i++) {
      let cur_num = parseInt(prime.replace(new RegExp(replace_digit, 'g'), digits[i]));
      if (cur_num > 100000 && is_prime(cur_num, primes_map)) {
        count++;
      }
    }
    return count == 8;
  }

  function count_digit(str_num, str_digit) {
    let counter = 0;
    for (let i = 0; i < str_num.length; i++) {
      if (str_num[i] == str_digit) {
        counter++;
      }
    }
    return counter;
  }


  let limit = 1000000;
  let primes_map = new Array(limit);
  primes_map.fill(true);
  primes_map[0] = false;
  primes_map[1] = false;
  primes_map = get_sieve_primes(limit, primes_map);

  for (let i = 100000; i < 300000; i++) {
    if (primes_map[i]) {
      const str_prime = i.toString();
      const last_digit = str_prime[str_prime.length -1];

      if ((count_digit(str_prime, '0') == 3 && is_eight_family(i, '0', primes_map))
      || (count_digit(str_prime, '1') == 3 && last_digit != '1' && is_eight_family(i, '1', primes_map))
      || (count_digit(str_prime, '2') == 3 && is_eight_family(i, '2', primes_map))) {
        return i;
      }
    }
  }
  return false;
  // Good luck!
}

console.log('res', primeDigitReplacements());
