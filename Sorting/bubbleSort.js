const bubbleSort = array => {
  let len = array.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

const bubbleSort = array => {
  let len = array.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}
