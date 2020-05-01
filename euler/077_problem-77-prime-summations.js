function primeSummations() {
  // based on problem 31 and 76

  function sievePrime(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i == 2) {
        i = 1;
      }
    }
    return primes;
  }

  // rather arbitrary number, but it's enough
  const LIMIT = 100;
  const primes = sievePrime(LIMIT);

  // 10 has 5 ways, it's a good place to start
  for (let k = 10; k < LIMIT; k++) {
    const combinations = new Array(k + 1).fill(0);
    combinations[0] = 1;
    for (let i = 0; i < primes.length; i++) {
      for (let j = primes[i]; j <= k; j++) {
        combinations[j] += combinations[j - primes[i]];
      }
    }
    // Check the number of combinations
    if (combinations[combinations.length - 1] > 5000) {
      return k;
    }
  }

  // Good luck!
  return false;
}

primeSummations();
