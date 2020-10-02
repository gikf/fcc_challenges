function hashJoin(hash1, hash2) {
  function joinRows(row1, row2) {
    const joined = {};
    const rows = [row1, row2];
    const prefixes = ['A_', 'B_']
    for (let i = 0; i < rows.length; i++) {
      const keys = Object.keys(rows[i]);
      for (let j = 0; j < keys.length; j++) {
        joined[prefixes[i] + keys[j]] = rows[i][keys[j]];
      }
    }
    return joined;
  }

  const multiMap = {}
  const jHash1 = 'name';
  const jHash2 = 'character';
  const result = [];

  for (let i = 0; i < hash2.length; i++) {
    const key = hash2[i][jHash2];
    if (!multiMap.hasOwnProperty(key)) {
      multiMap[key] = [];
    }
    multiMap[key].push(hash2[i]);
  }
  for (let i = 0; i < hash1.length; i++) {
    const key = hash1[i][jHash1];
    const mapRows = multiMap[key];
    if (!mapRows) {
      continue;
    }
    for (let j = 0; j < mapRows.length; j++) {
      result.push(joinRows(hash1[i], mapRows[j]))
    }
  }

  return result;
}
