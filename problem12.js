// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.



const inventory = require('./inventoryOfCars.js');

const selectedCarsMake = (inventory) => {
  
  return inventory.filter((item)=> item['car_make'] === "BMW" || item['car_make'] === "Audi");
}

const onlyAudiAndBmw = selectedCarsMake(inventory);
console.log(JSON.stringify(onlyAudiAndBmw));