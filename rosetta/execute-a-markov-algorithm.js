function markov(rules, test) {
  let running = true;
  let text = test;
  rules = rules.map(rule => rule.split(' -> '));
  while (running) {
    running = false;
    for (let i = 0; i < rules.length; i++) {
      running = false;
      if (text.indexOf(rules[i][0]) >= 0) {
        let replace = rules[i][1];
        if (replace[0] == '.') {
          replace = replace.slice(1);
        }
        text = text.replace(rules[i][0], replace)
        if (rules[i][1][0] != '.') {
          running = true;
        }
        break;
      }
    }
  }
  return text
}
