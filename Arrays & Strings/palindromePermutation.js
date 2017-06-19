// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forward and backward. A permutation is rearrangement of letters. The palindrome does not need to be limited to dictionary words.

const palindromePermutation = string => {
  let library = new Set();
  string = string.split(' ').join('');
  for (let i = 0; i < string.length; i++) {
    if (library.has(string.charAt(i))) {
      library.delete(string.charAt(i));
    } else {
      library.add(string.charAt(i));
    }
  }
  return library.size <= 1;
}

array.reduce((a,b) => { return a + b; })

array.reduce((a,b) => { return a + b; })
