const assert = require("chai").assert;
const tail = require("../tail");


describe("#tail", () => {
  it("should return ['there', 'guys'] for ['Hi', 'there', 'guys']", () => {
    assert.deepEqual(tail(["Hi", "there", "guys"]), ["there", "guys"]);
  });
});
