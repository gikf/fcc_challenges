function canMakeWord(word) {
  const blocks = [
    'BO',
    'XK',
    'DQ',
    'CP',
    'NA',
    'GT',
    'RE',
    'TG',
    'QD',
    'FS',
    'JW',
    'HU',
    'VI',
    'AN',
    'OB',
    'ER',
    'FS',
    'LY',
    'PC',
    'ZM'];
  const upper = word.toUpperCase();
  const usedBlocks = new Set()
  
  for (let i = 0; i < upper.length; i++) {
    let block_found = false;
    for (let j = 0; j < blocks.length; j++) {
      if (blocks[j].indexOf(upper[i]) != -1 && !usedBlocks.has(j)) {
        block_found = true;
        usedBlocks.add(j);
        break;
      }
    }
    if (!block_found) {
      return false;
    }
  }
  return true;
}
