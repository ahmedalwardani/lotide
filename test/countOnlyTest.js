const countOnlyTest = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
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

  const firstNamesObject = { "Jason": true, "Karima": true, "Fang": true };

  it("should return an object showing the number of times 'fang' and 'jason' appear", () => {
    assert.deepEqual(countOnlyTest(firstNames, firstNamesObject), { Fang: 2, Jason: 1 });
  });
});