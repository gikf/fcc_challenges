var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  // change code below this line
  this.findMaxHeight = () => {
    if (this.root == null) {
      return -1;
    }

    function depth(tree, height) {
      if (tree === null) {
        return height;
      } else if (tree.left === null && tree.right === null) {
        return height;
      }

      let leftMax = depth(tree.left, height + 1);
      let rightMax = depth(tree.right, height + 1);

      return Math.max(leftMax, rightMax);
    }

    let curHeight = 0;
    let curNode = this.root;

    return depth(curNode, curHeight);
  }

  this.findMinHeight = () => {
    if (this.root == null) {
      return -1;
    }

    function depth(tree, height) {
      if (tree === null) {
        return height;
      } else if (tree.left === null && tree.right === null) {
        return height;
      }

      let leftMax = depth(tree.left, height + 1);
      let rightMax = depth(tree.right, height + 1);

      return Math.min(leftMax, rightMax);
    }

    let curHeight = 0;
    let curNode = this.root;

    return depth(curNode, curHeight);
  }


  this.isBalanced = () => {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  }
  // change code above this line
}
