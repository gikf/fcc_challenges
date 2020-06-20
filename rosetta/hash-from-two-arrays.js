function arrToObj (keys, vals) {
  const hash = new Object();
  for (let i = 0; i < keys.length; i++) {
    hash[keys[i]] = vals[i];
  }
  return hash;
}
