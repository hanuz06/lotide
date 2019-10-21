const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = str => {
  let word = str.split(' ').join('');
  let result = {};

  for (let letter of word) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }  
  return result;

};

module.exports = countLetters;

let actual = countLetters("ehouuse");

assertEqual(actual['h'], 1);
assertEqual(actual['o'], 1);
assertEqual(actual['u'], 2);
assertEqual(actual['s'], 1);
assertEqual(actual['e'], 1);
