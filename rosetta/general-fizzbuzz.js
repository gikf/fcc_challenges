function genFizzBuzz(rules, num) {
  let result = '';
  for (let i = 0; i < rules.length; i++) {
    if (num % rules[i][0] == 0) {
      result += rules[i][1];
    }
  }
  return result ? result : num;
}
