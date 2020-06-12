function isCusip(s) {
  if (s.length != 9) {
    return false;
  }
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let value = 0;
    if (Number.isInteger(parseInt(s[i]))) {
      value += parseInt(s[i]);
    } else if (s[i].match(/[a-z]/i)) {
      value += alphabet.indexOf(s[i].toUpperCase()) + 1 + 9;
    } else if (s[i] == '*') {
      value += 36;
    } else if (s[i] == '@') {
      value += 37;
    } else if (s[i] == '#') {
      value += 38;
    }

    if (i % 2 == 1) {
      value += value;
    }
    sum += Math.floor(value / 10) + (value % 10);
  }
  return ((10 - (sum % 10)) % 10) === parseInt(s[8]);
}
