function strandSort(arr) {
  function strand(arr) {
    if (arr.length == 0) {
      return;
    } else {
      let subArr = [arr[0]];
      arr = arr.slice(1);
      for (let i = 0; i < arr.length; i++) {
        if (subArr[subArr.length - 1] < arr[i]) {
          subArr.push(arr[i]);
          arr = arr.slice(0, i)
                   .concat(arr.slice(i + 1));
        }
      }

      if (solutionArr.length == 0) {
        for (let i = 0; i < subArr.length; i++) {
          solutionArr.push(subArr[i]);
        }
      } else {
        let subArrIndex = subArr.length - 1;
        let solutionIndex = 0;
        while (subArr.length > 0) {
          if (subArr[subArrIndex] > solutionArr[solutionIndex]) {
            solutionIndex++;
          } else {
            solutionArr = solutionArr.slice(0, solutionIndex)
                                     .concat(subArr[subArrIndex])
                                     .concat(solutionArr.slice(solutionIndex));
            subArr.pop();
            subArrIndex--;
            solutionIndex = 0;
          }
        }
      }
      strand(arr);
    }
  }

  let solutionArr = [];
  strand(arr);
  return solutionArr;
}
