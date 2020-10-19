function straddle(message, alphabet) {
    const rows = [0]
    for (let i = 0; i < 10; i++) {
        if (alphabet[0][i] == ' ' && alphabet[0].length != 10) {
            rows.push(i);
            alphabet[0] = alphabet[0].slice(0, i).concat([' ']).concat(alphabet[0].slice(i))
            continue;
        }
        else if (alphabet[0][i] == ' ') {
            rows.push(i);
        }
    }

    const charToNum = {};
    for (let i = 0; i < 3; i++) {
        const row = alphabet[i];
        const rowPreScore = rows[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] != ' ') {
                charToNum[row[j]] = rowPreScore * 10 + j + '';
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        charToNum[i] = charToNum['/'] + '' + i;
    }

    let coded = '';
    for (let i = 0; i < message.length; i++) {
        const curChar = message[i].toUpperCase();
        if (charToNum.hasOwnProperty(curChar)) {
            coded += charToNum[curChar];
        }
    }

    return coded;
}

function unstraddle(message, alphabet) {
    const rows = [0]
    for (let i = 0; i < 10; i++) {
        if (alphabet[0][i] == ' ' && alphabet[0].length != 10) {
            rows.push(i);
            alphabet[0] = alphabet[0].slice(0, i).concat([' ']).concat(alphabet[0].slice(i))
            continue;
        }
        else if (alphabet[0][i] == ' ') {
            rows.push(i);
        }
    }
    const numToChar = {};
    let numPrefix = '';
    for (let i = 0; i < 3; i++) {
        const row = alphabet[i];
        const rowPreScore = rows[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] != ' ') {
                const curNum = rowPreScore * 10 + j + '';
                numToChar[curNum] = row[j].toUpperCase();
                if (row[j] == '/') {
                    numPrefix = curNum;
                }
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        numToChar[numPrefix + '' + i] = i;
    }

    let uncoded = '';
    let curChar = '';
    for (let i = 0; i < message.length; i++) {
        curChar += message[i].toUpperCase();
        if (numToChar.hasOwnProperty(curChar)) {
            const codedNum = numToChar[curChar];
            if (codedNum == '/') {
                continue;
            }
            uncoded += numToChar[curChar];
            curChar = '';
        }
    }
    return uncoded;
}
