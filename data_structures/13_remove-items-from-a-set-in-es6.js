function checkSet(){
   var set = new Set([1, 2, 3, 4, 5]);//Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   set.delete(2);
   //Remove the value 5
   set.delete(5)
   //Return the set
   return set;
}
