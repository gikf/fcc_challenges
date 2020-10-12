function realSet(set1, set2, operation, values) {
    const rangeComparison = {
        'CLOSED': (a, b, x) => (a <= x && x <= b),
        'BOTH_OPEN': (a, b, x) => (a < x && x < b),
        'LEFT_OPEN': (a, b, x) => (a < x && x <= b),
        'RIGHT_OPEN': (a, b, x) => (a <= x && x < b),
    }
    const rangeTypes = {
        0: 'CLOSED',
        1: 'BOTH_OPEN',
        2: 'LEFT_OPEN',
        3: 'RIGHT_OPEN',
    }
    const operations = {
        'union': union,
        'intersect': intersect,
        'subtract': subtract,
    }

    function isInRange(number, range) {
        const isIn = rangeComparison[rangeTypes[range['rangeType']]];
        return isIn(range['low'], range['high'], number);
    }

    function union(set1, set2, values) {
        return values.map((value) => (
            isInRange(value, set1) 
            || isInRange(value, set2)
        ));
    }

    function intersect(set1, set2, values) {
        return values.map((value) => (
            isInRange(value, set1)
            && isInRange(value, set2)
        ));
    }

    function subtract(set1, set2, values) {
        return values.map((value) => (
            isInRange(value, set1)
            && !isInRange(value, set2)
        ));
    }

    return operations[operation](set1, set2, values);
}
