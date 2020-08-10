function knapsack(items, maxweight) {
  function getTotals(items) {
    let totalWeight = 0;
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
      totalWeight += items[i].weight;
      totalValue += items[i].value;
    }
    return [totalWeight, totalValue];
  }

  const [totalWeight, totalValue] = getTotals(items);
  if (totalWeight <= maxweight) {
    return totalValue;
  }

  let highestValue = 0;
  items.sort((item1, item2) => ((item2.value/item2.weight) - (item1.value/item1.weight)))
  for (let i = 0; i < items.length; i++) {
    let curValue = 0;
    let curWeight = 0;
    let curItems = [];
    for (let j = 0; j < items.length; j++) {
      if (i == j) {
        continue;
      }
      if (items[j].weight + curWeight <= maxweight) {
        curItems.push(items[j]);
        curValue += items[j].value;
        curWeight += items[j].weight;
      }
    }
    if (curValue > highestValue) {
      highestValue = curValue;
    }
  }
  return highestValue;
}
