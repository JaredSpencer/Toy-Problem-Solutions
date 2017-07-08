// Write a function that accepts a multi dimensional array and returns a flattened version.

const flatten = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push.apply(result, flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

const flatten = array => {
  return array.reduce((arr, val) => {
    return array.concat(Array.isArray(arr) ? flatten(val) : val);
  })
}

const flatten = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push.apply(result, flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

const flatten = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

const flatten = array => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
