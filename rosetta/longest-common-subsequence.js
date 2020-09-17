function lcs(a, b) {
  const common_arr = new Array(a.length + 1);
  for (let i = 0; i < common_arr.length; i++) {
    common_arr[i] = new Array(b.length + 1).fill(0);
  }

  for (let i = 1; i < common_arr.length; i++) {
    for (let j = 1; j < common_arr[0].length; j++) {
      if (a[i - 1] == b[j - 1]) {
        common_arr[i][j] = common_arr[i - 1][j - 1] + 1;
      } else {
        common_arr[i][j] = Math.max(common_arr[i - 1][j], common_arr[i][j - 1]);
      }
    }
  }

  let longest = '';
  let curRow = common_arr.length - 1;
  let curColumn = common_arr[0].length - 1;
  while (common_arr[curRow][curColumn] != 0) {
    if (a[curRow - 1] == b[curColumn - 1]) {
      longest = a[curRow - 1] + longest
      curRow--;
      curColumn--;
    } else {
      if (common_arr[curRow - 1][curColumn] > common_arr[curRow][curColumn - 1]) {
        curRow--;
      } else {
        curColumn--;
      }
    }
  }
  return longest;
}
