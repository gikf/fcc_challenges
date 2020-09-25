function deepcopy(obj) {
  console.log('copy', obj)
  if ((typeof obj) != 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArray = [];
    for (let i = 0; i < obj.length; i++) {
      newArray.push(deepcopy(obj[i]))
    }
    return newArray;
  } else {
    const newObj = Object.fromEntries(
      Object.entries(obj)
            .map((value) => deepcopy(value))
    );
    return newObj;
  }
}
