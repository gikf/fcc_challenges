function almostEquilateralTriangles() {
  // https://en.wikipedia.org/wiki/Heronian_triangle
  const LIMIT = 10**9;
  let sum = 0;

  let side_a = 1;
  let side_c = 1;
  let perimeter = 0;
  let m = 1;

  while (perimeter < LIMIT) {
    [side_a, side_c] = [4 * side_a - side_c + 2 * m, side_a];
    m = -m;

    sum += perimeter;
    perimeter = 3 * side_a - m

  }

  console.log(sum)
  return sum;
}

almostEquilateralTriangles();
