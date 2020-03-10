//use isTrue and isFalse

const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArray", () => {
  it("should return true for [1, 2, 3] [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return false for [1, 2, 3, 4] [1, 2, 3]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });

  it("should return false for [1, 2, 3] [1, 2, [0, 1]]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, [0, 1]]), false);
  });

  it("should return true for [1, 2, [3, 4]] [1, 2, [3, 4]]", () => {
    assert.isTrue(eqArrays([1, 2, [3, 4]], [1, 2, [3, 4]]));
  });
});

