function reciprocalCycles(n) {
  let longest_cycle_num = 0;
  let longest_cycle_val = 0;
  for (let i = 2; i < n; i++) {
    let a = 1;
    let remainders = {};
    let pos = 0;

    while (!remainders[a]) {
      remainders[a] = pos;
      a = (a % i) * 10;
      pos++;
    }
    
    if (pos - remainders[a] > longest_cycle_val) {
      longest_cycle_num = i;
      longest_cycle_val = pos - remainders[a];
    }

  }
  return longest_cycle_num;
}

reciprocalCycles(10);