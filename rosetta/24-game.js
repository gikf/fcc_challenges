function solve24 (numStr) {
  const OPS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }

  function combinate(curNum, curSeq) {
    if (curNum.length == 1) {
      if (curNum[0] == 24) {
        results.push(curSeq[0]);
      }
      return;
    }

    for (let i = 0; i < curNum.length; i++) {
      for (let j = 0; j < curNum.length; j++) {
        if (i == j) {
          continue;
        }

        const num1 = curNum[i];
        const num2 = curNum[j];
        const operations = Object.keys(OPS);
        for (let k = 0; k < operations.length; k++) {
          const operator = operations[k];
          const operation = OPS[operator];
          const newNum = [];
          let newSeq = [];
          for (let m = 0; m < curNum.length; m++) {
            if (m != i && m != j) {
              newNum.push(curNum[m]);
              newSeq.push(curSeq[m]);
            }
          }

          if (operator == '/' || operator == '*') {
            newSeq.push(`(${curSeq[i]})${operator}(${curSeq[j]})`)
          } else {
            newSeq.push(`${curSeq[i]}${operator}${curSeq[j]}`)
          }
          combinate(
            newNum.concat(operation(num1, num2)),
            newSeq,
          );
        }
      }
    }
  }

  const nums = [];
  for (let i = 0; i < numStr.length; i++) {
    nums.push(parseInt(numStr[i]));
  }

  const results = [];
  combinate(nums, nums);
  if (results.length == 0) {
    return 'no solution exists';
  }
  return results[0];
}
