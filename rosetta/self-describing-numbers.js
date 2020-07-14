function isSelfDescribing(n) {
  const numberCounts = new Object;
  const str_number = n.toString();
  while (n > 0) {
    const curNumber = n % 10;
    if (!numberCounts.hasOwnProperty(curNumber)) {
      numberCounts[curNumber] = 0;
    }
    numberCounts[curNumber]++;
    n = Math.floor(n / 10);
  }

  for (let i = 0; i < str_number.length; i++) {
    const isNotDescribing = str_number[i] > 0 && numberCounts[i] != str_number[i]
    if (isNotDescribing) {
      return false;
    }
  }
  return true;
}
