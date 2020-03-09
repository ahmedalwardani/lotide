const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

describe("#assertArraysEqualTest", () => {
  it("should return assertion passed (true) when passed [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return assertion failed (false) when passed [1, 'ahmed', 3] and [1, 2, 3]", () => {
    assert.notStrictEqual(assertArraysEqual([1, "ahmed", 3], [1, 2, 3]), true);
  });
});

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, "ahmed", 3], [1, "ahmed", 3]);
// assertArraysEqual([1, 0, 3], [1, "ahmed", 3]);