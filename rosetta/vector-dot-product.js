function dotProduct(...vectors) {
    if (vectors.length === 0) {
        return null;
    }
    for (let i = 1; i < vectors.length; i++) {
        if (vectors[0].length != vectors[i].length) {
            return null;
        }
    }

    let result = 0;
    for (let i = 0; i < vectors[0].length; i++) {
        let multipliedCoor = 1;
        for (let j = 0; j < vectors.length; j++) {
            multipliedCoor *= vectors[j][i];
        }
        result += multipliedCoor;
    }
    return result;
}
