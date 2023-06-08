/*The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
*/


const inventory = require('./inventoryData.js');

const carYears = (inventory) => {
        let emptyArray = [];
        for(let i=0; i<inventory.length; i++) {
            let allCarYears = inventory[i].car_year;
            emptyArray.push(allCarYears);
            }
        return emptyArray;
}

const finalYearOfCars = carYears(inventory);
console.log(finalYearOfCars);