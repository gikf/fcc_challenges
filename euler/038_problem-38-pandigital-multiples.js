function pandigitalMultiples() {
  // check if pandigital 1-9
  function is_pandigital(num) {
    let str_num = num.toString();
    let control = [];
    for (let i = 0; i < str_num.length; i++) {
      if (control.indexOf(str_num[i]) != -1 || str_num[i] == '0') {
        return false;
      }
      control.push(str_num[i]);
    }
    return true;
  }

  function is_starting_with_nine(num) {
    return num.toString()[0] == '9';
  }

  let maximum = 0;

  for (let cur_num = 9; cur_num < 100000; cur_num++) {
    if (is_starting_with_nine(cur_num) && is_pandigital(cur_num)) {
      let conc_prod = cur_num.toString();
      // concatenating further products
      for (let mult = 2; mult < 10; mult++) {
        let temp_prod = cur_num * mult;
        conc_prod += temp_prod.toString();

        if (conc_prod.length > 9) {
          break;
        } else if (conc_prod.length == 9) {
          let conc_num = parseInt(conc_prod);
          if (is_pandigital(conc_num)) {
            if (conc_num > maximum) {
              maximum = conc_num;
            }
          }
        }
      }
    }
  }
  return maximum;
}

pandigitalMultiples();
