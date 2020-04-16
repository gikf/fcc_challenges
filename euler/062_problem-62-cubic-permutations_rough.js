function cubicPermutations() {
  // computing cubes
  function getCubes(LIMIT, START) {
    const cubes = []
    let curNum = getCubeRoot(START);
    let cube = curNum ** 3
    while (cube < LIMIT) {
      cubes.push(cube);
      curNum++
      cube = curNum ** 3;
    }
    return cubes;
  }

  // return closest root larger than num
  function getCubeRoot(num) {
    let curNum = num;
    let curRoot = Math.cbrt(curNum);
    if (curRoot != parseInt(curRoot)) {
      curRoot = parseInt(curRoot) + 1;
    }
    return curRoot;
  }

  function isCube(num) {
    return cubes.indexOf(num) != -1;
  }

  function getDigits(num) {
    if (permuted[num]) {
      return permuted[num];
    }
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    permuted[num] = digits;
    return digits;
  }

  // comparing digits in two numbers
  function isPermutation(numA, numB) {
    return numA.toString().split('').sort().join('') == numB.toString().split('').sort().join('');
  }

  function isPermutation2(numA, numB) {
    const digitsA = getDigits(numA);
    const digitsB = getDigits(numB);
    return digitsA.sort().join('') == digitsB.sort().join('');
  }

  // 
  function countAndGetDigits(num) {
    let counter = 0;
    const digits = [];
    while (num > 0) {
      counter++;
      //digits.push(num % 10);
      num = Math.floor(num / 10)
    }
    return [counter, digits];
  }

  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      counter++;
      num = Math.floor(num / 10)
    }
    return counter;
  }

  /*const a = countAndGetDigits(41063625);
  const b = countAndGetDigits(56623104);
  console.log(a[1].sort().join(''));
  console.log(b[1].sort().join(''));
  console.log(isPermutation(a[1], b[1]))*/

  function numDigits(x) {
    return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
  }

  const LIMIT = 1 * 10**12;
  const START = 12 * 10**10;
  const cubes = getCubes(LIMIT, START);
  let curDigitCount = undefined;
  let cDigits = undefined;
  let numPermCubes = undefined;
  const used = {};
  const permuted = {};

  //console.log(cubes.indexOf(127035954683));
  //console.log('p', isPermutation2(127035954683, 127035945683));
  //console.log(cubes.length);

  for (let i = 0; i < cubes.length; i++) {
    let num = cubes[i]
    if (used[num]) {
      continue;
    }
    //curDigitCount, cDigits = countAndGetDigits(num);
    curDigitCount = countDigits(num);
    //curDigitCount = numDigits(num);
    numPermCubes = 1;
    if (i % 100 == 0) {
      console.log(i, num);
    }
    for (let j = i + 1; j < cubes.length; j++) {
      let curNum = cubes[j];
      if (used[curNum]) {
        continue;
      }
      //let [digitCount, digits] = countAndGetDigits(curNum);
      let digitCount = countDigits(curNum)
      //let digitCount = numDigits(curNum)
      if (digitCount > curDigitCount) {
        break;
      }
      //if (isPermutation(digits, cDigits)) {
      if (isPermutation(curNum, num)) {
        if (num == 127035954683) {
          //console.log(numPermCubes)
        }
        //console.log('perm', numPermCubes, cubes[i], cubes[j]);
        used[curNum] = true;
        numPermCubes++;
      }
    }
    used[num] = true;
    //console.log(i);
    if (numPermCubes == 5) {
      return num;
    }
  }

  // Good luck!
  return false;
}

console.log(cubicPermutations());
