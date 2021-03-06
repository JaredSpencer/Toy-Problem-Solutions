// let stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// a greedy algorithm tracks the optimal solution 'so far' as you iterate through the problem set.

/*
  this question is basically find the largest difference between an integer and any integer that comes after it
  catch statement: array must have at least two numbers
  set minPrice to first number in array
  set maxProfit to difference between second number and minprice
  loop through array starting at position two
    check if the difference between current number and minPrice is greater than maxProfit
    if so, update maxProfit
    check if current number is lower than minPrice
    if so, update minPrice
  return maxProfit

  for problems like this, assume that best case is linear. so if you find a solution that doesn't seem optimal, but is linear, go with it
*/




const getMaxStockProfit = yesterStockListing => {
  if (yesterStockListing.length < 2) {
    throw new Error('insufficient data');
  }

  let minPrice = yesterStockListing[0];
  let maxProfit = yesterStockListing[1] - yesterStockListing[0];

  for (let i = 1; i < yesterStockListing.length; i++) {
    let currentPrice = yesterStockListing[i];

    let potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}
