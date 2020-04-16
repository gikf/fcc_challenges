function primePermutations() {
  function get_sieve_primes(num, primes_map) {
    primes_map[0] = false;
    primes_map[1] = false;

    for (let i = 2; i < num; i++) {
      if (primes_map[i]) {
        for (let j = i + i; j < num; j = j + i) {
          primes_map[j] = false;
        }
      }
    }

    return primes_map;
  }

  function is_prime(num, primes_map) {
    return primes_map[num];
  }

  function is_permutation(num, check) {
    check = check.toString().split('').sort();
    num = num.toString().split('').sort();

    return check.every((val, index) => val === num[index]);
  }

  let res = 0;
  let max_limit = 10000;
  let primes_map = new Array(max_limit);
  primes_map.fill(true);
  primes_map = get_sieve_primes(max_limit, primes_map);

  for (let i = 1488; i < 10000 - 3330*2; i++) {
    if (is_prime(i, primes_map)) {
      let incr1 = i + 3330;
      let incr2 = i + 2*3330;
      if (!is_permutation(i, incr1) || !is_permutation(i, incr2)) {
        continue;
      }
      if (is_prime(incr1, primes_map) && is_prime(incr2, primes_map)) {
        // preparing result
        res += i * 10**8
        res += incr1 * 10**4;
        res += incr2;
        break;
      }
    }
  }

  // Good luck!
  return res;
}

primePermutations();
