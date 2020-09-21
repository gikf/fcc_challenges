const Point = function(x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function() {
  return this.x;
};
Point.prototype.getY = function() {
  return this.y;
};

function getClosestPair(pointsArr) {
  function getDistance(point1, point2) {
    return ((point1.x - point2.x)**2 + (point1.y - point2.y)**2)**0.5
  }
  if (pointsArr.length < 2) {
    return {
      distance: 'infinity',
      pair: [{x: 0, y: 0}, {x: 0, y: 0}]
    }
  }

  let minDistance = getDistance(pointsArr[0], pointsArr[1]);
  let minPoints = [pointsArr[0], pointsArr[1]]
  for (let i = 0; i < pointsArr.length - 1; i++) {
    for (let j = i + 1; j < pointsArr.length; j++) {
      const curDistance = getDistance(pointsArr[i], pointsArr[j]);
      if (minDistance > curDistance) {
        minDistance = curDistance;
        minPoints = [pointsArr[i], pointsArr[j]];
      }
    }
  }

  minPoints.sort((a, b) => a.y - b.y)

  return {
    distance: minDistance,
    pair: minPoints
  };
}
