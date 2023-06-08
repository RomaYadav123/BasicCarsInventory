/*The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"
*/


const inventory = require('./inventoryData.js');

const infoOfLastCar = (inventory) => {
  const lastCarDetailsIndex = inventory.length-1; 
  const lastCarMake = inventory[lastCarDetailsIndex].car_make;
  const lastCarModel = inventory[lastCarDetailsIndex].car_model;
  return{
    lastCarMake,
    lastCarModel
  }
};

const result = infoOfLastCar(inventory);
console.log(`Last car is a ${result.lastCarMake} ${result.lastCarModel}`);
  
  