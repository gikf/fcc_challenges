function fibWord(n) {
  function getEntropy(s) {
    let entropy = 0;
    const length = s.length;
    const chars = new Object();
    for (let i = 0; i < length; i++) {
      if (!chars.hasOwnProperty(s[i])) {
        chars[s[i]] = 0;
      }
      chars[s[i]] += 1;
    }

    const chars_keys = Object.keys(chars);
    for (let i = 0; i < chars_keys.length; i++) {
      const value= chars[chars_keys[i]] / length;
      entropy -= value * Math.log(value) / Math.log(2);
    }
    return entropy;
  }
  function getEntry(i, word) {
    return {N: i,
            Length: word.length,
            Entropy: getEntropy(word),
            Word: word};
  }

  const result = [];
  let i = 1
  let fWord1 = '1';
  let fWord2 = '0';
  while (i <= n) {
    let curWord = null;
    if (i == 1) {
      curWord = fWord1;
    } else if (i == 2) {
      curWord = fWord2;
    } else {
      [fWord2, fWord1] = [fWord2 + fWord1, fWord2];
      curWord = fWord2;
    }
    result.push(getEntry(i, curWord));
    i++;
  }
  return result;
}

console.log(fibWord(5));