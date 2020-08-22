function lengthSorter(arr) {
  function lexicographicSort(a, b) {
    return a < b ? -1 : 1;
  }

  function lengthSort(a, b) {
    return b.length - a.length;
  }

  arr.sort(lexicographicSort);
  arr.sort(lengthSort);
  return arr;
}
