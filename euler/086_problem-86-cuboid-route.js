function cuboidRoute() {
  function getLength(a, b) {
    return Math.sqrt(a**2 + b**2);
  }

  let l = 2;
  let hw = 0;
  const LIMIT = 1000000;
  let counter = 0;

  while (counter < LIMIT) {
    l++;
    // hw - height + width of base
    for (hw = 3; hw <= 2 * l; hw++) {
      let length = getLength(l, hw);
      if (length == Math.floor(length)) {
        if (hw <= l) {
          counter += Math.floor(hw / 2);
        } else {
          counter += 1 + l - Math.floor((hw + 1) / 2);
        }
      }
    }
  }

  // Good luck!
  return l;
}

cuboidRoute();
