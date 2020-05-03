function passcodeDerivation(arr) {
  let result = '';
  const numbers = [];
  const pairsMap = [];
  const ranks = {};
  for (let i = 0; i < 10; i++) {
    pairsMap.push(new Array(10).fill(0));
  }

  // Create 2D array containing relative scores of i-th number against j-th number
  // If number is on the higher place than the another it gets +1
  for (let i = 0; i < arr.length; i++) {
    let curNums = arr[i].toString().split('').map((i) => parseInt(i));
    for (let j = 0; j < curNums.length; j++) {
      if (numbers.indexOf(curNums[j]) == -1) {
        numbers.push(curNums[j]);
      }
      for (let k = j + 1; k < curNums.length; k++) {
        pairsMap[curNums[j]][curNums[k]] += 1;
      }
    }
  }

  // Count how many numbers have lower rank than i-th number
  // and add results to dict
  for (let i = 0; i < numbers.length; i++) {
    let curNumber = numbers[i];
    let counter = 0;
    for (let j = 0; j < pairsMap.length; j++) {
      if (pairsMap[curNumber][j] > 0) {
        counter++;
      }
    }
    ranks[curNumber] = counter;
  }

  // Sort ranks keys by the value
  let rankKeys = Object.keys(ranks).sort((i, j) => ranks[i] - ranks[j]).reverse();
  result = parseInt(rankKeys.join(''));
  // Good luck!
  return result;
}

// Only change code above this line

const keylog = [
  319,680,180,690,129,620,762,689,762,318,368,710,720,710,629,168,160,689,716,731,736,729,316,729,729,710,769,290,719,680,318,389,162,289,162,718,729,319,790,680,890,362,319,760,316,729,380,319,728,716,
];

passcodeDerivation(keylog);
