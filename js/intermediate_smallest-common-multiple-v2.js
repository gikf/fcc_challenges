function smallestCommons(arr) {
  let biggest = Math.max(...arr);
  let smallest = Math.min(...arr);
  let i = biggest;

  function checkNum(num) {
    for (let n = smallest; n <= biggest; n++) {
       if (i % n != 0) {
          return false;
       }
    }
    return true;
  }

  while (!checkNum(i)) {
    i += biggest;
  }
  console.log(i);
  return i;
}


smallestCommons([1, 5]);
smallestCommons([2, 10]);