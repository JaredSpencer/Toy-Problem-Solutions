

var longestCommonPrefix = array => {
  array = array.sort((a,b) => {
    return a.length - b.length;
  });
  let shortest = array[0];
  let shortSub;
  for (let i = shortest.length; i >= 0; i--) {
    shortSub = shortest.substring(0, i)
    for (let j = 1; j < array.length; j++) {
      if (!array[j].includes(shortSub)) {
        break;
      }
      if (j === array.length - 1) {
        return shortSub;
      }
    }
  }
  return null;
}
