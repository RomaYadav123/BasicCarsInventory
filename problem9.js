// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory = require('./inventoryOfCars.js');

const sortedCarList = (inventory) => {
  let carModelArray = [];
  inventory.forEach((item) => {
    carModelArray.push(item.car_model);
  });
  return carModelArray.sort();
};

const finalSortedArray = sortedCarList(inventory);

console.log(finalSortedArray);







