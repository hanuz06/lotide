const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😜  Assertion Passed: ${actual} === ${expected}`) : console.log(`🤨  Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (obj, keySentence) => {
  //let objKeys = Object.keys(obj);
  let result = '';

  for (let keys in obj) {
    
    if (obj[keys] === keySentence) {
      result = keys;
      break;
    } else {
      result = undefined;
    }
  }
  //console.log(result);
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// findKeyByValue(bestTVShowsByGenre, "The Wire")
// findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")
// findKeyByValue(bestTVShowsByGenre, "The Expanse")
// findKeyByValue(bestTVShowsByGenre, "That '70s Show")

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);