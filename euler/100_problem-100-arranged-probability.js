function arrangedProbability() {
  // Good luck!
  /* (blue / discs) * (blue - 1)/(discs - 1) == 1/2
   * 2 * blue^2 - 2 * blue - discs^2 + discs = 0
   */
  const LIMIT = 10**12;
  let blue = 15;
  let discs = 21;

  while (discs < LIMIT) {
    let curBlue = 3 * blue + 2 * discs - 2;
    let curDiscs = 4 * blue + 3 * discs - 3;

    blue = curBlue;
    discs = curDiscs;
  }
  console.log(blue, discs)
  return blue;
}

arrangedProbability();
