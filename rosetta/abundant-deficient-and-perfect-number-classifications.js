function getDPA(num) {
  function getProperDivisors(n) {
    const divisors = [];
    for (let i = 1; i < Math.floor(n / 2) + 1; i++) {
      if (n % i == 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  
  function sumDivisors(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  function isAbundant(n, divisors) {
    let sum = sumDivisors(divisors);

    if (sum < n) {
      return 'deficient';
    } else if (sum > n) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }

  const res = {'deficient': 0,
               'perfect': 1,
               'abundant': 2};
  const resArr = [0, 0, 0];

  for (let i = 1; i <= 20000; i++) {
    const divisors = getProperDivisors(i);
    const index = res[isAbundant(i, divisors)]
    resArr[index] += 1;
  }

  return resArr;
}

console.log(getDPA(20000))
