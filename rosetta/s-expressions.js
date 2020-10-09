function parseSexpr(str) {
  const arr = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  
  let o;
  let brackets = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    const elem = arr[i].trim();
    if (elem == '"') {
      return;
    } else if (elem == '(') {
      brackets++;
      arr[i] = '[';
    } else if (elem == ')') {
      brackets--;
      arr[i] = ']';
    } else if (+elem == elem) {
      arr[i] = +elem;
    } else {
      arr[i] = '\'' + elem.replace('\'', '\\\'') + '\'';
    }

    if (i > 0 && elem != ']' && arr[i - 1].trim() != '(') {
      arr.splice(i, 0, ',');
    }

    if (!brackets) {
      if (!o) {
        o = true;
      } else {
        return;
      }
    }

  }
  return brackets ? undefined : Function('return (' + arr.join('') + ')')();
}
