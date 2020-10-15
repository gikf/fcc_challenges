function stableSort(arr) {
    return arr.sort((elem1, elem2) => (elem1[1] < elem2[1] ? -1 : 1));
}
