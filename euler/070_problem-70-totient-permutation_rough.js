function totientPermutation() {
  function sievePrimes(max) {
    const primes = [];
    primesMap.fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

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

  function isPermutation(numA, numB) {
    numA = numA.toString().split('').sort().join('');
    numB = numB.toString().split('').sort().join('');
    return numA == numB;
  }

  const LIMIT = 10**7;
  const MAX = 5000;
  const primesMap = new Array(MAX);
  const primes = sievePrimes(MAX);

  let phiMin = 1;
  let min = 1;
  let minRatio = Infinity;

  for (let i = 300; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      let num = primes[i] * primes[j];
      if (num > LIMIT) {
        break;
      }

      let phi = (primes[i] - 1) * (primes[j] - 1);
      let ratio = num / phi;
      
      if (isPermutation(num, phi) && minRatio > ratio) {
        min = num;
        phiMin = phi;
        minRatio = ratio;
      }
    }
  }

  return min;
}

totientPermutation();
