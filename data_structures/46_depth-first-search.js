function dfs(graph, root) {
  const stack = [];
  const visited = new Set();
  const result = [];

  stack.push(root);
  result.push(root);
  
  while (stack.length > 0) {
    const curNode = stack.pop();
    visited.add(curNode);
    for (let i = 0; i < graph[curNode].length; i++) {
      const nextNode = i;
      const isReachable = graph[curNode][i];
      if (!visited.has(nextNode) && isReachable === 1) {
        visited.add(nextNode);
        result.push(nextNode);
        stack.push(nextNode);
      }
    }
  }
  return result;
}
