var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}

function isBinarySearchTree(tree) {
  let isTree = true;
  // change code below this line
  function checkNode(node) {
    if (node.left !== null) {
      let leftNode = node.left;
      if (leftNode.value > node.value) {
        isTree = false;
      } else {
        checkNode(leftNode);
      }
    }
    if (node.right !== null) {
      let rightNode = node.right;
      if (rightNode.value < node.value) {
        isTree = false;
      } else {
        checkNode(rightNode);
      }
    }
  }

  if (tree.root === null) {
    return null;
  } else {
    checkNode(tree.root);
    return isTree;
  }
  // change code above this line
}