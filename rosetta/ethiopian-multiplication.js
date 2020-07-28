function eth_mult(a, b) {
  function halve(num) {
    return Math.floor(num / 2);
  }

  function double(num) {
    return num * 2;
  }

  function isEven(num) {
    return num % 2 == 0;
  }

  let result = 0;
  const left = [a];
  const right = [b];
  
  let curLeft = a;
  while (curLeft != 1) {
    curLeft = halve(curLeft);
    left.push(curLeft);
  }

  let curRight = b;
  for (let i = 1; i < left.length; i++) {
    curRight = double(curRight);
    right.push(curRight);
  }

  result = right.filter((_, index) => !isEven(left[index]))
                .reduce((a, b) => a + b);

  return result;
}
