var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.invert = (curNode=this.root) => {
    if (curNode) {
      [curNode.left, curNode.right] = [curNode.right, curNode.left];
      this.invert(curNode.left);
      this.invert(curNode.right);
    }

    return curNode;
  }
  // change code above this line
}
