function quadraticPrimes(range) {
  // Good luck!
  let primes = [2];
  function isPrime(num) {
    if (primes.indexOf(num) != -1) {
      return true;
    }
    if (num % 2 == 0 || num < 0) {
      return false;
    }
    for (let i = 3; i <= num**0.5; i = i + 2) {
      if (num % i == 0) {
        return false;
      }
    }
    primes.push(num);
    return true;
  }

  function func(n, a, b) {
    return n**2 + a * n + b;
  }

  let num_cons_primes = 0;
  let prod_ab = 0;
  for (let a = -range; a < range; a++) {
    for (let b = -range; b <= range; b++) {
  /*for (let a = 0; a < range; a ++) {
    for (let b = 0; b <= range; b++) {*/
      let n = 0;
      while (isPrime(func(n, a, b))) {
        n++;
      }
      if (num_cons_primes < n) {
        console.log(n, a, b);
        num_cons_primes = n;
        prod_ab = a * b;
      }
    }
  }
  console.log('p', prod_ab);
  return prod_ab;
}

quadraticPrimes(200);
