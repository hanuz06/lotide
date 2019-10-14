const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const tail = arr => arr.slice(1);

const words = ["Yo Yo", "Lighthouse", "Labs"];

const result = tail(words); // no need to capture the return value since we are not checking it

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");