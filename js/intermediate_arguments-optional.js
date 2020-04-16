function addTogether() {
  let args = arguments;

  if (!Number.isInteger(args[0]) || (args.length > 1 && !Number.isInteger(args[1]))) {
    return undefined;
  }

  // return function if only one argument is passed
  if (args.length == 1) {
    return function(arg2) { 
      if (Number.isInteger(arg2) && Number.isInteger(args[0])) {
        return arg2 + args[0];
        } else {
          return undefined;
        };
     }
  }

  return args[0] + args[1];
}

console.log(addTogether(2,3));
console.log(addTogether("http://bit.ly/IqT6zt"));
var sumTwoAnd = addTogether(2);
console.log('sum sum ', sumTwoAnd(3));
console.log(addTogether(2, "3"));
console.log(addTogether(2)(3));