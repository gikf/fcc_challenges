function crossProduct(a, b) {
    if (a === undefined
        || b === undefined 
        || a.length != b.length) {
        return null;
    }
    return [
        a[1] * b[2] - b[1] * a[2],
        -(a[0] * b[2] - b[0] * a[2]),
        a[0] * b[1] - b[0] * a[1]
    ]
}

