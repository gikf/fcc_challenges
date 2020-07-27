function emirps(n, returnArray=false) {
  function isPrime(num) {
    if (num < 2 || num % 2 == 0) {
      return false;
    }

    for (let i = 3; i < Math.sqrt(num) + 1; i = i + 2) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  function isEmirp(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return num != reversed && isPrime(reversed);
  }

  function checkLimit() {
    return emirpArray.length < n;
  }

  function checkRange() {
    const [_, end] = n;
    return curNum < end;
  }

  const emirpArray = [];
  let curNum = 11;
  let checkBoundary = checkLimit;
  let rangeEmirps = false;

  if (!Number.isInteger(n)) {
    checkBoundary = checkRange;
    rangeEmirps = true;
    const [start, _] = n;
    curNum = start;
    if (curNum % 2 == 0) {
      curNum += 1;
    }
  }

  while (checkBoundary()) {
    if (isPrime(curNum) && isEmirp(curNum)) {
      emirpArray.push(curNum);
    }
    curNum += 2;
  }

  if (returnArray) {
    return emirpArray;
  } else if (rangeEmirps) {
    return emirpArray.length;
  } else {
    return emirpArray[emirpArray.length - 1];
  }
}
