function babbage(babbageNum, endDigits) {
  const startNum = Math.floor(Math.sqrt(endDigits));
  for (let i = startNum; i <= babbageNum; i++) {
    const curEnding = i**2 % 10**6;
    if (curEnding == endDigits) {
      return i;
    }
  }
  return false;
}
