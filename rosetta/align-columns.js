const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText(input, justification) {
  function getPadding(length) {
    return new Array(length + 1).join(' ');
  }

  function alignLeft(word, length) {
    return word + getPadding(length - word.length);
  }

  function alignRight(word, length) {
    return getPadding(length - word.length) + word
  }

  function alignCenter(word, length) {
    const paddingLength = length - word.length;
    let leftLength = 0;
    let rightLength = 0;
    if (paddingLength % 2 == 0) {
      leftLength = paddingLength / 2;
      rightLength = paddingLength / 2;
    } else {
      leftLength = Math.floor(paddingLength / 2);
      rightLength = leftLength + 1;
    }
    return getPadding(leftLength) + word + getPadding(rightLength);
  }

  function align(word, length, justification) {
    const aligns = {
      'left': alignLeft,
      'right': alignRight,
      'center': alignCenter
    }
    return aligns[justification](word, length);
  }

  const lines = [];
  for (let i = 0; i < input.length; i++) {
    let line = input[i]
    lines.push(line.split('$'))
  }

  const wordLengths = lines.map(
    (line) => line.map(
      (elem) => elem.length
    )
  )
  const lineLengths = lines.map((line) => line.length);
  const columnLengths = [];
  for (let column = 0; column < Math.max(...lineLengths); column++) {
    let maxColumnLength = 0
    for (let i = 0; i < wordLengths.length; i++) {
      if (wordLengths[i].length < column) {
        continue;
      }
      const curColumnLength = wordLengths[i][column];
      if (curColumnLength > maxColumnLength) {
        maxColumnLength = curColumnLength;
      }
    }
    columnLengths.push(maxColumnLength)
  }

  for (let line = 0; line < lines.length; line++) {
    for (let column = 0; column < lines[line].length; column++) {
      const columnLength = columnLengths[column];
      const wordLength = wordLengths[line][column];
      const word = lines[line][column];
      if (wordLength == 0) {
        continue;
      }
      if (wordLength != columnLength) {
        lines[line][column] = align(word, columnLength, justification);
      }
    }
  }

  const alignedLines = lines.map((line) => line.join(' ')).join('\n');
  return alignedLines;
}
