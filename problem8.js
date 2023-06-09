// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//"Last car is a *car make goes here* *car model goes here*"



const inventory = require('./inventoryOfCars.js');

const findMakeAndModelOfCar = (inventory) => {
return inventory[inventory.length-1];
};

const expectedMakeAndModel = findMakeAndModelOfCar(inventory);
console.log(`Last car is a ${expectedMakeAndModel.car_make} ${expectedMakeAndModel.car_model}`);