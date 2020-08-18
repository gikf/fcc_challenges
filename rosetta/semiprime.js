function isSemiPrime(n) {
  function sievePrimes(limit) {
    const primesMap = new Array(limit + 1).fill(true);
    const primes = [];
    for (let i = 2; i <= limit; i += 2) {
      if (primesMap[i]) {
        primes.push(i);

        for (let j = i * i; j <= limit; j += i) {
          primesMap[j] = false;
        }
      }
      if (i == 2) {
        i = 1;
      }
    }
    return primes;
  }

  const primes = sievePrimes(Math.floor(n / 2));

  for (let i = 0; i <= Math.floor(primes.length / 2); i++) {
    if (primes[i] * primes[primes.length - 1] < n) {
      continue;
    }
    for (let j = 0; j < primes.length; j++) {
      const product = primes[i] * primes[j]
      if (product > n) {
        break;
      }
      if (product == n) {
        return true;
      }
    }
  }
  return false;
}
