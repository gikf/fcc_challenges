function isKaprekar(n, bs) {
  if (n === 1) {
    return true;
  }
  const square = parseInt(n * n).toString(bs);

  for (let i = 1; i < square.length; i++) {
    const start_slice = parseInt(square.slice(0, i), bs);
    const end_slice = parseInt(square.slice(i), bs);
    console.log(n, start_slice, end_slice, square)

    const positive_slices = start_slice > 0 && end_slice > 0;
    if (positive_slices && start_slice + end_slice == n) {
          return true;
    }
  }
  return false;
}
