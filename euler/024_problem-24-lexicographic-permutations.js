function lexicographicPermutations(n) {
  let to_permutate = [0, 1, 2, 3, 4, 5, 6, 7, 8,9];
  let factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  //let to_permutate = ['0', '1', '2'];
  let base_length = to_permutate.length;
  let result = '';

  for (let i = to_permutate.length - 1; i >= 0; i--) {
    let index = Math.floor(n / factorials[i]);
    n = n % factorials[i];
    result += to_permutate[index];
    to_permutate.splice(index, 1);
  }
  console.log(result);
  return parseInt(result);
}

lexicographicPermutations(999999);
