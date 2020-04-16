function largeSum(arr) {
  // strip the further numbers
  let narr = arr.map((x) => parseInt(x.slice(0,12)));

  let sum = narr.reduce((a, b) => a + b);

  return parseInt(sum.toString().slice(0,10));
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
