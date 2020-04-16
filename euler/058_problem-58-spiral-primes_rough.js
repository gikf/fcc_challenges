function spiralPrimes() {
  /*// sieve prime
  function sieve_prime(primes_map, limit) {
    let i = 2
    for (i; i < limit; i += 2) {
      if (primes_map[i]) {
        for (let j = i * i; j < limit; j += i) {
            primes_map[j] = false;
        }
      }
      if (i == 2) {
        i = 1;
      }
    }
  }

  function probablyPrime(n, k) {
	if (n === 2 || n === 3)
		return true;
	if (n % 2 === 0 || n < 2)
		return false;
 
	// Write (n - 1) as 2^s * d
	var s = 0, d = n - 1;
	while (d % 2 === 0) {
		d /= 2;
		++s;
	}
 
	WitnessLoop: do {
		// A base between 2 and n - 2
		var x = Math.pow(2 + Math.floor(Math.random() * (n - 3)), d) % n;
 
		if (x === 1 || x === n - 1)
			continue;
 
		for (var i = s - 1; i--;) {
			x = x * x % n;
			if (x === 1)
				return false;
			if (x === n - 1)
				continue WitnessLoop;
		}
 
		return false;
	} while (--k);
 
	return true;
}

  function miller_test(d, n) {
    const a = 2 + Math.floor(Math.random() * (n - 3));
    let x = Math.pow(a, d) % n;
    if (x == 1 || x == n - 1) {
      return true;
    }

    while (d != n - 1) {
      x = (x * x) % n;
      d = d * 2;

      if (x == 1) {
        return false;
      }
      if (x == n - 1) {
        return true;
      }
    }
    return false;
  }

  function miller_rabin(num, tests_n) {
    if (num == 2 || num == 3) {
      return true;
    }
    if (num % 2 == 0 || num < 2) {
      return false;
    }

    let r = 0;
    let d = num - 1;
    while (d % 2 == 0) {
      d = d / 2;
      r++;
    }

    for (let i = 0; i < tests_n; i++) {
      if (miller_test(d, num) === false) {
        return false;
      }
    }
    return true;
  }

  // is prime
  function is_prime(num, primes_map) {
    if (num % 2 == 0) {
      return false;
    }
    return primes_map[num];
  }*/

  function isPrime(n) {
    if (n <= 3) return n > 1;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i+= 6) {
      if (n % i === 0 || n % (i+2) === 0)
        return false;
    }
    return true;
  }

  // expand spiral

  // total includes 1 from the start
  let total = 1;
  let primes_count = 0;
  let cur_number = 1;
  let cur_length = 1;
  let ratio = 1;
  /*const limit = 34000000
  const primes_map = new Array(limit);
  primes_map.fill(true);
  primes_map[0] = false;
  primes_map[1] = false;
  sieve_prime(primes_map, limit);*/
    
  while (ratio >= 0.1) {
    cur_length += 2;
    for (let i = 0; i < 4; i++) {
      cur_number += cur_length - 1;
      total++;
      //if (i != 3 && is_prime(cur_number, primes_map)) {
        if (i != 3 && isPrime(cur_number)) {
        primes_count++;
      }
    }
    //ratio = Math.round(((primes_count / total) + Number.EPSILON) * 10) / 10;
     ratio = primes_count / total;
    //console.log(ratio)
  }
  console.log(cur_number);
  return cur_length;
}


 /*let p = 0;
  for (let m = 3; ; m+= 2) {
    p+= isPrime((m - 1) * m + 1);
    p+= isPrime((m - 2) * m + 2);
    p+= isPrime((m - 3) * m + 3);
    if (10 * p < 2 * m - 1) {
      return m;
    }
  }
}*/

console.log(spiralPrimes());
