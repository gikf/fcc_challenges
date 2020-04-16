function digitFactorial() {
  function get_fact(num) {
    if (facts[num] > 0) {
      return facts[num];
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }

  function get_sum_fact_digits(num) {
    let sum = 0;
    while (num > 0) {
      sum += get_fact(num % 10);
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let facts = [0];
  for (let i = 1; i < 10; i++) {
    facts.push(get_fact(i));
  }

  var sum = 0;
  var numbers = [];

  for (let i = 3; i <= get_fact(9) * 7; i++) {
    if (i == get_sum_fact_digits(i)) {
      sum += i;
      numbers.push(i);
    }
  }
  return { sum, numbers };
}

digitFactorial();
