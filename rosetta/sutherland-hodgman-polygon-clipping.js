function clip(subjectPolygon, clipPolygon) {
    function sub(pointA, pointB) {
        return [pointA[0] - pointB[0], pointA[1] - pointB[1]];
    }

    function intersection(pointA, pointB, edge) {
        const de = sub(edge[0], edge[1]);
        const dp = sub(pointA, pointB);
        const n1 = edge[0][0] * edge[1][1] - edge[0][1] * edge[1][0];
        const n2 = pointA[0] * pointB[1] - pointA[1] * pointB[0];
        const n3 = 1 / (de[0] * dp[1] - de[1] * dp[0]);
        return [
            ((n1 * dp[0] - n2 * de[0]) * n3),
            ((n1 * dp[1] - n2 * de[1]) * n3)
        ];
    }

    function isIn(point, edge) {
        return (
            (edge[1][0] - edge[0][0]) * (point[1] - edge[0][1])
            > (edge[1][1] - edge[0][1]) * (point[0] - edge[0][0])
        );
    }

    let output = [...subjectPolygon];
    let edge = [clipPolygon[clipPolygon.length - 1], ];

    for (let i = 0; i < clipPolygon.length; i++) {
        const input = [...output];
        edge[1] = clipPolygon[i];
        output = [];
        for (let j = 0; j < input.length; j++) {
            const curPoint = input[j];
            const prevPoint = input[(j + input.length - 1) % input.length];

            if (isIn(curPoint, edge)) {
                if (!isIn(prevPoint, edge)) {
                    output.push(intersection(prevPoint, curPoint, edge));
                }
                output.push(curPoint);
            } else if (isIn(prevPoint, edge)) {
                output.push(intersection(prevPoint, curPoint, edge));
            }
        }
        edge[0] = edge[1];
    }
    return output.map(point => point.map(val =>Math.round(val * 1000) / 1000));
}
