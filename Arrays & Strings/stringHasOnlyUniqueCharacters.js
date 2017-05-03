// isUnique: implement an algorithm to determine if a string has only unique characters. What if you couldn't use additional data structures.

// Implementation using an array library to store unique values;
// Average time complexity is O(N); space complexity is O(N)
  // initialize library
  // iterate over string
  // if library already contains the current letter
  // return false
  // else put current letter in library
  // return true by default
const isUniqueArrayLibrary = string => {
  let library = [];
  for (let i = 0; i < string.length; i++) {
    if (library.indexOf(string.charAt(i)) >= 0) {
      return false;
    } else {
      library.push(string.charAt(i));
    }
  }
  return true;
}
