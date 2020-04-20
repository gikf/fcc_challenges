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

  this.remove = function(element) {
    if (this.head === null) {
      return null;
    } else {
      if (this.head.data === element) {
        // setting as head node next element
        // and changing prev of that element to null
        this.head = this.head.next;
        this.head.prev = null;
      }
      if (this.tail.data === element) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      let curNode = this.head;
      while (curNode !== null) {
        if (curNode.data === element) {
          curNode.next.prev = curNode.prev;
          curNode.prev.next = curNode.next;
        }
        curNode = curNode.next;
      }
    }
  }
  // change code above this line
};
