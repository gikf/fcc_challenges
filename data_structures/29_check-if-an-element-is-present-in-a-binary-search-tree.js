var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.isPresent = (value) => {
    if (this.root === null) {
      return false;
    }
    let curNode = this.root;
    while (curNode !== null) {
      // Got it
      if (curNode.value === value) {
        return true;
      }
      // Need to go deper
      if (curNode.value > value) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }

    // Not found in tree
    return false;
  }
  // change code above this line
}
