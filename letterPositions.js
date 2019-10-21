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

const letterPositions = function(sentence) {
  const result = {};

  // logic to update results here
  for (let index in sentence) {
    index = Number(index);

    if (sentence[index] !== ' ') {
      if (result[sentence[index]]) {
        result[sentence[index]].push(index);
      } else {
        result[sentence[index]] = [index];
      }
    }
  }

  console.log(result);
  return result;
};

//letterPositions('house in my house');
assertArraysEqual(letterPositions("hello").e, [1]);
//assertArraysEqual(letterPositions('house in my house').i, [6]);
