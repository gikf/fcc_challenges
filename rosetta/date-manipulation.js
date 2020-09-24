function add12Hours(dateString) {
  const isPM = dateString.indexOf('pm') > 0;
  const hoursToAdd = 12;
  const date = new Date(dateString.replace('am', '').replace('pm', ''));

  let multiplier = 1;
  if (isPM) {
    multiplier = 2;
  }
  date.setHours(date.getHours() + multiplier * hoursToAdd);
 
  const timezone = dateString.slice(dateString.length - 3);
  const format = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    hour12: true,
    timeZone: timezone,
  });
  const [
    {value: month},,
    {value: day},,
    {value: year},,
    {value: hour},,
    {value: minute},, 
    {value: dayPeriod}
  ] = format.formatToParts(date);

  return `${month} ${day} ${year} ${hour}:${minute}${dayPeriod.toLowerCase()} ${timezone}`;
}
