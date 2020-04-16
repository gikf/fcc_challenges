function intRightTriangles(n) {
  function perimeter(a, b, c) {
    return a + b + c;
  }

  let most_triangles_count = 0;
  let most_triangles_p = 0;
  let p_limit = n;
  
  for (let p = 1; p <= p_limit; p++) {
    let a = 1;
    let b = 2;
    let cur_right_count = 0;
    for (a; a + b <= p; a++) {
      for (b = a + 1; a + b <= p; b++) {
        let c = (a**2 + b**2)**0.5;
        if (perimeter(a, b, c) > p) {
          break;
        }
        if (a < b < c && perimeter(a, b, c) == p) {
          cur_right_count++;
        }
      }
    }

    if (cur_right_count > most_triangles_count) {
      most_triangles_count = cur_right_count;
      most_triangles_p = p;
    }
  }
  return most_triangles_p;
}

intRightTriangles(120);