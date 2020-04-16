function numberLetterCounts(limit) {
  let al = {1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            15: 'fifteen',
            18: 'eighteen',
            '10x': 'teen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'hundred', 
            1000: 'thousand'};
  let counts = {};
  let length = 0;
  function countNumber(number) {
    if (counts[number]) {
      return counts[number]
    }

    if (number <= 13 || number == 15 || number == 18) {
      counts[number] = al[number].length;
      return al[number].length;
    } else if (number > 13 && number < 18 || number == 19) {
      let c = al[number % 10].length + al['10x'].length;
      counts[number] = c;
      return c;
    } else if (number < 100) {
      let ones = number % 10;
      let tens = number - ones;

      let c = al[tens].length
      //console.log(number, ones)
      if (ones > 0) {
        c += counts[ones];
      }
      counts[number] = c;
      return c;
    } else if (number < 1000) {
      let tens_ones = number % 100;
      let hundreds = Math.floor(number / 100);

      let c = al[hundreds].length + al[100].length;

      if (tens_ones > 0) {
        c += 'and'.length + counts[tens_ones];
      }
      counts[number] = c;
      return c;
    } else {
      let huns_tens_ones = number % 1000;
      let thousands = Math.floor(number / 1000);

      let c = al[thousands].length + al[1000].length;

      if (huns_tens_ones > 0) {
        c += counts[huns_tens_ones];
      }

      counts[number] = c;
      return c;
    }
  }
  for (let i = 1; i <= limit; i ++) {
    length += countNumber(i);
  }
  return length;
}

console.log(numberLetterCounts(1000));
//console.log(numberLetterCounts(150));
