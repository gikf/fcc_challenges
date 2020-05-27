function getFinalOpenedDoors(numDoors) {
  // Good luck!
  const doors = new Array(numDoors);
  doors.fill(false);
  let hop = 1;
  while (hop < numDoors + 1) {
    for (let i = 0; i <= numDoors; i = i + hop) {
      doors[i] = !doors[i];
    }
    hop++;
  }
  let res = doors.map((val, index) => {if (val) { return index}}).filter((val) => val > 0);
  console.log(res);
  return res;
}

getFinalOpenedDoors(100);