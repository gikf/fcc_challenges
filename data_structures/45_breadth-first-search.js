function bfs(graph, root) {
  const nodesLen = {};
  for (let i = 0; i < graph.length; i++) {
    if (i == root) {
      nodesLen[root] = 0;
    } else {
      nodesLen[i] = Infinity;
    }
  }

  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift()
    const nodeDistance = nodesLen[node];
    for (let i = 0; i < graph[node].length; i++) {
      const isConnection = graph[node][i]
      if (isConnection == 1 && nodesLen[i] == Infinity) {
        nodesLen[i] = nodeDistance + 1;
        queue.push(i);
      }
    }
  }
  return nodesLen;
}
