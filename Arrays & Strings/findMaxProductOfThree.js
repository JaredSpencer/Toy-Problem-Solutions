// BRUTE FORCE SOLUTION
const findMaxProductOfThree = nums => {
  let maxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        maxProduct = Math.max(maxProduct, nums[i] * nums[j] * nums[k]);
      }
    }
  }
  return maxProduct;
}
// OPTIMIZED TO USE SORT. STILL LINEAR TIME.
// THIS SOLUTION WON'T WORK WHEN TWO NEGATIVE NUMBERS CAN BE USED FOR THE HIGHEST PRODUCT
const findMaxProductOfThree = nums => {
  nums = nums.sort((a,b) => { return a - b; });
  return nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
}
// OPTIMAL GREEDY SOLUTION
const findMaxProductOfThree = nums => {
  if (nums.length < 3) {
    throw new Error('not enough numbers in array');
  }
  let highest = Math.max(nums[0], nums[1]);
  let lowest = Math.min(nums[0], nums[1]);

  let lowestProductOfTwo = nums[0] * nums[1];
  let highestProductOfTwo = nums[0] * nums[1];

  let highestProductOfThree = nums[0] * nums[1] * nums[2];

  for (let i = 2; i < nums.length; i++) {
    let current = nums[i];

    highestProductOfThree = Math.max(highestProductOfThree, current * highestProductOfTwo, current * lowestProductOfTwo);
    highestProductOfTwo = Math.max(highestProductOfTwo, current * highest, current * lowest);
    highest = Math.max(current, highest);
    lowest = Math.min(current, lowest);
  }
  return highestProductOfThree;
} // the reason this solution works, rather than just keeping the lowest and second lowest, as well as the highest and second highest, is that if you keep the lowest and highest, you'll always be able to keep track of the lowest product of two, which can lead you to the lowest product of three. I think your way of doing it, of keep the lowest/highest and second lowest/highest, inside if statements, might be more logically consistent and doesn't lose any performance. 

// PERHAPS OPTIMAL SOLUTION, EVEN THOUGH NON GREEDY
const findMaxProductOfThree = nums => {
  nums = nums.sort((a,b) => { return a - b; });
  return nums[nums.length - 1] * Math.max(nums[nums.length - 2] * [nums.length - 3], nums[0] * nums[1]);
}
