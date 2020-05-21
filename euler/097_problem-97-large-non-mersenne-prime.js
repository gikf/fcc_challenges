function lrgNonMersennePrime() {
  // 
  function powerCut(num, pow, digitsNum) {
    let result = 1;
    let mod = 10**digitsNum;
    for (let i = 0; i < pow; i++) {
      result *= num;
      // Cut non-important digits
      result = result % mod;
    }
    return result;
  }

  let lastDigits = 0;
  // Number of digits that matter in result
  const digitsNum = 10;
  const powered = powerCut(2, 7830457, digitsNum);

  let importantDigits = powered;
  lastDigits = (28433 * importantDigits + 1) % 10**digitsNum;

  console.log(lastDigits);
  return lastDigits;
}

lrgNonMersennePrime();
