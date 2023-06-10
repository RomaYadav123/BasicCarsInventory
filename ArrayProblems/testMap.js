const replicateMapFunction = require('./map.js');

const multiplyByTwo = num => num * 2;
const items = [1, 2, 3, 4, 5, 5];

const finalValue = replicateMapFunction(items,multiplyByTwo);
console.log(finalValue);
