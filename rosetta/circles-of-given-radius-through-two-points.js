function getCircles(...args) {
  function diameterTooSmall(r, x1, x2, y1, y2) {
    return 4 * r**2 < (x2 - x1)**2 + (y2 - y1)**2
  }

  function oneSolution(r, x1, x2, y1, y2) {
    return 4 * r**2 == (x2 - x1)**2 + (y2 - y1)**2
  }

  const [p1, p2, r] = args;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  if (r == 0) {
    return 'Radius Zero';
  }
  if (x1 == x2 && y1 == y2) {
    return 'Coincident point. Infinite solutions'
  }

  if (diameterTooSmall(r, x1, x2, y1, y2)) {
    return 'No intersection. Points further apart than circle diameter';
  }

  if (oneSolution(r, x1, x2, y1, y2)) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
  }
  
  const q = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
  const x3 = (x1 + x2) / 2;
  const y3 = (y1 + y2) / 2;
  const xx = Math.sqrt((r**2 - (q / 2)**2)) * ((y1 - y2) / q);
  const yy = Math.sqrt((r**2 - (q / 2)**2)) * ((x2 - x1) / q);
  const result = [[x3 + xx, y3 + yy], [x3 - xx, y3 - yy]];

  return result.map((point) => point.map((coord) => Math.round(coord * 10**4) / 10**4));
}
