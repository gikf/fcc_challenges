function coinPartitions() {
  const p = [];
  p.push(1);

  let n = 1;
  while(true) {
    let i = 0;
    let pentagon = 1;
    p.push(0);

    while (pentagon <= n) {
      let sign = 0;
      if (i % 4 > 1) {
        sign = -1;
      } else {
        sign = 1;
      }
      p[n] += sign * p[n - pentagon];
      p[n] = p[n] % 1000000;

      i++;

      let j = Math.floor(i / 2) + 1;
      if (i % 2 != 0) {
        j *= -1;
      }
      pentagon = Math.floor((j * (3 * j - 1)) / 2);
    }

    if (p[n] == 0) {
      break;
    }
    n++;
  }
  console.log(n);
  return n;
}

coinPartitions();
