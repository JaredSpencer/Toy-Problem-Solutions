/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// brute force solution would be to build a helper function that takes in a string, uses a hash set to determine only unique characters, and then checks every substring for duplicates. Two loops, starting i = 0, j = string.length - 1, so that as soon as you find a match, you can terminate the funciton and return the difference between j and i as the length;

// 'abcabcbb'
var longestUniqueSubstrings = string => {
  let n = string.length;
  let set = new Set();
  let ans = 0, i = 0, j = 0;
  while (i < n && j < n) {
    if (!set.has(string.charAt(j))) {
      set.add(string.charAt(j));
      j++;
      ans = Math.max(ans, j - i);
    } else {
      set.delete(string.charAt(i));
      i++;
    }
  }
  return ans;
}
// 'abcabcbb'
var longestUniqueSubstrings = string => {
  let n = string.length; // 8
  let ans = 0; // 1 -> 2 -> 3
  let map = new Map(); // {a: 4, b: 5, c: 3}

  for (let i = 0, j = 0; j < n; j++) { // j === 1 -> 2 -> 3 -> 4 -> 5    i === 1 -> 2
    if (map.has(string.charAt(j))) {
      i = Math.max(map.get(string.charAt(j)), i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(string.charAt(j), j + 1);
  }
  return ans;
}
