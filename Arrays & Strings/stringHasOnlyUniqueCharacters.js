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

// If additional data structures are not available (in this case, a library), you would search for each letter to be repeated later in the string;
// Average time complexity is O(N log N); space complexity is O(1);
  // iterate over string
    // iterate over string with counter set to one step ahead of initial iterating loop
      // if the string's character at first counter is equal to the string's character at second counter
        // return false
  // return true by default
const isUniqueInnerLoop = string => {
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string.charAt(j) === string.charAt(i)) {
        return false;
      }
    }
  }
  return true;
}
