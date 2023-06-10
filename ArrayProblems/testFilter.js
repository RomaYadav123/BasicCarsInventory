const replicatedFilterFunction = require('./filter.js');

const checkForOdd = num => num%2 !== 0;
const items = [1, 2, 3, 4, 5, 5];

const finalValue = replicatedFilterFunction(items,checkForOdd);
console.log(finalValue);
