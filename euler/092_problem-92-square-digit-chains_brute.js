function squareDigitChains() {
  function addSquaredDigits(num) {
    let result = 0;
    while (num > 0) {
      result += (num % 10)**2;
      num = Math.floor(num / 10);
    }
    return result;
  }

  const leadTo89 = new Set([85, 89, 145, 42, 20, 4, 16, 37, 58]);
  const leadToOther = new Set([44, 32, 13, 10, 1]);
  const LIMIT = 10**7;
  let counter = 0;

  for (let i = 1; i < LIMIT; i++) {
    const seq = [i];
    let curSquaredSum = i;
    while (true) {
      curSquaredSum = addSquaredDigits(curSquaredSum);
      if (leadTo89.has(curSquaredSum)) {
        counter++;
        leadTo89.add(curSquaredSum);
        break;
      }
      if (seq.indexOf(curSquaredSum) != -1) {
        leadToOther.add(curSquaredSum);
        break;
      }
      seq.push(curSquaredSum);
    }
  }
  console.log(counter)
  return counter;
}

//squareDigitChains();
