function fractran(progStr) {
  const sequence = [2];
  const fractions = progStr.split(', ')
                           .map((a) => a.split('/')
                                        .map((b) => parseInt(b)));
  let n = 2;
  let producesInteger = true;
  
  while (producesInteger && sequence.length < 10) {
    producesInteger = false;
    for (let i = 0; i < fractions.length; i++) {
      const [numerator, denominator] = fractions[i];
      const curValue = n * numerator / denominator;
      if (curValue == parseInt(curValue)) {
        n = curValue;
        sequence.push(n);
        producesInteger = true;
        break
      }
    }
  }
  for (let i = 0; i < fractions.length; i++) {

  }

  return sequence;
}
