function pythagoreanMeans(rangeArr) {
  function arithmeticMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  function geometricMean(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {
      prod *= arr[i];
    }
    return prod ** (1 / arr.length);
  }

  function harmonicMean(arr) {
    let harmonicSum = 0;
    for (let i = 0; i < arr.length; i++) {
      harmonicSum += 1 / arr[i];
    }
    return arr.length / harmonicSum;
  }

const arithmetic = arithmeticMean(rangeArr);
const geometric = geometricMean(rangeArr);
const harmonic = harmonicMean(rangeArr);

const test = arithmetic >= geometric && geometric >= harmonic ? 'yes' : 'no';

return {
          values:{
            Arithmetic: arithmetic,
            Geometric: geometric,
            Harmonic: harmonic
          },
          test: `is A >= G >= H ? ${test}`
        }
}
