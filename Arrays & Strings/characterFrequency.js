/*
Write a function that takes as its input a string and returns an array ofarrays as shown below sorted in descending order by frequency and then by ascending order by character.
*/

var characterFrequency = string => {
  let dict = {};
  let results = [];
  for (let i = 0; i < string.length; i++) {
    dict[string.charAt(i)] = dict[string.charAt(i)] || 0;
    dict[string.charAt(i)] += 1;
  }
  let letters = Object.keys(dict);
  for (let i = 0; i < letters.length; i++) {
    results.push([letters[i], dict[letters[i]]]);
  }
  results.sort((a, b) => {
    if (a[1] > b[1]) { return -1; }
    if (a[1] < b[1]) { return 1; }
    if (a[0] < b[0]) { return -1; }
    if (a[0] > b[0]) { return 1; }
    return 0;
  });
  return results;
}
