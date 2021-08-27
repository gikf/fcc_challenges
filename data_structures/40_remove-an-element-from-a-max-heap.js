var MaxHeap = function() {
  // change code below this line
  this.heap = [null];
  // change code above this line
  this.insert = (value) => {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let curParentIndex = Math.floor(curIndex / 2)
    while (this.heap[curParentIndex] !== null && this.heap[curIndex] > this.heap[curParentIndex]) {
      [this.heap[curIndex], this.heap[curParentIndex]] = [this.heap[curParentIndex], this.heap[curIndex]];
      curIndex = curParentIndex;
      curParentIndex = Math.floor(curIndex / 2);
    }
  }

  this.remove = () => {
    if (this.heap.length == 1) {
      return null;
    }
    const maxValue = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap.pop();
    } else {
      this.heap.pop();
    }

    let curParent = 1;

    while (curParent < this.heap.length) {
      let curChild1 = curParent * 2;
      let curChild2 = curParent * 2 + 1;

      const child1_compare = this.heap[curParent] > this.heap[curChild1];
      const child1_compare_or_nan = child1_compare || isNaN(this.heap[curChild1]);
      
      const child2_compare = this.heap[curParent] > this.heap[curChild2];
      const child2_compare_or_nan = child2_compare || isNaN(this.heap[curChild2]);

      if (child1_compare_or_nan && child2_compare_or_nan) {
        break;
      }

      if (this.heap[curChild1] > this.heap[curChild2] || isNaN(this.heap[curChild2])) {
        [this.heap[curParent], this.heap[curChild1]] = [this.heap[curChild1], this.heap[curParent]];
        curParent = curChild1;
      } else if (!isNaN(this.heap[curChild2])) {
        [this.heap[curParent], this.heap[curChild2]] = [this.heap[curChild2], this.heap[curParent]];
        curParent = curChild2;
      }
    }

    return maxValue;
  }

  this.print = () => {
    return this.heap;
  }
};
