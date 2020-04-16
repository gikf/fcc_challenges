function triPentaHexa(n) {
  // Good luck!
  // get next triangle larger than num
  function get_next_triangle(num) {
    while (!is_triangle(++num)) {
    }
    return num;
  }

  // nth triangle
  function get_nth_triangle(num) {
    return num*(num + 1) / 2;
  }

  // 
  function get_n_from_triangle(num) {
    return (Math.sqrt(8*num + 1) - 1) / 2;
  }

  // is triangle
  function is_triangle(num) {
    return (Math.sqrt(8*num + 1) - 1) % 2 == 0;
  }

  // is pentagonal
  function is_pentagonal(num) {
    return (Math.sqrt(24*num + 1) + 1) % 6 == 0;
  }

  // is hexagonal
  function is_hexagonal(num) {
    return (Math.sqrt(8*num + 1) + 1) % 4 == 0;
  }

  // base values
  let cur_tri_val = get_next_triangle(n);
  let cur_tri_n = get_n_from_triangle(cur_tri_val);

  while (!is_pentagonal(cur_tri_val) || !is_hexagonal(cur_tri_val)) {
    cur_tri_n++;
    cur_tri_val = get_nth_triangle(cur_tri_n);
  }

  return cur_tri_val;
}

triPentaHexa(40756);
