function setConsolidation(sets) {
    const consolidated = [];
    const elementsToConsolidated = {};

    while (sets.length > 0) {
        const curSet = sets.pop();
        const newSet = new Set();
        const toConsolidate = -1;
        for (let i = 0; i < curSet.length; i++) {
            const element = curSet[i];
            if (elementsToConsolidated.hasOwnProperty(element)) {
                if (toConsolidate == -1) {
                    toConsolidate = elementsToConsolidated[element];
                }
            }
            else {
                newSet.add(element);
            }
        }

        let consolidatedSet = 0;
        const elements = [...newSet];
        if (toConsolidate == -1) {
            consolidated.push(elements.sort());
            consolidatedSet = consolidated.length - 1;
        } else {
            consolidated[toConsolidate] = consolidated[toConsolidate].concat(elements).sort()
            consolidatedSet = toConsolidate;
        }

        for (let i = 0; i < elements.length; i++) {
            if (!elementsToConsolidated.hasOwnProperty(elements[i]))
            elementsToConsolidated[elements[i]] = consolidatedSet;
        }
    }
    return consolidated;
}
