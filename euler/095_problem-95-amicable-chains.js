function amicableChains() {
  // Good luck!
  function getSmallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (smallest > arr[i]){
        smallest = arr[i];
      }
    }
    return smallest;
  }

  const LIMIT = 10**6;
  let longestChain = 0;
  let smallestMember = 0;
  const chains = new Array(LIMIT).fill(1);

  for (let i = 2; i < LIMIT / 2; i++) {
    for (let j = 2 * i; j < LIMIT; j += i) {
      chains[j] += i;
    }
  }

  for (let i = 2; i < LIMIT; i++) {
    let n = i;
    const chain = [];
    while (chains[n] < LIMIT) {
      [chains[n], n] = [LIMIT + 1, chains[n]];

      let index = chain.indexOf(n);
      if (index == -1) {
        chain.push(n);
      } else {
        if (chain.length - index > longestChain) {
          longestChain = chain.length - index;
          smallestMember = getSmallest(chain.slice(index))
        }
      }
    }
  }

  console.log('smallest member', smallestMember);
  console.log('longest chain', longestChain);
  return smallestMember;
}

amicableChains();
