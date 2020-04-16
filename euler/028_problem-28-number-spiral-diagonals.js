function spiralDiagonals(n) {
  let sum = 1;
  let cur_num = 1;
  //grid size increments by two
  for (let i = 3; i <= n; i = i + 2) {
    //4 corners for each grid size
    for (let j = 0; j < 4; j++) {
      //value of the j-th corner
      cur_num += i - 1;
      sum += cur_num;
    }
  }
  return sum;
}

spiralDiagonals(5);
