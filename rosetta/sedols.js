function sedol(input) {
  if (input.match(/[AEIOU]/) || input.length != 6) {
    return null;
  }

  const weight = [1, 3, 1, 7, 3, 9];

  let weightedSum = 0;
  for (let i = 0; i < input.length; i++) {
    let charValue = 0;
    if (input[i].match(/[A-Z]/)) {
      charValue += 9 + input[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    } else {
      charValue += input[i];
    }
    weightedSum += weight[i] * charValue;
  }
  const checkDigit = 10 - weightedSum % 10;

  // Good luck!
  return input + checkDigit;
}
