function dropElements(arr, func) {
  // Drop them elements.
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) || result.length > 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
