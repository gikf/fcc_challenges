function singularIntRightTriangles() {
  function gcd(numA, numB) {
    if (numB === 0) {
      return numA;
    } else {
      return gcd(numB, numA % numB);
    }
  }

  const LIMIT = 1500000;
  //const LIMIT = 10000;
  const perim = new Array(LIMIT + 1);
  perim.fill(0);
  const MLIMIT = Math.sqrt(LIMIT / 2);

  for (let m = 2; m < MLIMIT; m++) {
    for (let n = 1; n < m; n++) {
      if ((m + n) % 2 == 1 && gcd(m, n) == 1) {
        let a = m**2 - n**2;
        let b = 2 * m * n;
        let c = m**2 + n**2;
        let curPerim = a + b + c;
        while (curPerim < LIMIT) {
          perim[curPerim]++;
          curPerim += a + b + c;
        }
      }
    }
  }
  const res = perim.filter((a) => a == 1).length;
  return res;
}

singularIntRightTriangles();
