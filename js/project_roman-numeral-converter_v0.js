function convertToRoman(num) {
    let pairs = { 900: 'CM',
                  1000: 'M',
                  800: 'DCCC',
                  700: 'DCC',
                  600: 'DC',
                  400: 'CD',
                  500: 'D',
                  90: 'XC',
                  100: 'C',
                  40: 'XL',
                  80: 'LXXX',
                  70: 'LXX',
                  60: 'LX',
                  50: 'L',
                  9: 'IX',
                  10: 'X',
                  8: 'VIII',
                  7: 'VII',
                  6: 'VI',
                  5: 'V',
                  4: 'IV',
                  1: 'I'
    }
    let result = '';
    num = num.toString().split('');
    console.log(num);
    for (let i = num.length; i > 0; i--) {
        let temp = parseInt(num[i-1]);
        let multi = 10**(num.length - i);
        console.log(i - 1 + 'temp: ' + temp);
        console.log('multi ' + multi);
        if (pairs[temp * multi]) {
            num[i - 1] = pairs[temp * multi];
        } else {
            num[i - 1] = pairs[multi].toString().repeat(temp);
        }
        console.log(num[i-1]);
    }
    //if (pairs[] else)
    result = num.join('');
    console.log(result);
    return result;
}

convertToRoman(36);
