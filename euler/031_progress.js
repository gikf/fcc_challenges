function coinSums(n) {
  let values = [200, 100, 50, 20, 10, 5, 2, 1];
  let combinations = [];

  let x = 0;
  let prev_comb = [0, 0, 0, 0, 0, 0, 0, 0];
  while (x < n) {
    //prev_comb[prev_comb.length - 1] == n
    let cur_comb = [0, 0, 0, 0, 0, 0, 0, 0];
    let cur_val = 0;
    for (let i = 0; i < values.length; i++) {

      // for j = 0; j * values[i] <= n; j++
      if (cur_val + values[i] > n) {
      } else {
        let cur_num = 0;
        while (cur_val + values[i] <= n) {
          cur_num++;
          cur_val += values[i];

          if (prev_comb[i] == cur_num + 1) {
            break;
          }
        }
        cur_comb[i] = cur_num;
      }
    }
    prev_comb = cur_comb;
    if (cur_val == n) {
      let cur_string = cur_comb.join('');
      if (combinations.indexOf(cur_string) == -1) {
        combinations.push(cur_string);
      }
    }
    x++;
  }

  console.log(combinations);
  console.log(combinations.length);
  return combinations.length;
}

coinSums(153);