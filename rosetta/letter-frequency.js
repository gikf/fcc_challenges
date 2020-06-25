function letterFrequency(txt) {
  const freq = new Object();
  for (let i = 0; i < txt.length; i++) {
    const char = txt[i];
    if (!freq[char]) {
      freq[char] = 0;
    }
    freq[char]++;
  }

  const characters = Object.keys(freq).sort();
  const result = [];
  for (let i = 0; i < characters.length; i++) {
    result.push([characters[i], freq[characters[i]]]);
  }
  return result;
}
