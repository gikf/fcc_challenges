function sumPrimes(num) {
  let psum = 0;
  let n = 2;

  function isPrime(qn) {
    for (let i = 2; i < qn; i++) {
      if (qn % i == 0) {
        return false;
      }
    }

    return true;
  }

  while (n <= num) {
    if (isPrime(n)) {
      psum += n;
    }
    n++;
  }
  return psum;
}

sumPrimes(10);
sumPrimes(977);
