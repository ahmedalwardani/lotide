const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("findKeyByValue", () => {
  it("should return 'drama' when passed the object bestTVShowsByGenre and the string 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});