const middle = arr => {  
  let middleElem = [];

  if (arr.length <= 2) {
    middleElem = [];
  } else if (arr.length % 2 !== 0) {
    middleElem.push(arr[Math.floor(arr.length / 2)]);
  } else {
    middleElem.push(arr[arr.length / 2 - 1]);
    middleElem.push(arr[arr.length / 2]);
  }
  return middleElem;
};

module.exports = middle;



