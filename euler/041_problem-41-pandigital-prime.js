function pandigitalPrime(n) {
  // get primes table
  function get_primes(num) {
    let primes_map = new Array(num + 1);
    primes_map.fill(true);
    let primes = []

    for (let i = 2; i < primes_map.length; i++) {
      if (primes_map[i]) {
        primes.push(i);
        for (let j = i * i; j < primes_map.length; j += i) {
          primes_map[j] = false;
        }
      }
    }
    return primes;
  }

  // check if pandigital
  function is_pandigital(num, min, max) {
    const str_num = num.toString();
    let control = [];
    for (let i = 0; i < str_num.length; i++) {
      // numbers in the allowed range
      if (parseInt(str_num[i]) < min || parseInt(str_num[i]) > max) {
        return false;
      }
      // duplication
      if (control.indexOf(str_num[i]) != -1) {
        return false;
      }
      control.push(str_num[i]);
    }
    return true;
  }

  // potential max, from the allowed digits
  function get_pot_max(min, max) {
    let pot_max = '';

    for (let i = max; i >= min; i--) {
      pot_max += i.toString();
    }
    return parseInt(pot_max);
  }

  // possible optimization to create array of n! allowed combinations
  function get_combinations(num) {
    //TODO
  }

  const MINI = 1;
  const MAXI = n;
  const potential_max = get_pot_max(MINI, MAXI);
  const potential_min = parseInt(potential_max
                                  .toString()
                                  .split('')
                                  .reverse()
                                  .join(''));
  const primes = get_primes(potential_max);  

  // loop primes backwards
  for (let i = potential_max; i > potential_min; i--) {
    if (is_pandigital(i, MINI, MAXI) && primes.indexOf(i) != -1) {
      return i;
    }
  }
  return false;
}

//pandigitalPrime(7);
console.log(pandigitalPrime(4));
