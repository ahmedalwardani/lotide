const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }




  // let i = 0;
  // for (const letter of sentence) {
  //   if (results[letter]) {
  //     results[letter].push(i);
  //   } else {
  //     results[letter] = [i];
  //   }
  //   i++;
  // }
  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("Ahmed").e, [3]);

