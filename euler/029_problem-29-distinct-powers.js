function distinctPowers(n) {
  let distinct = new Set();

  for (let a = 2; a <= n; a++) {
    for (let b = 2; b <= n; b++) {
      let res = a ** b;

      distinct.add(res);
    }
  }
  // Good luck!
  return distinct.size;
}

distinctPowers(15);
