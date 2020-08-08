function jaro(s1, s2) {
  function matchingDistance(s1, s2) {
    return (Math.max(s1.length, s2.length) / 2) - 1;
  }

  function filterUnMatched(s, matched) {
    const result = [];
    for (let i = 0; i < matched.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (matched[i] === s[j]) {
          result.push(matched[i]);
          break;
        }
      }
    }
    return result;
  }

  let m = 0;
  const matched = [];
  const distance = matchingDistance(s1, s2)
  for (let i = 0; i < s1.length; i++) {
    for (let j = i - distance; j <= i + distance; j++) {
      if (s1[i] == s2[j]) {
        matched.push(s1[i]);
        m++;
        break;
      }
    }
  }
  if (m == 0) {
    return 0;
  }

  const s1MatchOrder = filterUnMatched(s1, matched);
  const s2MatchOrder = filterUnMatched(s2, matched);

  let t = 0;
  if (!(s1MatchOrder.join('') === s2MatchOrder.join(''))) {
    const mismatchedCount = s1MatchOrder.filter((_, index) => s1MatchOrder[index] !== s2MatchOrder[index]).length;
    t = mismatchedCount / 2;
  }

  return ((m / s1.length) + (m / s2.length) + ((m - t) / m)) / 3;
}
