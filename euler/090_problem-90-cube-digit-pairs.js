function cubeDigitPairs() {
  // All possible combinations
  function getCombinations(count, limit) {
    const combinations = [];
    let combination = [];
    for (let i = 0; i < count; i++) {
      combination.push(i);
    }

    while (true) {
      combinations.push(combination);
      // Proper copy of old combination
      combination = [...combination];
      if (combinations[combinations.length - 1][count - 1] == 9) {
        combinations[combinations.length - 1][count - 1] = 6;
      }

      let i = count - 1;
      combination[i]++;

      while (i > 0 && combination[i] >= limit - count + 1 + i) {
        i--;
        combination[i]++;
      }

      if (combination[0] > limit - count) {
        break;
      }

      for (i = i + 1; i < count; i++) {
        combination[i] = combination[i - 1] + 1;
      }
    }
    return combinations;
  }

  // Check if all needed pairs are in combination
  function checkCombinations(dice1, dice2) {
    const needed = [[0, 1], [0, 4], [0, 6], [1, 6], [2, 5],
                    [3, 6], [4, 6], [6, 4], [8, 1]];
    for (let i = 0; i < needed.length; i++) {
      // Number1 and number2 need to be in one of the combinations at the same time
      if (!((dice1.indexOf(needed[i][0]) != -1 && dice2.indexOf(needed[i][1]) != -1) || (dice2.indexOf(needed[i][0]) != -1 && dice1.indexOf(needed[i][1]) != -1))) {
        return false;
      }
    }
    return true;
  }

  const combinations = getCombinations(6, 10);
  let result = 0;

  // Check all combinations
  for (let i = 0; i < combinations.length; i++) {
    if (combinations[i][0] != 0) {
      break;
    }
    for (let j = i + 1; j < combinations.length; j++) {
      if (checkCombinations(combinations[i], combinations[j])) {
        result++;
      }
    }
  }
  console.log(result);
  return result;
}

cubeDigitPairs();
