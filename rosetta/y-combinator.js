function Y(f) {
  return f(
      (function(x) {
        return x(x);
      })
      (function(y) {
        return f(
          function(x) {
            return y(y)(x);
          });
      })
  );
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
