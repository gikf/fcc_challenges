function primePairSets() { 
  function sieve_primes(limit, primes_map) {
    for (let i = 2; i < limit; i += 2) {
      if (primes_map[i]) {
        for (let j = i * i; j < limit; j += i) {
          primes_map[j] = false;
        }
      }
      if (i == 2) {
        i = 1;
      }
    }
  }

  function is_prime(num, primes_map) {
    if (num % 2 == 0) {
      return false;
    }

    if (num > LIMIT) {
      if (num % 3 === 0) {
        return false;
      } 

      for (let i = 5; i * i <= num; i+= 6) {
        if (num % i === 0 || num % (i+2) === 0)
          return false;
      }
      return true;
    }

    return primes_map[num];
  }

  function check_perms(pairs) {
    for (let i = 0; i < pairs.length - 1; i++) {
      for (let j = i + 1; j < pairs.length; j++) {
        let prime_a = parseInt(pairs[i].toString() + pairs[j].toString());
        let prime_b = parseInt(pairs[j].toString() + pairs[i].toString());
        if (!is_prime(prime_a, primes_map) || !is_prime(prime_b, primes_map)) {
          return false;
        }
      }
    }
    return true;
  }

  function pairing(pairs) {
    if (pairs.length == SETS) {
      return pairs;
    }
    for (let i = pairs[pairs.length - 1] + 1; i < primes_map.length; i++) {
      if (primes_map[i] && check_perms([...pairs, i])) {
        let test_pair = pairing([...pairs, i]);
        if (test_pair) {
          return test_pair;
        }
      }
    }
    return false;
  }

  const LIMIT = 10000;
  const SETS = 5;
  const primes_map = Array(LIMIT);
  primes_map.fill(true);
  primes_map[0] = false;
  primes_map[1] = false;
  sieve_primes(LIMIT, primes_map);

  let pairs = 0;
  while (!pairs) {
    pairs = pairing([13]);
  }

  let sum = 0
  for (let i = 0; i < pairs.length; i++) {
    sum += pairs[i];
  }

  return sum;
}

primePairSets();
