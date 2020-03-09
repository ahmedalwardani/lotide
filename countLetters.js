const countLetters = function(sentence) {
  const reducedSentence = sentence.split(" ").join("");
  const results = {};
  for (const letter of reducedSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
