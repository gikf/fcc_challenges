function nthPrime(n) {
  let primes = [2];
  let primes_count = 1;
  let cur_num = 1;

  function isPrime(num, p) {
    let p_max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= p_max; i++) {
      if (num % p[i] == 0) {
        return false;
      }
    }
    return true;
  }
while (primes_count < n) {
  cur_num += 2;
  if (isPrime(cur_num, primes)) {
    primes.push(cur_num);
    primes_count++;
  }
}
  return cur_num;
}

console.log(nthPrime(10001));
console.log(nthPrime(10));
