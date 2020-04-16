function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    length++;
    const cur_element = new Node(element);
    if (head === null) {
      head = cur_element;
    } else {
      let cur_last = head;
      while (cur_last.next !== null) {
        cur_last = cur_last.next;
      }
      cur_last.next = cur_element;
    }
    // Only change code above this line
  };
}

let ll = new LinkedList();
console.log(ll.head());
ll.add('abc');
console.log(ll.head());
ll.add('bcd');
console.log(ll.head());

