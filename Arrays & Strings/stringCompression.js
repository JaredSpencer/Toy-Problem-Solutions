// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

var stringCompression = (string) => {
  let compressedString = '';
  let currentLetterCount = 1;
  let currentLetter = string.charAt(0);

  for (let i = 1; i <= string.length; i++) {
    if (string.charAt(i) !== currentLetter) {
      compressedString += currentLetter + currentLetterCount;
      currentLetter = string.charAt(i + 1);
      currentLetterCount = 1;
    } else {
      currentLetterCount++;
    }
  }
  return compressedString;
}
