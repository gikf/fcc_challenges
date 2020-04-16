function pairwise(arr, arg) {
  let used_indices = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        let sum = arr[i] + arr[j];
        if (used_indices.indexOf(i) == -1 && used_indices.indexOf(j) == -1 && sum == arg) {
          used_indices.push(i);
          used_indices.push(j);
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < used_indices.length; i++) {
    result += used_indices[i];
  }
  return result;
}

pairwise([1,4,2,3,0,5], 7);
