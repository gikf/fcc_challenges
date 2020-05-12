function productSumNumbers() {
  function prodSum(p, s, c, start) {
    let k = p - s + c;
    if (k < LIMIT) {
      if (p < n[k]) {
        n[k] = p;
      }
      for (let i = start; i < Math.floor(LIMIT / p * 2) + 1; i++) {
        prodSum(p * i, s + i, c + 1, i);
      }
    }
  }
  //const LIMIT = 12000;
  let max = 12000;
  if (LIMIT > 12) {
    max++;
  }
  const LIMIT = max;
  const n = new Array(LIMIT).fill(2*LIMIT);

  prodSum(1, 1, 1, 2);

  // Array -> set -> array to get unique values
  const s = [...new Set(n.slice(2))];

  // Add values
  let sum = 0;
  for(let i = 0; i < s.length; i++) {
    sum += s[i];
  }
  
  console.log(sum)
  return sum;
}

productSumNumbers();
