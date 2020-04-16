function largestPrimeFactor(number) {
  let num = number;
  let current = 2;

  function isPrime(n) {
    if (n == 2) {
      return true;
    }
    if (n % 2 == 0) {
      return false;
    }

    let counter = 0;
    for (let i = 3; i < n; i = i + 2) {
      counter++;
      if (n % i == 0) {
        return false;
      }
    }

    return true;
  }

  function nextPrime(current) {
    let c = current + 1;
    if (c % 2 == 0) {
      c++;
    }
    while (!isPrime(c)) {
      c = c + 2;
    }

    return c;
  }

  while (num > 1) {
    if (num % current != 0) {
      current = nextPrime(current);
      continue;
    }
    num = num / current;
  }
  return current;
}

largestPrimeFactor(13195);
console.log(largestPrimeFactor(13195));
//console.log(largestPrimeFactor(5));
//console.log(largestPrimeFactor(7));
