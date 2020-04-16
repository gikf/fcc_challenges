function champernownesConstant(n) {
  // Good luck!
  // n_arr 
  function get_n_arr(num) {
    let arr = [];
    while (num > 0) {
      // num - 1 will get numth element from string
      arr.push(num - 1);
      num = Math.floor(num / 10);
    }
    return arr;
  }

  // counting product
  function get_product(str, arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
      prod *= str[arr[i]];
    }
    return prod;
  }

  // concatenating loop
  let const_fract = '';
  for (let i = 1; i <= n; i++) {
    const_fract += i.toString();
  }

  const n_arr = get_n_arr(n);
  const product = get_product(const_fract, n_arr);

  return product;
}

champernownesConstant(1000);
