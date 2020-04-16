function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line
  this.isEmpty = function() {
    return length == 0;
  }

  this.indexOf = function(element) {
    let index = 0;
    let cur_node = head;

    while (index < length) {
      if (cur_node.element === element) {
        return index;
      }
      cur_node = cur_node.next;
      index++;
    }
    
    return -1;
  }

  this.elementAt = function(index) {
    let cur_index = 0;
    let cur_node = head;
    while (cur_node) {
      if (cur_index === index) {
        return cur_node.element;
      }
      cur_index++;
      if (cur_node.next === null) {
        break;
      }
      cur_node = cur_node.next;
    }
    return undefined;
  }
  // Only change code above this line
}
