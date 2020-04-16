function checkSet(arrToBeSet, checkValue){

   // change code below this line
   let set = new Set(arrToBeSet);
   let has = set.has(checkValue);
   let size = set.size;

   return [has, size];

   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
