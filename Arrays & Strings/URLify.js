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
