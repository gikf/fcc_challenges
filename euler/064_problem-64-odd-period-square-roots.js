function oddPeriodSqrts() {
  // return array with period
  // get flaky for num with long period
  function getPeriod(num) {
    let result = [];
    num = Math.sqrt(num);
    let ax = Math.floor(num);
    let i = 1;
    while (true) {
      num =  1 / (num - ax);
      ax = Math.floor(num);
      result.push(ax);

      if (i > 1 && i % 2 == 0 && checkPeriod(result)) {
        break;
      }
      if (i > 50) {
        break;
      }
      i++;
    }
    return result.slice(0, result.length / 2);
  }

  // return true if in array there's repeating pattern
  // - period
  function checkPeriod(arr) {
    const potPeriodIndex = arr.length / 2;
    let oneCounter = 0;
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] == 1) {
        oneCounter++;
      }
      if (arr[i] != arr[potPeriodIndex + i]) {
        return false;
      }
    }
    // return false if array has only 1s
    if (oneCounter * 2 == arr.length) {
      return false;
    }

    return true;
  }


  // more efficient and precise
  function getPeriods(num) {
    let period = 0;
    let m = 0;
    let d = 1;
    let a = Math.floor(Math.sqrt(num));
    const a0 = a;
    while (2 * a0 != a) {
      m = d*a - m;
      d = Math.floor((num - m**2) / d);
      a = Math.floor((Math.sqrt(num) + m) / d);
      period++;
    }
    return period;
  }

  const LIMIT = 10000;
  let counter = 0;

  for (let i = 2; i <= LIMIT; i++) {
    // square roots of perfect squares don't have continued fractions
    if (!Number.isInteger(Math.sqrt(i))) {
      // counting only odd periods
      if (getPeriods(i) % 2 != 0) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(oddPeriodSqrts());
