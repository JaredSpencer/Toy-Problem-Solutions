/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:
given array S = {-1 2 1 -4},
and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)
*/

var closesetSum = (array, target) => {
  let dict = {};
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let sum = array[i] + array[j] + array[k];
        let temp = target - sum;
        dict[temp] = sum;
      }
    }
  }
  let diffs = Object.keys(dict);
  let min = Math.min.apply(null, diffs);
  return dict[min];
}

// create dictionary. keys will be difference from target, value will be sum of three numbers;
// loop through array, adding all triplets.
// create dictionary key of difference from target, value of sum of three
// get object keys
// find min value of object keys
// return the value of the min key
