function cyclicalFigurateNums() {
  function is_triangle(num) {
    return ((8*num + 1)**0.5 - 1) % 2 == 0
  }

  function is_square(num) {
    return (num**0.5) == parseInt(num**0.5)
  }

  function is_pentagonal(num) {
    return ((24*num + 1)**0.5 + 1) % 6 == 0
  }

  function is_hexagonal(num) {
    return ((8*num + 1)**0.5 + 1) % 4 == 0
  }

  function is_heptagonal(num) {
    return ((40*num + 9)**0.5 + 3) % 10 == 0
  }

  function is_octagonal(num) {
    return ((3*num + 1)**0.5 + 1) % 3 == 0
  }

  function fill_numbers() {
    for (let i = 1000; i <= 9999; i++) {
      if (is_triangle(i)) {
        tri.push(i);
        non_oct.push(i);
      }
      if (is_square(i)) {
        sq.push(i);
        non_oct.push(i);
      }
      if (is_pentagonal(i)) {
        pen.push(i);
        non_oct.push(i);
      }
      if (is_hexagonal(i)) {
        hex.push(i);
        non_oct.push(i);
      }
      if (is_heptagonal(i)) {
        hep.push(i);
        non_oct.push(i);
      }
      if (is_octagonal(i)) {
        oct.push(i);
      }
    }
  }

  function get_pot_cyclic(num) {
    const results = [];
    const search_beginning = num % 100;
    for (let i = 0; i < non_oct.length; i++) {
      if (Math.floor(non_oct[i] / 100) == search_beginning) {
        results.push(non_oct[i]);
      }
    }
    return results;
  }

  function check_chain(chain) {
    let types_count = {"triangle" : [0, []],
                       "square": [0, []],
                       "pentagonal": [0, []],
                       "hexagonal": [0, []],
                       "heptagonal": [0, []],
                       "octagonal": [0, []]};
    for (let i = 0; i < chain.length; i++) {
      if (tri.indexOf(chain[i]) != -1) {
        types_count['triangle'][0] += 1;
        types_count['triangle'][1].push(chain[i]);
      }
      if (sq.indexOf(chain[i]) != -1) {
        types_count['square'][0] += 1;
        types_count['square'][1].push(chain[i]);
      }
      if (pen.indexOf(chain[i]) != -1) {
        types_count['pentagonal'][0] += 1;
        types_count['pentagonal'][1].push(chain[i]);
      }
      if (hex.indexOf(chain[i]) != -1) {
        types_count['hexagonal'][0] += 1;
        types_count['hexagonal'][1].push(chain[i]);
      }
      if (hep.indexOf(chain[i]) != -1) {
        types_count['heptagonal'][0] += 1;
        types_count['heptagonal'][1].push(chain[i]);
      }
      if (oct.indexOf(chain[i]) != -1) {
        types_count['octagonal'][0] += 1;
        types_count['octagonal'][1].push(chain[i]);
      }
    }
    const keys = Object.keys(types_count);

    for (let i = 0; i < keys.length - 1; i++) {
      // check if one of the numbers type is missing
      if (types_count[keys[i]][0] == 0) {
        return false;
      }

      // check if number type with one occurence doesn't have the same number as another number type with one occurence 
      for (let j = i + 1; j < keys.length; j++) {
        if (types_count[keys[i]][0] == 1 && types_count[keys[j]][0] == 1) {
          if (types_count[keys[i]][1][0] == types_count[keys[j]][1][0]) {
            return false;
          }
        }
      }
    }
    // 
    return true;
  }

  function get_chains(chain) {
    if (chain.length == 6) {
      let result = check_chain(chain)
      if (result) {
        if (Math.floor(chain[0] / 100) == chain[5] % 100) {
          chained.push(chain);
        }
      }
      return chain;
    }
    let cur_chain = chain;
    let potential_cycl = get_pot_cyclic(cur_chain[cur_chain.length - 1]);
    for (let j = 0; j < potential_cycl.length; j++) {
      if (cur_chain.indexOf(potential_cycl[j]) == - 1) {
        //console.log([...cur_chain, potential_cycl[j]]);
        get_chains([...cur_chain, potential_cycl[j]])
      }
    }
  }

  const tri = [];
  const sq = [];
  const pen = [];
  const hex = [];
  const hep = [];
  const oct = [];
  const non_oct = [];
  const chained = [];
  fill_numbers();

  for (let i = 0; i < oct.length; i++) {
    let cur_oct = oct[i];
    get_chains([cur_oct]);
  }

  let sum = 0
  for (let i = 0; i < chained[0].length; i++) {
    sum += chained[0][i];
  }
  return sum;
}

cyclicalFigurateNums();
