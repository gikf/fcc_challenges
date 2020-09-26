function selfReferential(n) {
  function countEachDigit(number) {
    let counter = {};
    for (let i = 0; i < 10; i++) {
      let curCount = 0;
      for (let j = 0; j < number.length; j++) {
        if (number[j] == i) {
          curCount++;
        }
      }
      counter[i] = curCount;
    }
    return Object.entries(counter).filter((digitEntry) => digitEntry[1] > 0)
  }

  function sequenceEntry(digitsCounter) {
    return digitsCounter.sort((digit1, digit2) => digit2[0] - digit1[0])
                        .map(entry => entry[1] + entry[0])
                        .join('');
  }

  const seen = new Set();
  let nextNum = n.toString();
  seen.add(nextNum);

  while (true) {
    nextNum = sequenceEntry(countEachDigit(nextNum));

    if (seen.has(nextNum)) {
      break;
    }
    seen.add(nextNum);
  }
  return [...seen];
}
