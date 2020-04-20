function diophantineEquation() {
  // https://en.wikipedia.org/wiki/Pell's_equation#Additional_solutions_from_the_fundamental_solution
  const LIMIT = 1000
  let result = 0;
  let biggest = 0n;

  for (let D = 2; D <= LIMIT; D++) {
    let boundary = Math.floor(Math.sqrt(D));
    if (boundary**2 == D) {
      continue;
    }

    let m = 0n;
    let d = 1n;
    let a = BigInt(boundary);

    // numerators, num i, numerator i - 1
    let num_1 = 1n;
    let num = a;

    // denominators, den i, denominator i - 1
    let den_1 = 0n;
    let den = 1n;
    while (num*num - BigInt(D) * den*den != 1n) {
      //console.log(num**2 - D * den**2);
      m = d*a - m;
      d = (BigInt(D) - m*m) / d;
      a = (BigInt(boundary) + m) / d;

      let num_2 = num_1;
      num_1 = num;
      let den_2 = den_1;
      den_1 = den;

      num = a * num_1 + num_2;
      den = a * den_1 + den_2;
    }

    if (num > biggest) {
      biggest = num;
      result = D;
    }
  }
  return result;
}

diophantineEquation();
