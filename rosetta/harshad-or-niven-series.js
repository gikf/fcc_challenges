function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line
  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  function isHarshad(num) {
    return num % sumDigits(num) == 0;
  }

  let count = 0;
  let i = 1;
  while (count < 20) {
    if (isHarshad(i)) {
      res.firstTwenty.push(i);
      count++;
    }
    i++;
  }

  i = 1001;
  while (res.firstOver1000 === undefined) {
    if (isHarshad(i)) {
      res.firstOver1000 = i;
    }
    i++;
  }
  return res;
}
