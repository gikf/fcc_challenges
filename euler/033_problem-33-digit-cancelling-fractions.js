function digitCancellingFractions() {
  // compare fraction with fraction with removed digits
  // if fractions has matching digits
  function try_fraction(numerator, denominator) {
    let numera_str = numerator.toString();
    let denom_str = denominator.toString();
    let fract_val = numerator / denominator;
    
    if (numera_str[0] == denom_str[1]) {
      if (parseInt(numera_str[1]) / parseInt(denom_str[0]) == fract_val) {
        return true;
      }
    } else if (numera_str[1] == denom_str[0]) {
      if (parseInt(numera_str[0]) / parseInt(denom_str[1]) == fract_val) {
        return true;
      }
    }
    return false;
  }

  let numeras = 1;
  let denoms = 1;
  let ret_denom_val = 0;

  // generating fractions
  for (let denom = 11; denom < 99; denom++) {
    for (let numera = 10; numera < denom; numera++) {
      let frac = numera / denom;
      if (try_fraction(numera, denom)) {
        numeras *= numera;
        denoms *= denom;
      }
    }
  }
  ret_denom_val = denoms / numeras;
  return ret_denom_val;
}

digitCancellingFractions();
