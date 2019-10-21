// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
const _ = require('../index');

// TEST CODE
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
_.assertEqual(_.eqArrays([1, '2', 3], [1, 2, 3]), false);