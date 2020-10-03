// noprotect
function heronianTriangle(n) {
  function gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b)
  }

  function heronianArea(a, b, c) {
    const s = (a + b + c) / 2;
    return (s * (s - a) * (s - b) * (s - c))**0.5;
  }

  function isHeronian(area) {
    return area % 1 == 0 && area > 0;
  }

  function trianglePerimeter(a, b, c) {
    return a + b + c;
  }

  const triangles = [];
  for (let sideC = 1; sideC <= 200; sideC++) {
    for (let sideB = 1; sideB <= sideC; sideB++) {
      for (let sideA = 1; sideA <= sideB; sideA++) {
        if (gcd(gcd(sideA, sideB), sideC) == 1) {
          const area = heronianArea(sideA, sideB, sideC);
          if (isHeronian(area)) {
            triangles.push([[sideA, sideB, sideC], area, trianglePerimeter(sideA, sideB, sideC)]);
          }
        }
      }
    }
  }
  const result = triangles.sort((t1, t2) => t1[0][2] - t2[0][2])
                          .sort((t1, t2) => t1[2] - t2[2])
                          .sort((t1, t2) => t1[1] - t2[1]);
  return result.slice(0, n).map(triangle => triangle[0])

}
