function maximumSubsequence(population) {
  function sumElements(list) {
    return list.reduce((a, b) => a + b);
  }

  let greatestSequence = null;
  let greatestSequenceSum = 0;

  for (let i = 0; i < population.length; i++) {
    for (let j = 0; j < population.length; j++) {
      const curSequence = population.slice(i, j + 1);
      if (curSequence.length > 0) {
        const curSequenceSum = sumElements(curSequence);
        if (curSequenceSum > greatestSequenceSum) {
          greatestSequence = curSequence;
          greatestSequenceSum = curSequenceSum;
        }
      }
    }
  }
  return greatestSequence;
}
