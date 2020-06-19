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
    this.heap[1] = this.heap.pop();

    for (let i = 2; i < this.heap.length; i ++) {
      let curParent = Math.floor(i / 2);
      let curChild1 = curParent * 2;
      let curChild2 = curParent * 2 + 1;

      if (this.heap[curParent] > this.heap[curChild1]
          && this.heap[curParent] > this.heap[curChild2]) {
            break;
          }

      if (this.heap[curChild1] > this.heap[curChild2]) {
        [this.heap[curParent], this.heap[curChild1]] = [this.heap[curChild1], this.heap[curParent]];
      } else {
        [this.heap[curParent], this.heap[curChild2]] = [this.heap[curChild2], this.heap[curParent]];
      }
    }

    return maxValue;
  }

  this.print = () => {
    return this.heap;
  }
};
