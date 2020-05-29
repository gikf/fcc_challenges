function accumulator(sum) {
  return function (x) {
    return sum += x;
  }
}

let x = accumulator(1);
x(5)
accumulator(3)
console.log(x(2.3))
console.log(x(5))

let y = accumulator(3);
console.log(y(-4))
console.log(y(1.5))
console.log(y(5))