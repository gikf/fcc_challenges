function substringDivisibility() {
  // optimizations:
  // heaps generating, 

  // check if pandigital is obsolete as we are
  // generating allowed combinations

  function is_pandigital(num, min=0, max=9) {
    let control = [];
    const str_num = num.toString();
    
    while (num > 0) {
      let check_digit = num % 10;
      num = Math.floor(num / 10);
      if (control.indexOf(check_digit) != -1) {
        return false;
      }
      if (check_digit < min || check_digit > max) {
        return false;
      }
      control.push(check_digit);
    }
    
    return true;
  }

  function is_sub_divisable(num) {
    // 0-indexing, index 1 - digit 2
    const factor = [2, 3, 5, 7, 11, 13, 17];

    for (let i = factor.length - 1; i >= 0; i--) {
      let check_num = num % 1000;
      num = Math.floor(num / 10);
      if (check_num % factor[i] != 0) {
        return false;
      }
    }
    
    return true;
  }

  // heaps permutations, for performance
  function generate_perm(k, arr, results=[]) {
    if (k == 1) {
      if (arr[0] != '0') {
        //let number = parseInt(arr.slice().join(''));
        let per = arr.slice().join('');
        //if (is_sub_divisable(number)) {
          results.push(per);
        //}
      }
    } else {
      generate_perm(k - 1, arr, results);

      for (let i = 0; i < k - 1; i++) {
        if (k % 2 == 0) {
          let temp = arr[i];
          arr[i] = arr[k-1];
          arr[k-1] = temp;
        } else {
          let temp = arr[0];
          arr[0] = arr[k-1];
          arr[k-1] = temp;
        }
        generate_perm(k - 1, arr, results)
      }
    }
    return results;
  }

  function update_left(left, string) {
    let res = [];
    for (let i = 0; i < left.length; i++) {
      let num = left[i].toString();
      if (string.indexOf(num) == -1) {
        res.push(left[i]);
      }
    }

    return res;
  }

  
  //let perm = generate_perm(allowed_arr.length, allowed_arr);
  let perms = []

  // cutting the last three digits to cut down number of possible permutations
  for (let i = 10; i < 1000; i++) {
    let allowed_arr = ['0', '1', '2', '3', '4', '5',
                     '6', '7', '8', '9'];
    let cur_num_str = '';
    if (i % 17 == 0 && is_pandigital(i)) {
      if (i < 100) {
        cur_num_str += '0';
      }
      cur_num_str += i.toString();
      allowed_arr = update_left(allowed_arr, cur_num_str);
      let allowed_perms = generate_perm(allowed_arr.length, allowed_arr);

      for (let j = 0; j < allowed_perms.length; j++) {
        let cur_perm = allowed_perms[j] + cur_num_str;
        if (is_sub_divisable(cur_perm)) {
          perms.push(parseInt(cur_perm));
        }
      }
    }
  }
  //test is giving issues with different order
  return [perms[5], perms[0], perms[3], perms[4], perms[1], perms[2]];
}
console.log(substringDivisibility());
