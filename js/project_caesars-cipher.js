function rot13(str) { // LBH QVQ VG!
  let inp = ['A', 'B', 'C', 'D', 'E', 'F',
             'G', 'H', 'I', 'J', 'K', 'L',
             'M', 'N', 'O', 'P', 'Q', 'R',
             'S', 'T', 'U', 'V', 'W', 'X',
             'Y', 'Z'];
  let out = ['N', 'O', 'P', 'Q', 'R', 'S',
             'T', 'U', 'V', 'W', 'X', 'Y',
             'Z', 'A', 'B', 'C', 'D', 'E',
             'F', 'G', 'H', 'I', 'J', 'K',
             'L', 'M'];
  let pair = {'A': 'N',
              'B': 'O',
              'C': 'P',
              'D': 'Q',
              'E': 'R',
              'F': 'S',
              'G': 'T',
              'H': 'U',
              'I': 'V',
              'J': 'W',
              'K': 'X',
              'L': 'Y',
              'M': 'Z',
              'N': 'A',
              'O': 'B',
              'P': 'C',
              'Q': 'D',
              'R': 'E',
              'S': 'F',
              'T': 'G',
              'U': 'H',
              'V': 'I',
              'W': 'J',
              'X': 'K',
              'Y': 'L',
              'Z': 'M'};
  str = str.split('');
  console.log(str);
  str = str.map(function(item, i) {return pair[item] ? pair[item] : item})
  str = str.join('');
  console.log(str);
  return str
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
