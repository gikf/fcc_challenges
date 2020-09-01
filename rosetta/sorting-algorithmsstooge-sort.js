function stoogeSort(arr) {
  function stogging(arr, i, j) {
    if (arr[j] < arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    if (j - i > 1) {
      const t = Math.floor((j - i + 1) / 3);
      stogging(arr, i, j - t);
      stogging(arr, i + t, j);
      stogging(arr, i, j - t);
    }
    return arr;
  }
  return stogging(arr, 0, arr.length - 1);
}
