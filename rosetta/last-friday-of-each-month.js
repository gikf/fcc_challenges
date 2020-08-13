function lastFriday(year, month) {
  const monthLength = new Date(year, month, 0).getDate();
  const friday = 5;
  for (let i = monthLength; i > 0; i--) {
    if (new Date(Date.UTC(year, month - 1, i)).getUTCDay() === friday) {
      return i;
    }
  }
}
