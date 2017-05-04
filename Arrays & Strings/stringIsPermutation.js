// isPermutation: given two strings, write a method that determines if one string is a permutation of the other.

const isPermutation = (string1, string2) => {
  string1 = string1.sort();
  string2 = string2.sort();
  return string1 === string2;
}

const isPermutation = (string1, string2) => {
  return string1.sort() === string2.sort();
}

const isPermutation = (string1, string2) => {
  let library = {};
  for (let i = 0; i < string1.length; i++) {
    library[string1.charAt(i)] = library[string1.charAt(i)] || 0;
    library[string1.charAt(i)]++;
  }
  for (let i = 0; i < string2.length; i++) {
    if (!library[string2.charAt(i)]) {
      return false;
    } else {
      library[string2.charAt(i)]--;
    }
    if (library[string2.charAt(i)] === 0) {
      delete library[string2.charAt(i)];
    }
  }
  return Object.keys(library).length <= 0;
}
