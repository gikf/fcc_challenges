function findXmasSunday(start, end) {
  const years = [];
  const december = 11;
  const sunday = 0;
  for (let year = start; year <= end; year++) {
    const date = new Date(Date.UTC(year, december, 25));
    if (date.getUTCDay() == sunday) {
      years.push(year)
    }
  }
  return years;
}
