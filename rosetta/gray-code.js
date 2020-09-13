function gray(enc, number) {
  function encode(number) {
    const binary = number.toString(2);
    let gray = binary[0];
    for (let i = 1; i < binary.length; i++) {
      if (binary[i - 1] == 1) {
        gray += binary[i] == 0 ? 1 : 0;
      } else {
        gray += binary[i];
      }
    }
    return parseInt(gray, 2);
  }
  function decode(number) {
    const gray = number.toString(2);
    let binary = gray[0];
    for (let i = 1; i < gray.length; i++) {
      binary += gray[i] ^ binary[i - 1];
    }
    return parseInt(binary, 2);
  }
  
  if (enc) {
    return encode(number);
  } else {
    return decode(number);
  }
}
