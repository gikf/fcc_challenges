function divisibleTriangleNumber(n) {
  // Good luck!
  function divisorCount (num) {
    let divisors_no = 0;
    for (let i = 1; i <= num**0.5; i++) {
      if (num % i == 0) {
        if (num / i == i) {
          divisors_no += 1;
        } else {
          divisors_no += 2;
        }
      }
    }
    return divisors_no;
  }

  let cur_triangle = 1;
  let cur_increment = 2;

  while (divisorCount(cur_triangle) < n) {
    cur_triangle += cur_increment;
    cur_increment += 1;
  }

  return cur_triangle;
}

//divisibleTriangleNumber(500);
console.log(divisibleTriangleNumber(5));
