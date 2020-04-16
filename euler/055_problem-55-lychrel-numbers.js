function countLychrelNumbers(num) {
  // is palindrome
  function is_palindrome(num) {
    return num == revers(num);
  }

  // reverse
  function revers(num) {
    return parseInt(num.toString().split('').reverse().join(''));
  }

  // iterate additions until palindrome or 50 iterations
  function is_lychrel(num) {
    for (let i = 0; i < 50; i++) {
      num = num + revers(num);
      if (is_palindrome(num)) {
        return false;
      }
    }
    return true;
  }

  // number loop
  let counter = 0;
  for (let i = 0; i < num; i++) {
    if (is_lychrel(i)) {
      counter++;
    }
  }
  return counter;
}

countLychrelNumbers(1000);
