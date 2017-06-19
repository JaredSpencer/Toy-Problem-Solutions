

const allAnagrams = word => {
  let possibilities = {};

  let anagram = (ana, str) => {
    if (str === '') {
      possibilities[ana] = 1;
    }
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str.charAt(i), str.slice(0, i) + str.slice(i + 1));
    }
  }
  anagram('', word);
  return Object.keys(possibilities);
}

const allAnagrams = word => {
  let possibilities = new Set();

  let anagram = (ana, str) => {
    if (str === '') {
      possibilities.add(ana);
    }
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str.charAt(i), str.slice(0, i) + str.slice(i + 1));
    }
  }
  anagram('', word);
  return possibilities.keys(); // returns an object, not an array;
}

const allAnagrams = word => {
  let possibilities = new Set();

  let anagram = (ana, str) => {
    if (str === '') {
      possibilities.add(ana);
    }
    for (let i = 0; i < str.length; i++) {
      anagram()
    }
  }
}
