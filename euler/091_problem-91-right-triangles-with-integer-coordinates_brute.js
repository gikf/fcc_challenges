function rightTrianglesIntCoords() {
  function isRight(points) {
    // cycling through points to check each one if
    // that's point with the right angle
    for (let i = 0; i < points.length; i++) {
      const A = points[i];
      const B = points[(i + 1) % 3];
      const C = points[(i + 2) % 3];
      const AB = [B[0] - A[0], B[1] - A[1]];
      const AC = [C[0] - A[0], C[1] - A[1]];

      // scalar multiplications of vectors u = AB x v = AC
      // 0 if triangle is right
      if (AB[0] * AC[0] + AB[1] * AC[1] == 0) {
        return true;
      }
    }
    return false;
  }

  const A = [0, 0];
  const LIMIT = 50;
  const allPoints = {};
  let counter = 0;
  for (let x1 = 1; x1 <= LIMIT; x1++) {
    for (let y1 = 0; y1 <= LIMIT; y1++) {
      const B = [x1, y1]
      for (let x2 = 0; x2 <= LIMIT; x2++) {
        for (let y2 = 1; y2 <= LIMIT; y2++) {
          const C = [x2, y2];
          if (B[0] == C[0] && B[1] == C[1]) {
            continue;
          }
          if (isRight([A, B, C])){
            let hash = '00,';
            hash += [B, C].sort((a, b) => a[0] - b[0])
                          .map((x) => x[0].toString()
                                      + '.' 
                                      + x[1].toString())
                          .join(',');
            // points combination not yet in results
            if (!allPoints[hash]){
              allPoints[hash] = true;
              counter++;
            }
          }
        }
      }
    }
  }
  console.log(counter);
  return counter;
}

rightTrianglesIntCoords();
