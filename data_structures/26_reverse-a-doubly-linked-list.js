var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line

  this.add = function(element) {
    if (this.tail === null) {
      this.head = new Node(element, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(element, this.tail);
      this.tail = this.tail.next;
    }
  }

  this.reverse = function() {
    if (this.head === null) {
      return null;
    }

    function tempSwapF(elemA, elemB) {
      return [elemB, elemA];
    }

    [this.head, this.tail] = tempSwapF(this.head, this.tail);

    [this.tail.next, this.tail.prev] = tempSwapF(this.tail.next, this.tail.prev);

    [this.head.next, this.head.prev] = tempSwapF(this.head.next, this.head.prev)

    let curNode = this.tail.prev;
    while (curNode.prev !== null) {
      [curNode.next, curNode.prev] = tempSwapF(curNode.next, curNode.prev);

      curNode = curNode.prev;
    }
  }
  // change code above this line
};

