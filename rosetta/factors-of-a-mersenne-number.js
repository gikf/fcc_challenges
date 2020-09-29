function check_mersenne(p) {
  function checkFactor(factor, binary) {
    let curValue = 1;
    for (let i = 0; i < binary.length; i++) {
      curValue = curValue * curValue;
      if (binary[i] == '1') {
        curValue *= 2;
      }
      curValue = curValue % factor
    }
    return curValue;
  }

  function checkNumber(p) {
    const binaryP = p.toString(2);
    for (let k = 0; 2 * k * p + 1 <= Math.sqrt(2**p); k++) {
      const curFactor = 2 * k * p + 1;
      const factorResult = checkFactor(curFactor, binaryP);
      if (factorResult == 1 || factorResult == 7 % 8) {
        return 'composite with factor ' + curFactor;
      }
    }
    return 'prime';
  }
  
  const isPrime = checkNumber(p);
  return `M${p} = 2^${p}-1 is ${isPrime}`
}
