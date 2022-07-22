// Sum of odd numbers
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

/*My Solution*/
function rowSumOddNumbers(n) {
  startValue = n * (n - 1) + 1;
  empty = [];
  for (i = 1; i <= n; i++) {
    empty.push(startValue);
    startValue += 2;
  }
  return empty.reduce((a, i) => a + i, 0);
}

/* Best Solution*/
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
