function truncatablePrimes(n) {
  // prime checking
  function is_prime(num, primes_map) {
    if (primes_map[num] != undefined) {
      return primes_map[num];
    }
    if (num != 2 && num % 2 == 0) {
      primes_map[num] = false;
      return false;
    }

    // if number is not in map and is not % 2
    for (let i = 3; i < num**0.5 + 1; i = i + 2) {
      if (num % i == 0) {
        primes_map[num] = false;
        return false;
      }
    }
    primes_map[num] = true;
    return true;
  }

  // truncating
  function truncating_check(num, primes_map) {
    let str_num_lr = '';

    while (num > 10) {
      let temp_right = num % 10;
      num = Math.floor(num / 10);
      str_num_lr = temp_right.toString() + str_num_lr;
      if (!is_prime(num, primes_map) || !is_prime(parseInt(str_num_lr), primes_map)) {
        return false;
      }
    }
    return true;
  }

  let i = 10;
  let sum = 0;
  let counter = 0;
  let primes_map = {0: false,
                    1: false,
                    2: true};

  // counting loop
  while (counter < n) {
    if (is_prime(i, primes_map) && truncating_check(i, primes_map)) {
      counter++;
      sum += i;
    }
    i++;
  }
  return sum;
}

truncatablePrimes(8);