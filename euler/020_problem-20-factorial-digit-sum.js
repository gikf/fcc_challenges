function sumFactorialDigits(n) {
  function factor(num) {
    let result = BigInt(1);
    for (let i = BigInt(1); i <= num; i++) {
      result *= i;
    }
    return result;
  }

  function sumNumbers(num) {
    let sum = BigInt(0);
    while (num > BigInt(0)) {
      sum += num % BigInt(10);
      num = num / BigInt(10);
    }
    return parseInt(sum.toString());
  }
  
  return sumNumbers(factor(n));
}

console.log(sumFactorialDigits(25));
