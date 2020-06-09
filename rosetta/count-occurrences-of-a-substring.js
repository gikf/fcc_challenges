function countSubstring(str, subStr) {
  const subLength = subStr.length;
  let index = 0;
  let counter = 0;

  while (index < str.length) {
    if (str.slice(index, index + subLength) == subStr) {
      index += subLength;
      counter++;
    } else {
      index++;
    }
  }
  return counter;
}
