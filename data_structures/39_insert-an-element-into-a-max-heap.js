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

  this.print = () => {
    return this.heap;
  }
};
