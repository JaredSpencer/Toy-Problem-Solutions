/*
Given an integer array, output all distinct pairs that sum up to a specific value k. Consider the fact that the same number can add up to k with its duplicates in the array.

For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3) twice or just once? Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)? Let’s keep the output as short as possible and print each pair only once. So, we will output only one copy of (1, 3). Also note that we shouldn’t output (2, 2) because it’s not a pair of two distinct elements.
*/

var arrayPairSum = (sum, array) => {
  let results = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let temp = [array[i], array[j]];
      if ((array[i] + array[j]) === sum && (results.indexOf(temp) === -1)) { // this isn't working because arrays are references, not values, meaning that while 4 === 4 returns true, [4] === [4] returns false.
        results.push(temp);
      }
    }
  }
  return results;
}

var sum = array.reduce((a,b) => {
  return a + b;
})

var sorted = array.sort((a,b) => {
  return a - b;
})
