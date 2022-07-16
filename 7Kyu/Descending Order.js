// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421

/*My Solution*/

let arr = [12, 45, 1, -1, 45, 54, 23, 5, 0, -10];
arr.sort((a, b) => a - b);
arr.reverse();

function descendingOrder(n) {
  nArray = String(n).split("").map(Number);
  nArray.sort((a, b) => a - b);
  nArray.reverse();
  return Number(nArray.join(""));
}

/*Best Solution*/
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}
