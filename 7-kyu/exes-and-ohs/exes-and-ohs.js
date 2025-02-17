function XO(str) {
    str = str.split('')
  return count(str, 'x') === count(str, 'o')
}
​
function count(str, letter){
  return str.reduce((acc, value)=> value.toLowerCase() === letter ? acc + 1 : acc, 0);
}