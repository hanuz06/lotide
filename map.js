const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 3, 5, 2, 45, 87, 43];
const plural = ['map', 'cone', 'book', 'table'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

//const results  = map(words, word => word[0]);
//const results  = map(numbers, num => num * num);
const results = map(plural, item => item + "s");

//assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
//assertArraysEqual(results1, [1, 9, 25, 4, 2025, 7569, 1849])
assertArraysEqual(results, ['maps', 'cones', 'books', 'tables']);