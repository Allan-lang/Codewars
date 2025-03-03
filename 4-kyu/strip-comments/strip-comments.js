function solution(text, markers) {
  return text
    .split('\n') 
    .map(line => {
      if (markers.length > 0) {
        markers.forEach(marker => {
          const index = line.indexOf(marker);
          if (index !== -1) {
            line = line.slice(0, index); 
          }
        });
      }
      return line.trimEnd(); 
    })
    .join('\n'); 
}
​