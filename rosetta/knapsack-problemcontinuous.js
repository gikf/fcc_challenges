function knapContinuous(items, maxweight) {
  let takenValue = 0;
  let takenItemsWeight = 0;
  items.sort((item1, item2) => ((item2.value/item2.weight) - (item1.value/item1.weight)))

  for (let i = 0; i < items.length; i++) {
    let curItemWeight = items[i].weight;
    let curItemValue = items[i].value;
    if (curItemWeight + takenItemsWeight > maxweight) {
      curItemWeight = maxweight - takenItemsWeight;
      curItemValue = curItemWeight * (items[i].value / items[i].weight);
    }
    takenValue += curItemValue;
    takenItemsWeight += curItemWeight;

    if (takenItemsWeight >= maxweight) {
      break
    }
  }
  
  return takenValue;
}
