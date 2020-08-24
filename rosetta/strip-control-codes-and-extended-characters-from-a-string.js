function strip(s) {
  // Good luck!
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    if (curChar.charCodeAt(0) >= 32 && curChar.charCodeAt(0) <= 126) {
      result.push(curChar);
    }
  }
  return result.join('');
}
