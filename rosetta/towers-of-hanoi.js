function towerOfHanoi(n, a, b, c) {
  // https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_implementation
  function move(n, source, target, auxiliary) {
    if (n > 0) {
      move(n - 1, source, auxiliary, target);
      
      target[0].push(source[0].pop())
      moves.push([source[1], target[1]]);

      move(n - 1, auxiliary, target, source);
    }
  }

  const A = [[], a];
  for (let i = n; i > 0; i--) {
    A[0].push(i)
  }
  const B = [[], b];
  const C = [[], c];

  const moves = [];
  move(n, A, B, C);

  return moves;
}
