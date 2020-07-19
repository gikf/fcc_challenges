function sortDisjoint(values, indices) {
  const valuesToSort = [];
  for (let i = 0; i < indices.length; i++) {
    valuesToSort.push(values[indices[i]]);
  }

  valuesToSort.sort((a, b) => a - b);
  indices.sort((a, b) => a - b);
  
  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = valuesToSort[i];
  }
  return values;
}
