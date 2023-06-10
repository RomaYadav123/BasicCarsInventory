function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

  let accumulator = startingValue !== undefined ? startingValue : elements[0]; //here ternary operator is used to determine the initial value of the accumulator variable based on the presence or absence of a startingValue.

  for (let i = startingValue !== undefined ? 0 : 1; i < elements.length; i++) //here ternary operator is used to determine the initial value of the variable i based on the presence or absence of a startingValue.If startingValue is not undefined, the condition startingValue !== undefined evaluates to true and i=0, loop will start from the 1st element.
    {
    accumulator = cb(accumulator, elements[i]);
  }

  return accumulator;
}

module.exports = reduce;

  
