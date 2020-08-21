function sortByKey(arr) {
  arr.sort((item1, item2) => item1.key - item2.key);
  return arr;
}
