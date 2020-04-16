function namesScores(arr) {
  // characters to score translate
  function charToScore (char) {
    // 64 as A has score 1
    return char.charCodeAt() - 64;
  }

  // scoring words
  function scoreWordChars (word) {
    let sum = 0;
    if (word.length == 1) {
      //return charToScore(word);
    }
    for (let i = 0; i < word.length; i++) {

      sum += charToScore(word[i]);
    }
    return sum;
  }

  // array preparation
  let array_to_score = [...arr].sort();

  let names_scores = 0;
  for (let i = 0; i < array_to_score.length; i++) {
    names_scores += (i + 1) * scoreWordChars(array_to_score[i]);
  }
  return names_scores;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));
