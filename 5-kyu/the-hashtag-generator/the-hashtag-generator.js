function generateHashtag(str) {
  if (!str || str.trim() === '') return false;
  const words = str.trim().split(' ').filter(word => word !== '');
  const capitalized = words.map(word => 
    word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
​
  const result = '#' + capitalized.join('');
  return result.length > 140 ? false : result;
}