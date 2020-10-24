function topologicalSort(libs) {
  const items = libs.split('\n').map(item => item.split(' ').filter(item => item != ''));
  const libraries = {};
  const nodes = {};
  for (let i = 0; i < items.length; i++) {
    const curNode = items[i][0];
    libraries[curNode] = []
  }

  for (let i = 0; i < items.length; i++) {
    const curNode = items[i][0];
    libraries[curNode] = items[i].slice(1).filter(node => node != curNode);
    if (!nodes.hasOwnProperty(curNode)) {
      nodes[curNode] = [];
    }
    for (let j = 0; j < items[i].length; j++) {
      const curElem = items[i][j];
      if (!libraries.hasOwnProperty(curElem)) {
        libraries[curElem] = [];
      }
      if (curElem == curNode) {
        continue;
      }
      if (!nodes.hasOwnProperty(curElem)) {
        nodes[curElem] = [];
      }
      nodes[curElem].push(curNode);
    }
  }

  const emptyNodes = Object.keys(libraries).filter(key => libraries[key].length == 0);
  const sortedNodes = [];

  while (emptyNodes.length > 0) {
    const curNode = emptyNodes.pop();
    sortedNodes.push(curNode);
    for (let i = 0; i < nodes[curNode].length; i++) {
      const otherNode = nodes[curNode][i];
      libraries[otherNode] = libraries[otherNode].filter(node => node != curNode);
      if (libraries[otherNode].length == 0) {
        emptyNodes.push(otherNode);
      }
    }
  }

  return sortedNodes;
}

