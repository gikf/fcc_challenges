function sumOfNonAbundantNumbers(n) {
  function sumDivisors(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }
    return sum;
  }

  function isAbundant(num) {
    return num < sumDivisors(num);
  }

  function getAbundants(limit_num) {
    let arr = [];
    for (let i = 12; i <= limit_num; i++) {
      if (isAbundant(i)) {
        if (arr[0] + i > limit_num) {
          return arr;
        }
        arr.push(i);
      }
    }
    return arr;
  }

  let abundants = getAbundants(n);
  let abundants_sum = new Set();
  let sum_non_abundants = 0;

  for (let i = 0; i < abundants.length; i++) {
    for (let j = 0; j < abundants.length; j++) {
      abundants_sum.add(abundants[i] + abundants[j]);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!abundants_sum.has(i)) {
      sum_non_abundants += i;
    }
  }

  return sum_non_abundants;
}

//sumOfNonAbundantNumbers(28123);
console.log(sumOfNonAbundantNumbers(10000));
