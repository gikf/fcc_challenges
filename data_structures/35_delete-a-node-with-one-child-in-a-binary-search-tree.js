var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child, change code below this line
    if (children === 1) {
      if (target == this.root) {
        if (this.root.left !== null) {
          this.root = this.root.left;
        } else {
          this.root = this.root.right;
        }
      } else {
        let parentTarget = undefined;
        let childTarget = undefined;
        if (parent.left == target) {
          parentTarget = parent.left;
        } else {
          parentTarget = parent.right;
        }

        if (target.left !== null) {
          childTarget = target.left;
        } else {
          childTarget = target.right;
        }

        parentTarget = childTarget;

      }
    }
  };
}
