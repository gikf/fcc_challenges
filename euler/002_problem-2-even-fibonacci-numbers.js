function fiboEvenSum(n) {
  let fibA = 1;
  let fibB = 2;
  let result = 2;
  let i = 3

  while (true) {
    let tfib = fibA + fibB;
    if (tfib >= n) {
      break;
    } else if (tfib % 2 == 0) {
      result += tfib;
    }
    fibA = fibB;
    fibB = tfib;
    i++;
  }

  return result;
}

console.log(fiboEvenSum(4000000));
