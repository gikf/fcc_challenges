function pentagonNumbers() {
  // generate n pentagonal numbers
  function gen_pentagon(n) {
    let pent = [];
    for (let i = 1; i <= n; i++) {
      pent.push(i*(3*i - 1)/2);
    }
    return pent;
  }

  // check if number is pentagonal,
  // if our numbers don't cover range
  // including number, generate more
  function is_pentagonal(num) {
    if (pent[pent.length] < num) {
      // generate more

      is_pentagonal(num);
    }

    if (pent.indexOf(num) == -1) {
      return false;
    }

    return true;
  }

  // check if sum and difference are also pentagonal
  function check_pair(pk, pj) {
    let sum = pk + pj;
    let diff = Math.abs(pj - pk);

    if (is_penta_comp(sum) && is_penta_comp(diff)) {
      return true;
    }

    return false;
  }

  // compute if num is pentagonal
  function is_penta_comp(num) {
    return (Math.sqrt(24*num + 1) + 1) % 6 == 0;
  }

  // compute pentagonal nth
  function get_pent(num) {
    return num*(3*num - 1)/2;
  }


  //let pent = gen_pentagon(1295000);
  let pent_pent = [];
  let min_d = 0;

  for (let j = 1; j <= 5000; j++) {
    let pj = get_pent(j); 
    for (let k = j + 1; k <= 5000; k++) {
      let pk = get_pent(k);
      if (check_pair(pj, pk)) {
        pent_pent.push([pj, pk]);
        min_d = Math.abs(pk - pj);
      }
    }
  }

  return min_d;
}

pentagonNumbers();
