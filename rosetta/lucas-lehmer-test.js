function lucasLehmer(p) {
  const mersenne = BigInt(2**p - 1);

  let curS = 4n;
  let i = 1;
  while (i < p - 1) {
    curS = curS*curS - 2n;
    i++;
  }
  return curS % mersenne == 0n;
}
