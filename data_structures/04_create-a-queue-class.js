function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  this.enqueue = function(elem) {
    collection.push(elem);
  }

  this.dequeue = function(elem) {
    return collection.shift();
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return collection.length === 0;
  }
  // Only change code above this line
}
