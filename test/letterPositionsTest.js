const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("should return [2, 3] when passed 'hello.l'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});