// [4 ,5 ,6 ,7 ,0 ,1 ,2]
// [0 ,1 ,2 ,3 ,4 ,5 ,6] 4

var search = (nums, target) => {
  let breakPoint;
  // find the breakpoint in the rotated array
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] < nums[i]) {
      breakPoint = i;
      break;
    }
  }
  // make new sorted array by splitting the array at breakpoint and rejoining them
  let sortedArray = nums.slice(breakPoint + 1).concat(nums.slice(0, breakPoint + 1));
  console.log(sortedArray);
  // binarysearch the sorted array
  let binarySearch = (array, key) => {
    let high = array.length - 1;
    let low = 0;

    while (low <= high) {
      let mid = (high - low) / 2 || 0;
      let midVal = array[mid];

      if (target < midVal) {
        mid = high - 1;
      } else if (target > midVal) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }

  return binarySearch(sortedArray, target);
}
