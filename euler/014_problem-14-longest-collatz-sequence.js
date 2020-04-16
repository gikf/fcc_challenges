function longestCollatzSequence(limit) {
  // Good luck!
  function sequence(num) {
    let n = num;
    let count = 1;

    while (n != 1) {
      if (n % 2 == 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
    }
    return count;
  }

  let longest = 2;
  let longest_seq = 2;

  for (let i = 3; i < limit; i++) {
    let cur_seq = sequence(i);
    if (cur_seq > longest_seq) {
      longest = i;
      longest_seq = cur_seq;
    }
  }
  
  return longest;
}

longestCollatzSequence(14);
console.log(longestCollatzSequence(14));
