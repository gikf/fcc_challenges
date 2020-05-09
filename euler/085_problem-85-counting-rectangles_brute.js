function countingRectangles() {
  function numRecs(h, w) {
    return (h * (h + 1) * w * (w + 1)) / 4
  }

  function areaRec(h, w) {
    return h * w;
  }

  function getDiff(num) {
    return Math.abs(num - LIMIT);
  }
  // Good luck!

  let curRec = 9;
  let curH = 2;
  let curW = 2;
  let LIMIT = 2000000;

  let bestDiff = LIMIT;
  let bestArea = 0;
  let bestSize = [0, 0];
  
  // Upper boundary for single side size
  while (curRec < LIMIT) {
    curH++;
    curRec = numRecs(curH, curW);
    let curDiff = getDiff(curRec);
    if (curDiff < bestDiff) {
      bestDiff = curDiff;
      bestArea = areaRec(curH, curW);
      bestSize = [curH, curW];
    }
  }

  for (curW; curW < curH; curW++) {
    for (curH; curH > curW; curH--) {
      curRec = numRecs(curH, curW);
      let curDiff = getDiff(curRec);
      if (curDiff < bestDiff) {
        bestDiff = curDiff;
        bestArea = areaRec(curH, curW);
        bestSize = [curH, curW];
      }

      if (curRec < LIMIT) {
        break;
      }
    }
  }

  console.log(bestDiff, bestArea, bestSize);
  return bestArea;
}

countingRectangles();
