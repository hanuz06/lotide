const eqArrays = (arr1, arr2) => {
  let actual = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] === arr2[i] ? actual : actual = false;
    }
  } else {
    actual = false;
  }
  return actual;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`😜  Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🤨  Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, '2', 3], [1, 2, 3]);