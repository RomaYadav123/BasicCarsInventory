/*The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
*/

const inventory = require('./inventoryData.js');

const getOlderCars = (inventory) => {
  const oldCars = [];
    for(let i=0; i<inventory.length; i++) {
      if(inventory[i].car_year < 2000) {
        const allCarYears = inventory[i].car_year;
        oldCars.push(allCarYears);
      }
    }
  return oldCars;
}

const myOldCars = getOlderCars(inventory);
console.log(myOldCars.length);