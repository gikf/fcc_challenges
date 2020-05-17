function arithmeticExpressions() {
  function getNextCombination(k, n, combination) {
    let i = k - 1;
    combination[i]++;

    while (i > 0 && combination[i] >= n - k + 1 + i) {
      i--;
      combination[i]++;
    }

    if (combination[0] > n - k) {
      return null;
    }

    for (i = i + 1; i < k; i++) {
      combination[i] = combination[i - 1] + 1;
    }

    return combination;
  }
  function getNextPerm(perm) {
    let next = false;
    for (let k = 0; k < perm.length - 1; k++) {
      if (perm[k] < perm[k + 1]) {
        next = true;
      }
    }

    if (!next) {
      return null;
    }

    const N = perm.length;
    let i = N - 1;
    while (perm[i - 1] >= perm[i]) {
      i--;
    }

    let j = N;
    while (perm[j - 1] <= perm[i - 1]) {
      j--;
    }

    [perm[i - 1], perm[j - 1]] = [perm[j - 1], perm[i - 1]];

    i++;
    j = N;

    while (i < j) {
      [perm[i - 1], perm[j - 1]] = [perm[j - 1], perm[i - 1]];
      i++;
      j--;
    }

    return perm;
  }

  function operator(a, b, oper) {
    if (a === null || b === null) {
      return null;
    }

    switch (oper) {
      case 0:
        return a + b;
      case 1:
        return a - b;
      case 2:
        return a * b;
      case 3:
        if (b === 0) return null;
        return a / b;
    }
    return 0;
  }

  function checkNum(num, res) {
    return num !== null && num === Math.floor(num) && num < res.length && num > 0;
  }

  // Good luck!
  let maxs = [];
  let maxCount = 0;

  let combination = [1, 2, 3, 4];
  while (combination !== null) {
    const results = new Array(9 * 8 * 7 * 6);
    let perm = [...combination];

    while (perm !== null) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            let num = operator(operator(operator(perm[0], perm[1], i), perm[2], j), perm[3], k);
            if (checkNum(num, results)) {
              results[Math.floor(num)] = true;
            }

            num = operator(operator(perm[0], operator(perm[1], perm[2], j), i), perm[3], k);
            if (checkNum(num, results)) {
              results[Math.floor(num)] = true;
            }

            num = operator(perm[0], operator(operator(perm[1], perm[2], j), perm[3], k), i);
            if (checkNum(num, results)) {
              results[Math.floor(num)] = true;
            }

            num = operator(perm[0], operator(perm[1], operator(perm[2], perm[3], k), j), i);
            if (checkNum(num, results)) {
              results[Math.floor(num)] = true;
            }

            num = operator(operator(perm[0], perm[1], i), operator(perm[2], perm[3], k), j);
            if (checkNum(num, results)) {
              results[Math.floor(num)] = true;
            }
          }
        }
      }

      let m = 1;
      while (results[m]) {
        m++;
      }

      if (m > maxCount) {
        maxs = [...combination];
        maxCount = m;
      }
      perm = getNextPerm(perm);
    }
    combination = getNextCombination(4, 10, combination);
  }
  console.log(maxCount);
  console.log(parseInt(maxs.join('')));
  return parseInt(maxs.join(''));
}

arithmeticExpressions();
