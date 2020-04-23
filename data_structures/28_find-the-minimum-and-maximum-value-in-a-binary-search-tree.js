var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line

  this.findMin = () => {
    if (this.root === null) {
      return null;
    }

    let curNode = this.root;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }

    return curNode.value;
  }

  this.findMax = () => {
    if (this.root === null) {
      return null;
    }

    let curNode = this.root;
    while (curNode.right !== null) {
      curNode = curNode.right;
    }

    return curNode.value;
  }
  // change code above this line
}
