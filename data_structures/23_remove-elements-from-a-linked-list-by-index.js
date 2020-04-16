function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
  this.removeAt = function(index) {
    if (index < 0 || index >= length) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = head;

    if (length == 1) {
      head = null;
      length--;
      return currentNode.element;
    }

    if (index == 0) {
      head = currentNode.next;
      length--;
      return currentNode;
    }

    while (currentIndex + 1 != index) {
      currentIndex++;
      currentNode = currentNode.next;
    }

    let removed = currentNode.next;
    currentNode.next = removed.next;
    length--;
    return removed.element;
  }

  // Only change code above this line
}
