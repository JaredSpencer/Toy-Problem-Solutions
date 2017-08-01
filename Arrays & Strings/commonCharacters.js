/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
// using arrays
var commonCharacters = (str1, str2) => {
 let dict = [];
 let result = [];
 for (let i = 0; i < str1.length; i++) {
   if (dict.indexOf(str1.charAt(i)) === -1) {
     dict.push(str1.charAt(i));
   }
 }
 for (let i = 0; i < str2.length; i++) {
   if (dict.indexOf(str2.charAt(i)) >= 0) {
     result.push(str2.charAt(i));
   }
 }
 return result.join('');
}
// using Set
var commonCharacters = (str1, str2) => {
  let dict = new Set();
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    if (!dict.has(str1.charAt(i))) {
      dict.add(str1.charAt(i));
    }
  }
  dict.forEach(letter => {
    if (str2.includes(letter)) { // str.includes might make this function more expensive than using the Map version.
      result += letter;
    }
  });
  return result;
}
// using Map
var commonCharacters = (str1, str2) => {
  let dict = new Map();
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    if (!dict.has(str1.charAt(i))) {
      dict.set(str1.charAt(i), 0);
    }
  }
  for (let j = 0; j < str2.length; j++) {
    if (dict.has(str2.charAt(j))) {
      dict.set(str2.charAt(j), 1);
    }
  }
  dict.forEach((count, letter) => { // Map.forEach takes two arguments for callback, value comes first, then key
    if (count === 1) {
      result += letter;
    }
  });
  return result;
}
