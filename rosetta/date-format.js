function getDateFormats() {
  const date = Date.now();
  const format = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'numeric', day: '2-digit', weekday: 'long'});

  const [{value: weekday},,
    {value: month},,
    {value: day},,
    {value: year}] = format.formatToParts(date);
  const [{value: month_long}] = new Intl.DateTimeFormat('en', {month: 'long'}).formatToParts(date);
  
  return [`${year}-${month}-${day}`, `${weekday}, ${month_long} ${day}, ${year}`];
}

console.log(getDateFormats())
