// From memory, write a code snippet that binary-searches an ** sorted ** array.

const binarySearch = (sortedArray, target) => {
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    let mid = (low + high) / 2 || 0;
    let midVal = sortedArray[mid];
    if (midVal < target) {
      low = mid + 1;
    } else if (midVal > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var sortArray = [1,2,3,4,5,6,7,8,9];
