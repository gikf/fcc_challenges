var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  // change code below this line
  // In-order DFS
  this.inorder = () => {
    if (this.root === null) {
      return null;
    }

    function traverse(tree) {
      if (tree.left === null && tree.right === null) {
        return [tree.value];
      }

      let leftTraverse = [];
      if (tree.left !== null) {
        leftTraverse = traverse(tree.left);
      }

      let rightTraverse = [];
      if (tree.right !== null) {
        rightTraverse = traverse(tree.right);
      }

      return leftTraverse.concat(tree.value).concat(rightTraverse);
    }

    return traverse(this.root);
  }

  // Pre-order DFS
  this.preorder = () => {
    if (this.root === null) {
      return null;
    }

    function traverse(tree) {
      if (tree.left === null && tree.right === null) {
        return [tree.value];
      }

      let leftTraverse = [];
      if (tree.left !== null) {
        leftTraverse = traverse(tree.left);
      }

      let rightTraverse = [];
      if (tree.right !== null) {
        rightTraverse = traverse(tree.right);
      }

      return [tree.value].concat(leftTraverse, rightTraverse);
    }

    return traverse(this.root);
  }

  // Post-order DFS
  this.postorder = () => {
    if (this.root === null) {
      return null;
    }

    function traverse(tree) {
      if (tree.left === null && tree.right === null) {
        return [tree.value];
      }

      let leftTraverse = [];
      if (tree.left !== null) {
        leftTraverse = traverse(tree.left);
      }

      let rightTraverse = [];
      if (tree.right !== null) {
        rightTraverse = traverse(tree.right);
      }

      return leftTraverse.concat(rightTraverse, tree.value);
    }

    return traverse(this.root);
  }
  // change code above this line
}
