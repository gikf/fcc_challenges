function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      console.log('nope');
      return false;
    }
  }
  console.log("tru");
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
truthCheck([{"single": "double"}, {"single": undefined}], "single");
