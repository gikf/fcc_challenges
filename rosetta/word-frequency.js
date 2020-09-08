function wordFrequency(txt, n) {
  if (txt === '') {
    return [];
  }
  
  const wordCounts = {};
  const words = txt.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (!wordCounts.hasOwnProperty(words[i])){
      wordCounts[words[i]] = 0;
    }
    wordCounts[words[i]]++;
  }

  const uniqueWords = Object.entries(wordCounts);
  uniqueWords.sort((a, b) => b[1] - a[1])
  return uniqueWords.slice(0, n)
}
