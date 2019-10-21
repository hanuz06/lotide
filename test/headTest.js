const head = require('../head');
const assert = require('chai').assert;

//const assertEqual = require('../assertEqual');

// // TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head([6]), 6);
// assertEqual(head([]), 6);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5); 
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]), "Hello" ', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

});