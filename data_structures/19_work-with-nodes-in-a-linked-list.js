var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// only add code below this line
let Cat = new Node('Cat');
let Dog = new Node('Dog');

Puppy.next = Cat;
Cat.next = Dog;
// test your code
console.log(Kitten.next);
