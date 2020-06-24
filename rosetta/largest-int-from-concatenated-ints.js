function maxCombine(xs) {
  return parseInt(xs.sort((a, b) => ('' + b + a) - ('' + a + b)).join(''));
}
