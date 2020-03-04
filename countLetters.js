const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌❌❌Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

console.log(assertEqual(countLetters("aaabbbcc").c, 3));