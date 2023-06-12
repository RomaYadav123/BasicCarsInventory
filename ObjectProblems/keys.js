function keys(obj) {
  
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
  const keysArr = []
 for(let keys in obj){
   keysArr.push(keys)
 }
  
  // const keysDot = Object.keys(obj);
   return keysArr;
}

module.exports = keys;