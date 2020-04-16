function checkCashRegister(price, cash, cid) {
  let change = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]];
  let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // Here is your change, ma'am.
  let registercash = 0;
  let rest = cash - price;
  
  for (let i = 0; i < cid.length; i ++) {
    registercash += cid[i][1];
  }

  if (rest == registercash) {
  return { status: "CLOSED",
             change: cid };
  }
  
  if (rest > registercash) {
    return { status: "INSUFFICIENT_FUNDS",
             change: [] };
  }

  // calculate change output
  for (let i = currency.length - 1; i >= 0; i--) {
    while (rest >= currency[i] && cid[i][1] > 0) {
      change[i][1] += currency[i];
      cid[i][1] -= currency[i];
      rest -= currency[i];
      rest = Math.round(rest * 100) / 100;
    }
  }

  if (rest != 0) {
    return { status: "INSUFFICIENT_FUNDS",
             change: [] };
  }

  change = change.filter((item) => (item[1] > 0)).reverse();
  return { status: "OPEN",
           change: change
  };
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])