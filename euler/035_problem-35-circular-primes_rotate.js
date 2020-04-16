function circularPrimes(n) {
  // generating primes table
  function get_primes(prime_map, lim) {
    // sieve table setup
    prime_map.fill(true);

    for (let i = 2; i <= lim**0.5; i++) {
      if (prime_map[i]) {
        // multiplications of i are not primes
        for (let j = i * i; j <= lim; j += i) {
          if(prime_map[j]) {
            prime_map[j] = false;
          }
        }
      }
    }
  }

  // checking if num is in primes
  function is_prime(prime_map, num) {
    if (prime_map[num]) {
      return true;
    }
    return false;
  }

  let LN10 = Math.log(10);
  // rotating numbers
  function rotate(number) {
    return (number / 10 >> 0) +
      (number % 10) * Math.pow(10, Math.floor(Math.log(number) / LN10));
  }

  // circulating
  function circulate(prime_map, num) {
    if (num < 10) {
      return [num];
    }

    // circ
    let arr = [num];
    let circular = true;
    let temp_n = num;

    for (temp_n = rotate(num); temp_n != num; temp_n = rotate(temp_n)) {
      if (!is_prime(prime_map, temp_n)) {
        return false;
      }
      arr.push(temp_n);
    }
    return arr;
  }

  // number loop
  let limit = n;
  let boundary = 10000000;
  let min = 100;
  let prime_map = new Array(boundary);
  let circular = [2];

  // filling up map and primes
  get_primes(prime_map, boundary);

  for (let i = 3; i <= limit; i += 2) {
    // circulating if prime is in limit
    if (prime_map[i]) {
      let circ_arr = circulate(prime_map, i);
      if (circ_arr) {
        for (let j = 0; j < circ_arr.length; j++) {
          if (circular.indexOf(circ_arr[j]) == -1 && circ_arr[j] < limit) {
            circular.push(circ_arr[j]);
          }
        }
      }
    }
  }
  return circular.length;
}

//circularPrimes(1000000);
//circularPrimes(250000);
//console.log(circularPrimes(100));
