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
  console.log(arr1);
  eqArrays(arr1, arr2) ? console.log(`😜  Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🤨  Assertion Failed: ${arr1} !== ${arr2}`);
};

const flatten = arr => {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {    
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else flatArr.push(arr[i]);
  }
  return flatArr;
};

module.exports = flatten;

flatten([1,2,3,[4,5]]);
assertArraysEqual(flatten([1,2,3,[4,5]]),[1,2,3,4,5]);

