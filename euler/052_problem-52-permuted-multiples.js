function permutedMultiples() {
  function is_using_same_digits(numA, numB) {
    numA = numA.toString().split('').sort().join('');
    numB = numB.toString().split('').sort().join('');
    return numA == numB;
  }

  function check_num_mult(num) {
    for (let i = 2; i <= 6; i++) {
      if (!is_using_same_digits(num, i * num)) {
        return false;
      }
    }
    return true;
  }

  let i = 10;
  while (!check_num_mult(i)) {
      i++;
      if (i > 250000) {
        return false;
      }
  }
  return i;
}

permutedMultiples();
