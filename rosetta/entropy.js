function entropy(s) {
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
    let curEntropy = chars[chars_keys[i]] / length;
    curEntropy *= Math.log2(chars[chars_keys[i]] / length);
    entropy += - curEntropy;
  } 
  return entropy;
}
