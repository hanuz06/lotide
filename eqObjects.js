const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  let result = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? result : result = false;
    }
  } else {
    result = false;
  }
  return result;

};

module.exports = eqArrays;

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let keyW in object1) {

      if (!Array.isArray(object1[keyW])) {
        if (object1[keyW] !== object2[keyW]) {
          result = false;
          break;
        } else {
          result = true;
        }
      } else {
        result = eqArrays(object1[keyW], object2[keyW]);
      }
    }
  }
  return result;
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};

assertEqual(eqObjects(ab, ba), true); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};

assertEqual(eqObjects(cd, dc), true); // => false

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
assertEqual(eqObjects(cd, cd2), false); // => false