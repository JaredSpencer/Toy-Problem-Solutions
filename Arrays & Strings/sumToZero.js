/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var S = [-1, 0, 1, 2, -1, -4]
const threeSum = nums => {
  let results = [];
  let sumZero = arr => { return arr.reduce((a,b) => { return a + b; }) === 0; };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let temp = [nums[i], nums[j], nums[k]];
        if (sumZero(temp)) {
          results.push(temp);
        }
      }
    }
  }
  return results;
}


const threeSum = nums => {
  let results = [];

  let sumsZero = arr => { return arr.reduce((a,b) => { return a + b; }) === 0; };

  let findSums = (arr = [], ind = 0) => {
    if (arr.length === 3) {
        if (sumsZero(arr)) {
            results.push(arr);
        }
        return;
    }
    for (let i = ind; i < nums.length; i++) {
      findSums(arr.concat([nums[i]]), i + 1);
    }
  }

  let removeDupes = arr => {
    let temp = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (temp.has(arr[i].sort().toString())) {
        arr.splice(i, 1);
      } else {
        temp.add(arr[i].sort().toString());
      }
    }
  }

  findSums();
  removeDupes(results);
  return results;
};
