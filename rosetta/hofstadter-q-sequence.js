const sequence = {1:1, 2: 1};
function hofstadterQ(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  if (sequence[n]) {
    return sequence[n];
  }

  const value = hofstadterQ(n - hofstadterQ(n - 1))
         + hofstadterQ(n - hofstadterQ(n - 2))
  sequence[n] = value;
  return value;
}
