function numberOfNames(num) {
  // Good luck!
  function partition(number, largest) {
    if (largest == 0 || number < 0) {
      return 0;
    }
    if (number == 0) {
      return 1;
    }

    if (partitions[number][largest]) {
      return partitions[number][largest];
    }
    const curPartition = partition(number, largest - 1) + partition(number - largest, largest)

    partitions[number][largest] = curPartition;
    return curPartition;
  }
  
  const partitions = [];
  for (let i = 0; i <= num; i++) {
    partitions.push([])
  }

  return 1 + partition(num, num - 1);
}
