function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index, element) {
    if (index === 0) {
      let newNode = new Node(element);
      newNode.next = head;
      head = newNode;
      length++;
    } else if (index > 0 && index < length) {
      let curNode = head;
      let curIndex = 0;
      while (curIndex + 1 != index) {
        curNode = curNode.next;
        curIndex++;
      }

      let newNode = new Node(element);
      newNode.next = curNode.next;
      curNode.next = newNode;
      length++;
    } else {
      return false;
    }
  }
  // Only change code above this line
}
