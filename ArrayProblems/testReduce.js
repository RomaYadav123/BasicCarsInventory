const replicatedReduceFunction = require('./reduce.js');

const items = [1, 2, 3, 4, 5, 5];
const addThree = num => num+3;
const finalValue = replicatedReduceFunction(items,addThree,items[0]);
console.log(finalValue);