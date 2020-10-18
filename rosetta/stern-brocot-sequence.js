function sternBrocot(num) {
  // Return which sequence number is num
  const seq = [1, 1];
  let i = 1;
  let nth = 0;
  while (true) {
    nth = seq[i] + seq[i - 1];
    if (nth == num) {
      return seq.length + 1
    }
    seq.push(nth);
    seq.push(seq[i]);
    i++;
  }
}
