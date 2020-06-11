function standardDeviation(arr) {
  let sum = 0;
  let xsSquared = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const mean = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    xsSquared += (arr[i] - mean)**2;
  }

  return Math.round((xsSquared / arr.length)**0.5 * 1000) / 1000;
}
