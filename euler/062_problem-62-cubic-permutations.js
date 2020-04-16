function cubicPermutations() {
  function genCubeAndDigits(num) {
    const curCube = num**3;
    const digits = [];
    let curNum = curCube;
    while (curNum > 0) {
      digits.push(curNum % 10);
      curNum = Math.floor(curNum / 10);
    }
    return [curCube, parseInt(digits.sort().reverse().join(''))];
  }
  
  const START = 345;
  const numbers = {};
  let end = false;
  let curNum = START + 1;

  while (!end) {
    let [cube, digits] = genCubeAndDigits(curNum);
    if (!numbers[digits]) {
      numbers[digits] = [1, cube];
    } else {
      numbers[digits][0] += 1;
    }

    if (numbers[digits][0] == 5) {
      return numbers[digits][1];
    }
    curNum++;
  }
  return false;
}

console.log(cubicPermutations());
