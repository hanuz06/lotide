const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const head = arr => arr[0];


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 6);
assertEqual(head([]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
