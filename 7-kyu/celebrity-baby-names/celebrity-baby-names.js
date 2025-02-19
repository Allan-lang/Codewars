function validName(array) {
  if (array.length === 0) {
    return "You must test at least one name.";
  }
​
  if (array.length === 1) {
    return "Congratulations, you can choose any name you like!";
  }
​
  for (let i = 1; i < array.length; i++) {
    const previousName = array[i - 1].replace(/[-\s]/g, '');
    const currentName = array[i].replace(/[-\s]/g, '');
​
    if (previousName.slice(-1).toLowerCase() !== currentName[0].toLowerCase()) {
      return "Back to the drawing board, your baby names are not compatible.";
    }
  }
​
  return "Congratulations, your baby names are compatible!";
}
​
​