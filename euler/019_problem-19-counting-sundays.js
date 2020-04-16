function countingSundays(firstYear, lastYear) {
  function isLeapYear(year) {
    if (year % 4 != 0) {
      return false;
    } else if (year % 100 != 0) {
      return true;
    } else if (year % 400 != 0) {
      return false;
    } else {
      return true;
    }
  }
  let month_days = {1: 31,
                    3: 31,
                    4: 30,
                    5: 31,
                    6: 30,
                    7: 31,
                    8: 31,
                    9: 30,
                    10: 31,
                    11: 30,
                    12: 31};

  let sum_days = 0;
  let sunday_counter = 0;
  for (let cur_year = 1900; cur_year <= lastYear; cur_year++) {
    month_days[2] = isLeapYear(cur_year) ? 29 : 28;
    for (let month = 1; month <= 12; month++) {
      if ((sum_days + 1) % 7 == 0 && cur_year >= firstYear) {
        sunday_counter += 1;
      }
      sum_days += month_days[month];
    }
  }
  return sunday_counter;
}

//console.log(countingSundays(1943, 1946));
console.log(countingSundays(1995, 2000));
