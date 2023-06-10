const replicatedFindFunction = require('./find.js');

const checkForEven = num => num % 2 === 0;
const items = [1, 2, 3, 4, 5, 5];

const finalValue = replicatedFindFunction(items,checkForEven);
console.log(finalValue);
