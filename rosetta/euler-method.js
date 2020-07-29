function eulersMethod(x1, y1, x2, h) {
  const k = 0.07;
  const tr = 20;
  const start = x1;
  const end = x2;

  let x = start;
  let y = y1;
  while ((x < end && start < end) || (x > end && start > end)) {
    y = y + h * (-k * (y - tr));
    x = x + h;
  }
  return y;  
}
