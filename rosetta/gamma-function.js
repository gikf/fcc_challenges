function gamma(x) {
  // Lanczos approximation
  const p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
  ]

  if (x < 0.5) {
    return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  }

  x -= 1;
  let z = p[0]
  const g = 7;
  const t = x + g + 0.5;
  for (let i = 1; i < p.length; i++) {
    z += p[i] / (x + i);
  }
  return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * z;
}

console.log(gamma(.1));