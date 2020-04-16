function combinatoricSelections(limit) {
  // factorial with remembering past computations
  function fact(num) {
    if (facts[num]) {
      return facts[num];
    }
    let result = 1;
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    facts[num] = result;
    return result;
  }

  // number of combinations
  function get_comb_num(n, r) {
    let n_fact = fact(n);
    let r_fact = fact(r);
    let nr_fact = fact(n - r);

    return n_fact / (r_fact * nr_fact);
  }

  let counter = 0;
  let facts = {};

  for (let n = 1; n <= 100; n++) {
    for (let r = 1; r <= n; r++) {
      let comb_num = get_comb_num(n, r);
      if (comb_num > limit) {
        counter++;
      }
    }
  }

  // Good luck!
  return counter;
}

console.log(combinatoricSelections(1000));