function euler104() {
  function isPandigital(num) {
    const check = '123456789';
    num = num.toString().split('').sort().join('');
    return check == num;
  }

  let f_1 = 1;
  let f_2 = 1;
  let n = 2;
  while (true) {
    let curFib = (f_1 + f_2) % 1000000000;
    [f_1, f_2] = [curFib, f_1];
    n++;
    if (n < 541) {
      continue;
    }

    if (isPandigital(curFib)) {
      const t = n * 0.20898764024997873 - 0.3494850021680094;
      if (isPandigital(parseInt(10 ** (t - parseInt(t) + 8)))) {
         break;
      }
    }
  }
  console.log(n);
  return n;
}

euler104();
