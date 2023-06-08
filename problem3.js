/*The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/



const inventory = require('./inventoryData.js');

const arrangedCars = (inventory) => {
    const emptyArray = [];
    for(let i=0; i<inventory.length; i++) {
          let orderedList = inventory[i].car_model;
          emptyArray.push(orderedList);
    }
    return emptyArray;
}

const sortedCarsList = arrangedCars(inventory);
console.log(sortedCarsList.sort());

