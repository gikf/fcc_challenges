function mode(arr) {
  let max_occurences = 0;
  let maxs = [];
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    if (!counts.hasOwnProperty(arr[i])) {
      counts[arr[i]] = 0;
    }

    counts[arr[i]] += 1;
  }

  max_occurences = Math.max(...Object.values(counts));
  const keys = Object.keys(counts);
  for (let i = 0; i < keys.length; i++) {
    if (counts[keys[i]] == max_occurences) {
      maxs.push(parseInt(keys[i]));
    }
  }
  return maxs;
}
