function digitFibonacci(n) {
  let f_cur_index = 2;
  let f_cur = 1;
  let f_minus1 = 1;

  while (f_cur.toString().length < n) {
    f_cur_index++;
    let f_temp = f_cur + f_minus1;
    f_minus1 = f_cur;
    f_cur = f_temp;
  }
  return f_cur_index;
}

digitFibonacci(20);
console.log(digitFibonacci(20));
