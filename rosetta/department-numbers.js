function combinations(possibleNumbers, total) {
  const combinations = [];
  for (let i = 0; i < possibleNumbers.length; i++) {
    if (possibleNumbers[i] % 2 != 0) {
      continue;
    }
    const policeNumber = possibleNumbers[i];
    for (let j = 0; j < possibleNumbers.length; j++) {
      if (i == j) {
        continue;
      }
      const sanitationNumber = possibleNumbers[j];
      for (let k = 0; k < possibleNumbers.length; k++) {
        if (i == k || j == k) {
          continue;
        }
        const fireNumber = possibleNumbers[k];
        if (policeNumber + sanitationNumber + fireNumber == total) {
          combinations.push([policeNumber, sanitationNumber, fireNumber]);
        }
      }
    }

  }
  return combinations;
}
