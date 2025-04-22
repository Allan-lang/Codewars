function sum() {
  // return the sum of all arguments given.
  let total = 0;
  for (let i=0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total
}