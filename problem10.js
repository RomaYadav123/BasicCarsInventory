// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.



const inventory = require('./inventoryOfCars.js');

const separateCarYears = (inventory) => {
  let carYearArray = [];
  inventory.forEach((item) => {
    let inputCarYear = item['car_year'];
    carYearArray.push(inputCarYear);
  });
  return carYearArray;
}

const finalCarYearResult = separateCarYears(inventory);
console.log(finalCarYearResult);