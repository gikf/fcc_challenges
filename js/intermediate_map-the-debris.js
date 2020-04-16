function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (let i = 0; i < arr.length; i++) {
    let avgAlt = arr[i].avgAlt;
    delete arr[i].avgAlt;
    let orb_per = 2 * Math.PI * Math.sqrt(((earthRadius + avgAlt)**3)/GM);
    arr[i]['orbitalPeriod'] = Math.round(orb_per);

  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));