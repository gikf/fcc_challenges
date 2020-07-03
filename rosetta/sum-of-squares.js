function sumsq(array) {
  let squared = 0;
  for (let i = 0; i < array.length; i++) {
    squared += array[i]**2;
  }
  return squared;
}
