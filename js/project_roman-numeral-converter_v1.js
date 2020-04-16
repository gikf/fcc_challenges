function convertToRoman(num) {
    let pairs = { 1000: 'M',
                  900: 'CM',
                  800: 'DCCC',
                  700: 'DCC',
                  600: 'DC',
                  400: 'CD',
                  500: 'D',
                  100: 'C',
                  90: 'XC',
                  80: 'LXXX',
                  70: 'LXX',
                  60: 'LX',
                  50: 'L',
                  40: 'XL',
                  10: 'X',
                  9: 'IX',
                  8: 'VIII',
                  7: 'VII',
                  6: 'VI',
                  5: 'V',
                  4: 'IV',
                  1: 'I'
    }
    let result = '';
    let n = Object.keys(pairs).reverse();

    for (let i = 0; i < n.length; i++) {
        while (n[i] <= num) {
            result += pairs[n[i]];
            num -= n[i];
        }
    }
    return result;
}

convertToRoman(36);
