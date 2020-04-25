function orderedFractions() {
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

  const LIMIT = 1000000;
  const gcds = {};
  const fractions = [];
  const fractionVals = {};
  const thrSev = 3/7;
  let lowBoundary = 2/7;
  let iStart = Math.floor(3/7 * LIMIT) - 1;

  for (let i = iStart; i < LIMIT; i++) {
    if (i / LIMIT > thrSev) {
      break;
    }
    //for (let j = LIMIT; j > i; j--) {
      let j = LIMIT - 1;
      if (i / j > thrSev) {
        break;
      }
      if (i / j < lowBoundary) {
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
      console.log(val, i, j);
      lowBoundary = val;

      if (j % 4000 == 0) {
        console.log(i, j);
      }
    //}
  }

  fractions.sort();
  let indexThrSev = fractions.indexOf(thrSev);
  let result = fractionVals[fractions[indexThrSev - 1]][0];

  console.log('res', result);
  //console.log(gcds);
  return result;
}


orderedFractions();
console.log(428570/999999)