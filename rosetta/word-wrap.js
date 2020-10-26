function wrap(text, limit) {
  // https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap#Minimum_number_of_lines
  const spaceWidth = 1;
  const words = text.replace(/\n/g, ' ').split(' ');
  let spaceLeft = limit;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if ((word.length + spaceWidth) > spaceLeft) {
      words[i - 1] += '\n';
      spaceLeft = limit - word.length;
    } else {
      spaceLeft = spaceLeft - (word.length + spaceWidth);
    }
  }

  return words.join(' ');
}
