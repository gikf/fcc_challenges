function split(str) {
  const result = [];
  let curChar = '';
  for (let i = 0; i < str.length; i++) {
    curChar += str[i];
    if (str[i] != str[i + 1]) {
      result.push(curChar);
      curChar = '';
    }
  }
  return result;
}
