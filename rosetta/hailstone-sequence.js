// noprotect
function hailstoneSequence() {
  const res = [];
  // Good luck!
  function sequence(n) {
    const seq = [n];
    while (n != 1) {
      if (n % 2 == 0) {
        n = n / 2;
      } else {
        n = (3 * n) + 1;
      }
      seq.push(n);
    }
    return seq;
  }

  const checkSeq = sequence(27);
  const seqStartEnd = [...checkSeq.slice(0, 4), ...checkSeq.slice(checkSeq.length - 4)];
  res.push(seqStartEnd);

  let longestSeq = 0;
  let longestSeqNum = null;

  for (let i = 1; i < 100000; i++) {
    const seq = sequence(i);
    if (seq.length > longestSeq) {
      longestSeqNum = i;
      longestSeq = seq.length;
    }
  }

  res.push([longestSeq, longestSeqNum]);
  return res;
}
