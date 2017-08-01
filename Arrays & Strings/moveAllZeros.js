/*
Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).
*/

var moveAllZeros = nums => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];  // these two lines could be shortened to nums[count++] = nums[i], but current way is more readable.
      count++;
    }
  }
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }
  return nums;
}
