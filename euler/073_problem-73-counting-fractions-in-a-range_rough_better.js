function countingFractionsInARange() {
  const LIMIT = 12000;
  const fractionVals = new Set();
  const highBoundary = 1/2;
  const lowBoundary = 1/3;

  for (let i = 1; i < LIMIT; i++) {
    if (i / LIMIT >= highBoundary) {
      break;
    }

    let jStart = Math.floor(i / lowBoundary) + 1;
    if (jStart > LIMIT) {
      jStart = LIMIT;
    }
    for (let j = jStart; j > i; j--) {
      let val = i / j;
      if (val >= highBoundary) {
        break;
      }
      if (val <= lowBoundary) {
        continue;
      }

      fractionVals.add(val);
    }
  }

  console.log('res', fractionVals.size);
  //console.log(fractions);
  return fractionVals.size;
}

countingFractionsInARange();
