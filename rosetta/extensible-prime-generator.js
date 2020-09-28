function primeGenerator(num, showPrimes) {
  function isRange(num) {
    return typeof num === 'object';
  }

  function isPrime(num) {
    if (num == 2) {
      return true;
    } else if (num < 2 || num % 2 == 0) {
      return false;
    }

    for (let i = 3; i < Math.floor(Math.sqrt(num)) + 1; i += 2) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  function resultPrimes(isNumRange, primes) {
    if (isNumRange) {
      return primes.length;
    }
    return primes[primes.length - 1];
  }

  function incrementI(isNumRange, i) {
    if (isNumRange) {
      return i + 1;
    }
    return i + 2;
  }

  function checkCondition(isNumRange) {
    if (isNumRange) {
      return i <= end;
    }
    return primes.length < end;
  }

  const isNumRange = isRange(num);

  const primes = [];
  let start = 0;
  let end = 0;
  let i = 0;

  if (isNumRange) {
    [start, end] = num;
  } else {
    [start, end] = [3, num];
    primes.push(2);
  }

  for (i = start; checkCondition(isNumRange); i = incrementI(isNumRange, i)) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  if (showPrimes) {
    return primes;
  }
  return resultPrimes(isNumRange, primes);
}
