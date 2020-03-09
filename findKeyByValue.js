const assertEqual = require("./assertEqual");

const findKeyByValue = function(givenObject, givenValue) {
  let result;
  for (const key in givenObject) {
    if (givenObject.hasOwnProperty(key)) {
      if (givenObject[key] === givenValue) {
        result = key;
      }
    }
  }
  return result;
};
  
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;