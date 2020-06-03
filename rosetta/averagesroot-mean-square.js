function rms(arr) {
  let squaredSum = 0;
  for (let i = 0; i < arr.length; i++) {
    squaredSum += arr[i]**2;
  }
  return (squaredSum / arr.length)**0.5
}
