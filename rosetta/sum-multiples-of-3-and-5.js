function sumMults(n) {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
    i++;
  }
  return result;
}
