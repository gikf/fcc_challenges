function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // change code below this line
  set.add('Taco');
  set.add('Cat');
  set.add('Awesome');
  // change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
