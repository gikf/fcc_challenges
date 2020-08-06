// noprotect
const R = [null, 1];
const S = [null, 2];
function ffr(n) {
  extend(n);
  return R[n];
}

function ffs(n) {
  extend(n);
  return S[n];
}

function extend(n) {
  let curValue = Math.max(R[R.length - 1], S[S.length - 1]);
  let index = null;
  while (R.length <= n || S.length <= n) {
    index = Math.min(R.length, S.length) - 1;
    curValue++;
    if (curValue === R[index] + S[index]) {
      R.push(curValue);
    } else {
      S.push(curValue);
    }
  }
}
