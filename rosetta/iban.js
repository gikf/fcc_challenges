function isValid(iban) {
  function isLetter(char) {
    const bottom = 'A'.charCodeAt(0);
    const top = 'Z'.charCodeAt(0);
    char = char.charCodeAt(0);
    return char >= bottom && char <= top;
  }
  function isAlphaNum(str) {
    const regexAlphaNum = /^[ A-Z0-9]+$/g;
    return str.search(regexAlphaNum) == 0;
  }

  if (!isAlphaNum(iban)) {
    return false;
  }
  const regex = /\s/g;
  iban = iban.replace(regex, '');  
  iban = iban.slice(4) + iban.slice(0, 4);

  iban = iban.split('').map(((char) => {
    if (isLetter(char)) {
      return (char.charCodeAt(0) - 55).toString();
    }
    return char
  })).join('');

  return BigInt(iban) % 97n == 1n;
}
