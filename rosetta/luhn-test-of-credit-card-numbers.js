function luhnTest(str) {
  const reversed = str.split('').reverse().join('');
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < reversed.length; i++) {
    if (i % 2 == 0) {
      oddSum += parseInt(reversed[i]);
    } else {
      let numberToAdd = 2 * parseInt(reversed[i]);
      if (numberToAdd > 9) {
        numberToAdd = Math.floor(numberToAdd / 10) + (numberToAdd % 10);
      }
      evenSum += numberToAdd;
    }
  }
  return (oddSum + evenSum) % 10 == 0;
}
