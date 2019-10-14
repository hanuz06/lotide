const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Brazil", "Brazil");
assertEqual(1, 1);
assertEqual(14, 22);