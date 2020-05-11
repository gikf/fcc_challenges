function primePowerTriples() {
  // Get primes
  function sievePrimes() {
    const primes = [];
    const primesMap = new Array(MAX).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i <= MAX; i++) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j <= MAX; j = j + i) {
          primesMap[j] = false;
        }
      }
    }
    return primes;
  }
  const numbers = new Set();
  const LIMIT = 50 * 10**6;
  // Max number which **2 is lower than LIMIT
  const MAX = Math.floor((LIMIT - 2**3 - 2**4)**(1/2)) + 1;
  const primes = sievePrimes();

  for (let i = 0; i < primes.length; i++) {
    let curExpI = primes[i]**2;
    if (curExpI >= LIMIT) {
      break;
    }
    for (let j = 0; j < primes.length; j++) {
      let curExpIJ = curExpI + primes[j]**3;
      if (curExpIJ >= LIMIT) {
        break;
      }

      for (let k = 0; k < primes.length; k++) {
        let curExpIJK = curExpIJ + primes[k]**4;
        if (curExpIJK >= LIMIT) {
          break;
        }
        numbers.add(curExpIJK);
      }
    }
  }

  console.log(numbers.size);
  return numbers.size;
}

primePowerTriples();
