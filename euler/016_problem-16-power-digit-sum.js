function powerDigitSum(exponent) {
  let two_exp = BigInt(2 ** exponent);
  let sum = 0;

  while (two_exp > BigInt(0)) {
    sum += parseInt(two_exp % BigInt(10));
    two_exp = two_exp / BigInt(10);
  }

  return sum;
}

//console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000))
