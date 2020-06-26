function linearCongGenerator(r0, a, c, m, n) {
  let i = 0;
  let ri = r0;
  while (i != n) {
    ri  = (a * ri + c) % m;
    i++;
  }
  
  return ri;
}
