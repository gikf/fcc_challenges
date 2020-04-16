function palindrome(str) {
  // Good luck!
  let regex = /[\W_]+/gi;
  str = str.replace(regex, '').toLowerCase();

  return str == str.split('').reverse().join('');
}

palindrome("eye");
palindrome("_eye") 
palindrome("0_0 (: /-\ :) 0-0");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");