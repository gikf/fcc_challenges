function farey(n) {
  const result = [];
  for (let denominator = 1; denominator <= n; denominator++) {
    for (let numerator = 1; numerator < denominator; numerator++) {
      result.push({
        str: `${numerator}/${denominator}`,
        value: numerator/denominator
      });
    }
  }
  return result.sort((a, b) => a.value - b.value)
               .map(a => a.str);
}

function farey2(n) {
  let a = 0;
  let b = 1;
  let c = 1;
  let d = n;
  const result = [];
  while (c <= n) {
    let k = Math.floor((n + b) / d);
    [a, b, c, d] = [c, d, k * c - a, k * d - b];
    result.push(`${a}/${b}`);
  }
  return result.slice(0, result.length - 1);
}
