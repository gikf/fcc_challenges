function consecutivePrimeSum(limit) {
  // sieve primes
  function get_sieve_primes(max_num, primes_map) {
    for (let i = 2; i < max_num; i++) {
      if (primes_map[i]) {
        for (let j = i + i; j < max_num; j = j + i) {
          primes_map[j] = false;
        }
      }
    }
    return primes_map;
  }

  // adding consecutive primes to create num
  function is_cons_primes_seq(num, primes_map) {
    let sum = 0;
    let counter = 0;
    for (let i = 2; i < primes_map.length; i++) {
      if (primes_map[i]) {
        sum += i;
        counter++;
      }

      // direct match
      if (sum == num) {
        return [true, true, counter];
      } else if (sum > num) {
        for (let j = 2; j < primes_map.length; j++) {
          if (primes_map[j]) {
            sum -= j;
            counter--;
          }

          // indirect match
          if (sum == num) {
            return [true, false, counter];
          } else if (sum < num) {
            return false;
          }
        }
      }
    }
  }

  let primes_map = new Array(limit);
  primes_map.fill(true);
  primes_map[0] = false;
  primes_map[1] = false;
  let cur_num = limit - 1;
  let longest_seq = 0;
  let longest_num = 0;
  let cur_seq = 0;
  let direct_seq = false;

  primes_map = get_sieve_primes(limit, primes_map);
  //console.log(is_cons_primes_seq(953, primes_map));

  // going through primes from the back
  for (let i = cur_num; i > 0; i--) {
    if (primes_map[i]) {
      let res = is_cons_primes_seq(i, primes_map);
      if (res) {
        direct_seq = res[1];
        cur_seq = res[2];
        if (cur_seq > longest_seq) {
          longest_seq = cur_seq;
          longest_num = i
        }
      }
    }

    if (direct_seq) {
      return longest_num;
    }
  }
}

//consecutivePrimeSum(1000000);
console.log('res', consecutivePrimeSum(1000));
