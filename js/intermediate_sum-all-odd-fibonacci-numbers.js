function sumFibs(num) {
  let fn = [1, 1];
  let fsum = 2;
  for (let i = 2; i < num; i++) {
    fn[i] = fn[i-1] + fn[i-2];
    if (fn[i] > num) {
      break;
    }
    if (fn[i] % 2 == 1) {
      fsum += fn[i];
    }
  }
  return fsum;
}

sumFibs(4); // 1 1 [2] 3
console.log(sumFibs(10));
console.log(sumFibs(3));
console.log(sumFibs(4));
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
