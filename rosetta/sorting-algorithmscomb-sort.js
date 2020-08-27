function combSort(arr) {
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  let gap = arr.length;
  const shrinking = 1.25;
  while (!isSorted(arr)) {
    gap = Math.floor(gap / shrinking);
    if (gap <= 1) {
      gap = 1;
    }
    
    for (let i = 0; i + gap < arr.length; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
      }
    }
  }
  return arr;
}
