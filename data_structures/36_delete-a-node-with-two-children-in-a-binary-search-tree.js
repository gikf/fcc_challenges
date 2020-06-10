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
    // case 2: target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
    else if (children == 2) {
      const isRightChildLeaf = (target.right.left === null && target.right.right === null);

      let parentTarget = undefined;
      if (parent !== null) {
        if (parent.value > target.value) {
          parentTarget = parent.left;
        } else {
          parentTarget = parent.right;
        }
      }

      if (isRightChildLeaf && this.root === target) {
        this.root = target.right;
        this.root.left = target.left;
      } else if (isRightChildLeaf) {
        parentTarget = target.right;
        parentTarget.left = target.left;
      } else {
        let curParent = target;
        let curNode = target.right;
        // Find lowest value of the right subtree
        while (curNode.left !== null) {
          curParent = curNode;
          curNode = curNode.left;
        }
        // Replace target value with lowest value of the right subtree
        // Replace parents left pointer of the lowest value with the right pointer of the lowest value node
        target.value = curNode.value;
        curParent.left = curNode.right;
      }
    }
  };
}
