var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.levelOrder = () => {
    if (this.root === null) {
      return null;
    }

    const queue = [];
    const result = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const curNode = queue.shift();
      result.push(curNode.value);

      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
    }
    return result;
  }

  this.reverseLevelOrder = () => {
    if (this.root === null) {
      return null;
    }

    const queue = [];
    const result = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const curNode = queue.shift();
      result.push(curNode.value);

      if (curNode.right !== null) {
        queue.push(curNode.right);
      }
      if (curNode.left !== null) {
        queue.push(curNode.left);
      }
    }
    return result;
  }
  // change code above this line
}
