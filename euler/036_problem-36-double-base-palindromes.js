function doubleBasePalindromes(n) {
  // check if palindrome
  function is_palindrome(string) {
    return string == string.split('').reverse().join('');
  }

  // convert to binary
  function dec_to_bin(num) {
    return num.toString(2);
  }

  // number loop
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (is_palindrome(i.toString()) && is_palindrome(dec_to_bin(i))) {
      sum += i;
    }
  }

  return sum;
}

doubleBasePalindromes(1000);
