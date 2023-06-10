const replicatedEachFunction = require ('./each.js');

function squareOfNumbers(number) {
  const squared = number*number;
  console.log(squared);
};

const items = [1, 2, 3, 4, 5, 5];
replicatedEachFunction(items,squareOfNumbers);
