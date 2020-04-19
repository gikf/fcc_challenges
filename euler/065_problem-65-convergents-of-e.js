function convergentsOfE() {
  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      let mod = num % 10n;
      sum += parseInt(mod.toString());
      num = num / 10n;
    }
    return sum;
  }

  // agrr BigInts are needed
  const converg = [[2n, 1n], [3n, 1n]]
  const seq = [1n, 1n, 2n];
  for (let i = 2; i < 100; i++) {
    let curA = converg[converg.length - 2][0] + seq[i % 3] * converg[converg.length - 1][0];
    
    let curB = converg[converg.length - 2][1] + seq[i % 3] * converg[converg.length - 1][1];
    converg.push([curA, curB]);
    if (i % 3 == 2) {
      seq[2] += 2n;
    }
  }

  let result = sumDigits(converg[converg.length - 1][0]);
  return result;
}

convergentsOfE();