function sym(...args) {
  let difference = [...args[0]]

  function diff(l1, l2) {
    let result = []
    for (let i = 0; i < l1.length; i++) {
      if (!l2.includes(l1[i]) && !result.includes(l1[i])) {
        result.push(l1[i]);
      }
    }
    for (let i = 0; i < l2.length; i++) {
      if (!l1.includes(l2[i]) && !result.includes(l2[i])) {
        result.push(l2[i]);
      }
    }
    return result;
  }

  for (let i = 1; i < args.length; i++) {
    difference = diff(difference, args[i]);
  }
  console.log(difference);
  return difference;
}

sym([1, 2, 3], [5, 2, 1, 4]);
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
