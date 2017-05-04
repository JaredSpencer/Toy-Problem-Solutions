// isPermutation: given two strings, write a method that determines if one string is a permutation of the other.

const isPermutation = (string1, string2) => {
  string1 = string1.sort();
  string2 = string2.sort();
  return string1 === string2;
}

const isPermutation = (string1, string2) => {
  return string1.sort() === string2.sort();
}

const isPermutation = (string1, sting2) => {
  
}
