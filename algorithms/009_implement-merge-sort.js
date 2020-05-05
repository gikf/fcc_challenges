function mergeAr(arrayA, arrayB) {
  const array = [];
  let i = 0;
  let j = 0;
  while (i != arrayA.length && j != arrayB.length) {
    if (arrayA[i] < arrayB[j]) {
      array.push(arrayA[i]);
      i++;
    } else {
      array.push(arrayB[j]);
      j++;
    }
  }
  while (j != arrayB.length) {
    array.push(arrayB[j]);
    j++;
  }
  while (i != arrayA.length) {
    array.push(arrayA[i]);
    i++;
  }

  return array;
}

function mergeSort(array) {
  // change code below this line
  if (array.length == 1) {
    return array;
  } else {
    let half = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, half));
    let right = mergeSort(array.slice(half, array.length));
    return mergeAr(left, right);
  }

  // change code above this line
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
