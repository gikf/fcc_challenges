function kdNN(fpoints, fpoint) {
  function distance(point1, point2) {
    return Math.sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)
  }

  function distanceToFPoint(point) {
    return distance(point, fpoint);
  }

  fpoints = fpoints.map(elem => [elem, distanceToFPoint(elem)]);
  fpoints.sort((elem1, elem2) => elem1[1] - elem2[1])
  return fpoints[0][0];
}
