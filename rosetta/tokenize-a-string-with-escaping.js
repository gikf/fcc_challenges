function tokenize(str, sep, esc) {
  const result = [];
  let curText = '';
  let isEscaped = false;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == sep && !isEscaped || i == str.length) {
      result.push(curText);
      curText = '';
      continue;
    } else if (isEscaped) {
      isEscaped = false;
    } else if (str[i] == esc && !isEscaped) {
      isEscaped = true;
      continue;
    }
    curText += str[i];
  }
  return result;
}
