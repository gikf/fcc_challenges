function equilibrium(a) {
  // Good luck!
  const result = [];
  const fromBottom = [];
  const fromTop = [];

  for (let i = 0; i < a.length; i++) {
    let prevVal = i > 0 ? fromBottom[fromBottom.length - 1] : 0;
    fromBottom.push(prevVal + a[i]);
  }
  for (let i = a.length - 1; i >= 0; i--) {
    let prevVal = i < a.length - 1 ? fromTop[fromTop.length - 1] : 0;
    fromTop.push(prevVal + a[i]);
  }

  fromTop.reverse();

  for (let i = 0; i < a.length; i++) {    
    if (fromBottom[i] == fromTop[i]) {
      result.push(i);
    }
  }
  return result;
}
