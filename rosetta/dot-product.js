function dotProduct(ary1, ary2) {
  let product = 0;

  for (let i = 0; i < ary1.length; i++) {
    product += ary1[i] * ary2[i];
  }
  return product;
}
