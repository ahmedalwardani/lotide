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
  
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;