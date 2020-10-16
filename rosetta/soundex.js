function soundex(s) {
    const letterToNumber = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2',
        'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3', 'L': '4', 'M': '5',
        'N': '5', 'R': '6'
    }
    const separatorCodeRight = new Set(['A', 'E', 'I', 'O', 'U']);
    const separatorCodeLeft = new Set(['H', 'W']);
    const ignore = new Set(['A', 'E', 'I', 'O', 'U', 'H', 'W', 'Y']);
    let code = s[0];
    const seen = new Set();
    seen.add(s[0].toUpperCase());
    let prevCode = -1;
    for (let i = 0; i < s.length; i++) {
        if (code.length == 4) {
            break;
        }
        const curLetter = s[i].toUpperCase();
        if (ignore.has(curLetter)) {
            prevCode = -1;
            continue;
        }
        const curCode = letterToNumber[curLetter.toUpperCase()];
        let nextCode = -1;
        let nextLetter = null;
        if (i < s.length - 1) {
            nextLetter = s[i + 1].toUpperCase();
            nextCode = letterToNumber[nextLetter];
        }

        let thirdCode = -1;
        let thirdLetter = null;
        if (i < s.length - 2) {
            thirdLetter = s[i + 2].toUpperCase();
            thirdCode = letterToNumber[thirdLetter];
        }

        if (separatorCodeRight.has(nextLetter) && curCode == thirdCode) {
            code += thirdCode
            seen.add(thirdLetter)
        }

        if (separatorCodeLeft.has(nextLetter) && curCode == thirdCode) {
            code += curCode;
            seen.add(curLetter);
            seen.add(thirdLetter);
        }

        if (curCode == prevCode) {
            prevCode = curCode;
            continue;
        }

        if (seen.has(curLetter)) {
            continue;
        }

        if (curCode) {
            code += curCode;
            seen.add(curLetter)
        }
        prevCode = curCode;
    }

    return code.padEnd(4, '0');
}
