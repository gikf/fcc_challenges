function josephus(init, kill) {
  const circle = new Array(init).fill(true);

  let curCount = 0;
  let i = 0;
  let alive = init;
  
  while (alive > 1) {
    if (!circle[i]) {
      i = (i + 1) % init;
      continue;
    }
    curCount++;
    if (curCount == kill) {
      circle[i] = false;
      alive--;
      curCount = 0;
    }

    i = (i + 1) % init;
  }

  return circle.map((val, index) => [index + 1, val])
               .filter((val) => val[1])[0][0];
}
