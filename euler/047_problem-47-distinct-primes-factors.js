function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  // get primes
  function get_primes(num, primes) {
    // starting from last computed prime or from 1
    let start = primes[primes.length - 1];
    if (start == 2) {
      start = 1;
    }

    for (let i = start + 2; i <= num; i = i + 2) {
      let prime = true;
      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] == 0) {
          prime = false;
          break;
        }
      }
      if (prime) {
        primes.push(i);
      }
    }
    return primes;
  }

  // is prime
  function is_prime(num, primes) {
    if (num % 2 == 0) {
      return false;
    }

    if (primes[primes.length - 1] > num) {
      if (primes.indexOf(num) != -1) {
        return true;
      }
    } else {
      // computing more primes if we are under the last one
      get_primes(num + 1000, primes);
      return is_prime(num, primes);
    }
    return false;
  }

  // get next non prime larger than num
  function get_next_non_prime(num, primes) {
    while (is_prime(++num, primes)) {

    }
    return num;
  }

  // get prime factors and return number
  function count_prime_factors(num, primes) {
    // making sure we have enough primes
    if (primes[primes.length - 1] < num / 2) {
      get_primes(num, primes);
    }

    let counter = 0;
    let distinct = [];
    let start_num = num;

    for (let i = 0; i <= primes.length; i++) {
      if (primes[i] > start_num / 2) {
        break;
      }
      if (num % primes[i] == 0) {
        distinct.push(primes[i]);
        counter++;
      }
      while (num % primes[i] == 0) {
        num = num / primes[i];
      }
    }
    return [counter, distinct];
  }
  // num loop
  let cur_consecutive = 0;
  let first_from_seq = 0;
  let primes = [2];
  let primes_map = [];
  let cur_num = 10;

  // checking if we have enough in the sequence
  while (cur_consecutive != targetConsecutive) {
    // computing factors and adding to cur_consecutive if we like them
    let factors_c = count_prime_factors(cur_num, primes)[0];
    if (factors_c == targetNumPrimes) {
      if (cur_consecutive == 0) {
        first_from_seq = cur_num;
      }
      cur_consecutive++;

      if (cur_consecutive == targetConsecutive) {
        break;
      }
    } else {
      cur_consecutive = 0;
    }

    // move to next non-prime
	// reset counter if next number can't be in sequence
    let temp = cur_num;
    cur_num = get_next_non_prime(cur_num, primes);

    if (temp + 1 != cur_num) {
      cur_consecutive = 0;
    }
  }
  // useless
  if (cur_consecutive != targetConsecutive) {
    console.log(cur_num);
    return false;
  }
  return first_from_seq;
}

//distinctPrimeFactors(4, 4);
console.log(distinctPrimeFactors(2, 2));
