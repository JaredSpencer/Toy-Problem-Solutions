
var swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

var maxHeapify = (array, i, length) => {
  while(true) {
    let left = i * 2 + 1; 
    let right = i * 2 + 2;
    let largest = i;

    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
    if (i === largest) {
      break;
    }
    swap(array, i, largest);
    i = largest;
  }
}

var heapify = (array, length) => {
  for (let i = Math.floor(length/2); i >= 0; i--) {
    maxHeapify(array, i, length)
  }
}

var heapSort = array => {
  heapify(array, array.length);

  for (let i = array.length - 1; i > 0; i--) {
    swap(array, i, 0);
    maxHeapify(array, 0, i - 1);
  }
  return array;
}


var a = [ 9, 10, 2, 1, 5, 4, 3, 6, 8, 7, 13 ]; // length === 11;
