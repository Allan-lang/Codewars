function elimination(arr) {
  const seen = new Set();
  for (const citizen of arr) {
    if (seen.has(citizen)) {
      return citizen; 
    }
    seen.add(citizen);
  }
  return null;
}