function smallestCommons(arr) {
  let biggest = Math.max(...arr);
  let smallest = Math.min(...arr);
  let i = biggest + 1;
  let number = 0;

  function checkNum(num) {
    for (let n = smallest; n <= biggest; n++) {
       if (i % n != 0) {
           return false;
       }
    }
    return true;
  }

  while (true) {
    if (checkNum(i)) {
      number = i;
      break;
    }
    i++;
  }
  console.log(number);
  return number;
}


smallestCommons([1, 5]);
smallestCommons([2, 10]);