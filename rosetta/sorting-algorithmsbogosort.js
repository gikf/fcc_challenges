function bogosort(v) {
  function isSorted(arr) {
    let previous = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (previous > arr[i]) {
        return false;
      }
      previous = arr[i];
    }
    return true;
  }
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {  
       let j = Math.floor(Math.random() * (i + 1)); 
       [arr[i], arr[j]] = [arr[j], arr[i]];
   } 
    return arr;
  }

  while (!isSorted(v)) {
    v = shuffle(v);
  }
  return v;
}
