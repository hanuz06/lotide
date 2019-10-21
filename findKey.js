const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (obj, callback) => {
  let objKeys = Object.keys(obj);
  let result = '';

  for (let key of objKeys) {
    let bool = callback(obj[key]);
    
    if (bool) {
      result = key;
      break;
    } else {
      continue;
    }
  }
  return result ? result : undefined;
};

module.exports = findKey;

let objList = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(objList, x => x.stars === 2),'noma'); // => "noma"
assertEqual(findKey(objList, x => x.stars === 3),'Akaleri'); // => "Akaleri"
assertEqual(findKey(objList, x => x.stars === 6),undefined); // => undefined

