function mergeLists(lists) {
  function nonEmpty(lists) {
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].length > 0) {
        return true;
      }
    }
    return false;
  }
  const result = [];

  while (nonEmpty(lists)) {
    let smallest = undefined;
    let smallest_list = undefined;
    for (let i = 0; i < lists.length; i++) {
      if (smallest === undefined || lists[i][0] && smallest > lists[i][0]) {
        smallest_list = i;
        smallest = lists[i][0];
      }
    }
    result.push(lists[smallest_list].shift());
  }

  return result;
}
