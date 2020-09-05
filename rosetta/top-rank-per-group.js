function topRankPerGroup(n, data, groupName, rankName) {
  if (n < 0) {
    return undefined;
  }
  function filterGroup(group) {
    return data.filter(elem => elem[groupName] == group);
  }
  function sortByField(arr, field) {
    arr.sort((elem1, elem2) => elem2[field] - elem1[field]);
    return arr;
  }


  const topRanks = [];
  const uniqueGroups = [];
  for (let i = 0; i < data.length; i++) {
    if (uniqueGroups.indexOf(data[i][groupName]) === -1) {
      uniqueGroups.push(data[i][groupName]);
    }
  }
  uniqueGroups.sort();

  for (let i = 0; i < uniqueGroups.length; i++) {
    const filteredGroup = filterGroup(uniqueGroups[i]);
    topRanks.push(sortByField(filteredGroup, rankName).slice(0, n));
  }
  return topRanks;
}
