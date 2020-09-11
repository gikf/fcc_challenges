function sumDigits(n) {
  n = n.toLowerCase();
  const adjustValue = - 'a'.charCodeAt(0) + 10;
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let value = 0
    if (Number.isInteger(parseInt(n[i]))) {
      value = parseInt(n[i]);
    } else {
      value = n[i].charCodeAt(0) + adjustValue;
    }
    sum += value;
  }
  return sum;
}
