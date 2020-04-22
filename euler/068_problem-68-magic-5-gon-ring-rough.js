function magic5GonRing() {
  // check if current array makes sense
  function checkAnswer() {
    if (arr[1] == 10 || arr[2] == 10 || arr[4] == 10 || arr[6] == 10 || arr[8] == 10) {
       return false;
        }
    if (arr[0] > arr [3] || arr[0] > arr [5] || arr[0] > arr [7] || arr[0] > arr [9]) {
       return false;
        }

    if (arr[0] + arr[1] + arr[2] != arr[3] + arr[2] + arr[4])      
      return false;
    if (arr[0] + arr[1] + arr[2] != arr[5] + arr[4] + arr[6])      
      return false;
    if (arr[0] + arr[1] + arr[2] != arr[7] + arr[6] + arr[8])      
      return false;
    if (arr[0] + arr[1] + arr[2] != arr[9] + arr[8] + arr[1])      
      return false;

    return true;
  }

  function swapping(numA, numB) {
    const temp = arr[numA];
    arr[numA] = arr[numB];
    arr[numB] = temp;
  }

  // rearrange array to generate next permutations
  function genPerm() {
    let i = arr.length - 1;

    while (arr[i - 1] >= arr[i]) {
      i--;
      if (i < 1)
        return false;
    }

    let j = arr.length;
    while (arr[j - 1] <= arr[i - 1]) {
      j = j - 1; // j-1
    }

    // swapping positions
    swapping(i - 1, j - 1);

    i++;
    j = arr.length;

    while (i < j) {
      swapping(i - 1, j - 1);
      i++;
      j--;
    }
    return true;
  }

  function joinArr() {
    let res = '';
    res += arr[0].toString() + arr[1].toString() + arr[2].toString();
    res += arr[3].toString() + arr[2].toString() + arr[4].toString();
    res += arr[5].toString() + arr[4].toString() + arr[6].toString();
    res += arr[7].toString() + arr[6].toString() + arr[8].toString();
    res += arr[9].toString() + arr[8].toString() + arr[1].toString();
    return res;
  }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = '';
  let pot = '';
  while (true) {
    if (!genPerm()) {
      break;
    }
    if (checkAnswer()) {
      pot = joinArr();
      if (pot > result) {
        result = pot;
      }
    }
  }
  return parseInt(result);
}

magic5GonRing();
