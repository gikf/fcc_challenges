function digitFactorialChains() {
  function fact(num) {
    if (facts[num]) {
      return facts[num];
    }

    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    facts[num] = result;
    return result;
  }
  function factDigitSum(num) {
    if (factSums[num]) {
      return factSums[num];
    }
    let digits = num;
    let sum = 0;
    while (digits > 0) {
      let curDigit = digits % 10;
      sum += fact(curDigit);
      digits = Math.floor(digits / 10);
    }
    factSums[num] = sum;
    return sum;
  }

  const LIMIT = 1000000;
  const facts = new Array(10);
  const sixtyChainBegin = [];
  const factSums = {};
  let result = 0;
  for (let i = 69; i < LIMIT; i++) {
    let curNum = i;
    const uniqFacts = [curNum];
    let counter = 1;
    let curSums = factDigitSum(curNum);
    while (uniqFacts.indexOf(curSums) == -1) {
      uniqFacts.push(curSums);
      curSums = factDigitSum(curSums);
      counter++;
      if (counter > 60) {
        break;
      }
    }
    if (counter == 60) {
      result++;
      sixtyChainBegin.push(curNum);
    }
    //console.log(uniqFacts);
  }
  console.log(facts);
  //console.log(sixtyChainBegin);
  console.log(result);
  
  return result;
}

digitFactorialChains();
