function symmetricDifference(A, B) {
  function getDifferent(arr1, arr2) {
    return arr1.filter((elem) => arr2.indexOf(elem) == -1);
  }

  const difference = getDifferent(A, B).concat(getDifferent(B, A));
  difference.sort();
  difference.sort((a, b) => a - b);
  
  return difference;
}
