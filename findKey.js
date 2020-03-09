const assertEqual = require("./assertEqual");

const findKey = function(givenObject, callBack) {
  let resultKey;
  for (let key in givenObject) {
    if (givenObject.hasOwnProperty(key)) {
      if (callBack(givenObject[key])) {
        resultKey = key;
        break;
      }
    }
  }
  return resultKey;
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3), "Akaleri");

module.exports = findKey;