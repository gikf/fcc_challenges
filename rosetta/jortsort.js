function jortsort(array) {
  const array_copy = [...array];

  array_copy.sort((a, b) => a - b)
  return array_copy.map((x) => x.toString()).join('') == array.map((x) => x.toString()).join('');
}
