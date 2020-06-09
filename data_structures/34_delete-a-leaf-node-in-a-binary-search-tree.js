var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  // case 1: target has no children, change code below this line
  this.remove = (value) => {
    if (this.root === null) {
      return null;
    }

    if (value === this.root.value) {
      let node = this.root;
      this.root = null;
      return node;
    }

    let parentNode = undefined;
    let childNode = this.root;
    while (childNode !== null) {
      if (childNode.value < value) {
        parentNode = childNode;
        childNode = childNode.right;
      } else if (childNode.value > value) {
        parentNode = childNode;
        childNode = childNode.left;
      } else {
        // Case 1 - no children on removed node
        if (childNode.left === null && childNode.right === null) {
          if (parentNode.value > value) {
            parentNode.left = null;
            return childNode;
          } else {
            parentNode.right = null;
            return childNode;
          }
        }
      }
    }

    return null;
  }
}
