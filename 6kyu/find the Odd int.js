// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

/*My solution*/
function findOdd(A) {
  let w = A.reduce((ar, num) => ((ar[num] = (ar[num] || 0) + 1), ar), {});
  return Object.entries(w)
    .filter(([num, count]) => count % 2 !== 0)
    .reduce((a, [num, count]) => Number(num) + a, 0);
}

/*Best solution*/
function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

function findOdd(A) {
  var obj = {};
  A.forEach(function (el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
