const assertEqual = require("./assertEqual");

const countOnly = function(allItems /*array*/, itemsToCount /*object*/) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { // check if item is wanted in input object (true is truthy)
      if (results[item]) { // check if item is already in object to be returned
        results[item] += 1; // if yes, increment its count
      } else {
        results[item] = 1; // if not, initialize it
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], undefined);



module.exports = countOnly;

