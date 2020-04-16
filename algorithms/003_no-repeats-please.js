function permAlone(str) {
  function has_no_cons_letters(string) {
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] == string[i + 1]) {
        return false;
      }
    }
    return true;
  }

  function get_permutations(input, index, n) {
    let arr = [];
    if (index >= n) {
      permutations.push(input.join(''));
      return;
    }

    for (let i = index; i < n; i++) {
      let temp = input[index];
      input[index] = input[i];
      input[i] = temp;

      get_permutations(input, index + 1, n);
      temp = input[index]
      input[index] = input[i]
      input[i] = temp;
    }
  }

  let target = str.split('');
  let permutations = [];
  let counter = 0;

  get_permutations(target, 0, target.length);

  for (let i = 0; i < permutations.length; i++) {
    if (has_no_cons_letters(permutations[i])) {
      counter++;
    }
  }
  console.log(permutations.length);
  console.log(counter);
  console.log(permutations);
  return counter;
}

permAlone('aab');
