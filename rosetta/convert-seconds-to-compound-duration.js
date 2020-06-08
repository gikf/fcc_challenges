function convertSeconds(sec) {
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  const units = [week, day, hour, minute, 1];
  const suffixes = ['wk', 'd', 'hr', 'min', 'sec'];
  const output_vals = [];

  for (let i = 0; i < units.length; i++) {
    output_vals.push(Math.floor(sec / units[i]))
    sec = sec % units[i];
  }

  let results = [];
  for (let i = 0; i < output_vals.length; i++) {
    if (output_vals[i] > 0) {
      results.push(output_vals[i] + ' ' + suffixes[i])
    }
  }
  return results.join(', ');
}
