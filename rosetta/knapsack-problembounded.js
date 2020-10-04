function findBestPack(data, maxweight) {
  function bounding(dataLeft, maxWeight, weightTaken, itemsValue) {
    if (weightTaken <= maxWeight && itemsValue > maxValue) {
      maxValue = itemsValue;
    }
    if (maxWeight < weightTaken || dataLeft.length == 0) {
      return;
    }

    const item = dataLeft[0];
    for (let i = 0; i <= item.pieces; i++) {
      const newWeight = weightTaken + i * item.weight;
      const newValue = itemsValue + i * item.value;
      bounding(dataLeft.slice(1), maxWeight, newWeight, newValue);
    }
  }

  let maxValue = 0;
  bounding(data, maxweight, 0, 0);
  return maxValue;
}
