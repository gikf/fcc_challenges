function longestString(strings) {
  let longest_strings = [strings[0]];
  let longest = strings[0].length;
  for (let i = 1; i < strings.length; i++) {
    const curLength = strings[i].length;
    if (longest < curLength) {
      longest_strings = [strings[i]];
      longest = curLength;
    } else if (longest == curLength) {
      longest_strings.push(strings[i])
    }
  }
  return longest_strings;
}
