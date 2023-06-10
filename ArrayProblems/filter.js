function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
  const filteredArray = [];
  for(let i =0; i<elements.length; i++) {
     if(cb(elements[i])) {
      filteredArray.push(elements[i]);
    } 
  }
  return filteredArray;
}

module.exports = filter;