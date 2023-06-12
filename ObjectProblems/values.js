function values(obj) {
  
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
const valueArr = [];
  for(let key in obj){
    valueArr.push(obj[key])
  }
  // const valueDot = Object.values(obj);
  return valueArr;
};

module.exports = values;