function cutRectangle(w, h) {
  // Translation of Python https://rosettacode.org/wiki/Cut_a_rectangle#Python
  function walk(y, x, counter) {
    if (!y || y == h || !x || x == w) {
      return counter + 1;
    }

    const t = y * (w + 1) + x;
    grid[t] = true;
    grid[blen - t] = true;

    if (!grid[t + next[0]]) {
      counter = walk(y + directions[0][0], x + directions[0][1], counter);
    }
    if (!grid[t + next[1]]) {
      counter = walk(y + directions[1][0], x + directions[1][1], counter);
    }
    if (!grid[t + next[2]]) {
      counter = walk(y + directions[2][0], x + directions[2][1], counter);
    }
    if (!grid[t + next[3]]) {
      counter = walk(y + directions[3][0], x + directions[3][1], counter);
    }
    grid[t] = false;
    grid[blen - t] = false;
    return counter;
  }

  
  const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
  if (h & 1) {
    [h, w] = [w, h];
  }
  if (h & 1) {
    return 0;
  }
  if (w == 1) {
    return 1;
  }

  let counter = 0;
  const next = [w + 1, -w - 1, -1, 1];
  const blen = (h + 1) * (w + 1) - 1
  const grid = new Array(blen + 1).fill(false);
  
  const t = Math.floor(h / 2) * (w + 1) + Math.floor(w / 2);
  if (w & 1) {
    grid[t] = true;
    grid[t + 1] = true;
    counter = walk(Math.floor(h / 2), Math.floor(w / 2) - 1, counter);
    const res = counter;
    counter = 0
    counter = walk(Math.floor(h / 2) - 1, Math.floor(w / 2), counter)
    return res + counter * 2
  } else {
    grid[t] = true;

    counter = walk(Math.floor(h / 2), Math.floor(w / 2) - 1, counter);
    if (h == w) {
      return counter * 2;
    }
    counter = walk(Math.floor(h / 2) - 1, Math.floor(w / 2), counter);
    return counter;
  }
}
