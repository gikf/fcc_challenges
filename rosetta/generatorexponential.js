function exponentialGenerator(n) {
  function* powerGenerator(power) {
    let base = 1;
    while (true) {
      yield base**power;
      base++;
    }
  }
  function* filterGenerator(square, cube) {
    let curSquare = square.next().value;
    let curCube = cube.next().value;
    while (true) {
      if (curSquare < curCube) {
        yield curSquare;
      } else if (curSquare > curCube) {
        curCube = cube.next().value;
        continue;
      }
      curSquare = square.next().value;
    }
  }
  const square = powerGenerator(2);
  const cube = powerGenerator(3);
  const filtered = filterGenerator(square, cube);
  let lastUnfiltered = null;

  for (let i = 0; i < n; i++) {
    lastUnfiltered = filtered.next().value;
  }

  return lastUnfiltered;
}
