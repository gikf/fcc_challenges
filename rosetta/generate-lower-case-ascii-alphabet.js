function lascii(cFrom, cTo) {
  const result = [cFrom];
  const start = cFrom.charCodeAt(0);
  const end = cTo.charCodeAt(0);

  for (let i = start + 1; i < end; i++) {
    result.push(String.fromCharCode(i));
  }
  result.push(cTo);
  return result;
}
