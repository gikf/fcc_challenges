function solve(input) {
    function getPairs(statesLeft, pair) {
        if (pair.length == 2) {
            pairs.push(pair);
            return;
        } else if (statesLeft.length == 0) {
            return;
        }
        const newStates = statesLeft.slice(1);
        const curState = statesLeft[0];
        getPairs(newStates, pair.concat([curState]));
        getPairs(newStates, pair);
    }

    function joinedPairs(pair) {
        const [pairA, pairB] = pair;
        return [pairA[0], pairB[0], (pairA[1] + pairB[1]).split('').sort().join('')];
    }

    const states = input.map(state => [state, state.toLowerCase().split('').sort().join('').trim()])
    const pairs = [];
    getPairs(states, []);

    const joined = pairs.filter((pair) => pair[0][0] != pair[1][0]).map(joinedPairs);
    const results = []
    const seen = new Set();
    for (let i = 0; i < joined.length - 1; i++) {
        const curPair = [joined[i][0], joined[i][1]].sort()
        for (let j = i + 1; j < joined.length; j++) {
            const nextPair = [joined[j][0], joined[j][1]].sort();
            if (joined[i][2] != joined[j][2]) {
                continue;
            }

            const curCombination = [...curPair, ...nextPair].join('')
            const reversedCombination = [...nextPair, ...curPair].join('')
            if (seen.has(curCombination) || seen.has(reversedCombination)) {
               continue;
            }
            if (curPair[0] != nextPair[0]
            && curPair[0] != nextPair[1]
            && curPair[1] != nextPair[1]
            && curPair[1] != nextPair[0]) {
                seen.add(curCombination)
                seen.add(reversedCombination)
                results.push({
                    'from': [...curPair],
                    'to': [...nextPair]
                })
            }
        }
    }
    return results
}
