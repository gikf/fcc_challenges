function isBalanced(str) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
    score += str[i] == '[' ? 1 : -1;
    // Anytime score gets lower than 0 means brackets are unbalanced
    if (score < 0) {
      return false;
    }
  }
  
  return true;
}
