// ************ MERGE SORT *************** //

const mergeSort = array => {
  if (array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left,right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
    return result.concat(left.length ? left : right);
  }
}

// the following merge greatly increases performance for large arrays by not relying on shift();
const merge = (left, right) => {
  let sorted = [];
  let i = 0; //left tracker
  let j = 0; //right tracker

  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length){
      if (left[i] < right[j]){
        sorted.push(left[i]);
        i++;
      }else{
        sorted.push(right[j]);
        j++
      }
    }else if (i < left.length){
      sorted.push(left[i]);
      i++;
    }else{
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
}
