const maxProfit = (given, arr) => {
  const givenIndex = arr.indexOf(given);
  let maxStockPrice = 0;
  for (digit in arr) {
    if (arr[digit] > maxStockPrice && digit > givenIndex) {
    maxStockPrice = arr[digit];
  }
}
return maxStockPrice - given;
}

console.log(maxProfit(24,[45, 24, 35, 31, 40, 38, 11]));