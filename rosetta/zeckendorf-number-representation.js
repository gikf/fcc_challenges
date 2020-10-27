function zeckendorf(n) {
    const fibs = [13, 8, 5, 3, 2, 1];
    const nums = [];
    for (let i = 1; i <= n; i++) {
        const num = i;
        const curZeck = new Array(fibs.length).fill(0);

        for (let j = 0; j < fibs.length; j++) {
            if (num >= fibs[j]) {
                curZeck[j] = 1;
                num -= fibs[j];
            }
        }
        while (curZeck[0] == 0) {
            curZeck.shift();
        }
        nums.push(curZeck);

    }
    return nums.map(items => items.join(''))[n - 1];
}
