// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

var stringCompression = (string) => {
  let compressedString = '';

  for (let i = 0; i < string.length; i++) {
    let currentLetter = string.charAt(i);
    let startPoint = i;
    while (i + 1 < string.length && currentLetter === string.charAt(i + 1)) {
      i++
    }
    compressedString += currentLetter + (i - startPoint + 1);
  }
  return compressedString.length < string.length ? compressedString : string;
}
