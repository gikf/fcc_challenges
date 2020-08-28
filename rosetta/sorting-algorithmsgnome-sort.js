function gnomeSort(a) {
  let i = 1;
  let j = 2;
  while (i < a.length) {
    if (a[i - 1] <= a[i]) {
      i = j;
      j++;
    } else {
      [a[i - 1], a[i]] = [a[i], a[i - 1]];
      i--;
      if (i == 0) {
        i = j;
        j++;
      }
    }
  }
  return a;
}
