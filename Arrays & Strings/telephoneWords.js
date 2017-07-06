/* Given a digit string, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below.
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = string => {
  if (string === '') {
    return [];
  }
  let result = [];

  let letterDictionary = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  let wordBuilder = (word, digits) => {
    if (digits.length === 0) {
      result.push(word);
      return;
    }

    let currentDigit = digits[0];
    let remaingingDigits = digits.slice(1);
    let letters = letterDictionary[currentDigit].split('');

    for (let i = 0; i < letters.length; i++) {
      wordBuilder(word + letters[i], remaingingDigits);
    }
  }
  wordBuilder('', string.split(''));
  return result;
}
