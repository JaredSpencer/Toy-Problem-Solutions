
var longestCommonPrefix = array => {
  array = array.sort((a,b) => {
    return a.length - b.length;
  });
  let shortest = array[0];
  let shortSub;
  for (let i = 0; i < shortest.length; i++) {
    shortSub = shortest.substring(0, i + 1);
    for (let j = 1; j < array.length; j++) {
      if (!array[j].includes(shortSub)) {
        return shortSub.substring(0, shortSub.length - 1);
      }
    }
  }
  return '';
}
