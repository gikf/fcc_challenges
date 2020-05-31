function amicablePairsUpTo(maxNum) {
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

  const pairs = [];

  for (let i = 10; i < maxNum; i++) {
    const divisorsSum = sumDivisors(getProperDivisors(i));
    if (divisorsSum > i && i == sumDivisors(getProperDivisors(divisorsSum))) {
      pairs.push([i, divisorsSum]);
    }
  }
  return pairs;
}
