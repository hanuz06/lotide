const tail = require('../tail');
const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];

const result = tail(words); // no need to capture the return value since we are not checking it

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");