function sumAmicableNum(n) {
  // Good luck!
  function sumDivisors(num) {
    let sum = 0;
    // divisors
    for (let i = 1; i <= num / 2; i++) {
      if (num % i == 0) {
        sum += i;
      }
    }
    return sum;
  }

  function isAmicable(num) {
    let sum_div_num = sumDivisors(num);
    let sum_div_sum = sumDivisors(sum_div_num);
    if (num == sum_div_sum && sum_div_num != sum_div_sum) {
      return true;
    }
    return false;
  }

  let sum_amicable = 0;

  for (let i = 10; i <= n; i++) {
    if (isAmicable(i)) {
      sum_amicable += i;
    }
  }

  return sum_amicable;
}

console.log(sumAmicableNum(1000));
