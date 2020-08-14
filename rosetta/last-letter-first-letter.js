function findLongestChain(items) {
  let longest = [];
  let longestLength = 0;
  const checked = new Set();
  function recurseChain(chain, itemsLeft) {
    if (itemsLeft.length == 0) {
      if (chain.length > longestLength) {
        longest = chain;
        longestLength = chain.length;
        return;
      }
    }

    let previousLetter = ''
    if (chain.length > 0) {
      const previousItem = chain[chain.length - 1];
      previousLetter = previousItem[previousItem.length - 1];
    }
    for (let i = 0; i < itemsLeft.length; i++) {
      let curLeft = []
      let curChain = [...chain];
      if (chain.length == 0 || previousLetter == itemsLeft[i][0]) {
        curLeft = [...itemsLeft.slice(0, i), ...itemsLeft.slice(i + 1)];
        curChain.push(itemsLeft[i]);
      }
      const toCheck = curChain.join() + curLeft.join();
      if(!checked.has(toCheck)) {
        checked.add(toCheck);
        recurseChain(curChain, curLeft);
      }
    }
  }
  recurseChain([], items);
  return longest;
}
