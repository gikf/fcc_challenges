function primeSummation(n) {
  // Good luck!
  let primes = [2];
  let cur_num = 3;
  let sum = 2;

  function isPrime(num, p) {
    //potential max prime for specified num
    let p_max = Math.ceil(Math.sqrt(num));
    for (let i = 0; primes[i] <= p_max; i++) {
      if (num % p[i] == 0) {
        return false;
      }
    }
    return true;
  }

  while (cur_num < n) {
    if (isPrime(cur_num, primes)) {
      primes.push(cur_num);
      sum += cur_num;
    }
    cur_num = cur_num + 2;
  }
  return sum;
}

console.log(primeSummation(2000000));
console.log(primeSummation(2001));
