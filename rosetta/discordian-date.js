function discordianDate(date) {
  function isLeap(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      return true;
    }
    return false;
  }

  function getOrdinal(seasonDay) {
    const lastDigit = seasonDay % 10;
    if ((seasonDay < 10 || seasonDay > 20) && (lastDigit >=1 && lastDigit <= 3)) {
      if (lastDigit == 1) {
        return 'st';
      } else if (lastDigit == 2) {
        return 'nd';
      } else if (lastDigit == 3) {
        return 'rd';
      }
    }
    return 'th';
  }

  function getDayNumber(date) {
    const curDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const firstYearDay = Date.UTC(date.getFullYear(), 0, 0);
    return (curDate - firstYearDay) / 24 / 60 / 60 / 1000;
  }

  function getHoliday(dayNumber, isLeapYear, season, seasonDay) {
    if (dayNumber != 60 || (dayNumber == 60 && isLeapYear)) {
      return holidays[`${seasons[season]} ${seasonDay}`];
    }
    return undefined;
  }

  const holidays = {
    'Chaos 5': 'Mungday',
    'Chaos 50': 'Chaoflux',
    'Chaos 60': "St. Tib's Day",
    'Discord 5': 'Mojoday',
    'Discord 50': 'Discoflux',
    'Confusion 5': 'Syaday',
    'Confusion 50': 'Confuflux',
    'Bureaucracy 5': 'Zaraday',
    'Bureaucracy 50': 'Bureflux',
    'The Aftermath 5': 'Maladay',
    'The Aftermath 50': 'Afflux'
  }
  const seasons = {
    0: 'Chaos',
    1: 'Discord',
    2: 'Confusion',
    3: 'Bureaucracy',
    4: 'The Aftermath'
  }
  const days = {
    1: 'Sweetmorn',
    2: 'Boomtime',
    3: 'Pungenday',
    4: 'Prickle-Prickle',
    0: 'Setting Orange'
  }
  const yearAdjust = 1166;
  const year = date.getFullYear();
  let isLeapYear = isLeap(year);
  const discordYear = year + yearAdjust;
  let dayNumber = getDayNumber(date);
  const season = Math.floor((dayNumber - 1) / 73);

  if (isLeapYear && dayNumber > 60) {
    dayNumber -= 1;
    isLeapYear = false;
  }
  
  const day = days[dayNumber % 5];
  const seasonDay = dayNumber - season * 73;
  const dayOrdinal = getOrdinal(seasonDay);
  const holiday = getHoliday(dayNumber, isLeapYear, season, seasonDay);
  const holidayDay = holiday ? `. Celebrate ${holiday}!` : '';

  return `${day}, the ${seasonDay}${dayOrdinal} day of ${seasons[season]} in the YOLD ${discordYear}${holidayDay}`
}

