function mult(strNum1, strNum2) {
  strNum1 = strNum1.split('').reverse();
  strNum2 = strNum2.split('').reverse();
  let result = new Array(strNum1.length + strNum2.length).fill(0);
  for (let i = 0; i < strNum2.length; i++) {
    let carry = 0;
    for (let j = 0; j < strNum1.length; j++) {
      const num1 = parseInt(strNum2[i]);
      const num2 = parseInt(strNum1[j]);

      result[i + j] += carry + num1 * num2;
      carry = Math.floor(result[i + j] / 10);
      result[i + j] = result[i + j] % 10;
    }
    result[i + strNum1.length] = carry;
  }

  if (result[result.length - 1] == 0) {
    result.pop();
  }
  result.reverse();
  return result.join('');
}

