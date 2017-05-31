

const allAnagrams = word => {
  let possibilities = {};

  let anagram = (ana, str) => {
    if (str === '') {
      possibilities[ana] = 1;
    }
    for (let i = 0; i < str.length; i++) {
      anagram(ana + str.charAt(i), str.slice(0, i) + str.slice(i + 1))
    }
  }
  anagram('', word);
  return Object.keys(possibilities);
}
