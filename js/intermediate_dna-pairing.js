function pairElement(str) {
  let pair = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  }
  let arr = str.split('');
  return arr.map(function(item) {
    return [item, pair[item]];
  });
}

pairElement("ATCGA")
pairElement("GCG");
