function LCM(A) {
  function lcm(a, b) {
    return Math.abs(a * b) / (gcd(a, b));
  }
  function gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  // Good luck!
  let curLCM = A[0];
  for (let i = 1; i < A.length; i++) {
      curLCM = lcm(curLCM, A[i]);
  }
  return curLCM;
}
