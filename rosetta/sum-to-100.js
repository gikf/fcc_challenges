function sumTo100(n) {
    function combinate(s, curSum, target, curCombination) {
        if (s.length == 0) {
            if (curSum == target) {
                result.push(curCombination);
            }
            return;
        }

        for (let i = 0; i < s.length; i++) {
            const left = s.slice(i + 1)
            const num = parseInt(s.slice(0, i + 1));
            combinate(left, curSum + num, target, curCombination + (curCombination ? '+' + num : num))
            combinate(left, curSum - num, target, curCombination + '-' + num)
        }
    }

    const result = [];
    combinate('123456789', 0, n, '');
    return result;
}