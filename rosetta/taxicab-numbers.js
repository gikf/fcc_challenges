function taxicabNumbers(n) {
  const sumCubes = {};
  const taxiCabs = new Set();
  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      const cubeSum = i**3 + j**3;
      if (!sumCubes.hasOwnProperty(cubeSum)) {
        sumCubes[cubeSum] = 0;
      }
      sumCubes[cubeSum]++;

      if (sumCubes[cubeSum] > 2) {
        taxiCabs.add(cubeSum);
      }
    }
  }
  const taxiCabsSorted = [...taxiCabs].sort((a, b) => a - b);
  return taxiCabsSorted.slice(0, n);
}
