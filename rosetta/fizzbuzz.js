function fizzBuzz() {
  const ints = [];
  for (let i = 1; i <= 100; i++) {
    let fb = '';
    if (i % 3 == 0) {
      fb += 'Fizz';
    }
    if (i % 5 == 0) {
      fb += 'Buzz'
    }

    ints.push(fb ? fb : i);
  }
  return ints;
}
