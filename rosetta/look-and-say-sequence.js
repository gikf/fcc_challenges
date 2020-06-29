function lookAndSay(str) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      counter++;
    } else {
      result += counter.toString() + str[i];
      counter = 1;
    }
  }
  return result;
}
