function smallestMult(n) {
  let number = n;

  function isDivisible(num, c) {
    for (let i = 1; i <= c; i++) {
      if (num % i != 0) {
        return false;
      }
    }
    return true;
  }

  while (!isDivisible(number, n)) {
    number++;
  }
  return number;
}

console.log(smallestMult(13));
smallestMult(5);
