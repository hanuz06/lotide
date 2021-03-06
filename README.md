# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Andrey Li as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hanuz06/lotide`

**Require it:**

`const _ = require('@hanuz06/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual(arr1, arr2))`: Compares 2 arrays for whether they are identical or not.
* `function2(assertEqual(actual, expected))`: Takes 2 parameters, actual and expected values, and compares for whether actual value equals expected value.
* `function3(assertObjectsEqual())`: Takes 2 object parameters, actual and expected values, and compares for whether actual value equals expected value.
* `function4(countLetters(str))`: Takes a string and counts the number of each letters. An object is returned.
* `function5(countOnly(allItems, itemsToCount))`: Takes an array to lookthrough and an object an object specifying what to count. An object is returned.
* `function6(eqArrays(arr1, arr2))`: Takes 2 arrays and returns True if they are strictly identical, otherwise returns False.
* `function7(eqObjects(object1, object2))`: Takes 2 objects and returns True if both objects have identical keys with identical values, otherwise returns False.
* `function8(findKey(obj, callback))`: Takes an object and callback function to work on that object. Returned value: a string or undefined.
* `function9(findKeyByValue(object, keySentence))`: Takes an object and an object key, and finds a value of the object key. Returned value: a string or undefined.
* `function10(flatten(array))`: Takes a nested array and retuns a single level array.
* `function11(head(array))`: Takes an array and returns the 1st item.
* `function12(letterPositions(string))`: Takes a string sentence and returns an object of letters
* `function13(map(array, callback))`: Takes an array and a callback function to process that array, and returns a new array.
* `function14(middle(array))`: Takes an array and an array of middle item(s). 
* `function15(tail(array))`: Takes an array, removes the 1st item, and returns the rest.
* `function16(takeUntil(array, callback))`: Takes an array and a callback function to process that array, and returns a new array.
* `function17(without(array, itemsToRemove))`: Takes 2 arrays. The 1st array is the array we remove items from, and the 2nd array contains items that needs to be removed in the 1st array. A new array is returned. 