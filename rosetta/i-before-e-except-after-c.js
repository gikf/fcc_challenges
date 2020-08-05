function IBeforeExceptC(word) {
  const iBeforeE = word.indexOf('ie');
  const iENotPrecededByC = word.indexOf('c') - 1 != iBeforeE
  const eIPrecededByC = word.indexOf('cei') != -1;

  return iENotPrecededByC && eIPrecededByC;
}
