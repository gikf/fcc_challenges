function Subleq(mem) {
    let result = '';
    let start = 0;
    while (start >= 0) {
        const address1 = mem[start];
        const address2 = mem[start + 1];
        if (mem[start] == -1) {
            continue;
        } else if (mem[start + 1] == -1) {
            result += String.fromCharCode(mem[address1]);
        } else {
            const subtraction = mem[address2] - mem[address1];
            mem[address2] = subtraction;
            if (subtraction <= 0) {
                start = mem[start + 2];
                continue;
            }
        }
        start += 3;
    }
    return result;
}


Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])