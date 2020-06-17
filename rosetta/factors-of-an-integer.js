function factors(num) {
  const facts = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      facts.push(i);
    }
  }
  return facts;
}
