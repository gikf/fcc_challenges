function goldbachsOtherConjecture() {
  // get primes smaller or even to num
  function get_primes(num, primes) {
    let start = primes[primes.length - 1];
    start == 2 ? start++ : start;

    for (let i = start; i <= num * 2; i = i+2) {
      let prime = true;
      for (let j = 0; j < primes.length; j++) {
        if (primes[j] > i) {
          break;
        }
        if (i % primes[j] == 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        primes.push(i);
      }
    }
    return primes;
  }

  // is prime
  function is_prime(num, primes) {
    if (num % 2 == 0) {
      return false;
    }

    // if last prime is larger than num
    // we either have prime or not prime
    // otherwise compute more primes
    if (primes[primes.length-1] > num) {
      if (primes.indexOf(num) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      get_primes(num, primes);
      return is_prime(num, primes);
    }
  }

  function is_goldbach(num, primes) {
    for (let i = 0; primes[i] < num; i++) {
      let cur_prime = primes[i];
      for (let j = 0; j < num / 2 ; j++) {
        if (cur_prime + 2 * j**2 == num) {
          return true;
        }
      }
    }

    return false;
  }

  // Good luck!

  let primes = [2];
  primes = get_primes(100, primes);
  let cur_num = 9;


  while (is_goldbach(cur_num, primes)) {
    cur_num += 2;
    while (is_prime(cur_num, primes)) {
      cur_num += 2;
    }
  }

  return cur_num;
}

goldbachsOtherConjecture();
