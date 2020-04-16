function substringDivisibility() {
  // optimizations:
  // heaps generating, 

  // check if pandigital is obsolete as we are
  // generating allowed combinations

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
        let number = parseInt(arr.slice().join(''));
        if (is_sub_divisable(number)) {
          results.push(number);
        }
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

  let allowed_arr = ['0', '1', '2', '3', '4', '5',
                     '6', '7', '8', '9'];
  let perm = generate_perm(allowed_arr.length, allowed_arr);

  return perm;
}
substringDivisibility();
