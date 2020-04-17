function powerfulDigitCounts() {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let counter = 1;
  //const numbers = new Set([1]);
  let curNum = 2;

  while (countDigits(curNum ** 1) < 2) {
    let power = 1;
    let curExp = curNum ** power;
    while (power == countDigits(curExp)) {
      counter++;
      //numbers.add(curExp);

      power++;
      curExp = curNum ** power;
    }
    curNum++;
  }

  return counter;
}

powerfulDigitCounts();
