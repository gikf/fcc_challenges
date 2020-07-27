function operation(op, arr1, arr2) {
  function matrix_action(action, result) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[0].length; j++) {
        result[i][j] = action(arr1[i][j], arr2[i][j]);
      }
    }
  }
  function scalar_action(action, result) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[0].length; j++) {
        result[i][j] = action(arr1[i][j], arr2)
      }
    }
  }
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push([]);
    for (let j = 0; j < arr1[0].length; j++) {
      result[i].push(0);
    }
  }

  const actions = {
    'add': (a, b) => a + b,
    'sub': (a, b) => a - b,
    'mult': (a, b) => a * b,
    'div': (a, b) => a / b,
    'exp': (a, b) => a**b,
  }

  const [operation, action] = op.split('_');

  if (operation == 's') {
    scalar_action(actions[action], result)
  } else if (operation == 'm') {
    matrix_action(actions[action], result)
  }

  return result;
}
