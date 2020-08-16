function ludic(n) {
  const ludicsMap = [];
  for (let i = 0; i <= n; i++) {
    ludicsMap.push(i);
  }
  const ludics = [1];

  for (let i = 2; i <= n; i++) {
    if (ludicsMap[i]) {
      const curLudic = ludicsMap[i];
      ludics.push(curLudic);
      ludicsMap[i] = false;
      let nth = 0;
      for (let j = i; j <= n; j++) {
        if (ludicsMap[j]) {
          nth++;
        }
        if (nth == curLudic) {
          ludicsMap[j] = false;
          nth = 0;
        }
      }
    }
  }

  return ludics;
}

console.log(ludic(26))