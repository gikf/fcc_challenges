function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
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

  this.remove = function(element){
    // Only change code below this line
    if (head.element == element) {
      const new_head = head.next;
      head = new_head;
      return length--;
    } else {
      let cur_node = head;
      while (cur_node.next !== null) {
        if (cur_node.next.element == element) {
          cur_node.next = cur_node.next.next;
          return length--;
        }
        cur_node = cur_node.next;
      }
    }
    // Only change code above this line
  };
}
