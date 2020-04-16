function PriorityQueue () {
    let collection = [];
    this.printCollection = function() {
      console.log(collection);
    };
    // Only change code below this line

    this.enqueue = function(arr) {
      if (this.isEmpty() || arr[1] < collection[0][1]) {
        collection.unshift(arr);
      }
      else {
        collection.push(arr);
      }
    }

    this.dequeue = function() {
      return collection.shift()[0];
    }

    this.size = function() {
      return collection.length;
    }

    this.isEmpty = function() {
      return collection.length === 0;
    }
    // Only change code above this line
}