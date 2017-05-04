// Write a method that replaces all spaces in a string with "%20". You may assume has sufficient space at the end to handle the additional characters, and that you are given the "true" length of the string.

// Implementation creating a new string and replacing all spaces with "%20"
// Time complexity O(N); Space complexity O(N);

const urlify = url => {
  let urlString = '';
  for (let i = 0; i < url.length; i++) {
    if (url.charAt(i) === ' ') {
      urlString += '%20';
    } else {
      urlString += url.charAt(i);
    }
  }
  return urlString;
}
// The following Implementation is a good exercise for other languages, but does not work in Javascript. 1) You cannot give a string a longer length than it actually has. 2) javascript string are immutable, so while the intention of this implentation is to use constant space, a new string is still created.
const urlify = url => {
  let spaceCount = 0;
  for (let i = 0; i < url.length; i++) {
    if (url.charAt(i) === ' ') {
      spaceCount++;
    }
  }
  let newLength = url.length - 1 + (2 * spaceCount);
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; i--, j--) {
    if (url.charAt(i) === ' ') {
      url[j] = '0';
      url[j--] = '2';
      url[j--] = '%';
    } else {
      url[j] = url[i];
    }
  }
  return url;
}
