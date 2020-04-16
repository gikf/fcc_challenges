function pandigitalProducts() {
  function isPandigital(a, b, prod) {
    let pot_pand = a.toString() + b.toString() + prod.toString();
    let control = [];
    for (let i = 0; i < pot_pand.length; i++) {
      if (pot_pand[i] == '0' || control.indexOf(pot_pand[i]) != -1) {
        return false;
      }
      control.push(pot_pand[i]);
    }
    return control.length == 9;
  }

  function hasUniqueDigits(check) {
    let control = [];
    for (let i = 0; i < check.length; i++) {
      if (control.indexOf(check[i]) != -1) {
        return false;
      }
      control.push(check[i]);
    }
    return true;
  }

  let limit_min = 1;
  let limit_max = 10000 - 1;
  let sum_arr = [];
  let sum = 0;
  for (let a = limit_min; a <= limit_max / 2; a++) {
    if (!hasUniqueDigits(a.toString())) {
      continue;
    }
    for (let b = limit_min; b <= limit_max; b++) {
      let mult = a * b;
      if (mult.toString().length + a.toString().length + b.toString().length > 9) {
        break;
      }

      if (isPandigital(a, b, mult) && sum_arr.indexOf(mult) == -1) {
        sum += mult;
        sum_arr.push(mult);
      }
    }
  }
  return sum;
}

pandigitalProducts();
