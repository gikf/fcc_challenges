function fib_luc(n, len, w) {
  const sequence = [];
  if (w == 'f') {
    sequence.push(...[1, 1])
  } else if (w == 'l') {
    sequence.push(...[2, 1])
  }

  for (let i = 2; i < len; i++) {
    let curValue = 0;
    for (let j = 1; j <= n; j++) {
      if (i - j < 0) {
        break;
      }
      curValue += sequence[i - j];
    }
    sequence.push(curValue);
  }

  return sequence;
}
