function knapsackUnbounded(items, maxweight, maxvolume) {
  function getTotalsPerPicks(picked) {
    let totalValue = 0;
    let totalWeight = 0;
    let totalVolume = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue += picked[i] * items[i].value;
      totalWeight += picked[i] * items[i].weight;
      totalVolume += picked[i] * items[i].volume;
    }
    return [totalValue, totalWeight, totalVolume];
  }

  function getMaxes() {
    const maxes = [];
    for (let i = 0; i < items.length; i++) {
      const maxUnitsPerWeight = Math.floor(maxweight / items[i].weight);
      const maxUnitsPerVolume = Math.floor(maxvolume / items[i].volume);
      const maxUnits = Math.min(maxUnitsPerWeight, maxUnitsPerVolume);
      maxes.push(maxUnits);
    }
    return maxes;
  }

  let bestValue = 0
  let bestPick = [];
  items.sort((item1, item2) => ((item1.value/(item1.weight*item1.volume)) - (item2.value/(item2.weight * item2.volume))))
  const maxes = getMaxes();

  for (let j = 0; j <= maxes[0]; j++) {
    for (let m = 0; m <= maxes[1]; m++) {
      for (let n = 0; n <= maxes[2]; n++) {
        const pick = [];
        pick.push(j);
        pick.push(m);
        pick.push(n);
        const [curValue, curWeight, curVolume] = getTotalsPerPicks(pick);
        if (curWeight > maxweight || curVolume > maxvolume) {
          continue;
        } 

        if (curValue > bestValue) {
          bestValue = curValue;
          bestPick = [pick];
        } else if (curValue == bestValue) {
          bestPick.push(pick);
        }
      }
    }
  }
  return bestValue;
}

function knapsackUnbounded2(items, maxweight, maxvolume) {
  let bestValue = 0;
  const n = items.length;
  const count = new Array(n);
  const best = new Array(n);

  for (let i = 0; i < items.length; i++) {
    items[i].weight *= 1000;
    items[i].volume *= 1000;
  }

  function recur(i, value, weight, volume) {
    if (i == n) {
      if (value > bestValue) {
        bestValue = value;
        for (let j = 0; j < n; j++) {
          best[j] = count[j];
        }
      }
      return;
    }
    const maxPerWeight = Math.floor((weight) / items[i].weight);
    const maxPerVolume = Math.floor((volume) / items[i].volume);
    const maxItem = Math.min(maxPerWeight, maxPerVolume);

    for (count[i] = maxItem; count[i] >= 0; count[i]--) {
      recur(
        i + 1,
        value + count[i] * items[i].value,
        weight - count[i] * items[i].weight,
        volume - count[i] * items[i].volume
      );
    }
  }
  recur(0, 0, maxweight * 1000, maxvolume * 1000);
  return bestValue;
}
