function findSequence(input) {
  const order = new Array(input.length).fill(1);
  for (let i = 0; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (input[i] > input[j] && order[j] >= order[i]) {
        order[i] = order[j] + 1;
      }
    }
  }

  let maxValue = Math.max(...order);
  const maxIndex = order.indexOf(Math.max(...order));
  const result = [input[maxIndex]];
  for (let i = maxIndex; i >= 0; i--) {
    if (maxValue == 0) {
      break;
    }
    if (input[maxIndex] > input[i] && order[i] == maxValue - 1) {
      result.unshift(input[i]);
      maxValue--;
    }
  }
  return result;
}
