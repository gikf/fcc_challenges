function permutationSort(arr) {
  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  function permutate(arr, start, end) {
    if (start == end) {
        permutations.push([...arr]);
    } else {
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        permutate(arr, start + 1, end);
        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    }
  }

  function findSortedPermutation() {
    permutate(arr, 0, arr.length - 1);
    for (let i = 0; i < permutations.length; i++) {
      if (isSorted(permutations[i])) {
        return permutations[i];
      }
    }
  }

  const permutations = [];

  return findSortedPermutation();
}
