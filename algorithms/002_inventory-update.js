function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    function sorting(a, b){
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    }

    let result = [...arr1];
    let to_add = [];
    for (let i = 0; i < arr2.length; i++) {
        let cur_item = arr2[i][1];
        let cur_count = arr2[i][0];
        let isInInv = false;
        for (let j = 0; j < result.length; j++) {
            if (cur_item == result[j][1]) {
                result[j][0] += cur_count;
                isInInv = true;
            }
        }
        if (!isInInv) {
            to_add.push([cur_count, cur_item]);
        }
    }
    for (let i = 0; i < to_add.length; i++) {
        result.push(to_add[i]);
    }

    result.sort(sorting);
    console.log(result);
    return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
