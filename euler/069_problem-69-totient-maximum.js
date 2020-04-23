function totientMaximum() {
  function getSievePrimes(max) {
    primesMap.fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    let primes = [];
    for (let i = 2; i < max; i = i + 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i == 2) {
        i = 1;
      }
    }
    return primes;
  }

  const LIMIT = 1000000;
  const primesMap = new Array(100);
  let curRes = 1;
  let i = 0;
  const primes = getSievePrimes(100);

  while (curRes * primes[i] < LIMIT) {
    curRes *= primes[i];
    i++;
  }
  console.log(primes[i]);
  console.log(curRes);
  return curRes;
}

totientMaximum();
