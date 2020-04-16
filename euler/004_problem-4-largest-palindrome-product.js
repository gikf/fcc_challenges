function largestPalindromeProduct(n) {
  // Good luck!
  function isPalindrome(num) {
    return num.toString() == num.toString().split('').reverse().join('');
  }

  let num_max = 10 ** n - 1;
  let num_min = 10 ** (n -1);
  let cur_result = 0;
  let pali = []

  for (let i = num_max; i >= num_min; i--) {
    for (let j = num_max; j >= num_min; j--) {
      cur_result = i * j;
      if (isPalindrome(cur_result)) {
        pali.push(cur_result);
      }
    }
  }
  return Math.max(...pali);
}

console.log(largestPalindromeProduct(3));