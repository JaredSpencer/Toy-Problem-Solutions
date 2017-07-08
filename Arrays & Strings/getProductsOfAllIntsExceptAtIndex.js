//   [1, 7, 3, 4] -->   [84, 12, 28, 21]
// BRUTE FORCE SOLUTION
var getProductsOfAllIntsExceptAtIndex = array => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        product *= array[j];
      }
    }
    results.push(product);
  }
  return results;
}
// OPTIMIZED GREEDY SOLUTION
var getProductsOfAllIntsExceptAtIndex = intArray => {
  if (intArray.length < 2) {
    throw new Error('insufficient values in intArray');
  }
  let productsOfAllIntsExceptAtIndex = [];
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  productSoFar = 1;
  for (let i = intArray.length - 1; i >= 0; i--) {
    productsOfAllIntsExceptAtIndex[i] *= productSoFar; // this is the main difference from the first loop. "*=", not "=";
    productSoFar *= intArray[i];
  }
  return productsOfAllIntsExceptAtIndex
}
