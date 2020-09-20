function combinations(m, n) {
  function combinate(combinated, to_comb, start, k) {
    if (combinated.length == k) {
      combs.push(combinated);
      return;
    } else if (start == to_comb.length) {
      return;
    }

    const newArr = [...combinated];
    newArr.push(to_comb[start]);
    combinate(newArr, to_comb, start + 1, k);
    combinate([...combinated], to_comb, start + 1, k);
  }

  function fillArr(limit) {
    const numbers = [];
    for (let i = 0; i < limit; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  const combs = [];
  const numbers = fillArr(n);
  
  combinate([], numbers, 0, m)
  return combs;
}
