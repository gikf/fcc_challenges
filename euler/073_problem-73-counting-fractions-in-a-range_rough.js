function countingFractionsInARange() {
  const LIMIT = 12000;
  let a = 1;
  let b = 3;
  let c = Math.floor((a / b) * LIMIT);
  let d = LIMIT - 1;

  let result = 0;

  while (!(c == 1 && d == 2)) {
    result++;

    let k = Math.floor((LIMIT + b) / d);
    let e = k * c - a;
    let f = k * d - b;

    a = c;
    b = d;
    c = e;
    d = f;
  }

  console.log('res', result);
  return result;
}
function countingFractionsInARange() {
  // gcd
  function gcd(numA, numB) {
    if (numB == 0)
      return numA;
    return gcd(numB, numA % numB);
  }

  function getGCD(numA, numB) {
    if (gcds[numA] && gcds[numA][numB]) {
      return gcds[numA][numB];
    }

    let cGCD = gcd(numA, numB);
    if (!gcds[numA]) {
      gcds[numA] = {};
    }
    gcds[numA][numB] = cGCD;
    return cGCD;
  }

  const LIMIT = 12000;
  const gcds = {};
  const fractions = [];
  const fractionVals = {};
  const highBoundary = 1/2;
  const lowBoundary = 1/3;

  for (let i = 1; i < LIMIT; i++) {
    if (i / LIMIT >= highBoundary) {
      break;
    }
    for (let j = LIMIT; j > i; j--) {
      let val = i / j;
      if (val >= highBoundary) {
        break;
      }
      if (val <= lowBoundary) {
        continue;
      }
      if (fractionVals[val]) {
        continue;
      }
      let reduced_i = i;
      let reduced_j = j;
      let curGCD = getGCD(reduced_i, reduced_j);
      while (curGCD !== 1) {
        reduced_i /= curGCD;
        reduced_j /= curGCD;
        curGCD = getGCD(reduced_i, reduced_j);
      }
      let val = reduced_i / reduced_j;
      fractionVals[val] = [reduced_i, reduced_j];
      fractions.push(val);
      //console.log(val, i, j);
    }
  }

  console.log('res', fractions.length);
  //console.log(fractions);
  return fractions.length;
}

countingFractionsInARange();
