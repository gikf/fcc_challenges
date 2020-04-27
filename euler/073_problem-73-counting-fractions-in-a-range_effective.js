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

countingFractionsInARange();
