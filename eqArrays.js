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

module.exports = eqArrays;

