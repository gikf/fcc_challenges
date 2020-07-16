function isLychrel(n) {
    if (n <= 0) {
    return false;
  }
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  let counter = 0;
  let curNumber = n;

  while (counter < 500) {
    curNumber += parseInt(curNumber.toString().split('').reverse().join(''))
    if (isPalindrome(curNumber.toString())) {
      return false;
    }
    counter++;
  }
  return true;
}
