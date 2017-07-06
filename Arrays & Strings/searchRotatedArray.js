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
    let low = 0,
        high = array.length - 1,
        mid,
        currentElement;
    while (low <= high) {
        mid = ((low + high) / 2);
        currentElement = array[mid];
        if (currentElement < key) {
            low = mid + 1;
        } else if (currentElement > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

  return binarySearch(sortedArray, target);
}
