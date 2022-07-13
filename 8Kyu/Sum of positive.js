// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

/* My solution */
function positiveSum(arr) {
  sum = 0;
  for (number of arr) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}
/* Clever Solutions */
function positiveSum1(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
function positiveSum2(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
