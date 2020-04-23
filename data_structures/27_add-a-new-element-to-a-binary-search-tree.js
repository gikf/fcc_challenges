var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(value) {
    // first element of tree
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let curRoot = this.root;
      while (curRoot.value !== value) {
        if (curRoot.value > value) {
          if (curRoot.left !== null) {
            curRoot = curRoot.left;
          } else {
            // we are at the end of the tree and can add
            curRoot.left = new Node(value);
            return;
          }
        } else {
          if (curRoot.right !== null) {
            curRoot = curRoot.right;
          } else {
            // we are at the end of the tree and can add
            curRoot.right = new Node(value);
            return;
          }
        }
      }
      // value is already in tree
      return null;
    }
  }
  // change code above this line
}
