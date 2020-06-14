var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  this.start = new Node();
  this.add = (word) => {
    const letters = word.split('');

    let curNode = this.start;
    for (let i = 0; i < letters.length; i++) {
      if (!curNode.keys.has(letters[i])) {
        curNode.keys.set(letters[i], new Node());
      }
      curNode = curNode.keys.get(letters[i]);
      if (i == letters.length - 1) {
        curNode.setEnd();
      }
    }
  }

  this.isWord = (word) => {
    const letters = word.split('');
    
    let curNode = this.start;
    for (let i = 0; i < letters.length; i++) {
      if (!curNode.keys.has(letters[i])) {
        return false;
      }
      curNode = curNode.keys.get(letters[i]);
    }
    if (!curNode.isEnd()) {
      return false;
    }

    return true;
  }

  this.print = () => {
    const words = [];
    let curNode = this.start;

    function traversing(node, curWord) {    
      if (node.isEnd()) {
        words.push(curWord)
      }
      node.keys.forEach((value, key) => traversing(value, curWord + key));
    }
    traversing(curNode, '');
    return words;
  }
  // change code above this line
};
